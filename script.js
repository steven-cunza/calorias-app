const food = document.getElementsByClassName("food-image");
let calories = document.getElementsByClassName("calories");
const mode = document.getElementsByClassName("mode");
const body = document.getElementsByTagName("body");
const header = document.getElementsByTagName("header");
const text = document.getElementsByClassName("counter");

let hamburgerCalories = parseInt(563);
let sodaCalories = parseInt(138);
let pizzaCalories = parseInt(285);
let iceCreamCalories = parseInt(111);

let caloriesCounter = 0;

function checkIfSelected(){

    if (body[0].classList.contains("body-dark")){

        if (food[0].classList.contains('food-image-dark-selected') === true &&
            food[1].classList.contains('food-image-dark-selected') === false &&
            food[2].classList.contains('food-image-dark-selected') === false &&
            food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (hamburgerCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (hamburgerCalories + sodaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (hamburgerCalories + pizzaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (hamburgerCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (hamburgerCalories + sodaCalories + pizzaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (hamburgerCalories + pizzaCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (hamburgerCalories + sodaCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (sodaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (sodaCalories + pizzaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (sodaCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (sodaCalories + pizzaCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === false) {
            caloriesCounter = (pizzaCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (pizzaCalories + iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === false &&
                    food[1].classList.contains('food-image-dark-selected') === false &&
                    food[2].classList.contains('food-image-dark-selected') === false &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
            caloriesCounter = (iceCreamCalories);
        } else if (food[0].classList.contains('food-image-dark-selected') === true &&
                    food[1].classList.contains('food-image-dark-selected') === true &&
                    food[2].classList.contains('food-image-dark-selected') === true &&
                    food[3].classList.contains('food-image-dark-selected') === true) {
                caloriesCounter = (hamburgerCalories + sodaCalories + pizzaCalories + iceCreamCalories);
        }
    } else {

        if (food[0].classList.contains('food-image-selected') === true &&
        food[1].classList.contains('food-image-selected') === false &&
        food[2].classList.contains('food-image-selected') === false &&
        food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (hamburgerCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (hamburgerCalories + sodaCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (hamburgerCalories + pizzaCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (hamburgerCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (hamburgerCalories + sodaCalories + pizzaCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (hamburgerCalories + pizzaCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (hamburgerCalories + sodaCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (sodaCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (sodaCalories + pizzaCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (sodaCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (sodaCalories + pizzaCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === false) {
        caloriesCounter = (pizzaCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (pizzaCalories + iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === false &&
                food[1].classList.contains('food-image-selected') === false &&
                food[2].classList.contains('food-image-selected') === false &&
                food[3].classList.contains('food-image-selected') === true) {
        caloriesCounter = (iceCreamCalories);
    } else if (food[0].classList.contains('food-image-selected') === true &&
                food[1].classList.contains('food-image-selected') === true &&
                food[2].classList.contains('food-image-selected') === true &&
                food[3].classList.contains('food-image-selected') === true) {
            caloriesCounter = (hamburgerCalories + sodaCalories + pizzaCalories + iceCreamCalories);
    }
    }
}

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

/*
for (i = 0; i < food.length; i++) {
    food[i].addEventListener("click", function (e, i) {
        e.preventDefault();

        for (i = 0; i < food.length; i++) {
        food[i].classList.toggle("food-image-selected");
        }
    })    
}
*/

mode[0].addEventListener("click", function (e) {
    darkLightMode();
})

food[0].addEventListener("click", function (e) {
    if (body[0].classList.contains("body-dark")) {
        food[0].classList.toggle("food-image-dark-selected"); 
    } else {
        food[0].classList.toggle("food-image-selected"); 
    }        
    checkIfSelected();
    calories[0].innerText = caloriesCounter;
})

food[1].addEventListener("click", function (e) {
    if (body[0].classList.contains("body-dark")) {
        food[1].classList.toggle("food-image-dark-selected"); 
    } else {
        food[1].classList.toggle("food-image-selected"); 
    }
    checkIfSelected();
    calories[0].innerText = caloriesCounter;
})

food[2].addEventListener("click", function (e) {
    if (body[0].classList.contains("body-dark")) {
        food[2].classList.toggle("food-image-dark-selected"); 
    } else {
        food[2].classList.toggle("food-image-selected"); 
    }
    checkIfSelected();
    calories[0].innerText = caloriesCounter;
})

food[3].addEventListener("click", function (e) {
    if (body[0].classList.contains("body-dark")) {
        food[3].classList.toggle("food-image-dark-selected"); 
    } else {
        food[3].classList.toggle("food-image-selected"); 
    }
    checkIfSelected();
    calories[0].innerText = caloriesCounter;
})