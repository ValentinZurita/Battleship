const view = {
    displayMessege: function (msg) {
        const messageArea = document.getElementById("messsageArea");
        messageArea.innerHTML = msg;
    },

    displayHit: function (location) {
        const cell = document.getElementById(location);
        cell.setAttribute("class", "hit");
    },

    displayMiss: function (location) {
        const cell = document.getElementById(location);
        cell.setAttribute("class", "miss");
    }

};

var model = {
    boardsize: 7,
    numShips: 3,
    shipLength: 3,
    shipsSunk: 0,
    ships: [
        {locations: ["06", "16", "26"], hits: ["", "", ""]},
        {locations: ["24", "34", "44"], hits: ["", "", ""]},
        {locations: ["10", "11", "12"], hits: ["", "", ""]}
    ],
    fire: function (guess) {
        for (var i = 0; i < this.numShips; i++){
            var ship = this.ships[i];
            var index = ship.locations.indexOf(guess);
            if (index >= 0){
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessege("HIT!!");
                if (this.isSunk(ship)){
                    view.displayMessege("Hundiste mi barco!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessege("Has fallado.");
        return false;
    },
    isSunk: function (ship) {
        for (var i = 0; i < this.shipLength; i++){
           if (ship.hits[i] !== "hit"){
               return false;
           }
        }
        return true;
    }
};

var controller = {
    guesses: 0,
    processGuess: function (guess) {

    }
}

function parseGuess(guess) {
    var alphabet = ["A", "B", "C", "D", "E", "F", "G"];
    if (guess === null || guess.length !== 2 ){
        alert("Opps, introduce una letra y un numero en el tablero.");
    }else {
        firstChar = guess.charAt(0);
        var row = alphabet.indexOf(firstChar);
        var column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)){
            alert("Oops, eso no esta en el tablero");
        }else if (row < 0 || row >= model.boardsize || column < 0 || column >= model.boardsize) {
            alert("Oops eso esa fuera del telcado");
        }else {
            return row + column;
        }
    }
    return null;
}

model.fire("53");
model.fire("06");
model.fire("16");
model.fire("26");
model.fire("34");
model.fire("24");
model.fire("44");
model.fire("12");
model.fire("11");
model.fire("10");