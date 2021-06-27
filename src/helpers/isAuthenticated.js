import jwtDecode from 'jsonwebtoken';
// eslint-disable-next-line import/no-cycle
// import { getToken } from './authHelper';

const isAuthenticated = () => {
  try {
    const authToken = localStorage.getItem('auth-token');
   if (authToken === null) return false;
    return authToken;
  } catch (err) {
    return false;
  }
};

export default isAuthenticated;
