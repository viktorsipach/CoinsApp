import axios from 'axios';
import env from './env';

export const axiosDB = axios.create({
  baseURL: env.dbBaseURL,
});
