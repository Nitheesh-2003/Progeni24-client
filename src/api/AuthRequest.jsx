import axios from 'axios';

const API=axios.create({baseURL : import.meta.env.VITE_SERVER_URL})

export const login=(formData)=>API.post('/auth/login',formData);
export const signUp=(formData)=>API.post('/auth/register',formData);
