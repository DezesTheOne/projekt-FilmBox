const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky');

menuTlacitko.addEventListener('click', function() {
    if (menuPolozky.classList.contains('show')) {
      menuPolozky.classList.remove('show');
    } else {
      menuPolozky.classList.add('show');
    }
  });

  
