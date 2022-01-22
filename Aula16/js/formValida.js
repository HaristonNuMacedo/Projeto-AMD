2
//De acordo com a suite escolhida o hospede já tem marcados as refeições
//document.forms[0].elements[0]
//document.forms[0].elements[0].checked

var suiteEscolhida = [document.forms[0].elements[0], document.forms[0].elements[1], document.forms[0].elements[2]]

for (var i=[0]; i < suiteEscolhida.length; i++){

suiteEscolhida[i].addEventListener('change', function(){
    var almoço = document.forms[0].elements[11]
    var janta = document.forms[0].elements[12]

    almoço.checked = false;
    janta.checked = false;

    if(suiteEscolhida[0].checked){
        almoço.checked = true;
        janta.checked = true;
    }

    if(suiteEscolhida[1].checked){
        almoço.checked = true;
    }
})}

//Nome Completo

nome = document.getElementById('nome')

function validaNome(){
    var expNome = /^([^0-9]){3,50}$/g;
    var nomeVerificado = expNome.exec(nome.value)
    var msgNome = '';

    if(!nomeVerificado){
        msgNome = 'O nome precisa ser completo sem números!'
    }

    nome.setCustomValidity(msgNome);
}

/*  */

//E-mail
email = document.querySelector('#email');

    //email.addEventListener('NomeEvent', 'O que acontece', false 'ou' true,)
    email.addEventListener('blur', validaEmail(), false,);

    function validaEmail() {
        var expEmail = /(?!:[0-9])([\w].{2,})@([\w].+)/g;
        var emailVerificado = expEmail.exec(email.value);
        var msgEmail = '';

        if(!emailVerificado){
            msgEmail = 'Este Email precisa estar no formato exigido para poder ser validado!!';
        }

        email.setCustomValidity(msgEmail);
    }


//Tratando do CPF
cpf = document.querySelector('#cpf');

cpf.addEventListener('blur', (eventoEmail)=>{
    verificaCpf(eventoEmail.target);
})

function verificaCpf(input) {
    var expCpf = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
    var cpfVerificado = expCpf.exec(input.value);
    var msgCpf = '';

    if(!cpfVerificado){
        msgCpf = 'Preencha o campo CPF corretamente apensas com números!';
    }

    input.setCustomValidity(msgCpf);
    input.value = formataCpf(input.value, expCpf);

    //cpf.replace(exp,function(valorCompleto,parte1,parte2,parte3,parte4){return parte1 + '.' + parte2 + '.' + parte3 + '-' + parte4;})
}

function formataCpf(valorCpf, cpfExp) {
    var cpfFormatado = valorCpf.replace(cpfExp, function(vregex, p1,p2,p3,p4){
        return p1+'.'+p2+'.'+p3+'-'+p4;
    })

    return cpfFormatado;
}

var cpfComPontos = cpfCompleto.value.replace(expCpf, 
    function( valorRegex, argumento1, argumento2, argumento3, argumento4){
        return argumento1 + '.' + argumento2 + '.' + argumento3 + '-'+ argumento4;
})

cpfCompleto.setCustomValidity(msgCpf);
cpf.value = cpfComPontos;

//Data de Nascimento - Uma outra forma de declarar eventos, utilizando Arrow Functions



//Telefone



//Senha



//Mostra Senha


//Termos de Privacidade


//Botão de Envio sem termo exibe caixa de alerta.
