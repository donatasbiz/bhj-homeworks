'use strict';

let checkboxes = document.querySelectorAll('input.interest__check');
for (let i = 0; i < checkboxes.length; i++) {
    let checkbox = checkboxes[i];
    let interests = checkbox.closest('ul.interests_active');
    if (interests === null) {
        checkbox.onchange = function () {
            let list = checkbox.closest('li.interest');
            let children = list.querySelectorAll('input.interest__check');
            for (let j = 0; j < children.length; j++) {
                let child = children[j];
                child.checked = checkbox.checked;
            }
        }
    }
}
