// // src/pages/Register.js
// import React, { useState } from "react";
// import API from "../axios";
// import { useNavigate } from "react-router-dom";
// import styled from 'styled-components';
// function Register() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ name: "", email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await API.post("/auth/register", form);
//       alert("تم التسجيل بنجاح!");
//       navigate("/login");
//     } catch (err) {
//       console.error(err);
//       alert(err.response.data.msg || "حدث خطأ");
//     }
//   };
// const Button = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 10px;
//   border: none;
//   border-radius: 5px;
// `;

//   return (
//     <div>
//       <h2>Register</h2>
//         {/* <Button>Click Me</Button> */}

//       <form onSubmit={handleSubmit}>
//         <input name="name" placeholder="Name" onChange={handleChange} required />
//         <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
//         <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
//         <Button type="submit">Register</Button>
//         {/* <Button>Click Me</Button> */}

//       </form>
//     </div>
//   );
// }

// export default Register;

// ...............................


// src/pages/Register.js
import React, { useState } from "react";
import API from "../axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", form);
      alert("تم التسجيل بنجاح!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "حدث خطأ");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>إنشاء حساب</Title>

        <Form onSubmit={handleSubmit}>
          <Input
            name="name"
            placeholder="الاسم"
            onChange={handleChange}
            required
          />

          <Input
            name="email"
            placeholder="البريد الإلكتروني"
            type="email"
            onChange={handleChange}
            required
          />

          <Input
            name="password"
            placeholder="كلمة المرور"
            type="password"
            onChange={handleChange}
            required
          />

          <Button type="submit">تسجيل</Button>
        </Form>

        <LoginText>
          لديك حساب؟ <span onClick={() => navigate("/login")}>تسجيل الدخول</span>
        </LoginText>
      </Card>
    </Wrapper>
  );
}

export default Register;

/* ================== Styled Components ================== */

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #4facfe, #00f2fe);
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  width: 350px;
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
    border-color: #4facfe;
    outline: none;
    box-shadow: 0 0 5px rgba(79, 172, 254, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #4facfe;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #007bff;
  }
`;

const LoginText = styled.p`
  margin-top: 15px;
  font-size: 14px;

  span {
    color: #4facfe;
    cursor: pointer;
    font-weight: bold;
  }

  span:hover {
    text-decoration: underline;
  }
`;








