import homeTemplate from '../handlebars/home.hbs';
import listTemplate from '../handlebars/partials/list.hbs';

import '../styles/index.scss';
import { getBreeds } from './api';
import { getSrcImage } from './utils';
import { MOST_SEARCHED_BREEDS } from './constants';

document.addEventListener('DOMContentLoaded', () => {
  let homeContent = document.getElementById('home-template-content');
  const searchBreedsSrc = getSearchedBreedsSrc();
  const data = { searchBreedsSrc };
  homeContent.innerHTML = homeTemplate(data);
  setListBreeds();
});

/**
 * Create breed list and add events.
 */
function setListBreeds() {
  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const searchResult = document.getElementById('list-template-content');
  const imageContainer = document.querySelector('.card__body .image-container');

  getBreeds().then((res) => {
    const data = res.data;
    listContent.innerHTML = listTemplate({ breeds: data });
    searchResult.style.width = `${searchInput.offsetWidth}px`;
    setListItemEvent();

    searchInput.addEventListener('input', (event) => {
      const filterText = event.target.value;
      const filterBreeds = data.filter((item) => {
        return item.name.toLowerCase().match(filterText);
      });

      listContent.innerHTML = listTemplate({ breeds: filterBreeds });
      setListItemEvent();
    });
  });

  window.addEventListener('resize', () => {
    const images = document.querySelectorAll('.card__body .image');
    searchResult.style.width = `${searchInput.offsetWidth}px`;
    console.log(imageContainer.offsetWidth);
    images.forEach((el) => {
      el.style.height = `${imageContainer.offsetWidth}px`;
    });
  });

  searchInput.addEventListener('focus', () => {
    searchResult.classList.remove('hidden');
  });

  searchInput.addEventListener('blur', (event) => {
    event.preventDefault();
    setTimeout(() => {
      searchResult.classList.add('hidden');
    }, 200);
  });
}

/**
 * Set event for list items.
 */
function setListItemEvent() {
  const listItems = document.querySelectorAll('.list__item');

  listItems.forEach((item) => {
    item.addEventListener('click', (event) => {
      alert(event.target.dataset.id);
    });
  });
}

/**
 * Get image src for the most searched breeds.
 */
function getSearchedBreedsSrc() {
  MOST_SEARCHED_BREEDS.sort(() => {
    return Math.random() - 0.5;
  });

  return MOST_SEARCHED_BREEDS.slice(0, 4).map((el) => {
    return {
      src: getSrcImage(el.id),
      name: el.name,
    };
  });
}
