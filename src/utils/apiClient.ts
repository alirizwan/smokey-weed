import Axios from 'axios';
import { API_URL } from './appCostants';

export const client = Axios.create({
  baseURL: API_URL
});