
let dropdownValue = document.querySelector('.dropdown__value');
let list = document.querySelector('.dropdown__list');
let links = document.querySelectorAll('a');

dropdownValue.addEventListener('click', function(){ 
if (list.className === 'dropdown__list') { 
  list.className = 'dropdown__list dropdown__list_active'; 
} else { list.className = 'dropdown__list'; 
       }

dropdown__list_active.classList.add("dropdown__list ");
