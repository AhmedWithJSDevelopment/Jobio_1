// // src/components/Navbar.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav style={{ padding: "10px", borderBottom: "1px solid gray" }}>
//       <Link to="/jobs" style={{ margin: "0 10px" }}>Jobs</Link>
//       <Link to="/jobs/create" style={{ margin: "0 10px" }}>Create Job</Link>
//       {!token && <Link to="/login" style={{ margin: "0 10px" }}>Login</Link>}
//       {!token && <Link to="/register" style={{ margin: "0 10px" }}>Register</Link>}
//       {token && <button onClick={handleLogout}>Logout</button>}
//     </nav>
//   );
// }

// export default Navbar;



// ......................



// src/components/Navbar.js
// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function Navbar() {
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <Nav>
//       <Logo>JobPortal</Logo>
//       <Links>
//         <NavLink to="/jobs">Jobs</NavLink>
//         <NavLink to="/jobs/create">Create Job</NavLink>
//         {!token && <NavLink to="/login">Login</NavLink>}
//         {!token && <NavLink to="/register">Register</NavLink>}
//         {token && <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>}
//       </Links>
//     </Nav>
//   );
// }

// export default Navbar;

// /* ================= CSS ================= */

// const Nav = styled.nav`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: #645cff;
//   color: white;
//   padding: 10px 20px;
//   box-shadow: 0 2px 5px rgba(0,0,0,0.1);
// `;

// const Logo = styled.div`
//   font-weight: 600;
//   font-size: 1.5rem;
//   letter-spacing: 2px;
//   cursor: pointer;
// `;

// const Links = styled.div`
//   display: flex;
//   align-items: center;
// `;

// const NavLink = styled(Link)`
//   color: white;
//   margin: 0 10px;
//   font-weight: 500;
//   transition: 0.3s;

//   &:hover {
//     color: #f0eaff;
//     text-decoration: underline;
//   }
// `;

// const LogoutBtn = styled.button`
//   margin-left: 10px;
//   padding: 5px 12px;
//   border: none;
//   border-radius: 6px;
//   background: #ff4d4f;
//   color: white;
//   font-weight: 500;
//   cursor: pointer;
//   transition: 0.3s;

//   &:hover {
//     background: #d9363e;
//   }
// `;
// ..........................


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
    setOpen(false);
  };

  return (
    <Nav>
      <Logo>JobPortal</Logo>
      <Hamburger onClick={() => setOpen(!open)}>
        &#9776;
      </Hamburger>
      <Links open={open}>
        <NavLink to="/jobs" onClick={() => setOpen(false)}>Jobs</NavLink>
        <NavLink to="/jobs/create" onClick={() => setOpen(false)}>Create Job</NavLink>
        {!token && <NavLink to="/login" onClick={() => setOpen(false)}>Login</NavLink>}
        {!token && <NavLink to="/register" onClick={() => setOpen(false)}>Register</NavLink>}
        {token && <LogoutBtn onClick={handleLogout}>Logout</LogoutBtn>}
      </Links>
    </Nav>
  );
}

export default Navbar;

/* ================= CSS ================= */

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #645cff;
  color: white;
  padding: 10px 20px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  position: relative;
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
`;

/* Animation for menu open */
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Links = styled.div`
  display: flex;
  align-items: center;

  @media(max-width: 768px){
    flex-direction: column;
    background: #645cff;
    position: absolute;
    top: 60px;
    right: 0;
    width: 100%;
    overflow: hidden;
    max-height: ${({open}) => open ? "500px" : "0"};
    opacity: ${({open}) => open ? 1 : 0};
    transition: max-height 0.5s ease, opacity 0.5s ease;
    animation: ${({open}) => open ? fadeIn : "none"} 0.5s ease;
    z-index: 999;
  }
`;

const NavLink = styled(Link)`
  color: white;
  margin: 0 10px;
  font-weight: 500;
  transition: 0.3s;

  &:hover {
    color: #f0eaff;
    text-decoration: underline;
  }

  @media(max-width: 768px){
    margin: 15px 0;
    font-size: 1.1rem;
  }
`;

const LogoutBtn = styled.button`
  margin-left: 10px;
  padding: 5px 12px;
  border: none;
  border-radius: 6px;
  background: #ff4d4f;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #d9363e;
  }

  @media(max-width: 768px){
    margin: 15px 0;
    width: 90%;
  }
`;

const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  cursor: pointer;

  @media(max-width: 768px){
    display: block;
  }
`;