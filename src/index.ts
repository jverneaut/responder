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

import { getTemplates } from './utils/templates';

const title = document.querySelector('nav h1');
const versionEl = document.createElement('span');
versionEl.innerText = 'v' + settings.version;
title.appendChild(versionEl);

let selectedTemplateIndex = 0;

const templates = getTemplates();
const sidebarSections: HTMLElement[] = templates.map((template, index) => {
  const section = document.createElement('section');
  if (index === selectedTemplateIndex) {
    section.className = 'selected';
  }

  const header = document.createElement('header');
  header.innerText = template.title;

  const body = document.createElement('div');
  body.innerHTML = template.body.replace(/<[^>]*>?/gm, ' ').trim();

  const tagList = document.createElement('ul');
  template.tags.forEach(tag => {
    const tagEl = document.createElement('li');
    tagEl.innerText = tag;
    tagList.appendChild(tagEl);
  });

  const footer = document.createElement('footer');
  footer.appendChild(tagList);

  section.appendChild(header);
  section.appendChild(body);
  section.appendChild(footer);

  return section;
});

const texts: string[] = templates.map(template => {
  return template.body;
});

const renderContent = () => {
  const contentEl: HTMLElement = document.querySelector('main .content');
  const defaultText = generateShortcodesMarkup(texts[selectedTemplateIndex]);
  const shortcodes: Shortcode[] = extractShortcodes(defaultText);

  contentEl.innerHTML = defaultText;

  document.querySelector('.inputs-container').innerHTML = '';

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

  const renderResult = () => {
    contentEl.innerHTML = replaceShortCodes(defaultText, shortcodes);
  };

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

  contentEl.contentEditable = 'true';
  contentEl.addEventListener('click', () => {
    contentEl.className = 'content active';
  });
  contentEl.addEventListener('input', e => {
    texts[selectedTemplateIndex] = contentEl.innerHTML;
  });
  contentEl.addEventListener('blur', () => {
    renderContent();
    contentEl.className = 'content';
  });
};

renderContent();

sidebarSections.forEach((sidebarSection, index) => {
  document.querySelector('aside').appendChild(sidebarSection);
  sidebarSection.addEventListener('click', () => {
    selectedTemplateIndex = index;
    sidebarSections.forEach((sidebarSection, index) => {
      if (index === selectedTemplateIndex) {
        sidebarSection.className = 'selected';
      } else {
        sidebarSection.className = '';
      }
      renderContent();
    });
  });
});
