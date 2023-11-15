import { renderCat } from './cat-renderer';
import { common } from './common';

/**
 * Event handler for changing the selected option.
 * @param {SlimSelect[]} selected - Selected option.
 */
function handleOptionChange([option]) {
  if (option.placeholder) return; // Cancel event if option is not selected
  renderCat(option);
  localStorage.setItem(common.LS_KEY_OPTION, option.value);
}

export { handleOptionChange };
