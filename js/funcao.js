function helloWorld(){
    document.write('Olá Mundo!');
}

helloWorld();

function helloWorldName(nome){
    return document.write('<br> OLá Mundo, meu nome é ' + nome);
}

helloWorldName('Teste');

function calculaAreaRetangulo(base, altura){
    var area = base * altura;
    return area;
}

var retangulo = calculaAreaRetangulo(16,4);

document.write('<br>Área do retangulo é: ' + retangulo);

function calcularAreaVolume(altura, largura, profundidade){
    var area = altura * largura;
    var volume = altura * largura * profundidade;
    var resultadoAreaVolume = [area, volume];
    return resultadoAreaVolume;
}

var calculoCaixaArea = calcularAreaVolume(10,20,30)[0];
var calculoCaixaVolume = calcularAreaVolume(10,20,30)[1];

document.write('<br> Área da caixa é: ' + calculoCaixaArea);
document.write('<br> Volume da caixa é: ' + calculoCaixaVolume);

var areaCaixa = (function(){
    var calculoarea = 10 * 20;
    return calculoarea;
}());

document.write('<br> A função Anônima faz a mesma coisa: ' + areaCaixa);

