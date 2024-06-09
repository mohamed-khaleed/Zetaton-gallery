// src/services/pexelsService.js
import axios from 'axios';

const API_KEY = import.meta.env.VITE_PEXELS_API_KEY;
const BASE_URL = import.meta.env.VITE_PEXELS_API_URL;

const pexelsApi = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: API_KEY,
  },
});

export const fetchPhotos = async (query, page = 1, perPage = 15) => {
  try {
    const response = await pexelsApi.get('/search', {
      params: {
        query,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching photos:', error);
    throw error;
  }
};
