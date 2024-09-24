function playerSelect(playerChoice) {
    const choices = ['Piedra', 'Papel', 'Tijera'];
    const machineChoice = choices[Math.floor(Math.random() * choices.length)];

    document.getElementById('playerChoice').textContent = `Jugador: ${playerChoice}`;
    document.getElementById('machineChoice').textContent = `Máquina: ${machineChoice}`;

    let result = '';

    switch (playerChoice + machineChoice) {
        case 'PiedraPiedra':
        case 'PapelPapel':
        case 'TijeraTijera':
            result = 'Empate';
            break;
        case 'PiedraTijera':
        case 'PapelPiedra':
        case 'TijeraPapel':
            result = 'Jugador Gana';
            break;
        case 'PiedraPapel':
        case 'PapelTijera':
        case 'TijeraPiedra':
            result = 'Máquina Gana';
            break;
    }

    document.getElementById('result').textContent = `Resultado: ${result}`;
}
