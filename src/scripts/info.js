import '../styles/index.scss';
import { getBreedImage } from './api';
import infoTemplate from '../handlebars/info.hbs';

document.addEventListener('DOMContentLoaded', async () => {
  const homeContent = document.getElementById('info-template-content');
  const searchParams = new URLSearchParams(window.location.search);
  if (!searchParams.has('id')) {
    return;
  }

  const response = await getBreedImage([searchParams.get('id')]);
  console.log(response);
  const data = { breedInfo: response[0].breeds[0], imageUrl: response[0].url };
  homeContent.innerHTML = infoTemplate(data);

  window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.image');

    images.forEach((el) => {
      el.style.height = `${el.offsetWidth}px`;
    });
  });
});
