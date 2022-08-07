/*global process*/
/*eslint no-undef: "error"*/

/**
 * Build src image.
 */
function getSrcImage(breed_id) {
  return `${process.env.API_URL}/v1/images/search?has_breeds=1&breed_ids=${breed_id}&format=src&mime_types=jpg&size=small`;
}

export { getSrcImage };
