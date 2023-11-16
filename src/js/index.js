import SlimSelect from 'slim-select';
import 'slim-select/styles';
import { fetchBreeds } from './cat-api';
import { toastError } from './toaster';
import { renderCat } from './cat-renderer';

const spinner = document.querySelector('.loader-spinner');

/**
 * Load the list of cat breeds.
 * @returns {Promise<void>}
 */
function loadBreeds() {
  fetchBreeds()
    .then(data => {
      const options = data.map(({ id, name }) => ({ text: name, value: id }));

      new SlimSelect({
        select: '#select',
        data: [
          { placeholder: true, text: 'Select a cat breed...' },
          ...options,
        ],
        events: {
          afterChange: ([newVal]) => {
            renderCat(newVal);
          },
        },
      });
    })
    .catch(() => {
      toastError('Please try again later...');
    })
    .finally(() => {
      spinner.style.display = 'none';
    });
}

// Initialization after the page is loaded.
document.addEventListener('DOMContentLoaded', loadBreeds);
