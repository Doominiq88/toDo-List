const input = document.querySelector('.block__form-input');
const btn = document.querySelector('.block__form-btn');
const blockList = document.querySelector('.block__list');



btn.addEventListener('click', (element) => {
    element.preventDefault();

    const wrap = document.createElement('ul');
    const newElement = document.createElement('li');
    const closeBtn = document.createElement('button');
    const editBtn = document.createElement('button');
    const checkBox = document.createElement('input');
    closeBtn.innerHTML = 'x';
    editBtn.innerHTML = 'Edit';

    wrap.classList.add('block__list-wrap');
    newElement.classList.add('block__list-elem');
    closeBtn.classList.add('list__elem-btn');
    editBtn.classList.add('list__elem-edit');
    closeBtn.id = "list__elem-btn";
    checkBox.type = "checkbox";
    checkBox.id = "item_1";



    blockList.append(wrap);
    wrap.append(checkBox);
    wrap.append(newElement);
    wrap.append(editBtn);
    wrap.append(closeBtn);

    newElement.innerHTML = input.value;

    closeBtn.addEventListener('click', (event) => event.target.parentElement.remove());

    wrap.addEventListener('change', (event) => event.target.nextElementSibling.classList.toggle('cross-line'));

});

input.addEventListener('focus', () => {
    input.value = "";
});