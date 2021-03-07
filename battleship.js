// La ubicación de la nave de batalla.
var location1 = Math.floor(Math.random() * 5);
var location2 = 4;
var location3 = 5;

// Estadisticas del juego
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

// Main loop del juego.
while (isSunk == false){
    guess = prompt("En sus marcas, listos, fuego! (Introduce un numero del 0 al 6");
    if (guess < 0 || guess > 6){
        alert("Introduce una opción correcta.");
    }
    else {
        guesses++;

        if(guess == location1 || guess == location2 || guess == location3){
            alert("BOMM!!");
            hits++;

            if (hits == 3){
                isSunk = true;
                alert("Has hundido mi nave");
            }
        }else {
            alert("Fallaste");
        }
    }
}

// Mostrar estadisticas.
var status = "Te ha tomado " + guesses + " intentos hundir la nave, por lo tanto tu efectividad ha sido del " + (3/guesses);
alert(status);