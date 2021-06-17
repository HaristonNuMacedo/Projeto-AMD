
    function mascaraCel(){
 
    var celular= document.getElementById('txtCel').value;
    if(celular.length==1){
     document.getElementById('txtCel').value ='(' + celular;
    }
    else if (celular.length==3){
     document.getElementById('txtCel').value = celular +')' + ' ';
    }
    else if (celular.length==10){
     document.getElementById('txtCel').value = celular +'-';
    }
 }
 
 var exp = new RegExp(/(\d{2})(\w)/,'g');

 var exp = (/()/,'g');



// FAÇA O REGEX === XA
// CRIA UMA VARIÁVEL QUALQUER === AMD
// CHAMA A VARIÁVEL DO REXEX E CHAMA A VARIÁVEL QUALQUER ==== XA.EXEC(AMD)
// CRIAR UMA FUNÇÃO PARA TRABLAHR COM A VARIÁVEL QUALQUER.

//https://pt.stackoverflow.com/questions/280758/mascara-no-form-somente-em-html-e-css