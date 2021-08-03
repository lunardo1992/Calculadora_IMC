 
const calcular = document.getElementById('calcular');//somente essa variável ficara como global
//pois está fora da function.

function imc ()
{
    const nome = document.getElementById('nome').value; // as caixinhas coforme esta no HTML.
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;  
    const sexo = document.getElementById('sexo').value;
    const resultado = document.getElementById('resultado');

    // se nome for diferente de vazio e assim por diante. uma validação das caixinhas.
    if (nome !== '' && altura !== '' && peso !== '') {
       // alert ('valor preenchido') serve como teste para ver se esta validado
       //agora vamos fazer o cálculo do imc.
       
       
       // toFixed serve para arredondar o valor calculado de altura por peso, se eu colocar 2 vai aparecer duas casas decimais.
       const valorIMC = (peso / (altura * altura)).toFixed(1); 
        
       let classificacao = '';

       if (valorIMC < 18.5){
           classificacao = 'abaixo do peso.'; // classificação 
       }else if (valorIMC < 25) {
           classificacao = 'com peso ideal. parabéns!';
       }else if (valorIMC <30){
           classificacao = 'levemente acima do peso.';
       }else if (valorIMC < 35){
           classificacao = 'com obesidade grau I.';
       }else if (valorIMC <40){
           classificacao = 'obesidade grau II.';
       }else {
            classificacao = 'com obesidade grau III. Cuidado !!';
       }
       
       resultado.textContent = `${nome} seu IMC é ${valorIMC} e você está ${classificacao}` // para nao concatenar as mensagens vamos usar templates ``
    
    
    }else {
        resultado.textContent = 'preencha todos os campos'
    }

}
//pedindo pra ele escutar quando alguém clicar
//quando alguém clicar você vai executar 
//uma funçao chamada imc.
calcular.addEventListener('click',imc);