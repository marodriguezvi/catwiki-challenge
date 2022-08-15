import '../styles/index.scss';
import icon from '../assets/icon.png';
import topTemplate from '../templates/top.hbs';
import { MOST_SEARCHED_BREEDS } from './constants';
import { resizeElements, addFavicon } from './utils';

document.addEventListener('DOMContentLoaded', async () => {
  const topContent = document.getElementById('top-template-content');
  const breeds = MOST_SEARCHED_BREEDS.map((el) => {
    return JSON.parse(localStorage.getItem(el.id));
  });

  topContent.innerHTML = topTemplate({ breeds });
  addFavicon(icon);
  const images = document.querySelectorAll('.top-list__image .image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
