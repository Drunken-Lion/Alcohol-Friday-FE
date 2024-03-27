'use client';

import { getSession } from 'next-auth/react';
import axios from 'axios';

const clientInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

clientInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
    console.log('client axios session : ' + session);
    if (session && config.url !== '/v1/auth/reissue-token') {
      config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  (error) => {
    console.log('interceptor request error ' + error);
    return error;
  },
);

clientInstance.interceptors.response.use((response) => {
  return response;
});

export default clientInstance;
