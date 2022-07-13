let square = document.querySelector('div');
let coloured = '#C3DCE5'
const element = document.getElementById('starter-button');


function makeRow() {
    element.remove()
    for (let i = 0; i < 32; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let x = 0; x < 32; x++) {
            let square = document.createElement('div');
            square.className = "square";
            square.setAttribute("id", "square")
            row.appendChild(square);
        }
        document.getElementById('grid').appendChild(row);
    }
}

square.addEventListener('click', function (e) {
    e.target.style.background = coloured;
  });