import { getSession } from 'next-auth/react';

import axios from 'axios';
import { GetServerSideProps } from 'next';
import { getToken } from 'next-auth/jwt';
import { getServerSession } from 'next-auth';
import { authOptions } from 'app/(route)/api/auth/[...nextauth]/route';

const serverInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const getSessionBeforeRequest = async () => {
  try {
    // const session = await getServerSession(authOptions.session);
    const session = await getSession();
    return session;
  } catch (error) {
    console.error('Error fetching session:', error);
    return null;
  }
};

serverInstance.interceptors.request.use(
  async (config) => {
    const session = await getSessionBeforeRequest();
    console.log('axios server session ', session);
    if (session && config.url !== '/v1/auth/reissue-token') {
      config.headers['Authorization'] = `Bearer ${session.accessToken}`;
    }

    return config;
  },
  // (error) => {
  //   console.log('interceptor request error ' + error);
  //   return error;
  // },
);

serverInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  // async (error) => {
  //   // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거
  //   // 응답 오류가 있는 작업 수행

  //   const {
  //     config,
  //     response: { status },
  //   } = error;
  //   console.log('interceptor response error ' + error);
  //   // if (status === 401) {
  //   //   const originRequest = config;
  //   //   const response = await reissueToken();
  //   //   if (response.status === 200) {
  //   //     const newAccessToken = response.data.accessToken;

  //   //     originRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
  //   //     return axios(originRequest);
  //   //   } else {
  //   //     // alert(i18n.t('alert.login.pleaseReLogin'));
  //   //     // localStorage.removeItem('userId');
  //   //     // localStorage.removeItem('grantType');
  //   //     // localStorage.removeItem('accessToken');
  //   //     // localStorage.removeItem('refreshToken');
  //   //     // window.location = URL.LOGIN;
  //   //     // return new Promise(() => {});
  //   //   }
  //   // }
  //   // return new Promise(() => {});
  //   return error;
  // },
);

export default serverInstance;
