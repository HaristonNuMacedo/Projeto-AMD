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

var reserva = 0;
function btnReserva(){
    return this.reservados - 1;
}








