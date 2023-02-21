import axios from 'axios';
import { BACKEND_URL } from '../constants/apiEndPoint';

const makeRequest = async ({url, method}, dynamicConfig) => {
  const requestDetails = {
    baseURL : BACKEND_URL,
    url,
    method: method,
    ...dynamicConfig
  };
  const {data} = await axios(requestDetails);
  return data;
};

export default makeRequest;