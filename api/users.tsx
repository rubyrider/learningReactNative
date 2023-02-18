import Api from './api';
import SignUpInterface from '../interfaces/signUpInterface';

export const getUsers = async () => {
  const response = await Api.get<any>('/users/1.json');
  return response.data;
};

export const createUser = async (user: SignUpInterface) => {
  try {
    const response = await Api.post<SignUpInterface>('/users.json', {user});
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.status === 422) {
      return error.response.data;
    } else {
      return error;
    }
  }
};
