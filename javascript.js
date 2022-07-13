let square = document.querySelector('div');
let coloured = '#edf6d6'

function makeRow() {
    for (let i = 0; i < 16; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let x = 0; x < 16; x++) {
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