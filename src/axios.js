// src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "https://temp-jobs-api-jz3a.onrender.com/api/v1",
});

// إضافة توكن JWT تلقائياً إذا موجود
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;