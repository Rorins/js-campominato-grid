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
    console.log(gridDimens);

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
    console.log(cellsNumber)
    console.log(cellsPerSide)
})