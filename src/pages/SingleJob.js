// // src/pages/SingleJob.js
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import API from "../axios";
// import styled from "styled-components";

// function SingleJob() {
//   const { id } = useParams();
//   const [job, setJob] = useState(null);

//   useEffect(() => {
//     const fetchJob = async () => {
//       try {
//         const res = await API.get(`/jobs/${id}`);
//         setJob(res.data.job);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchJob();
//   }, [id]);

//   if (!job) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{job.position}</h2>
//       <p>Company: {job.company}</p>
//       <p>Status: {job.status}</p>
//     </div>
//   );
// }

// export default SingleJob;



// ........................






// src/pages/SingleJob.js
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../axios";
import styled from "styled-components";

function SingleJob() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await API.get(`/jobs/${id}`);
        setJob(res.data.job);
      } catch (err) {
        console.error(err);
      }
    };

    fetchJob();
  }, [id]);

  if (!job) {
    return <Loading>⏳ جاري تحميل البيانات...</Loading>;
  }

  return (
    <Wrapper>
      <Card>
        <Title>{job.position}</Title>

        <Info>
          <Label>🏢 الشركة:</Label>
          <Value>{job.company}</Value>
        </Info>

        <Info>
          <Label>📌 الحالة:</Label>
          <Status status={job.status}>{job.status}</Status>
        </Info>

        <Actions>
          <BackBtn onClick={() => navigate("/jobs")}>
            ← رجوع
          </BackBtn>
        </Actions>
      </Card>
    </Wrapper>
  );
}

export default SingleJob;

/* ================= CSS ================= */

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(135deg, #00c6ff, #0072ff);
`;

const Card = styled.div`
  background: white;
  padding: 30px;
  width: 400px;
  border-radius: 15px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Info = styled.div`
  margin-bottom: 15px;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.span`
  font-weight: bold;
  color: #555;
`;

const Value = styled.span`
  color: #777;
`;

const Status = styled.span`
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 12px;

  background: ${({ status }) =>
    status === "pending"
      ? "#ffe58f"
      : status === "interview"
      ? "#91d5ff"
      : "#ffccc7"};
`;

const Actions = styled.div`
  margin-top: 20px;
  text-align: center;
`;

const BackBtn = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  background: #0072ff;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #0056cc;
  }
`;

const Loading = styled.p`
  text-align: center;
  margin-top: 100px;
  font-size: 20px;
`;