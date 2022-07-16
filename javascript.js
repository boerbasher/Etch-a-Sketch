let square = document.querySelector('div');
let mainArea = document.getElementById('container')
const element = document.getElementById('starter-button')


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
    element.remove()
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
        /*square.style.height = pixelHeight;*/
    }
}

let scribbling = true

square.addEventListener('mousedown', function(e) {
    if (scribbling === true) {
        scribbling = false
    } else {
        scribbling = true
        e.target.style.backgroundColor = 'rgb(195, 220, 229)';
    }
} )

square.addEventListener('mouseover', function (e) {
    if (scribbling === true) {
    if(e.target.id === 'square'){
            if (e.target.style.backgroundColor === 'rgb(17, 12, 34)'){
                e.target.style.backgroundColor = 'rgb(195, 220, 229)';
            }
    }
    }
  });