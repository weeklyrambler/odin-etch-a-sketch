const container = document.querySelector('#container'); 




const number = document.getElementById('btn').addEventListener("click", (number) => {

     number = prompt("Please enter a number: "); 
     let sum = number * number; 
     console.log(sum); 

    return numOfDivs(sum); 
}); 

function numOfDivs (num) {
    for (i = 0; i < num; i++) {
        const div = document.createElement('div'); 
        div.classList.add('gridDiv'); 
        container.appendChild(div); 
      }; 
}

//const gridSquare = document.createElement('div')
