import homeTemplate from '../handlebars/home.hbs';
import listTemplate from '../handlebars/partials/list.hbs';
import { getBreeds } from './api';
import '../styles/index.scss';

document.addEventListener('DOMContentLoaded', () => {
  let homeContent = document.getElementById('home-template-content');
  homeContent.innerHTML = homeTemplate();
  setListBreeds();
});

/**
 * Create breed list and add events.
 */
function setListBreeds() {
  const searchInput = document.getElementById('search-input');
  const listContent = document.getElementById('list-template-content');
  const searchResult = document.getElementById('list-template-content');

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
    searchResult.style.width = `${searchInput.offsetWidth}px`;
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
