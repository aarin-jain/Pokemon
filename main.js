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
    let text ="";
    for(let i=0; i<data.types.length;i++) {
        text += data.types[i].type.name + " ";
    }
    document.getElementById("type").innerText = text;
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
    document.getElementById("moves").style.backgroundColor="lightgrey";
    document.getElementById("info2").style.backgroundColor="lime";
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
        document.getElementById("info").style.backgroundColor = "lightgrey"; 
        document.getElementById("info").style.color = "black";
        document.getElementById("info").style.padding = "15px 20px";
        document.getElementById("info").style.paddingBottom="60px";
        document.getElementById("moves").style.backgroundColor="lime";
        document.getElementById("info2").style.backgroundColor="lightgrey";
        num =2;
}
fetchPokemon()


