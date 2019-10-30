import './reset.css';
import './style.css';

import * as settings from '../package.json';

const title = document.querySelector('nav h1');
const versionEl = document.createElement('span');
versionEl.innerText = 'v' + settings.version;
title.appendChild(versionEl);

const result = document.querySelector('main p');
const resultDefaultText = result.innerHTML;

const words = resultDefaultText.match(/\[(.*?)\]/g).map(word => ({
  key: word.slice(1, word.length - 1),
  value: word,
  default: word,
}));

const renderResult = () => {
  let resultText = resultDefaultText;
  words.forEach(({ key, value }) => {
    resultText = resultText.replace('[' + key + ']', value);
  });
  result.innerHTML = resultText;
};

const inputGroups = words.map(({ key, value }) => {
  const wrapper = document.createElement('div');
  const label = document.createElement('label');
  const input = document.createElement('input');

  wrapper.className = 'input-group';
  input.name = key;
  input.placeholder = value;
  label.innerText = key.charAt(0).toUpperCase() + key.slice(1);

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
    const targetElemnt = inputElement;
    const wordToReplace = words.filter(({ key }) => key === targetElemnt.name)[0];

    inputElement.addEventListener('input', e => {
      wordToReplace.value =
        targetElemnt.value.trim() === '' ? wordToReplace.default : targetElemnt.value;
      renderResult();
    });
  });
