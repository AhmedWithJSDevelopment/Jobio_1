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
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Nav>
      <Logo>JobPortal</Logo>
      <Links>
        <NavLink to="/jobs">Jobs</NavLink>
        <NavLink to="/jobs/create">Create Job</NavLink>
        {!token && <NavLink to="/login">Login</NavLink>}
        {!token && <NavLink to="/register">Register</NavLink>}
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
`;

const Logo = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 2px;
  cursor: pointer;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
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
`;