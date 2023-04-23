import axios from "axios";
const SERVER_API_URL = process.env.REACT_APP_SERVER_API_URL;
const USERS_URL = `${SERVER_API_URL}/users`;
const SERVER_URL = "http://localhost:4000/api/users";


const api = axios.create({ withCredentials: true });


export const login = async ({ username, password }) => {
 const response = await api.post(`${SERVER_URL}/login`, {
   username,
   password,
 });
 const user = response.data;
 return user;
};

export const logout = async () => {
    const response = await api.post(`${SERVER_URL}/logout`);
    return response.data;
   };
   
   
   export const profile = async () => {
    const response = await api.post(`${SERVER_URL}/profile`);
    const user = response.data;
    return { currentUser: user };
   };
   
   
   export const updateUser = async (user) => {
    const response = await api.put(`${SERVER_URL}/${user._id}`, user);
    return response.data;
   };
   
   
   export const register = async ({ username, password }) => { 
    const response = await api.post(`${SERVER_URL}/register`, {
        username,
        password,
      });
      const user = response.data;
      return user;
   }