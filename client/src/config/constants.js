export const API_URL = 'http://localhost:8000';

export const API_ENDPOINTS = {
  AUTH: {
    REGISTER: '/users/register',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    PROFILE: '/auth/profile', //Hình như cái này là affiliate hehe
  },
  COURSES: {
    LIST: '/courses',
    DETAIL: (id) => `/courses/${id}`,
  },
  JOBS: {
    LIST: '/jobs',
    DETAIL: (id) => `/jobs/${id}`,
    APPLY: (id) => `/jobs/${id}/apply`,
  },
};

export const TOKEN_KEY = 'affilate_token';
export const USER_KEY = 'affilate_user'; 