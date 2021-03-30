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

view.displayMessege('Carne');
view.displayHit("02");
view.displayMiss("00");

