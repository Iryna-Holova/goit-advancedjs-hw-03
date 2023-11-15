import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

/**
 * Display an error toast message using iziToast.
 *
 * @param {string} message - The error message to be displayed.
 * @returns {void}
 * @throws {Error} Throws an error if the iziToast library is not available.
 * @example
 * // Usage
 * import { toastError } from './helpers/toaster';
 * toastError('This is an error message.');
 */
function toastError(message) {
  iziToast.error({
    message,
    position: 'topCenter',
  });
}

export { toastError };
