import httpService from './httpService';

export const login = payload => {
  // httpService.init();
  return httpService.post('auth/login', payload);
};
