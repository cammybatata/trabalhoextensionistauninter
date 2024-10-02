function obterEntradaNumerica(mensagem) {
    let valor = parseFloat(prompt(mensagem));
    while (isNaN(valor) || valor < 0) {
        alert("Por favor, insira um valor numérico válido.");
        valor = parseFloat(prompt(mensagem));
    }
    return valor;
}

function calcularPrecoVenda() {
    // Entrada de dados
    let horasTrabalhadas = obterEntradaNumerica("Quantas horas você gastou/irá gastar no serviço?");
    let ganhoPorHora = obterEntradaNumerica("Quanto você quer ganhar por hora?");
    let custoMaterial = obterEntradaNumerica("Custo do material?");
    
    // Entrada de frete, sendo opcional
    let frete = prompt("Frete (opcional, pressione Enter para ignorar):");
    frete = frete ? parseFloat(frete) : 0;  // Se não preencher, considera 0

    let porcentagemLucro = obterEntradaNumerica("Qual a porcentagem de lucro você quer ter?");

    // Cálculo do custo total sem o lucro
    let custoTotal = (horasTrabalhadas * ganhoPorHora) + custoMaterial + frete;

    console.log(`Custo total sem o lucro: ${custoTotal.toFixed(2)}`);

    // Cálculo do preço de venda
    let precoVenda = custoTotal + (porcentagemLucro / 100) * custoTotal;

    console.log(`Preço de venda sugerido: ${precoVenda.toFixed(2)}`);
}

// Chamar a função
calcularPrecoVenda();