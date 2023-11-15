import axios from 'axios';

// Set default headers and base URL for all axios requests
axios.defaults.headers.common['x-api-key'] =
  'live_sQSiU8IUrkSu8g32YTEYKLB8DcWcIsBNMk0omc8QjPKH9Bo7QndZdmjMVf3YCCwv';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

/**
 * Fetches a list of cat breeds from TheCatAPI.
 * @returns {Promise<Array>} A promise that resolves to an array of cat breeds.
 */
function fetchBreeds() {
  return axios.get('/breeds').then(response => response.data);
}

/**
 * Fetches a cat info by breed ID from TheCatAPI.
 * @param {string} breedId - The ID of the cat breed.
 * @returns {Promise<Object>} A promise that resolves to an object representing the cat info.
 */
function fetchCatByBreed(breedId) {
  return axios
    .get(`/images/search?breed_ids=${breedId}`)
    .then(response => response.data[0]);
}

export { fetchBreeds, fetchCatByBreed };
