// // src/pages/Login.js
// import React, { useState } from "react";
// import API from "../axios";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function Login() {
//   const navigate = useNavigate();
//   const [form, setForm] = useState({ email: "", password: "" });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await API.post("/auth/login", form);
//       localStorage.setItem("token", res.data.token);
//       alert("تم تسجيل الدخول!");
//       navigate("/jobs");
//     } catch (err) {
//       console.error(err);
//       alert(err.response.data.msg || "حدث خطأ");
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleSubmit}>
//         <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
//         <input name="password" placeholder="Password" type="password" onChange={handleChange} required />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;




// ..............................















// src/pages/Login.js
import React, { useState } from "react";
import API from "../axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      alert("تم تسجيل الدخول!");
      navigate("/jobs");
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.msg || "حدث خطأ");
    }
  };

  return (
    <Wrapper>
      <Card>
        <Title>تسجيل الدخول</Title>

        <Form onSubmit={handleSubmit}>
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

          <Button type="submit">دخول</Button>
        </Form>

        <RegisterText>
          ليس لديك حساب؟{" "}
          <span onClick={() => navigate("/register")}>إنشاء حساب</span>
        </RegisterText>
      </Card>
    </Wrapper>
  );
}

export default Login;

/* ================= CSS ================= */

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #667eea, #764ba2);
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
    border-color: #667eea;
    outline: none;
    box-shadow: 0 0 5px rgba(102, 126, 234, 0.5);
  }
`;

const Button = styled.button`
  padding: 12px;
  border: none;
  border-radius: 8px;
  background: #667eea;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #5a67d8;
  }
`;

const RegisterText = styled.p`
  margin-top: 15px;
  font-size: 14px;

  span {
    color: #667eea;
    cursor: pointer;
    font-weight: bold;
  }

  span:hover {
    text-decoration: underline;
  }
`;