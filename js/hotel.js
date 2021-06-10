var hotel = {
    quartos: 40,
    reservados: 25,
    checaDisponibilidade: function(){
    return this.quartos - this.reservados;
    }
}

var qtndQuartos = document.getElementById('quartos');
qtndQuartos.textContent += hotel.quartos;

var qtndRservados = document.getElementById('reserva');
qtndRservados.textContent += hotel.reservados;

function btnReserva(){
    hotel.reservados--;
    mostrar(hotel.reservados);
}


function mostrar(valor) {

    if(hotel.reservados > 0){
        document.getElementById("resultado").textContent = valor;
    }
    else{
        document.getElementById("resultado").textContent = 'Processamento Esgotado!';
    }
}




