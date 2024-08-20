import axios from 'axios';
import {base_url, mututalfunds} from '..';


export const mutual_Funds_api = async (accessToken:string) => {
  try {
    const responseData = await axios.get(`${base_url}${mututalfunds}`, {
      headers: {
        Authorization: `${accessToken}`,
      },
    });
    return responseData.data;
  } catch (error) {
    console.log('🚀 ~ constlogin_api= ~ error:', error);
    throw error;
  }
};
