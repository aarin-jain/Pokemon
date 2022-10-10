var id = 1;
var num =0;
function increaseID() {
    id ++;
    return true 
}
function decreaseID() {
    if(id === 1) {
        id = id;
    } else {
        id = id - 1;
    }
}
function handleResponse(response){
    return response.json();
}
function displayImage(data) {
    console.log(data);
    const img = document.getElementById("banner");
    img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png";
   displayName(data);
}
function displayName(data) {
    document.getElementById('name').innerText = data.name;
    displayTypes(data);
    if(num === 1) {
        getInfo();
       } else if(num === 2) {
        getMoves();
       }
}
function displayTypes(data){
    let x = 1;
    document.getElementById("type1").innerText = "";
    document.getElementById("type2").innerText = "";
    document.getElementById("type1").style.backgroundColor = "white";
    document.getElementById("type2").style.backgroundColor = "white";
    for(let i=0; i<data.types.length;i++) {
        if(x == 1) {
            document.getElementById("type1").innerText = data.types[i].type.name;
            if(data.types[i].type.name  === "fire") {document.getElementById("type1").style.backgroundColor = "#EE8130";}
            else if(data.types[i].type.name  === "normal") {document.getElementById("type1").style.backgroundColor = "#A8A77A";}
            else if(data.types[i].type.name  === "water") {document.getElementById("type1").style.backgroundColor = "#6390F0";}
            else if(data.types[i].type.name  === "electric") {document.getElementById("type1").style.backgroundColor = "#F7D02C";}
            else if(data.types[i].type.name  === "grass") {document.getElementById("type1").style.backgroundColor = "#7AC74C";}
            else if(data.types[i].type.name  === "ice") {document.getElementById("type1").style.backgroundColor = "#96D9D6";}
            else if(data.types[i].type.name  === "fighting") {document.getElementById("type1").style.backgroundColor = "#C22E28";}
            else if(data.types[i].type.name  === "poison") {document.getElementById("type1").style.backgroundColor = "#A33EA1";}
            else if(data.types[i].type.name  === "ground") {document.getElementById("type1").style.backgroundColor = "#E2BF65";}
            else if(data.types[i].type.name  === "flying") {document.getElementById("type1").style.backgroundColor = "#A98FF3";}
            else if(data.types[i].type.name  === "psychic") {document.getElementById("type1").style.backgroundColor = "#F95587";}
            else if(data.types[i].type.name  === "bug") {document.getElementById("type1").style.backgroundColor = "#A6B91A";}
            else if(data.types[i].type.name  === "rock") {document.getElementById("type1").style.backgroundColor = "#B6A136";}
            else if(data.types[i].type.name  === "ghost") {document.getElementById("type1").style.backgroundColor = "#735797";}
            else if(data.types[i].type.name  === "dragon") {document.getElementById("type1").style.backgroundColor = "#6F35FC";}
            else if(data.types[i].type.name  === "dark") {document.getElementById("type1").style.backgroundColor = "#705746";}
            else if(data.types[i].type.name  === "steel") {document.getElementById("type1").style.backgroundColor = "#B7B7CE";}
            else if(data.types[i].type.name  === "fairy") {document.getElementById("type1").style.backgroundColor = "#D685AD";}
            x++;
        } else {
            document.getElementById("type2").innerText = data.types[i].type.name;
            if(data.types[i].type.name  === "fire") {document.getElementById("type2").style.backgroundColor = "#EE8130";}
            else if(data.types[i].type.name  === "normal") {document.getElementById("type2").style.backgroundColor = "#A8A77A";}
            else if(data.types[i].type.name  === "water") {document.getElementById("type2").style.backgroundColor = "#6390F0";}
            else if(data.types[i].type.name  === "electric") {document.getElementById("type2").style.backgroundColor = "#F7D02C";}
            else if(data.types[i].type.name  === "grass") {document.getElementById("type2").style.backgroundColor = "#7AC74C";}
            else if(data.types[i].type.name  === "ice") {document.getElementById("type2").style.backgroundColor = "#96D9D6";}
            else if(data.types[i].type.name  === "fighting") {document.getElementById("type2").style.backgroundColor = "#C22E28";}
            else if(data.types[i].type.name  === "poison") {document.getElementById("type2").style.backgroundColor = "#A33EA1";}
            else if(data.types[i].type.name  === "ground") {document.getElementById("type2").style.backgroundColor = "#E2BF65";}
            else if(data.types[i].type.name  === "flying") {document.getElementById("type2").style.backgroundColor = "#A98FF3";}
            else if(data.types[i].type.name  === "psychic") {document.getElementById("type2").style.backgroundColor = "#F95587";}
            else if(data.types[i].type.name  === "bug") {document.getElementById("type2").style.backgroundColor = "#A6B91A";}
            else if(data.types[i].type.name  === "rock") {document.getElementById("type2").style.backgroundColor = "#B6A136";}
            else if(data.types[i].type.name  === "ghost") {document.getElementById("type2").style.backgroundColor = "#735797";}
            else if(data.types[i].type.name  === "dragon") {document.getElementById("type2").style.backgroundColor = "#6F35FC";}
            else if(data.types[i].type.name  === "dark") {document.getElementById("type2").style.backgroundColor = "#705746";}
            else if(data.types[i].type.name  === "steel") {document.getElementById("type2").style.backgroundColor = "#B7B7CE";}
            else if(data.types[i].type.name  === "fairy") {document.getElementById("type2").style.backgroundColor = "#D685AD";}
        }
    }
    
}

function fetchPokemon(){ 
    fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/').then(handleResponse).then(displayImage);
}
function getInfo(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/').then(handleResponse).then(info);
}
function info(data) {
    let text = "";
    text+= "height: " + (data.height)/10 + "m\n";
    text+= "weight: " + (data.weight)/10 + "kg\n";
    text+= "hp: " + (data.stats[0].base_stat) + "\n";
    text+= "attack: " + (data.stats[1].base_stat) + "\n";
    text+= "defense: " + (data.stats[2].base_stat) + "\n";
    text+= "special-attack: " + (data.stats[3].base_stat) + "\n";
    text+= "special-defense: " + (data.stats[4].base_stat) + "\n";
    text+= "speed: " + (data.stats[5].base_stat) + "\n";
    document.getElementById("info").innerText = text;
    document.getElementById("info-header").innerText = "Info";
    document.getElementById("moves").style.backgroundColor="#E8E8E8";
    document.getElementById("info2").style.backgroundColor="#7CFF79";
    document.getElementById("info").style.fontWeight="400";
    document.getElementById("info").style.fontSize="36px";
    document.getElementById("info").style.lineHeight="44px";
    num = 1;
}
function getMoves(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/').then(handleResponse).then(moves);
}
function moves(data){
    let text="";
    for(let i=0; i<data.moves.length;i++) {
        text += data.moves[i].move.name;
        text+="; ";
    }
        document.getElementById("info").innerText = text;
        document.getElementById("info-header").innerText = "Moves";
        document.getElementById("info").style.backgroundColor = "#E8E8E8"; 
        document.getElementById("info").style.color = "black";
        document.getElementById("moves").style.backgroundColor="#7CFF79";
        document.getElementById("info2").style.backgroundColor="#E8E8E8";
        document.getElementById("info").style.fontSize="16px";
        document.getElementById("info").style.lineHeight="120%";
        num =2;
}
fetchPokemon()


