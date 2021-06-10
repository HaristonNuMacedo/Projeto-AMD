
    var countDownDate = new Date("Jun 11, 2021 11:30:25").getTime();
    var x = setInterval(function() {
    
      var now = new Date().getTime();
    
      var distance = countDownDate - now;
    
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      document.getElementById("data").innerHTML = days + "d " + hours + "h "
      + minutes + "m " + seconds + "s ";
    
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("data").innerHTML = "EXPIRED";
      }
    }, 1000);


/*
    var data = new Date();
    undefined
    data 
    
    data.getDay()
    4
    var diaDaSemana = ['Domingo','Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    undefined
    diaDaSemana[data.getDay()];
    "Quinta"
    data.getMonth();
    5
    var mes = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    undefined
    mes[data.getMonth()];
    "Jun"
    
    var dataDeHoje = data.getDate() + '/' + mes[data.getMonth()] + '/' + data.getFullYear();
    document.getElementById('data').textContent = dataDeHoje 
*/
