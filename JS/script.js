/* *---------------------------------------------------------------
INITIALITATIONS AND DECLARATIONS */

// * INITIALITATIONS

// ? TAKING FROM THE DOM
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('form');
const kmToTravelInputField = form.querySelector('input[name="km-to-travel"]');
const ageInputField = form.querySelector('input[name="age"]');
const btn = form.querySelector('.my-btn');


// ? INITIALITATIONS OF COSTANTS
const kmToTravelUnitPrice = 0.2762;
const discountUnderage = 17.5 / 100;
const discountOver65 = 33.3 / 100;



// * DECLARATIONS

// ? VARIABLES DECLARATIONS
let ticketPrice;
let kmToTravel;
let ageUser;





/* *---------------------------------------------------------------
MAIN CODE */

// * LINEAR PROGRAMM



// * EVENTS
btn.addEventListener('click' , function(){
    // ? EVENT PREVENT DEFAULT
    event.preventDefault();


    // ? ASSIGNMENTS
    kmToTravel = parseFloat(kmToTravelInputField.value);
    ageUser = parseInt(ageInputField.value);
    ticketPrice = kmToTravel * kmToTravelUnitPrice;


    // ? DISCOUNT APPLICATIONS
    if(ageUser < 18){
        ticketPrice = ticketPrice - (ticketPrice * discountUnderage);
    }
    else if(ageUser > 65){
        ticketPrice = ticketPrice - (ticketPrice * discountOver65);
    }


    // ? VISUALIZATION OF THE FINAL PRICE AND OF THE OTHER VALUE

    // * Correction of the visualization of the values given in input
    ageInputField.value = ageUser.toFixed(0);
    
    if(kmToTravel - Math.floor(kmToTravel) !== 0){
        kmToTravelInputField.value = kmToTravel.toFixed(2);
    }
    else{
        kmToTravelInputField.value = kmToTravel;
    }

    // * Creation of a HTML element and visualization of the final output
    const span = document.createElement('span');
    
    if(ticketPrice - Math.floor(ticketPrice) !== 0){
        ticketPrice = ticketPrice.toFixed(2);
    }

    span.innerHTML = `Il prezzo del tuo biglietto è di ${ticketPrice}`;

    if(formContainer.lastElementChild == document.querySelector('span')){
        formContainer.lastElementChild.remove();
    }

    formContainer.append(span);
})