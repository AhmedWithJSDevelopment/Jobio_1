// // src/pages/Jobs.js
// import React, { useState, useEffect } from "react";
// import API from "../axios";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";

// function Jobs() {
//   const [jobs, setJobs] = useState([]);
//   const navigate = useNavigate();

//   const fetchJobs = async () => {
//     try {
//       const res = await API.get("/jobs");
//       setJobs(res.data.jobs);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const deleteJob = async (id) => {
//     try {
//       await API.delete(`/jobs/${id}`);
//       alert("تم الحذف!");
//       fetchJobs();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   return (
//     <div>
//       <h2>All Jobs</h2>
//       {jobs.map((job) => (
//         <div key={job._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
//           <p>Position: {job.position}</p>
//           <p>Company: {job.company}</p>
//           <p>Status: {job.status}</p>
//           <button onClick={() => navigate(`/jobs/update/${job._id}`)}>Update</button>
//           <button onClick={() => deleteJob(job._id)}>Delete</button>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Jobs;










//.......................


// src/pages/Jobs.js
import React, { useState, useEffect } from "react";
import API from "../axios";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  const fetchJobs = async () => {
    try {
      const res = await API.get("/jobs");
      setJobs(res.data.jobs);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteJob = async (id) => {
    try {
      await API.delete(`/jobs/${id}`);
      alert("تم الحذف!");
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header>
          <h2>📋 الوظائف</h2>
          <AddButton onClick={() => navigate("/jobs/create")}>
            + إضافة وظيفة
          </AddButton>
        </Header>

        {jobs.length === 0 ? (
          <Empty>لا توجد وظائف حالياً</Empty>
        ) : (
          <Grid>
            {jobs.map((job) => (
              <Card key={job._id}>
                <JobTitle>{job.position}</JobTitle>
                <Company>{job.company}</Company>
                <Status status={job.status}>{job.status}</Status>

                <Actions>
                  <UpdateBtn
                    onClick={() => navigate(`/jobs/update/${job._id}`)}
                  >
                    تعديل
                  </UpdateBtn>
                  <DeleteBtn onClick={() => deleteJob(job._id)}>
                    حذف
                  </DeleteBtn>
                </Actions>
              </Card>
            ))}
          </Grid>
        )}
      </Container>
    </Wrapper>
  );
}

export default Jobs;

/* ================= CSS ================= */

const Wrapper = styled.div`
  min-height: 100vh;
  background: #f4f6f9;
  padding: 30px;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;

  h2 {
    color: #333;
  }
`;

const AddButton = styled.button`
  padding: 10px 15px;
  background: #4facfe;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #007bff;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const JobTitle = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const Company = styled.p`
  color: #777;
  margin-bottom: 10px;
`;

const Status = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 12px;
  margin-bottom: 15px;

  background: ${({ status }) =>
    status === "pending"
      ? "#ffe58f"
      : status === "interview"
      ? "#91d5ff"
      : "#ffccc7"};

  color: #333;
`;

const Actions = styled.div`
  display: flex;
  justify-content: space-between;
`;

const UpdateBtn = styled.button`
  padding: 8px 12px;
  border: none;
  background: #52c41a;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #389e0d;
  }
`;

const DeleteBtn = styled.button`
  padding: 8px 12px;
  border: none;
  background: #ff4d4f;
  color: white;
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background: #d9363e;
  }
`;

const Empty = styled.p`
  text-align: center;
  color: #999;
  margin-top: 50px;
  font-size: 18px;
`;









