import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
import { fetchBreeds } from './cat-api';
import { common } from './common';
import { renderCat } from './cat-renderer';
import { toastError } from './toaster';

/**
 * Initialization of the SlimSelect dropdown.
 * @type {SlimSelect}
 */
const select = new SlimSelect({
  select: '#select',
  settings: {
    disabled: true,
    placeholderText: common.PLACEHOLDER_LOADING,
  },
  events: {
    afterChange: handleOptionChange,
  },
});

/**
 * Load the list of cat breeds.
 * @returns {Promise<void>}
 */
function loadBreeds() {
  fetchBreeds()
    .then(data => {
      const options = data.map(({ id, name }) => ({ text: name, value: id }));
      select.enable();
      select.setData([
        { placeholder: true, text: common.PLACEHOLDER_SUCCESS },
        ...options,
      ]);

      const userOption = localStorage.getItem(common.LS_KEY_OPTION);
      if (userOption) {
        select.setSelected(userOption);
      }
    })
    .catch(error => {
      select.setData([{ placeholder: true, text: common.PLACEHOLDER_ERROR }]);
      toastError(error.message);
    });
}

/**
 * Event handler for changing the selected option.
 * @param {SlimSelect[]} selected - Selected option.
 */
function handleOptionChange([option]) {
  if (option.placeholder) return; // Cancel event if option is not selected
  renderCat(option);
  localStorage.setItem(common.LS_KEY_OPTION, option.value);
}

// Initialization after the page is loaded.
document.addEventListener('DOMContentLoaded', loadBreeds);
