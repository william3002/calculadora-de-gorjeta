// Função chamada quando um botão de porcentagem é clicado
function calcularGorjeta(porcentagem) {
    // Obter valores dos elementos HTML
    const valorDaConta = parseFloat(document.getElementById('inputConta').value);
    const qtdPessoas = parseFloat(document.getElementById('inputPessoas').value);
    const resQtdPessoas = document.getElementById('resQtdPessoas');
    const resValorDaGorjeta = document.getElementById('resGorjeta');
    const resTotal = document.getElementById('resTotal');

    // Verificar se o número de pessoas é zero
    if (qtdPessoas === 0) {
        resQtdPessoas.innerText = 'Valor nulo';
        resQtdPessoas.style.color = 'red';
        return; // Encerra a função se o número de pessoas for zero
    } else {
        resQtdPessoas.innerText = ''; // Limpar mensagem de erro, se houver pessoas
    }

    // Calcular a gorjeta e o total por pessoa
    const gorjeta = (valorDaConta * porcentagem) / 100;
    const totalPorPessoa = (valorDaConta + gorjeta) / qtdPessoas;

    // Exibir a gorjeta
    resValorDaGorjeta.innerText = gorjeta.toFixed(2);

    // Verificar se há apenas uma pessoa
    if (qtdPessoas === 1) {
        // Se for apenas uma pessoa, exibe o total para essa pessoa
        resTotal.innerText = totalPorPessoa.toFixed(2);
    } else {
        // Caso contrário, exibe o total por pessoa (dividindo pelo número de pessoas)
        const totalGeral = (valorDaConta + gorjeta) / qtdPessoas;
        resTotal.innerText = totalGeral.toFixed(2);
    }
}

// Função chamada quando o botão de reset é clicado
function resetarValores() {
    // Resetar os valores dos campos e resultados
    document.getElementById('inputConta').value = '';
    document.getElementById('inputPessoas').value = '';
    document.getElementById('custom').value = '';
    document.getElementById('resQtdPessoas').innerText = '';
    document.getElementById('resGorjeta').innerText = '0.00';
    document.getElementById('resTotal').innerText = '0.00';
}