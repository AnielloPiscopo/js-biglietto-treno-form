/* *---------------------------------------------------------------
INITIALITATIONS AND DECLARATIONS */

// * INITIALITATIONS

// ? TAKING FROM THE DOM
const formContainer = document.querySelector('.form-container');
const form = document.querySelector('form');
const kmToTravelInputField = form.querySelector('input[name="km-to-travel"]');
const ageInputField = form.querySelector('input[name="age"]');
const btn = form.querySelector('.my-btn');





/* *---------------------------------------------------------------
MAIN CODE */

// * EVENTS
btn.addEventListener('click' , function(){
    // ? INITIALITATIONS OF COSTANTS
    const kmToTravelUnitPrice = 0.2762;
    const discountUnderage = 17.5 / 100;
    const discountOver65 = 33.3 / 100;


    // ? VARIABLES DECLARATIONS
    let ticketPrice;
    let kmToTravel;
    let ageUser;


    // ? ASSIGNMENTS
    kmToTravel = parseFloat(kmToTravelInputField.value);
    ageUser = parseInt(ageInputField.value);
    ticketPrice = kmToTravel * kmToTravelUnitPrice;


    // ? DISCOUNT APPLICATIONS
    if(ageUser < 18){
        ticketPrice -= (ticketPrice * discountUnderage);
    }
    else if(ageUser > 65){
        ticketPrice -= (ticketPrice * discountOver65);
    }


    // ? VISUALIZATION OF THE FINAL PRICE AND OF THE OTHER VALUE

    // * 1)Elimination of the previous div
    if(formContainer.lastElementChild == formContainer.querySelector('div')){
        formContainer.querySelector('div').remove();   
    }

    // * 2)Creation of HTML elements
    const ul = document.createElement('ul');
    const ageLi = document.createElement('li');
    const kmToTravelLi = document.createElement('li');
    const ticketPriceLi = document.createElement('li');
    const infoTicket = document.createElement('div');
    const infoTitle = document.createElement('h2');

    // * 3)Putting the Inner HTML
    infoTitle.innerHTML = 'I dati a disposizione per il biglietto del treno sono:';

    if(Number.isNaN(ageUser) || Number.isNaN(kmToTravel)){
        ticketPriceLi.innerHTML = 'Il prezzo del biglietto non può essere calcolato perché non sono stati inseriti alcuni dati.';
    }
    else if(ageUser<=0 || kmToTravel<=0){
        ticketPriceLi.innerHTML = 'Il prezzo del biglietto non può essere calcolato perché hai inserito dei valori inferiori o uguali a 0 nei campi sovrastanti.';
    }
    else{
        kmToTravel = isADecimalNumber(kmToTravel);
        ticketPrice = isADecimalNumber(ticketPrice);

        kmToTravelLi.innerHTML = `L'utente deve percorrere ${kmToTravel}km;`
        ageLi.innerHTML = `L'utente ha ${ageUser} anni;`;
        ticketPriceLi.innerHTML = `Il prezzo del tuo biglietto è di ${ticketPrice} &euro;.`;

        ul.append(kmToTravelLi);
        ul.append(ageLi);
    }

    // * 4)Appending the elements in the HTML
    formContainer.append(infoTicket);
    infoTicket.append(infoTitle);
    infoTicket.append(ul);
    ul.append(ticketPriceLi);
})



// * FUNCTIONS
function isADecimalNumber(a){
    if(a - Math.floor(a) !== 0){
        return a.toFixed(2);
    }
    else{
        return a;
    }
}