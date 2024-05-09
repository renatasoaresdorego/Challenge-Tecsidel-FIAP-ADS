// Função para obter a data atual
function getDataAtual() {
    const data = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return data.toLocaleDateString('pt-BR', options);
}

  // Função para obter o dia da semana atual
function getDiaSemanaAtual() {
    const diasSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const data = new Date();
    const diaSemana = data.getDay();
    return diasSemana[diaSemana];
}

  // Atualizar os elementos HTML com a data e o dia da semana atual
function atualizarDataDiaSemana() {
    const dataElemento = document.getElementById('data');
    const diaSemanaElemento = document.getElementById('diaSemana');

    dataElemento.textContent = getDataAtual();
}

window.onload = function() {
    atualizarDataDiaSemana();
};