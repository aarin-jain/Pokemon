var id = 1;
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
}
function displayTypes(data){
    const type = data.types.map(type => type.type.name).join(", ");
    document.getElementById("type").innerText = type;
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
}
function getMoves(){
    fetch('https://pokeapi.co/api/v2/pokemon/'+id+'/').then(handleResponse).then(moves);
}
function moves(data){
    let text="";
    for(let i=0; i<data.moves.length;i++) {
        text += data.moves[i].move.name;
        text+="\n";
    }
        document.getElementById("moves").innerText = text;
}
fetchPokemon()
getInfo()
getMoves();


