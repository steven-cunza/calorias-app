const food = document.getElementsByClassName("food-image");
const calories = document.getElementsByClassName("calories");
const mode = document.getElementsByClassName("mode");
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
const text = document.getElementsByClassName("counter");

let caloriesCounter = [];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
let total = 0;

const hamburger = food[0].getAttribute("data-hamburger"); //el = element
const soda = food[1].getAttribute("data-soda");
const pizza= food[2].getAttribute("data-pizza");
const iceCream = food[3].getAttribute("data-ice-cream");

function darkLightMode() {
    body[0].classList.toggle("body-dark");
    if (body[0].classList.contains("body-dark")) {
        mode[0].src = "https://www.clipartmax.com/png/full/49-497024_half-moon-transparent-background-png-moon-icon-free.png"
    } else {
        mode[0].src = "https://cdn.onlinewebfonts.com/svg/img_369098.png";
    }
    header[0].classList.toggle("header-dark");
    text[0].classList.toggle("counter-dark");
    food[0].classList.toggle("food-image-dark");    
    food[1].classList.toggle("food-image-dark");    
    food[2].classList.toggle("food-image-dark");    
    food[3].classList.toggle("food-image-dark");
    
    for (i = 0; i < food.length; i++) {
        if (food[i].classList.contains('food-image-dark-selected')){
            food[i].classList.remove("food-image-dark-selected");
            food[i].classList.add("food-image-selected");
        } else if (food[i].classList.contains('food-image-selected')){
            food[i].classList.remove("food-image-selected");
            food[i].classList.add("food-image-dark-selected");
        }
      }
}

function sumCalories() {
    total = caloriesCounter.reduce(reducer);
} 

mode[0].addEventListener("click", function (e) {
    darkLightMode();
})

food[0].addEventListener("click", function (e) {
    
    if (body[0].classList.contains("body-dark")) {
        food[0].classList.toggle("food-image-dark-selected"); 
    } else {
        food[0].classList.toggle("food-image-selected"); 
    }        
    
    if (food[0].classList.contains("food-image-dark-selected")) {
        caloriesCounter[0] = parseInt(hamburger);
    } else if (food[0].classList.contains("food-image-selected")) {
        caloriesCounter[0] = parseInt(hamburger);
    } else {
        caloriesCounter[0] = parseInt(0);
    }
    sumCalories();
    calories[0].innerText = total;
})

food[1].addEventListener("click", function (e) {
    
    if (body[0].classList.contains("body-dark")) {
        food[1].classList.toggle("food-image-dark-selected"); 
    } else {
        food[1].classList.toggle("food-image-selected"); 
    }        
    
    if (food[1].classList.contains("food-image-dark-selected")) {
        caloriesCounter[1] = parseInt(soda);
    } else if (food[1].classList.contains("food-image-selected")) {
        caloriesCounter[1] = parseInt(soda);
    } else {
        caloriesCounter[1] = parseInt(0);
    }
    sumCalories();
    calories[0].innerText = total;
})

food[2].addEventListener("click", function (e) {
    
    if (body[0].classList.contains("body-dark")) {
        food[2].classList.toggle("food-image-dark-selected"); 
    } else {
        food[2].classList.toggle("food-image-selected"); 
    }        
    
    if (food[2].classList.contains("food-image-dark-selected")) {
        caloriesCounter[2] = parseInt(pizza);
    } else if (food[2].classList.contains("food-image-selected")) {
        caloriesCounter[2] = parseInt(pizza);
    } else {
        caloriesCounter[2] = parseInt(0);
    }
    sumCalories();
    calories[0].innerText = total;
})

food[3].addEventListener("click", function (e) {
    
    if (body[0].classList.contains("body-dark")) {
        food[3].classList.toggle("food-image-dark-selected"); 
    } else {
        food[3].classList.toggle("food-image-selected"); 
    }        
    
    if (food[3].classList.contains("food-image-dark-selected")) {
        caloriesCounter[3] = parseInt(iceCream);
    } else if (food[3].classList.contains("food-image-selected")) {
        caloriesCounter[3] = parseInt(iceCream);
    } else {
        caloriesCounter[3] = parseInt(0);
    }
    sumCalories();
    calories[0].innerText = total;
})