'use strict';

const firstName = ['Anna', 'Katarzyna', 'Marek', 'Joanna', 'Mariusz', 'Longin', 'Dobromir', 'Sławomir']
const surname = ['Kowalska', 'Pierchowska', 'Miedrzycka', 'Bobicka', 'Mariuszowski', 'Podbipieta', 'Bobkowski', 'Kowalski']

function createTable() {
    const tbody = document.querySelector("tbody");
    for (let i = 0; i < firstName.length; i++) {
        
        const row = document.createElement("tr");
        for (let j = 0; j < 1; j++) {

            const cell = document.createElement("td"); 
            let cellText = document.createTextNode(`${[i + 1]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        for (let j = 1; j < 2; j++) {

        const cell = document.createElement("td");   
        let cellText = document.createTextNode(`${firstName[i]}`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        for (let j = 2; j < 3; j++) {

            const cell = document.createElement("td");   
            let cellText = document.createTextNode(`${surname[i]}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        
        tbody.appendChild(row);
        continue;
    }

    row.appendChild(cell);
    
}

createTable();