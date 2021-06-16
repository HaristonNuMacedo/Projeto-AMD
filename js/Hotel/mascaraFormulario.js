
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
 
 
//https://pt.stackoverflow.com/questions/280758/mascara-no-form-somente-em-html-e-css