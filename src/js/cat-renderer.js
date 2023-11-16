import { fetchCatByBreed } from './cat-api';
import { catErrorMarkup, catInfoMarkup } from './templates';

const elements = {
  container: document.querySelector('.cat-info'),
  spinner: document.querySelector('.loader-spinner'),
};

/**
 * Render cat information for the selected breed.
 * @param {Object} cat - Selected cat breed.
 * @param {string} cat.value - Cat breed identifier.
 * @param {string} cat.text - Cat breed name.
 */
function renderCat(cat) {
  elements.container.innerHTML = '';
  elements.container.style.opacity = '0';
  elements.spinner.style.display = 'block';

  fetchCatByBreed(cat.value)
    .then(data => {
      elements.container.innerHTML = catInfoMarkup(data);
    })
    .catch(() => {
      elements.container.innerHTML = catErrorMarkup(cat.text);
    })
    .finally(() => {
      elements.spinner.style.display = 'none';
      elements.container.style.opacity = '1';
    });
}

export { renderCat };
