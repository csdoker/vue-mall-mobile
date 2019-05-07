import ajax from '@/utils/ajax';

/**
 * 获取首页数据 | GET
 */
export const fetchHomeData = (path, method = 'get') => {
  return ajax(path, method);
};

/**
 * 用户注册 | POST
 */
export const registerUser = (path, method, data) => {
  return ajax(path, method, data);
};