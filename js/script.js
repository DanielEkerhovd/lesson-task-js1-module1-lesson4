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


function createGames(games) {
    
    let gameHtml = "";

    for (let i = 0; i < games.length; i++) {

        let gameName = games[i].name;
        let gameRelease = "Release Date Unavailable"

        if (games[i].released) {
            gameRelease = games[i].released;
        }

        gameHtml += `<h2>${gameName}</h2>
                        <p>${gameRelease}</p>`
            
    }

    finalHtml = gameHtml;
    return finalHtml;
}

createGames(games)

gamesList.innerHTML = finalHtml;
