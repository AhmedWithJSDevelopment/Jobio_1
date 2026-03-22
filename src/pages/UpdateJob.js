// // src/pages/UpdateJob.js
// import React, { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import API from "../axios";
// import styled from "styled-components";

// function UpdateJob() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ position: "", company: "", status: "pending" });

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await API.get(`/jobs/${id}`);
//         setForm({
//           position: res.data.job.position,
//           company: res.data.job.company,
//           status: res.data.job.status,
//         });
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchJob();
//   }, [id]);

//   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.patch(`/jobs/${id}`, form);
//       alert("تم تحديث الوظيفة!");
//       navigate("/jobs");
//     } catch (err) {
//       console.error(err);
//       alert(err.response.data.msg || "حدث خطأ");
//     }
//   };

//   return (
//     <div>
//       <h2>Update Job</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="position" placeholder="Position" value={form.position} onChange={handleChange} required />
//         <input name="company" placeholder="Company" value={form.company} onChange={handleChange} required />
//         <select name="status" value={form.status} onChange={handleChange}>
//           <option value="pending">Pending</option>
//           <option value="interview">Interview</option>
//           <option value="declined">Declined</option>
//         </select>
//         <button type="submit">Update Job</button>
//       </form>
//     </div>
//   );
// }

// export default UpdateJob;



// ............................................




// src/pages/UpdateJob.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../axios";
import styled from "styled-components";

function UpdateJob() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    position: "",
    company: "",
    status: "pending",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setForm({
          position: res.data.job.position,
          company: res.data.job.company,
          status: res.data.job.status,
        });
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.patch(`/jobs/${id}`, form);
      alert("تم تحديث الوظيفة!");
      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "حدث خطأ");
    }
  };

  if (loading) {
    return <Loading>⏳ جاري التحميل...</Loading>;
  }

  return (
    <Wrapper>
      <Card>
        <Title>✏️ تعديل الوظيفة</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            name="position"
            value={form.position}
            placeholder="اسم الوظيفة"
            onChange={handleChange}
            required
          />

          <Input
            name="company"
            value={form.company}
            placeholder="اسم الشركة"
            onChange={handleChange}
            required
          />

          <Select
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="pending">Pending</option>
            <option value="interview">Interview</option>
            <option value="declined">Declined</option>
          </Select>

          <Button type="submit">حفظ التعديلات</Button>
        </Form>

        <Back onClick={() => navigate("/jobs")}>
          ← الرجوع إلى الوظائف
        </Back>
      </Card>
    </Wrapper>
  );
}

export default UpdateJob;

/* ================= CSS ================= */

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #f7971e, #ffd200);
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
    border-color: #f7971e;
    outline: none;
    box-shadow: 0 0 5px rgba(247, 151, 30, 0.5);
  }
`;

const Select = styled.select`
  padding: 12px;
  margin-bottom: 15px;
  border-radius: 8px;
  border: 1px solid #ccc;

  &:focus {
    border-color: #f7971e;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #f7971e;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #e68900;
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

const Loading = styled.p`
  text-align: center;
  margin-top: 100px;
  font-size: 20px;
`;