import { fetchBreeds } from './cat-api';
import { common } from './common';
import { toastError } from './toaster';
import { activateSelect, setErrorSelect, setSelectedOption } from './select';

/**
 * Load the list of cat breeds.
 * @returns {Promise<void>}
 */
function loadBreeds() {
  fetchBreeds()
    .then(data => {
      const options = data.map(({ id, name }) => ({ text: name, value: id }));
      activateSelect(options);
      const userOption = localStorage.getItem(common.LS_KEY_OPTION);
      if (userOption) {
        setSelectedOption(userOption);
      }
    })
    .catch(error => {
      setErrorSelect();
      toastError(error.message);
    });
}

// Initialization after the page is loaded.
document.addEventListener('DOMContentLoaded', loadBreeds);
