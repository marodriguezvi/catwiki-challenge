/*global require*/
/*eslint no-undef: "error"*/

import '../styles/index.scss';
import { getBreeds } from './api';
import { getSrcImage, importAll } from './utils';
import { MOST_SEARCHED_BREEDS } from './constants';
import homeTemplate from '../handlebars/home.hbs';
import listTemplate from '../handlebars/partials/list.hbs';

importAll(require.context('../assets/', false, /\.png$/));

document.addEventListener('DOMContentLoaded', async () => {
  let homeContent = document.getElementById('home-template-content');
  const searchBreedsSrc = getSearchedBreedsSrc();
  homeContent.innerHTML = homeTemplate({ searchBreedsSrc });

  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const imageContainer = document.querySelector('.search__body .galery__item');

  const data = await getBreeds();
  listContent.innerHTML = listTemplate({ breeds: data });
  listContent.style.width = `${searchInput.offsetWidth}px`;
  setListItemEvent(listContent);

  searchInput.addEventListener('input', (event) => {
    const filterText = event.target.value;
    const filterBreeds = data.filter((item) => {
      return item.name.toLowerCase().match(filterText);
    });

    listContent.innerHTML = listTemplate({ breeds: filterBreeds });
    setListItemEvent();
  });

  window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.search__body .image');
    listContent.style.width = `${searchInput.offsetWidth}px`;

    images.forEach((el) => {
      el.style.height = `${imageContainer.offsetWidth}px`;
    });
  });

  searchInput.addEventListener('focus', () => {
    listContent.classList.remove('hidden');
  });

  searchInput.addEventListener('blur', (event) => {
    event.preventDefault();
    setTimeout(() => {
      listContent.classList.add('hidden');
    }, 200);
  });

  listContent.addEventListener('click', (e) => {
    console.log(e.target);
  });
});

/**
 * Set event for list items.
 * @param {HTMLElement} listElement - Element to add event
 */
function setListItemEvent(listElement) {
  listElement.addEventListener('click', (event) => {
    if (event.target.dataset.id) {
      window.location.assign(`${window.location.origin}/info.html?id=${event.target.dataset.id}`);
    }
  });
}

/**
 * Get image src for the most searched breeds.
 */
function getSearchedBreedsSrc() {
  return MOST_SEARCHED_BREEDS.slice(0, 4).map((el) => {
    return {
      src: getSrcImage(el.id),
      name: el.name,
    };
  });
}
