const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.classList.add(className);
    return element
}

const input = document.querySelector('.block__form-input');
const btn = document.querySelector('.block__form-btn');
const blockList = document.querySelector('.block__list');
const form = document.querySelector('.form');
let flag = false;
// const elementPriority = document.getElementsByClassName('list__elem-prior');
// console.log(elementPriority)

input.addEventListener('focus', () => {
    input.value = "";
});

// create task in form
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const wrap = createElement('ul', 'block__list-wrap');
    const dateElement = createElement('div', 'block__list-date');
    const newElement = createElement('li', 'block__list-elem');
    const closeBtn = createElement('button', 'list__elem-btn');
    const editBtn = createElement('button', 'list__elem-edit');
    const checkBox = createElement('input', 'done-checkbox');
    const elementPriority = createElement('div', 'list__elem-prior');
    const wrapPriority = createElement('div', 'wrap__prior');
    const inputElement1 = createElement('input', 'input-1');
    const inputElement2 = createElement('input', 'input-2');
    const inputElement3 = createElement('input', 'input-3');
    const labelElement1 = createElement('label', 'label-1');
    const labelElement2 = createElement('label', 'label-2');
    const labelElement3 = createElement('label', 'label-3');

    closeBtn.id = "list__elem-btn";
    inputElement1.type = "radio";
    inputElement2.type = "radio";
    inputElement3.type = "radio";
    inputElement1.name = "priopity";
    inputElement2.name = "priopity";
    inputElement3.name = "priopity";

    checkBox.type = "checkbox";
    checkBox.id = "item_1";

    // if (flag) {
    blockList.append(wrap);
    wrap.append(elementPriority);
    wrap.append(dateElement);
    wrap.append(checkBox);
    wrap.append(newElement);
    wrap.append(wrapPriority);
    wrapPriority.append(labelElement1);
    wrapPriority.append(inputElement1);
    wrapPriority.append(labelElement2);
    wrapPriority.append(inputElement2);
    wrapPriority.append(labelElement3);
    wrapPriority.append(inputElement3);



    wrap.append(editBtn);
    wrap.append(closeBtn);
    // }

    closeBtn.innerHTML = 'x';
    editBtn.innerHTML = 'Edit';
    labelElement1.innerHTML = 'low'
    labelElement2.innerHTML = 'medium'
    labelElement3.innerHTML = 'high'


    // add date
    let dateNow = new Date()
    dateElement.innerHTML = dateNow.toLocaleDateString();

    newElement.innerHTML = input.value;

    // remove class
    closeBtn.addEventListener('click', (event) => event.target.parentElement.remove());

    // done task
    wrap.addEventListener('change', (event) => {
        if (event.target.classList.contains('done-checkbox'))

        { event.target.nextElementSibling.classList.toggle('cross-line') }

    });

    // contentEditable
    editBtn.addEventListener('click', (event) => {
        console.log(event.target.previousElementSibling);
        const click = event.target.previousElementSibling.contentEditable = true;
        console.log(click)
    });

    //
    // const allImputs = [...document.querySelectorAll('.input')]
    // allImputs.forEach((element) => {
    //     element.addEventListener('change', () => {
    //         flag = true;

    //         elementPriority.classList.add('prior-low');

    //     });
    // });


});


// вопросы
// Как реализовать редактирование?
// for не цепляется к label ?

