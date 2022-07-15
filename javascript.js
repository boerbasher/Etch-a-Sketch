let square = document.querySelector('div');
let mainArea = document.getElementById('container')
const element = document.getElementsByClassName('h');

let height = '100px';
let width = '100px';
/*
var pad2 = "calc(" + width + " - 90px)";
*/


function removeElementsByClass(className){
    const elements = document.getElementsByClassName('but');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}
function makeRow() {
    let conty = document.getElementById('container');
    let griddy = document.createElement('div');
    conty.appendChild(griddy)
    griddy.setAttribute("id", "grid")
    removeElementsByClass() 
    for (let i = 0; i < 32; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for (let x = 0; x < 32; x++) {
            let square = document.createElement('div');
            square.className = "square";
            square.setAttribute("id", "square")
            square.style.backgroundColor = 'rgb(17, 12, 34)';
            row.appendChild(square);
        }
        document.getElementById('grid').appendChild(row);
        let pixelHeight = "calc(" + height + " - 90px)";
        /*square.style.height = pixelHeight;*/
    }
}

square.addEventListener('mousedown', function (e) {
    if(e.target.id === 'square'){
        if (e.target.style.backgroundColor === 'rgb(17, 12, 34)'){
            e.target.style.backgroundColor = 'rgb(195, 220, 229)';
        } else {
            e.target.style.backgroundColor = 'rgb(17, 12, 34)';
        }
    }
        
  });