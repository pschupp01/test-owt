import axios from 'axios';

const escape = (s: string) => {
  // eslint-disable-next-line no-useless-escape
  return s.replace(/([.*+?\^$(){}|\[\]\/\\])/g, '\\$1');
};

const getCookie = (name: string) => {
  console.log(document.cookie);
  const match = document.cookie.match(
    RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'),
  );
  return match ? match[1] : null;
};

const bearer = localStorage.getItem('bearer');
console.log(bearer);

export default axios.create({
  baseURL: 'http://localhost:3000/api',
  withCredentials: true,
  headers: {
    'Content-type': 'application/json',
    ...(bearer ? { Authorization: `Bearer ${bearer}` } : {}),
  },
});
