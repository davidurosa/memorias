var modal = document.getElementById("modal");



// Obtiene el botón de cierre
var span = document.getElementsByClassName("close")[0];


// Cuando el usuario hace clic en el botón de cierre, cierra el modal
span.onclick = function() {
    console.log('hola');
  modal.style.display = "none";
}

// Cuando el usuario hace clic en cualquier lugar fuera del modal, cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const emogis =["🤣","🤣","😍","😍","😒","😒","😎","😎","😜","😜","😆","😆","😢","😢","🤢","🤢"];
var shuf_emagis = emogis.sort(()=> (Math.random() >.5) ? 2 : -1);
for (let i = 0; i < emogis.length; i++) {
    let box = document.createElement('div');
    box.className ='item';
    box.innerHTML =shuf_emagis[i];
    box.onclick = function(){
        this.classList.add('boxOpen');
        setTimeout(function(){
            if(document.querySelectorAll('.boxOpen').length > 1){
                if(document.querySelectorAll('.boxOpen')[0].innerHTML==
                document.querySelectorAll('.boxOpen')[1].innerHTML){
                    document.querySelectorAll('.boxOpen')[0].classList.add('boxMatch')
                    document.querySelectorAll('.boxOpen')[1].classList.add('boxMatch')

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')

                    if( document.querySelectorAll('.boxMatch').length == emogis.length){
                       
                        modal.style.display = "block";
                        
                    }
                }else{

                    document.querySelectorAll('.boxOpen')[1].classList.remove('boxOpen')
                    document.querySelectorAll('.boxOpen')[0].classList.remove('boxOpen')
                }
            }
        },500);
    }

    document.querySelector('.game').appendChild(box);
    
}


// Obtiene el modal

