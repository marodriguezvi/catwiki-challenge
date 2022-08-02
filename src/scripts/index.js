import '../styles/index.scss';
import Handlebars from 'handlebars/dist/handlebars';

let homeContent = document.getElementById('home-template-content');
let homeTemplate = document.getElementById('home-template').textContent;

homeTemplate = Handlebars.compile(homeTemplate);
homeContent.innerHTML = homeTemplate();
