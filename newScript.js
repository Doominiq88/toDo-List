const createElement = (tag, className) => {
   const element = document.createElement(tag);
   element.classList.add(className);
   return element
}

const form = document.querySelector('form');

const inputTitle = document.querySelector('.inputTitle');

const inputText = document.querySelector('.inputText');

const listGroup = document.getElementById('currentTasks');

const small = document.querySelector('.priority')

const listRadio = document.querySelectorAll('.form-check-input')

const btnSuccess = document.querySelector('.btn-success');
console.log(btnSuccess);
console.log('да');

   // btnSuccess.addEventListener('click', () =>{
   //    console.log('да');
   // });
   

let priority;
let style;

listRadio.forEach((element)=>{
   element.addEventListener('click', (event) => {
      if (event.target.classList.contains('low')) {
          priority = 'Low';
          style = 'low'
      } else if (event.target.classList.contains('medium')) {
         priority = 'Medium'
         style = 'medium'
      } else if (event.target.classList.contains('high')) {
         priority = 'High'
         style = 'high'
      };
   });
});

   let dateNow = new Date();
   const currentDate = dateNow.toLocaleString();

 function renderElements() {
    const li = createElement('li','list-group-item');
    li.classList.add('d-flex');
    li.classList.add('w-100');
    li.classList.add('mb-2');

    const currentTitle = inputTitle.value;
    const currentText = inputText.value;

    const template = `
    <div class="w-100 mr-2">
        <div class="d-flex w-100 justify-content-between">
            <h5 class="title mb-1">${currentTitle}</h5>
            <div>
                <small class="priority mr-2 ${style}">${priority} priority</small>
                <small class="date">${currentDate}</small>
            </div>
        </div>
        <p class="task mb-1 w-100">${currentText}</p>
    </div>
    <div class="dropdown m-2 dropleft">
        <button class="btn btn-secondary h-100" type="button" id="dropdownMenuItem1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="fas fa-ellipsis-v"></i>
        </button>
        <div class="dropdown-menu p-2 flex-column" aria-labelledby="dropdownMenuItem1">
            <button type="button" id="button-success" class="btn btn-success w-100">Complete</button>
            <button type="button" class="btn btn-info w-100 my-2">Edit</button>
            <button type="button" class="btn btn-danger w-100">Delete</button>
        </div>
    </div>
    `
    li.innerHTML = template;
    return li;
 };

form.addEventListener('submit',(event) => {
   event.preventDefault();
   const result = renderElements(); 
   listGroup.append(result);
   clearText();
});

function clearText() {
   inputTitle.value = '';
   inputText.value = '';
   
};
