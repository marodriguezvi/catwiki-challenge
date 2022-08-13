import '../styles/index.scss';
import topTemplate from '../templates/top.hbs';
import { resizeElements } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const topContent = document.getElementById('top-template-content');
  let breeds = JSON.parse(localStorage.getItem('topBreeds'));

  topContent.innerHTML = topTemplate({ breeds });
  const images = document.querySelectorAll('.top-list__image .image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
