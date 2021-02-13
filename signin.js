var database = [
    {
        name: "Blaise Andrich",
        gamertag: "CheetahD093583"
    },
    {
        name: "Isaac Andrich",
        gamertag: "Iceolot29"
    },
    
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Hello"
    },
    {
        username: "Sally",
        timeline: "Javascript"
    }
];

function isUserValid(name, gamertag) {
    for (var i=0; i < database.length; i++) {
        if(database[i].name === name && database[i].gamertag === gamertag) {
            return true;
        }     
    }
    return false;
}

function signIn(name, gamertag) {
    if (isUserValid(name, gamertag)) {
        window.location.replace("correctcreds.html");
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var NamePrompt=prompt("What's your Full Name?");
var gamertagPrompt = prompt("What's your Xbox Gamertag?");

signIn(NamePrompt, gamertagPrompt);