/* eslint-disable no-template-curly-in-string */
import {descriptionPhotos} from './data.js';
import {renderGallery} from './gallery.js';
import {initEditPopup} from './form.js';

renderGallery(descriptionPhotos());
initEditPopup();

