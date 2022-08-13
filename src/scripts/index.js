import '../styles/index.scss';
import { getBreeds } from './api';
import { MOST_SEARCHED_BREEDS } from './constants';
import homeTemplate from '../templates/home.hbs';
import listTemplate from '../templates/partials/list.hbs';
import { getSrcImage, importAll, resizeElements } from './utils';

importAll(require.context('../assets/', false, /\.png$/));

document.addEventListener('DOMContentLoaded', async () => {
  let homeContent = document.getElementById('home-template-content');
  const searchBreedsSrc = getSearchedBreedsSrc();
  homeContent.innerHTML = homeTemplate({ searchBreedsSrc });

  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const images = document.querySelectorAll('.favorite .galery .image');
  resizeElements(images);

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
