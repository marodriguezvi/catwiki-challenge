import '../styles/index.scss';
import Handlebars from 'handlebars/dist/handlebars';

let homeContent = document.getElementById('home-template-content');
let homeTemplate = document.getElementById('home-template').textContent;

document.addEventListener('DOMContentLoaded', () => {
  homeTemplate = Handlebars.compile(homeTemplate);
  homeContent.innerHTML = homeTemplate();

  let searchInput = document.getElementById('search-input');
  let searchResult = document.getElementById('search-result');
  searchResult.style.width = `${searchInput.offsetWidth}px`;

  window.addEventListener('resize', () => {
    searchResult.style.width = `${searchInput.offsetWidth}px`;
  });
});
