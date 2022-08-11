/*global process*/
/*eslint no-undef: "error"*/

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
 * Get breed.
 * @param {Array} breedIds - Breed id list.
 * @return {Promise} Promise with data.
 */
async function getBreed(breedIds) {
  try {
    const responses = await Promise.all(breedIds.map((breedId) => axios.get(`/v1/breeds/${breedId}`)));
    console.log(responses);
  } catch (error) {
    console.log(error);
  }
}

export { getBreeds, getBreed };
