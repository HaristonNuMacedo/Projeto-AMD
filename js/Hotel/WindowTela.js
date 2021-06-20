
// 1° Sessão do site
function iniciaModal(modalID) {

    var modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}
var logo = document.querySelector('.seasonSuite00');
logo.addEventListener('click', () => iniciaModal('modal-controlador'));

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 2800) {
        iniciaModal('modal-controlador')
    }
})


// 2° Sessão do site
function iniciaModal(modalID) {

    var modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}
var logo = document.querySelector('.seasonSuite22');
logo.addEventListener('click', () => iniciaModal('modal-controlador2'));

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 2800) {
        iniciaModal('modal-controlador2')
    }
})


// 3° Sessão do site
function iniciaModal(modalID) {

    var modal = document.getElementById(modalID);
    if (modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == 'fechar') {
                modal.classList.remove('mostrar');
            }
        });
    }
}
var logo = document.querySelector('.seasonSuite44');
logo.addEventListener('click', () => iniciaModal('modal-controlador3'));

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 2800) {
        iniciaModal('modal-controlador3')
    }
})
