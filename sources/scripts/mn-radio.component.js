'use strict';

let prototype = Object.create(HTMLElement.prototype);
prototype.createdCallback = mnRadio;
document.registerElement('mn-radio', {prototype});

function mnRadio() {
  let element = this;

  let inputAttributes = [
    {
      name: 'type',
      default: 'radio',
    },
    {
      name: 'value',
    },
    {
      name: 'name',
    },
    {
      name: 'autofocus',
    },
    {
      name: 'readonly',
    },
    {
      name: 'required',
    },
    {
      name: 'disabled',
    },
  ];

  // label element
  let labelText = element.getAttribute('label');
  let label = document.createElement('label');
  if (labelText) {
    label.textContent = element.getAttribute('disabled')
      ? `${labelText} disabled`
      : labelText;
  }

  // input element
  let input = document.createElement('input');
  inputAttributes.map(setInputAttribute);
  label.appendChild(input);

  let radio = document.createElement('div');
  radio.className = 'radio';
  label.appendChild(radio);
  element.appendChild(label);

  function setInputAttribute(attribute) {
    let isDefaultAttribute = attribute.hasOwnProperty('default');
    let attributeValue = element.getAttribute(attribute.name);

    if (isDefaultAttribute) {
      let isValidValue = attribute.hasOwnProperty('values')
        && attribute.values.indexOf(attributeValue) >= 0;

      let value = isValidValue
        ? attributeValue
        : attribute.default;

      input.setAttribute(attribute.name, value);
    } else if (attributeValue) {
      input.setAttribute(attribute.name, attributeValue);
    }
  }
}
