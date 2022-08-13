import '../styles/index.scss';
import { getBreedImage } from './api';
import { resizeElements } from './utils';
import infoTemplate from '../templates/info.hbs';

document.addEventListener('DOMContentLoaded', async () => {
  const homeContent = document.getElementById('info-template-content');
  const searchParams = new URLSearchParams(window.location.search);
  if (!searchParams.has('id')) {
    return;
  }

  let response = await getBreedImage([searchParams.get('id')], 9);
  response = response[0];
  const breedImages = response.map((el) => {
    return el.url;
  });
  const data = {
    breedInfo: response[0].breeds[0],
    breedImage: breedImages[0],
    otherImage: breedImages.slice(1),
  };
  homeContent.innerHTML = infoTemplate(data);

  const images = document.querySelectorAll('.image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
