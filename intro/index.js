const characters = [
    {
    name:"Spike",
    show:"Cowboy Bebop",
    },
    {
    name:"L",
    show:"Death Note"
    },
    {
    name: "Goku",
    Show: "DBZ"
    },
    {
    name:"Gon",
    show:"Hunter x Hunter"
    }
];

// For loop to go throug the array and write to the 
//console something like 'Spike is from Cowboy Bebop'

for ( character of characters ){
    // Template literal OR string concatenation...
    console.log(`${character.name} is from ${character.show}.`)
};

//nmp init -y : makes (intiializes) node pkg, creates package.json
//npm install (packagename)
//node (js filename)
//npm start :runs the start script in package.json