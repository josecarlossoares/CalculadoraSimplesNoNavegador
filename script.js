function calc(valor1, valor2, op){
    let result;
        switch (op){
            case 1:
                result = valor1+valor2
                break;
            case 2:
                result = valor1-valor2
                break;
            case 3:
                result = valor1*valor2
                break;
            case 4:
                result = valor1/valor2
                break;
        }
        return result;
}

let opcao, numero1, nuumero2, resultado;

do{
    opcao = window.prompt('Insira o código da operação que deseja realizar:\n 1- Soma\n 2- Subtração\n 3- Multiplicação\n 4- Divisão\n 0- Sair ');
    opcao = parseInt(opcao);
    
    if (opcao >= 1 && opcao <= 4){
        numero1 = window.prompt('Informe o primeiro número:')
        numero1 = parseInt(numero1);
        
        numero2 = window.prompt('Insira o segundo número:')
        numero2 = parseInt(numero2);
        
        resultado = calc(numero1, numero2, opcao);
        
        
        switch(opcao){
            case 1:
                alert(`Você escolheu a opção soma.\n O resultado da operação foi ${resultado}`);
                break;
            case 2:
                alert(`Você escolheu a opção subtração.\n O resultado da operação foi ${resultado}`);
                break;
            case 3:
                alert(`Você escolheu a opção multiplicação.\n O resultado da operação foi ${resultado}`);
                break;
            case 4:
                alert(`Você escolheu a opção divisão.\n O resultado da operação foi ${resultado}`);
                break;
        }
    }else  if(opcao > 4 || opcao < 0){
        alert('Essa não foi uma opção válida!')
    }
}while(opcao != 0)
