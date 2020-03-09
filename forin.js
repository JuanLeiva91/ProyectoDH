let bart = {
    madre: "Marge",
    padre: "Homero",
    hobbie: "Skate",
    colorRemera: "Naranja"
}

for(let propiedades in bart){
    console.log (propiedades + ": " + bart[propiedades])
}