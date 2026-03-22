// // src/App.js
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
// import CreateJob from "./pages/CreateJob";
// import Jobs from "./pages/Jobs";
// import SingleJob from "./pages/SingleJob";
// import UpdateJob from "./pages/UpdateJob";
// import Navbar from "./components/Navbar";
// import PrivateRoute from "./components/PrivateRoute";
// import styled from 'styled-components';

// // import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// function App() {
//   return (
//     <Router>
//       <Navbar   />
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route
//           path="/jobs"
//           element={
//             <PrivateRoute>
//               <Jobs />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/jobs/create"
//           element={
//             <PrivateRoute>
//               <CreateJob />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/jobs/update/:id"
//           element={
//             <PrivateRoute>
//               <UpdateJob />
//             </PrivateRoute>
//           }
//         />
//         <Route
//           path="/jobs/:id"
//           element={
//             <PrivateRoute>
//               <SingleJob />
//             </PrivateRoute>
//           }
//         />
//         <Route path="/" element={<Login />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;




// ...................






// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateJob from "./pages/CreateJob";
import Jobs from "./pages/Jobs";
import SingleJob from "./pages/SingleJob";
import UpdateJob from "./pages/UpdateJob";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import styled from "styled-components";

function App() {
  return (
    <Router>
      <AppWrapper>
        <Navbar />

        <Content>
          <Routes>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/jobs"
              element={
                <PrivateRoute>
                  <Jobs />
                </PrivateRoute>
              }
            />

            <Route
              path="/jobs/create"
              element={
                <PrivateRoute>
                  <CreateJob />
                </PrivateRoute>
              }
            />

            <Route
              path="/jobs/update/:id"
              element={
                <PrivateRoute>
                  <UpdateJob />
                </PrivateRoute>
              }
            />

            <Route
              path="/jobs/:id"
              element={
                <PrivateRoute>
                  <SingleJob />
                </PrivateRoute>
              }
            />

            {/* الصفحة الافتراضية */}
            <Route path="/" element={<Login />} />
          </Routes>
        </Content>
      </AppWrapper>
    </Router>
  );
}

export default App;

/* ================= CSS ================= */

const AppWrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
`;

const Content = styled.div`
  padding: 20px;
`;