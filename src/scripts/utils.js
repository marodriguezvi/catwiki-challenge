/*global process*/
/*eslint no-undef: "error"*/

/**
 * Build src image.
 * @param {String} breed_id - Breed id.
 * @return {URL} URL for the image src.
 */
function getSrcImage(breed_id) {
  return `${process.env.API_URL}/v1/images/search?has_breeds=1&breed_ids=${breed_id}&format=src&mime_types=jpg&size=small`;
}

/**
 * Get all files from webpack context.
 * @param {Context} r - Webpack context.
 * @return {Array} All files.
 */
function importAll(r) {
  return r.keys().forEach(r);
}

export { getSrcImage, importAll };
