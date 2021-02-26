import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const key = '20057686-8e7631fb38d8b126eb420f670';
//pixabay.com/api/?q=что_искать&page=номер_страницы&key=твой_ключ&image_type=photo&orientation=horizontal&per_page=12

export const fetchGallery = (currentPage, searchQuery) => {
  return axios
    .get(
      `?q=${searchQuery}&page=${currentPage}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .then(({ data }) => data.hits);
};
