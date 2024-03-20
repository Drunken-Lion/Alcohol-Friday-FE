import { getSession } from 'next-auth/react';

import axios from 'axios';

const serverInstance = axios.create({
  baseURL: process.env.ALCOHOL_FRIDAY_API_BASEURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

serverInstance.interceptors.request.use(
  async (config) => {
    const session = await getSession();
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
    // 2xx 범위에 있는 상태 코드는 이 함수를 트리거
    // 응답 데이터가 있는 작업 수행
    // http status는 200이지만 서버에서 오류 응답을 보냈을 때
    // if (response.data.status === 'error') {
    //     return Promise.reject(response);
    // }
    // console.log(response);

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
