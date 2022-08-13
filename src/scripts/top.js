import '../styles/index.scss';
import { getBreedImage } from './api';
import { resizeElements } from './utils';
import topTemplate from '../templates/top.hbs';
import { MOST_SEARCHED_BREEDS } from './constants';

document.addEventListener('DOMContentLoaded', async () => {
  const topContent = document.getElementById('top-template-content');
  const breedList = MOST_SEARCHED_BREEDS.map((el) => {
    return el.id;
  });

  const response = await getBreedImage(breedList);
  console.log(response);
  const breeds = response.map((el, index) => {
    return {
      index: index + 1,
      name: el[0].breeds[0].name,
      description: el[0].breeds[0].description,
      imageUrl: el[0].url,
    };
  });

  topContent.innerHTML = topTemplate({ breeds });
  const images = document.querySelectorAll('.image');
  resizeElements(images);

  window.addEventListener('resize', () => {
    resizeElements(images);
  });
});
