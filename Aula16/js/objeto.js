var hotel = {
    nome: 'Galante Hotel',
    quartos: 40,
    reservados: 25,
    verificaDisponiveis: function(){
        return this.quartos - this.reservados;
    },
    reservaQuarto: function(){
        this.reservados--;
    }
};

var tituloPagina = document.getElementById('nome-hotel');
tituloPagina.textContent = hotel.nome;