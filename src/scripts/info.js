import '../styles/index.scss';
import { getBreedImage } from './api';
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

  window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.image');

    images.forEach((el) => {
      el.style.height = `${el.offsetWidth}px`;
    });
  });
});
