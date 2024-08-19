import axios from 'axios';
import {LoginCredientialsSchema} from '../../interface';
import {base_url, login_url} from '..';

export const login_api = async (values: LoginCredientialsSchema) => {
  
  try {
    const responseData = await axios.post(`${base_url}${login_url}`, values, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('🚀 ~ constlogin_api= ~ responseData:', responseData.data);
    return responseData.data;
  } catch (error) {
    console.log('🚀 ~ constlogin_api= ~ error:', error);
    throw error;
  }
};
