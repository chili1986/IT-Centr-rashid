
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});


const form = document.querySelector(".contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput =
const form = document.querySelector('.contact-form');
const messageBox = document.querySelector('.contact-form__message-box');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  
  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    messageBox.innerHTML = '<p>Please fill out all fields</p>';
    return;
  }

  
  fetch('/send-message', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      message: messageInput.value
    })
  })
    .then(response => response.json())
    .then(data => {
      // Очищаем форму и выводим сообщение об успешной отправке
      form.reset();
      messageBox.innerHTML = '<p>Message sent successfully!</p>';
    })
    .catch(error => {
      messageBox.innerHTML = '<p>Something went wrong. Please try again later.</p>';
      console.error(error);
    });
});
