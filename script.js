const container = document.querySelector('#container'); 




document.getElementById('btn').addEventListener("click", (number) => {

    number = prompt("Please enter a number," ); 
    
    for (i = 0; i < number; i++) {
      const div = document.createElement('div'); 
      div.className.add("div"); 
      container.appendChild("div"); 
    }; 


}); 

//const gridSquare = document.createElement('div')
