import '../styles/index.scss';
import { getBreedImage } from './api';
import { resizeElements } from './utils';
import infoTemplate from '../templates/info.hbs';
import galeryTemplate from '../templates/partials/galery.hbs';

document.addEventListener('DOMContentLoaded', async () => {
  const homeContent = document.getElementById('info-template-content');
  const searchParams = new URLSearchParams(window.location.search);
  if (!searchParams.has('id')) {
    return;
  }

  let breedInfo = JSON.parse(localStorage.getItem('breedInfo'));
  homeContent.innerHTML = infoTemplate({ breedInfo });

  let images = document.querySelectorAll('.image');
  resizeElements(images);

  const galeryContent = document.getElementById('galery-template-content');
  let response = await getBreedImage([searchParams.get('id')], 8);
  const imageUrls = response[0].map((el) => {
    return el.url;
  });
  galeryContent.innerHTML = galeryTemplate({ images: imageUrls });

  images = document.querySelectorAll('.image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
