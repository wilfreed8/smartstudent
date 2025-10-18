import axiosClient from "./axiosClient";



//register
export const registerUser = async (name: string, email: string, password: string) => {
  const response = await axiosClient.post("/register", { name, email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};
// Connexion
export const loginUser = async (email: string, password: string) => {
  const response = await axiosClient.post("/login", { email, password });
  localStorage.setItem("token", response.data.token);
  return response.data;
};

// Récupérer l’utilisateur connecté
export const getUser = async () => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("Aucun token trouvé");

  const response = await axiosClient.get("/user", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};