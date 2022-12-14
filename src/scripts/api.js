import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;

/**
 * Get breed list.
 * @return {Promise} Promise with data.
 */
async function getBreeds() {
  try {
    const { data } = await axios.get('/v1/breeds');
    return data;
  } catch (error) {
    console.log(error);
  }
}

/**
 * Get breed image.
 * @param {Array} breedIds - Breed id list.
 * @param {Number} limit - Response limit.
 * @return {Promise} Promise with data.
 */
async function getBreedImage(breedIds, limit = 1) {
  let params = { has_breeds: 1, format: 'json', mime_type: 'jpg', limit };
  try {
    const responses = await Promise.all(
      breedIds.map((breedId) => {
        params.breed_ids = breedId;
        return axios.get('/v1/images/search', { params });
      }),
    );
    const data = responses.map((response) => response.data);
    return data;
  } catch (error) {
    console.log(error);
  }
}

export { getBreeds, getBreedImage };
