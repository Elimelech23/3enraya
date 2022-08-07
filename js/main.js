

let turno = 1;




function win(i,j,k) {
    if (movesArray[i] == movesArray[j] &&
        movesArray[j] == movesArray[k] &&
        movesArray[i] != null) 
        return true
    return false
}

let contadorTurno = 0;

function numeroGanador(){
    if (win(0,1,2)){
        return 1
    }
    else if (win(3,4,5)){
        return 2
    }
    else if (win(6,7,8)){
        return 3
    }
    else if (win(0,4,8)){ 
        return 4
    }
    else if (win(2,4,6)){
        return 5
    }
    else if (win(0,3,6)){
        return 6
    }
    else if (win(1,4,7)){
        return 7
    }
    else if (win(2,5,8)){
        return 8
    }else{
        
    }
    
    contadorTurno++;
    if(contadorTurno>8){
        document.getElementById("ganador").innerHTML = ("Empate")
        document.getElementById("ganadores").classList.replace("bg-green-400/90", "bg-orange-600/90")
        document.getElementById("ganadores").classList.remove("hidden")
        const tiempoReinciar2 = setTimeout(reiniciar2, 1500);
        function reiniciar2(){
            movesArray = new Array(9).fill(null);
            contadorTurno = 0;
            document.getElementById("ganadores").classList.add("hidden")
            document.getElementById("ganadores").classList.replace("bg-orange-600/90", "bg-green-400/90")
            newgame()
                }
    }
    
    return null
}



let x = 0
let o = 0

let movesArray = new Array(9).fill(null);




function newgame(){
    
    document.getElementById("tablero").innerHTML = `
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>
        <div class="casilla"></div>`
                 
    const cajaLista = document.querySelectorAll('.tablero .casilla');
    cajaLista.forEach(function nuevoJuego(casilla, index) {

        if(turno == 1){
            document.getElementById("turnode").innerHTML = ("Turno de X")
        }
        
        casilla.addEventListener('click', function(){
            if(turno == 1){
                document.getElementById("turnode").innerHTML = ("Turno de O")}
            
            if(turno == 1){
                casilla.classList.add('x');

            } else{
                casilla.classList.add('o');
                document.getElementById("turnode").innerHTML = ("Turno de X")
            }

            movesArray[index] = turno;
            const provictoria = numeroGanador();
            
            if (provictoria) {
                const lineaGanadora = document.createElement('div');
                lineaGanadora.classList.add('line-winner-'+provictoria);
                document.querySelector('.tablero').append(lineaGanadora);
    
                if(turno){
                    x++
                }  else o++

                if(turno == 1){
                    document.getElementById("ganador").innerHTML = ("Gano X")
                } else{
                    document.getElementById("ganador").innerHTML = ("Gano O")
                }
                
                document.getElementById("ganadores").classList.remove("hidden")

                const tiempoReinciar = setTimeout(reiniciar, 1500);

                function reiniciar(){
                    movesArray = new Array(9).fill(null);
                    contadorTurno = 0;
                    document.getElementById("ganadores").classList.add("hidden")
                    newgame()
                }
            }
            console.log(provictoria)
            document.getElementById('scoreJugadorx').innerHTML = x;
            document.getElementById('scoreJugadoro').innerHTML = o;
    
            turno = !turno
        }, {once: true})
    })
}

newgame()

document.querySelector('.reset').addEventListener('click', function(){
    location.reload();
})


