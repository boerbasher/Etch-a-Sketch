let square = document.querySelector('div');
let coloured = '#edf6d6'

function makeRow() {
    const resolution = prompt()
    for (let i = 0; i < parseInt(resolution); i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let x = 0; x < parseInt(resolution); x++) {
            let square = document.createElement('div');
            square.className = "square";
            square.setAttribute("id", "square")
            row.appendChild(square);
        }
        document.getElementById('grid').appendChild(row);
    }
    if (resolution == 8) {
        square.setAttribute('');    
    } else if (resolution == 16) {
        square.setAttribute('style', 'background: red; width: 24px; height: 24px')
    }
}

square.addEventListener('click', function (e) {
    e.target.style.background = coloured;
  });