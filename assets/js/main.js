// обращаемся к modal
const modal = document.querySelector('.modal');

// обращаемся к кнопке Напишите нам
const btn = document.querySelector(".map__btn");

// обращаемся к крестику 
const exit = document.querySelector(".modal__close");


// открываем окно

btn.addEventListener('click', (event) => {
    // действие, которое выполняется при клике
    event.preventDefault();

    modal.classList.add('isActive')

})

// закрываем окно

exit.addEventListener("click", (event)=>{
    event.preventDefault();
    modal.classList.remove("isActive")
})