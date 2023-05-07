import axios from 'axios';

const bearer = localStorage.getItem('bearer');

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}),
  },
});
