const PLAYERS = [
    "Spiderman",
    "Captain America",
    "Wonderwoman",
    "Popcorn",
    "Gemwoman",
    "Bolt",
    "Antwoman",
    "Mask",
    "Tiger",
    "Captain",
    "Catwoman",
    "Fish",
    "Hulk",
    "Ninja",
    "Black Cat",
    "Volverine",
    "Thor",
    "Slayer",
    "Vader",
    "Slingo"
];

// initialize players with image and strength
//let detailedPlayers = []
//detailedPlayers.length = 16;

const initPlayers = (players) => {
    
    // Instead of forloop use Map method
    // Code here
    let detailedPlayers = []
    detailedPlayers.length = 16;
    detailedPlayers = PLAYERS.map(myFunction)
    {
        var players = {
            name : PLAYERS[i],
            strength : getRandomStrength(),
            image : src = "../project-13-superwars-array/src/images/super-"+(i+1)+".png",
            type : "hero|villain"
        }
    }

    return detailedPlayers;
}

// getting random strength
const getRandomStrength = () => {
    let randomstr = Math.floor(Math.random()*100)+1;
    return randomstr;
}

// Build player template
const buildPlayers = (players, type) => 
{
    let fragment = '';

    for (var i = 0; i < PLAYERS.length; i++) 
    {
        fragment = `
        <div class="player">
        <img src="${detailedPlayers[i].image}" alt = "superheroes">
        <h3> ${detailedPlayers[i].name}</h3>
        <h1>${detailedPlayers[i].strength}</h1>
        </div>
         `;
    // Instead of using for loop
    // Use chaining of Array methods - filter, map and join
    // Type your code here
    }
    return fragment;
}

// Display players in HTML
const viewPlayers = (players) => {
    document.getElementById('heroes').innerHTML = buildPlayers(players, 'hero');
    document.getElementById('villains').innerHTML = buildPlayers(players, 'villain');
}


window.onload = () => {
    viewPlayers(initPlayers(PLAYERS));
}