import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authServices } from '../../utils/api';
import { TOKEN_KEY, USER_KEY } from '../../config/constants';

/**
 * Store quản lý trạng thái xác thực người dùng
 */
export const useAuthStore = create(
  persist(
    (set, get) => ({
      token: null,
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,
      
      /**
       * Đăng ký người dùng mới
       * @param {object} userData - Thông tin người dùng đăng ký
       */
      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authServices.register(userData);
          return response;
        } catch (error) {
          set({ error: error.message || 'Đăng ký thất bại' });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      /**
       * Đăng nhập người dùng
       * @param {object} credentials - Thông tin đăng nhập (email, password)
       */
      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authServices.login(credentials);
          
          if (response.code !== 1000) {
            throw new Error(response.message || 'Đăng nhập thất bại');
          }
          
          const token = response.data?.token;
          
          if (!token) {
            throw new Error('Token không hợp lệ');
          }
          
          localStorage.setItem(TOKEN_KEY, token);
          
          set({
            token,
            isAuthenticated: true,
          });
          
          try {
            const profileResponse = await authServices.getProfile();
            
            if (profileResponse.code === 1000 && profileResponse.data?.user) {
              const userData = profileResponse.data.user;
              
              localStorage.setItem(USER_KEY, JSON.stringify(userData));
              
              set({
                user: {
                  id: userData.id,
                  email: userData.email,
                  firstName: userData.firstName,
                  lastName: userData.lastName,
                  dob: userData.dob,
                  roles: userData.roles || [],
                }
              });
            }
          } catch (profileError) {
            console.error('Lỗi khi lấy thông tin profile:', profileError);
          }
          
          return response;
        } catch (error) {
          set({ error: error.message || 'Đăng nhập thất bại' });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      /**
       * Đăng xuất người dùng
       */
      logout: async () => {
        set({ isLoading: true });
        try {
          await authServices.logout();
        } catch (error) {
          console.error('Lỗi đăng xuất:', error);
        } finally {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(USER_KEY);
          
          set({
            token: null,
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },
      
      /**
       * Lấy thông tin profile người dùng
       */
      getProfile: async () => {
        if (!get().isAuthenticated) return;
        
        set({ isLoading: true, error: null });
        try {
          const response = await authServices.getProfile();
          
          if (response.code !== 1000) {
            throw new Error(response.message || 'Không thể lấy thông tin người dùng');
          }
          
          const userData = response.data?.user;
          
          if (!userData) {
            throw new Error('Dữ liệu người dùng không hợp lệ');
          }
          
          set({ 
            user: {
              id: userData.id,
              email: userData.email,
              firstName: userData.firstName,
              lastName: userData.lastName,
              dob: userData.dob,
              roles: userData.roles || []
            } 
          });
          
          return userData;
        } catch (error) {
          set({ error: error.message || 'Không thể lấy thông tin người dùng' });
          throw error;
        } finally {
          set({ isLoading: false });
        }
      },
      
      /**
       * Cập nhật thông tin người dùng trong store
       */
      updateUser: (userData) => {
        set({ user: { ...get().user, ...userData } });
      },
      
      /**
       * Xóa lỗi trong store
       */
      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
); 