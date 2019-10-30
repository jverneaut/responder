import './reset.css';
import './style.css';

const result = document.querySelector('main p');
const resultDefaultText = result.innerHTML;

const words = resultDefaultText.match(/\[(.*?)\]/g).map(word => ({
  key: word.slice(1, word.length - 1),
  value: word,
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
    const wordToReplace = targetElemnt.name;

    inputElement.addEventListener('input', e => {
      words.filter(({ key }) => key === wordToReplace)[0].value = targetElemnt.value;
      renderResult();
    });
  });
