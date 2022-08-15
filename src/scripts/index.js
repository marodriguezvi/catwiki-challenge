import '../styles/index.scss';
import icon from '../assets/icon.png';
import image1 from '../assets/image_1.png';
import image2 from '../assets/image_2.png';
import image3 from '../assets/image_3.png';
import { getBreeds } from './api';
import { MOST_SEARCHED_BREEDS } from './constants';
import homeTemplate from '../templates/home.hbs';
import listTemplate from '../templates/partials/list.hbs';
import { getSrcImage, resizeElements, addFavicon } from './utils';

let breeds = [];
let filterBreeds = [];

document.addEventListener('DOMContentLoaded', async () => {
  let homeContent = document.getElementById('home-template-content');
  homeContent.innerHTML = homeTemplate({
    icon,
    searchImages: getSearchedBreedsSrc(),
    knowledgeImages: [image1, image2, image3],
  });
  addFavicon(icon);

  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const images = document.querySelectorAll('.favorite .galery .image');
  resizeElements(images);

  breeds = filterBreeds = await getBreeds();
  listContent.innerHTML = listTemplate({ breeds });
  listContent.style.width = `${searchInput.offsetWidth}px`;
  setListItemEvent(listContent);

  searchInput.addEventListener('input', (event) => {
    const filterText = event.target.value;
    filterBreeds = breeds.filter((item) => {
      return item.name.toLowerCase().match(filterText.toLowerCase());
    });

    listContent.innerHTML = listTemplate({ breeds: filterBreeds });
    setListItemEvent(listContent);
  });

  searchInput.addEventListener('keypress', (event) => {
    const listElement = document.querySelector('.list .list__item');
    const dataset = listElement.dataset;

    if (event.key === 'Enter' && filterBreeds && dataset.id) {
      goToBreedInfo(filterBreeds, dataset);
    }
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

  breeds.forEach((el) => {
    if (breedList.includes(el.id)) {
      localStorage.setItem(el.id, JSON.stringify(el));
    }
  });
});

/**
 * Set event for list items.
 * @param {HTMLElement} listElement - Element to add event
 */
function setListItemEvent(listElement) {
  listElement.addEventListener('click', (event) => {
    const dataset = event.target.dataset;
    if (dataset.id) {
      goToBreedInfo(filterBreeds, dataset);
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

/**
 * Go to breed information page.
 * @param {Array} breedList - Breed list.
 * @param {Object} dataset - HTMLElement dataset.
 */
function goToBreedInfo(breedList, dataset) {
  localStorage.setItem(dataset.id, JSON.stringify(breedList[parseInt(dataset.index)]));
  window.location.assign(`${window.location.href}info.html?id=${dataset.id}`);
}
