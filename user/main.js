const menu = document.querySelector('.menu');
const navList = document.querySelector('nav ul');

menu.addEventListener('click', () => {
    menu.classList.toggle('active');
    navList.classList.toggle('active');
})

function imgSlider(anything){
    document.querySelector('.burger').src = anything;
}

// function changeBgColor(color){
// const sec = document.querySelector('.sec');
// sec.computedStyleMap.background = color;
// }
document.addEventListener("DOMContentLoaded", function() {
    const minusBtn = document.querySelector(".minus-btn");
    const plusBtn = document.querySelector(".plus-btn");
    const inputField = document.querySelector(".quantity-input");
  
    minusBtn.addEventListener("click", function() {
      let currentValue = parseInt(inputField.value);
      if (currentValue > 1) {
        inputField.value = currentValue - 1;
      }
    });
  
    plusBtn.addEventListener("click", function() {
      let currentValue = parseInt(inputField.value);
      inputField.value = currentValue + 1;
    });
  });
  
  // Pop Up 
