const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');
const menuIkona = menuTlacitko.querySelector('i');

menuTlacitko.addEventListener('click', function () {
  menuPolozky.classList.toggle('show');
  menuIkona.classList.toggle('fa-bars');
  menuIkona.classList.toggle('fa-xmark');
});
