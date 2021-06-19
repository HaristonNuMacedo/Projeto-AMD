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
var logo = document.querySelector('.pst1');
logo.addEventListener('click', () => iniciaModal('modal-controlador'));

document.addEventListener('scroll', () => {
    if (window.pageYOffset > 2800) {
        iniciaModal('modal-controlador')
    }
})
