const sports = ["golf", "football", "cricket"];

const games = [
    {
        name: "Starcraft 2",
        released: "2010",        
    },
    {
        name: "Age of Empires II",       
    },
    {
        name: "Cyberpunk 2077",
        released: 2020
    }
];


function spacing() {
    console.log("");
}


//Question 1

function printSeason(season) {
    console.log(season)
};

printSeason("summer");

//Question 2
spacing();

function printNumbers(firstNumber, secondNumber) {
    console.log(firstNumber);
    console.log(secondNumber);
}

printNumbers(32, 20);

//Question 3

let numberResult

function addNumbers(value1, value2, value3) {
    numberResult = value1 + value2 + value3;
    return numberResult;
}

addNumbers(32, 10, 20);

let totalHtml = document.querySelector(".total");
totalHtml.innerHTML = numberResult;

//Question 4 

let greeting

function createGreeting(content) {
    greeting = `Hello, my name is ${content}`;
    return greeting;
};

createGreeting("Mr. Deez");

const nameHtml = document.querySelector("#name");
nameHtml.innerHTML = greeting;


//Question 5

function printListItems(listOfItems){
    for (let i = 0; i < listOfItems.length; i++) {
        console.log(listOfItems[i])
    }
}

printListItems(sports);

//Question 6 

let gamesList = document.querySelector(".game-container");
gamesList.classList.add("game");
let gameHtml = "";

function createGames(games) {
    
    function checkIfMissing(value){
        if (value) {
            return value;
        }

        else {
            value = "Data Unavailable"
            return value
        }
    }

    for (let i = 0; i < games.length; i++) {

        gameName = games[i].name;
        gameRelease = games[i].released

        checkedName = checkIfMissing(gameName);
        checkedRelease = checkIfMissing(gameRelease);

        gameHtml += `<h2>${checkedName}</h2>
                        <p>${checkedRelease}</p>`
            
    }
}

createGames(games)

gamesList.innerHTML = gameHtml;
