import SlimSelect from 'slim-select';
// import 'slim-select/dist/slimselect.css';
import { handleOptionChange } from './handlers';
import { common } from './common';

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
 * Enable the SlimSelect dropdown and set provided options.
 *
 * @param {Object[]} options - The array of options to be set.
 * @param {string} options[].text - The text to be displayed for the option.
 * @param {string} options[].value - The value associated with the option.
 * @returns {void}
 * @example
 * // Usage
 * import { activateSelect } from './select';
 * activateSelect([{ text: 'Siamese', value: 'siam' }]);
 */
function activateSelect(options) {
  select.enable();
  select.setData([
    { placeholder: true, text: common.PLACEHOLDER_SUCCESS },
    ...options,
  ]);
}

/**
 * Set the selected option in the SlimSelect dropdown.
 *
 * @param {Object} option - The selected option.
 * @param {string} option.value - The value associated with the option.
 * @returns {void}
 * @example
 * // Usage
 * import { setSelectedOption } from './select';
 * setSelectedOption({ value: 'siamese' });
 */
function setSelectedOption(option) {
  select.setSelected(option);
}

/**
 * Disable the SlimSelect dropdown and set an error message.
 *
 * @returns {void}
 * @example
 * // Usage
 * import { setErrorSelect } from './select';
 * setErrorSelect();
 */
function setErrorSelect() {
  select.disable();
  select.setData([{ placeholder: true, text: common.PLACEHOLDER_ERROR }]);
}

export { select, activateSelect, setErrorSelect, setSelectedOption };
