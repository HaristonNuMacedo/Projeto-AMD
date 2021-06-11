function mostrar(id){
    document.getElementById(id).style.display = 'block';
}

function fechar(id){
    if(document.getElementById(id).style.display == 'block'){ 
        document.getElementById(id).style.display = 'none';
    }else{
        document.getElementById(id).style.display = 'block';
    }
}
