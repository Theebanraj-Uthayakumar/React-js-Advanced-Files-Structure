import { CONFIG } from "../constants/config";
export const baseUrl = CONFIG.API_URL;

export const callAPI = async (url, options = {}) => {
  return await fetch(url, options).then(handleResponse).catch(handleError);
}

export const handleResponse = async (response) => {

  if (response.ok) {
    const paginationStr = response.headers.get('X-Pagination');

    if (paginationStr) {
      let res = {};
      res.list = await response.json();
      res.pagination = JSON.parse(paginationStr);
      return res;
    } else {

      return await response.json();
    }
  } else if (response.status === 404) {
    let { message } = await response.json();

    if (message) {
      throw { error_message: true, message };
    } else {
      throw { error_message: false };
    }
  } else {
    throw { error_message: false };
  }
}

// In a real app, would likely call an error logging service.
export const handleError = (error) => {
  // eslint-disable-next-line no-console
  console.error("API call failed: " + error.message);
  throw error;
}