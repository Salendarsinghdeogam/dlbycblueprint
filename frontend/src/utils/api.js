import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// Add token to request headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Endpoints
export const register = (data) => API.post("/auth/register", data);
export const login = (data) => API.post("/auth/login", data);
export const getCurrentUser = () => API.get("/auth/me");

// Music Endpoints
export const getMusic = (category, festival) => {
  let url = "/music";
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (festival) params.append("festival", festival);
  if (params.toString()) url += "?" + params.toString();
  return API.get(url);
};

export const getMusicById = (id) => API.get(`/music/${id}`);
export const downloadMusic = (id) => API.post(`/music/${id}/download`);
export const createMusic = (data) => API.post("/music", data);

// Art Endpoints
export const getArt = (category, festival) => {
  let url = "/art";
  const params = new URLSearchParams();
  if (category) params.append("category", category);
  if (festival) params.append("festival", festival);
  if (params.toString()) url += "?" + params.toString();
  return API.get(url);
};

export const getArtById = (id) => API.get(`/art/${id}`);
export const downloadArt = (id) => API.post(`/art/${id}/download`);
export const createArt = (data) => API.post("/art", data);

// Scripts Endpoints
export const getScripts = (language, category) => {
  let url = "/scripts";
  const params = new URLSearchParams();
  if (language) params.append("language", language);
  if (category) params.append("category", category);
  if (params.toString()) url += "?" + params.toString();
  return API.get(url);
};

export const getScriptById = (id) => API.get(`/scripts/${id}`);
export const downloadScript = (id) => API.post(`/scripts/${id}/download`);
export const createScript = (data) => API.post("/scripts", data);

// Festival Endpoints
export const getFestivals = () => API.get("/festivals");
export const getFestivalById = (id) => API.get(`/festivals/${id}`);
export const getFestivalByName = (name) => API.get(`/festivals/name/${name}`);

// Admin Endpoints
export const approveMusicItem = (id) => API.put(`/admin/music/${id}/approve`);
export const deleteMusic = (id) => API.delete(`/admin/music/${id}`);
export const approveArtItem = (id) => API.put(`/admin/art/${id}/approve`);
export const deleteArt = (id) => API.delete(`/admin/art/${id}`);
export const approveScriptItem = (id) => API.put(`/admin/script/${id}/approve`);
export const deleteScript = (id) => API.delete(`/admin/script/${id}`);
export const createFestival = (data) => API.post("/admin/festival", data);
export const getPendingApprovals = () => API.get("/admin/pending/items");

export default API;
