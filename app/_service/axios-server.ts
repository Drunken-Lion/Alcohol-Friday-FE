import { getSession } from 'next-auth/react';

import axios from 'axios';

const serverInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSessionBeforeRequest = async () => {
  try {
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Error fetching session:', error);
    return null;
  }
};

serverInstance.interceptors.request.use(async (config) => {
  if (config.url !== '/v1/auth/reissue-token') {
    const session = await getSessionBeforeRequest();
    if (session) {
      console.log('axios server session ', session);
      config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    }
  }

  return config;
});

serverInstance.interceptors.response.use((response) => {
  return response;
});

export default serverInstance;
