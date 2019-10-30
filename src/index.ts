import './reset.css';
import './style.css';

import * as settings from '../package.json';

import {
  extractShortcodes,
  replaceShortCodes,
  getPrettyShortcodeKey,
  generateShortcodesMarkup,
  Shortcode,
} from './utils/shortcodes';

const title = document.querySelector('nav h1');
const versionEl = document.createElement('span');
versionEl.innerText = 'v' + settings.version;
title.appendChild(versionEl);

const result = document.querySelector('main p');
const resultDefaultText = generateShortcodesMarkup(result.innerHTML);

const shortcodes: Shortcode[] = extractShortcodes(resultDefaultText);

const renderResult = () => {
  result.innerHTML = replaceShortCodes(resultDefaultText, shortcodes);
};

renderResult();

const inputGroups: HTMLElement[] = shortcodes.map(shortcode => {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  wrapper.className = 'input-group';
  input.name = shortcode.key;
  input.placeholder = shortcode.key;
  label.innerText = getPrettyShortcodeKey(shortcode);

  wrapper.appendChild(label);
  wrapper.appendChild(input);

  return wrapper;
});

inputGroups.forEach(inputGroup => {
  document.querySelector('.inputs-container').appendChild(inputGroup);
});

inputGroups
  .map(inputGroup => inputGroup.querySelector('input'))
  .forEach(inputElement => {
    const targetShortocde = shortcodes.filter(
      shortcode => shortcode.key === inputElement.name
    )[0];
    inputElement.addEventListener('input', e => {
      targetShortocde.value = inputElement.value;
      renderResult();
    });
  });
