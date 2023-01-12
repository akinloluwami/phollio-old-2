import axios from "axios";

let defaultUrl: string = "http://localhost:2004";

const postData = async (
  url: string,
  payload: Object,
  headers?: any,
  configurations?: any
): Promise<any> => {
  try {
    const response = await axios.post(`${defaultUrl}${url}`, payload, {
      headers: headers || {},
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

const fetchData = async (
  url?: string,
  payload?: any,
  headers?: any,
  configurations?: any
): Promise<any> => {
  try {
    const response = await axios.get(`${defaultUrl}${url}`, {
      params: payload || {},
      headers: headers || {},
    });
    return response;
  } catch (error: any) {
    const response = error.response;
    return response;
  }
};

const deleteData = async (
  url: string,
  payload?: any,
  headers?: any
): Promise<any> => {
  try {
    const response = await axios.delete(`${defaultUrl}${url}`, {
      params: payload,
      headers: headers || {},
    });
    return response;
  } catch (error: any) {
    return error.response;
  }
};

const putData = async (
  url: string,
  payload: any,
  configurations?: any
): Promise<any> => {
  try {
    const response = await axios.put(
      `${defaultUrl}${url}`,
      payload,
      configurations
    );
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export { postData, fetchData, deleteData, putData };
