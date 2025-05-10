import { API_URL, API_ENDPOINTS, TOKEN_KEY } from '../config/constants';

/**
 * Lấy token từ localStorage
 * @returns {string|null} token hoặc null nếu không có
 */
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

/**
 * Tạo headers chứa các thông tin chung và token nếu có
 * @param {boolean} includeToken - Có thêm token vào header không
 * @returns {Headers} Header object
 */
export const createHeaders = (includeToken = true) => {
  const headers = new Headers({
    'Content-Type': 'application/json',
  });

  if (includeToken) {
    const token = getToken();
    if (token) {
      headers.append('Authorization', `Bearer ${token}`);
    }
  }

  return headers;
};

/**
 * Gọi API với các phương thức chung
 * @param {string} url - API endpoint
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {object} data - Dữ liệu gửi lên
 * @param {boolean} includeToken - Có thêm token vào header không
 * @returns {Promise<any>} Promise với dữ liệu trả về từ API
 */
export const apiCall = async (url, method = 'GET', data = null, includeToken = true) => {
  const fullUrl = `${API_URL}${url}`;
  const headers = createHeaders(includeToken);

  const config = {
    method,
    headers,
    credentials: 'include',
  };

  if (data && (method === 'POST' || method === 'PUT' || method === 'PATCH')) {
    config.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(fullUrl, config);
    const result = await response.json();

    if (response.ok) {
      return result;
    } else {
      throw new Error(result.message || 'Có lỗi xảy ra');
    }
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

// Auth services
export const authServices = {
  register: (userData) => {
    return apiCall(API_ENDPOINTS.AUTH.REGISTER, 'POST', userData, false);
  },
  login: (credentials) => {
    return apiCall(API_ENDPOINTS.AUTH.LOGIN, 'POST', credentials, false);
  },
  logout: () => {
    const token = getToken();
    return apiCall(API_ENDPOINTS.AUTH.LOGOUT, 'POST', { token }, true);
  },
  getProfile: () => {
    return apiCall(API_ENDPOINTS.AUTH.PROFILE, 'GET');
  },
};

// Job services
export const jobServices = {
  getJobs: (filters) => {
    return apiCall(`${API_ENDPOINTS.JOBS.LIST}${filters ? `?${new URLSearchParams(filters)}` : ''}`);
  },
  getJobDetail: (id) => {
    return apiCall(API_ENDPOINTS.JOBS.DETAIL(id));
  },
  applyJob: (id, data) => {
    return apiCall(API_ENDPOINTS.JOBS.APPLY(id), 'POST', data);
  },
};

// Course services
export const courseServices = {
  getCourses: (filters) => {
    return apiCall(`${API_ENDPOINTS.COURSES.LIST}${filters ? `?${new URLSearchParams(filters)}` : ''}`);
  },
  getCourseDetail: (id) => {
    return apiCall(API_ENDPOINTS.COURSES.DETAIL(id));
  },
};

export default {
  auth: authServices,
  jobs: jobServices,
  courses: courseServices,
}; 