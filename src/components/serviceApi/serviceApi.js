import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';
export const serviceApi = async (page = 1, q) => {
  return await axios('', {
    params: {
      key: '42441991-6662e25aa8326f913b71730ee',
      page,
      per_page: 12,
      q,
    },
  });
};
