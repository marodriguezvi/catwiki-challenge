/*global process*/
/*eslint no-undef: "error"*/

import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.common['x-api-key'] = process.env.API_KEY;

/**
 * Get breed list.
 * @return {Promise} A axios promise
 */
function getBreeds() {
  return axios.get('/v1/breeds');
}

export { getBreeds };
