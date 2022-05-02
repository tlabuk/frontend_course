'use strict';

const Name = ['Anna', 'Katarzyna', 'Marek', 'Joanna', 'Mariusz', 'Longin', 'Dobromir']
const Surname = ['Kowalska', 'Pierchowska', 'Miedrzycka', 'Bobicka', 'Mariuszowski', 'Podbipieta', 'Bobkowski']

function createTable() {
    var tbody = document.querySelector("tbody");
    for (var i = 0; i < Name.length; i++) {
        
        var row = document.createElement("tr");
        for (var j = 0; j < 1; j++) {

            var cell = document.createElement("td"); 
            var cellText = document.createTextNode(`${[i + 1]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        for (var j = 1; j < 2; j++) {

        var cell = document.createElement("td");   
        var cellText = document.createTextNode(`${Name[i]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        for (var j = 2; j < 3; j++) {

            var cell = document.createElement("td");   
            var cellText = document.createTextNode(`${Surname[i]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        
        tbody.appendChild(row);
        continue;
    }

    row.appendChild(cell);
    
}

createTable();