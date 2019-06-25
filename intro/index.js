const moduleStuff = require('./anime.module');
const characterList = moduleStuff.characters

//I wanna call the sayHello function from module stuff
//but it is experted as 'hello' in the object
moduleStuff.hello("Sean")

// For loop to go throug the array and write to the 
//console something like 'Spike is from Cowboy Bebop'

for ( character of characterList ){
    // Template literal OR string concatenation...
    console.log(`${character.name} is from ${character.show}.`)
};

//nmp init -y : makes (intiializes) node pkg, creates package.json
//npm install (packagename)
//node (js filename)
//npm start :runs the start script in package.json