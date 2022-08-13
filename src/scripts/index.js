import '../styles/index.scss';
import { getBreeds, getBreedImage } from './api';
import { MOST_SEARCHED_BREEDS } from './constants';
import homeTemplate from '../templates/home.hbs';
import listTemplate from '../templates/partials/list.hbs';
import { getSrcImage, importAll, resizeElements, getBreedInfo } from './utils';

importAll(require.context('../assets/', false, /\.png$/));
let breeds = [];

document.addEventListener('DOMContentLoaded', async () => {
  let homeContent = document.getElementById('home-template-content');
  const searchBreedsSrc = getSearchedBreedsSrc();
  homeContent.innerHTML = homeTemplate({ searchBreedsSrc });

  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const images = document.querySelectorAll('.favorite .galery .image');
  resizeElements(images);

  breeds = await getBreeds();
  listContent.innerHTML = listTemplate({ breeds });
  listContent.style.width = `${searchInput.offsetWidth}px`;
  setListItemEvent(listContent);

  searchInput.addEventListener('input', (event) => {
    const filterText = event.target.value;
    const filterBreeds = breeds.filter((item) => {
      return item.name.toLowerCase().match(filterText);
    });

    listContent.innerHTML = listTemplate({ breeds: filterBreeds });
    setListItemEvent(listContent);
  });

  window.addEventListener('resize', () => {
    listContent.style.width = `${searchInput.offsetWidth}px`;
    resizeElements(images);
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

  const breedList = MOST_SEARCHED_BREEDS.map((el) => {
    return el.id;
  });

  const response = await getBreedImage(breedList);
  const topBreeds = getBreedInfo(response);
  localStorage.setItem('topBreeds', JSON.stringify(topBreeds));
});

/**
 * Set event for list items.
 * @param {HTMLElement} listElement - Element to add event
 */
function setListItemEvent(listElement) {
  listElement.addEventListener('click', (event) => {
    const dataset = event.target.dataset;
    if (dataset.id) {
      localStorage.setItem('breedInfo', JSON.stringify(breeds[parseInt(dataset.index)]));
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
