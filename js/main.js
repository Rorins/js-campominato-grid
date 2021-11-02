// L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range (vedi immagine allegata):
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

// Prendiamo bottone che setterà le dimensioni del grid e la grid
const setDimens = document.getElementById("set-dimensions");
const wrapGrid = document.querySelector(".wrap-grid")
// Prendiamo le nostre selezioni di dimensioni
const dimensLevel = document.getElementById("dimensions")

// Rendiamo setDimens cliccabile con un reset di impostazioni precedenti
setDimens.addEventListener("click", () =>{
    wrapGrid.innerHTML = "";
    //Creiamo una variabile per prendere il valore attuale del nostro dimensLevel
    const gridDimens = dimensLevel.value;

    //Facciamo un if statement per cambiare dimensioni nei vari casi
    let cellsNumber;
    let cellsPerSide;

    switch (gridDimens){
        case "1":
            cellsNumber =100;
            cellsPerSide = 10;
            break;
        case "2":
            cellsNumber =81;
            cellsPerSide = 9;
             break;  
        case "3":
            cellsNumber =49;
            cellsPerSide = 7;    
    }

    // Generiamo griglia generale creando un div con la classe grid
    const grid = document.createElement("div");
    grid.classList.add("grid");

   

    //Generiamo i nostri quadrati
    for(let i = 1; i <= cellsNumber; i++){
        
        // Generiamo i quadrati
        const square = squareGen(i,cellsPerSide);

        // Al click cambia colore
        square.addEventListener("click",function() {
            square.classList.add("clicked")
        }
        )

        grid.append(square)
    }
    
     //Inseriamo il Grid nel wrap-grid
     wrapGrid.append(grid);
})


//Funzione generatore di quadrati con numero
function squareGen(num,cells){
    const node = document.createElement("div");
    //aggiungo classe square e stili per dimensioni
    node.classList.add("square");
    node.style.width = ` calc(100% /${cells}` ;
    node.style.height = ` calc(100% /${cells}` ;

    //span per numero generato
    const span = document.createElement("div");
    span.append(num);
   

    //Inserisco lo span nello square
    node.append(span);

    return node;
}