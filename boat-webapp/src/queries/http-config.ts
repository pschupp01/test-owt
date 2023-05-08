import axios from 'axios';

const webappUrl = process.env.REACT_APP_WEBAPP_URL;

export default axios.create({
  baseURL: `${webappUrl}/api`,
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
  },
});
