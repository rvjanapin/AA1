//Region Buttons
function kanto(){
    var pokemon = document.getElementById("kanto");
    var button = document.getElementById("kanto-btn");
    
    //checking if already active
    if (pokemon.classList.contains("display-region")){
        pokemon.classList.remove("display-region");
        button.classList.remove("active");
    }
    else {
        pokemon.classList.add("display-region");
        button.classList.add("active");
    }
}

function johto(){
    var pokemon = document.getElementById("johto");
    var button = document.getElementById("johto-btn");
    
    //checking if already active
    if (pokemon.classList.contains("display-region")){
        pokemon.classList.remove("display-region");
        button.classList.remove("active");
    }
    else {
        pokemon.classList.add("display-region");
        button.classList.add("active");
    }
}

function hoenn(){
    var pokemon = document.getElementById("hoenn");
    var button = document.getElementById("hoenn-btn");
    
    //checking if already active
    if (pokemon.classList.contains("display-region")){
        pokemon.classList.remove("display-region");
        button.classList.remove("active");
    }
    else {
        pokemon.classList.add("display-region");
        button.classList.add("active");
    }
}

function sinnoh(){
    var pokemon = document.getElementById("sinnoh");
    var button = document.getElementById("sinnoh-btn");
    
    //checking if already active
    if (pokemon.classList.contains("display-region")){
        pokemon.classList.remove("display-region");
        button.classList.remove("active");
    }
    else {
        pokemon.classList.add("display-region");
        button.classList.add("active");
    }
}




//selecting a pokemon
let x = document.getElementById("row");
let y = document.getElementById("col");
var selected = 0;
function select(){
    var row = parseInt(x.value);
    var col = parseInt(y.value);
    var table = document.getElementById("table");
    var display = document.getElementById("display");

    //checking validitiy (1-4)
    if ((row > 4 || row < 1) || (col > 3 || col < 1)){
        alert("Invalid input, out of range")
    }

    // value in range ✅
    else{
        id = pokemonId(row, col);
        let cell = document.getElementById(id);


        // pokemon already selected
        if (cell.classList.contains("selected")){
            cell.classList.remove("selected");
            display.removeAttribute("src");
            selected -= 1;
        }

        // pokemon is not yet selected
        else {
            
            // if there is already 3+ pokemon selected
            if (selected >= 3){
                alert("You have already selected 3 pokemon");
            }
            else{
                selected += 1;
                cell.classList.add("selected");
                let image = cell.firstElementChild.src; //getting the src
                display.src = image;
            }
        }
    }
} 

//translating the id from coords (x,y) to <letter><number>
function pokemonId(row, col){
    let id ="";
    switch (row) {
        case 1:
            id += "a"; 
            break;
        case 2:
            id += "b";
            break;
        case 3:
            id += "c";
            break;
        case 4:
            id += "d";
            break;
        default:
            break;
    }

    id += col;
    return id;
}