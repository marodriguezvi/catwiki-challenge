/**
 * Build src image.
 * @param {String} breedId - Breed id.
 * @param {String} size - Image size.
 * @return {URL} URL for the image src.
 */
function getSrcImage(breedId = '', size = 'small') {
  const query = `search?has_breeds=1&breed_ids=${breedId}&format=src&mime_types=jpg&size=${size}`;
  return `${process.env.API_URL}/v1/images/${query}`;
}

/**
 * Get all files from webpack context.
 * @param {Context} r - Webpack context.
 * @return {Array} All files.
 */
function importAll(r) {
  return r.keys().forEach(r);
}

/**
 * Get all files from webpack context.
 * @param {Array} listElements - HTMLElements.
 */
function resizeElements(listElements) {
  listElements.forEach((el) => {
    el.style.height = `${el.offsetWidth}px`;
  });
}

/**
 * Get all files from webpack context.
 * @param {Array} breedList - Breed list.
 * @return {Array} - Filtered breed information.
 */
function getBreedInfo(breedList) {
  return breedList.map((el, index) => {
    return {
      index: index + 1,
      name: el[0].breeds[0].name,
      description: el[0].breeds[0].description,
      imageUrl: el[0].url,
    };
  });
}

export { getSrcImage, importAll, resizeElements, getBreedInfo };
