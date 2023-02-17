const KEY_REFUGEMESSAGE = 'feedback-form-state';
const contactFormEl = document.querySelector('.feedback-form');

function fillFormFiles({ elements }) {
  const formData = JSON.parse(localStorage.getItem(KEY_REFUGEMESSAGE));
  if (!formData) {
    return;
  }

  const keys = Object.keys(elements).filter(el => typeof Number.isNaN(el));
  keys.forEach(key => {
    elements[key].value = formData[key] || '';
  });
}

function onFormSubmit(evt) {
  evt.preventDefault();

  const { target } = evt;

  const { email, message } = target.elements;

  const userEmail = email.value;
  const userMessage = message.value;

  console.log({ userEmail, userMessage });

  target.reset();
  localStorage.removeItem(KEY_REFUGEMESSAGE);
}

function handleFormCange({ target }) {
  const { value, name } = target;
  const formData = JSON.parse(localStorage.getItem(KEY_REFUGEMESSAGE)) || {};

  formData[name] = value;
  localStorage.setItem(KEY_REFUGEMESSAGE, JSON.stringify(formData));
}

contactFormEl.addEventListener('submit', onFormSubmit);
contactFormEl.addEventListener('input', handleFormCange);
fillFormFiles(contactFormEl);
