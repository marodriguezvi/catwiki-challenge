import '../styles/index.scss';
import icon from '../assets/icon.png';
import topTemplate from '../templates/top.hbs';
import { resizeElements, addFavicon } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const topContent = document.getElementById('top-template-content');
  let breeds = JSON.parse(localStorage.getItem('topBreeds'));

  topContent.innerHTML = topTemplate({ breeds });
  addFavicon(icon);
  const images = document.querySelectorAll('.top-list__image .image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
