// // src/pages/CreateJob.js
// import React, { useState } from "react";
// import API from "../axios";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function CreateJob() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ position: "", company: "", status: "pending" });

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/jobs", form);
//       alert("تم إنشاء الوظيفة!");
//       navigate("/jobs");
//     } catch (err) {
//       console.error(err);
//       alert(err.response.data.msg || "حدث خطأ");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Job</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="position" placeholder="Position" onChange={handleChange} required />
//         <input name="company" placeholder="Company" onChange={handleChange} required />
//         <select name="status" onChange={handleChange}>
//           <option value="pending">Pending</option>
//           <option value="interview">Interview</option>
//           <option value="declined">Declined</option>
//         </select>
//         <button type="submit">Create Job</button>
//       </form>
//     </div>
//   );
// }

// export default CreateJob;












// ...................................



// src/pages/CreateJob.js
import React, { useState } from "react";
import API from "../axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function CreateJob() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    position: "",
    company: "",
    status: "pending",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/jobs", form);
      alert("تم إنشاء الوظيفة!");
      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "حدث خطأ");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>➕ إضافة وظيفة</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            name="position"
            placeholder="اسم الوظيفة"
            onChange={handleChange}
            required
          />

          <Input
            name="company"
            placeholder="اسم الشركة"
            onChange={handleChange}
            required
          />

          <Select name="status" onChange={handleChange}>
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
          </Select>

          <Button type="submit">إنشاء الوظيفة</Button>
        </Form>

        <Back onClick={() => navigate("/jobs")}>
          ← الرجوع إلى الوظائف
        </Back>
      </Card>
    </Wrapper>
  );
}

export default CreateJob;

/* ================= CSS ================= */

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #43e97b, #38f9d7);
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  width: 400px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  text-align: center;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;

  &:focus {
    border-color: #43e97b;
    outline: none;
    box-shadow: 0 0 5px rgba(67, 233, 123, 0.5);
  }
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;
  transition: 0.3s;

  &:focus {
    border-color: #43e97b;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #43e97b;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #2ecc71;
  }
`;

const Back = styled.p`
  margin-top: 15px;
  font-size: 14px;
  color: #555;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;