document.addEventListener('DOMContentLoaded', () => {
    // Seleciona os elementos dos semáforos e o botão
    const vehicleLight = document.getElementById('vehicle-light');
    const pedestrianLight = document.getElementById('pedestrian-light');
    const pedestrianButton = document.getElementById('pedestrian-button');

    // Função para definir a cor ativa de um semáforo
    function setLight(lightElement, color) {
        // Remove a classe 'active' de todas as luzes
        lightElement.querySelector('.red').classList.remove('active');
        lightElement.querySelector('.yellow').classList.remove('active');
        lightElement.querySelector('.green').classList.remove('active');
        
        // Adiciona a classe 'active' à luz especificada
        if (color) {
            lightElement.querySelector(`.${color}`).classList.add('active');
        }
    }

    // Função para mudar as luzes dos semáforos
    function changeLights() {
        // Semáforo do veículo fica amarelo por 3 segundos
        setLight(vehicleLight, 'yellow');
        setTimeout(() => {
            // Semáforo do veículo fica vermelho e o de pedestre fica verde
            setLight(vehicleLight, 'red');
            setLight(pedestrianLight, 'green');

            // Após 30 segundos, semáforo do veículo fica verde e o de pedestre fica vermelho
            setTimeout(() => {
                setLight(vehicleLight, 'green');
                setLight(pedestrianLight, 'red');
            }, 30000); // Duração do semáforo verde para pedestres
        }, 3000); // Duração do semáforo amarelo para veículos
    }

    // Evento de clique no botão do pedestre
    pedestrianButton.addEventListener('click', () => {
        // Inicia a mudança de luzes apenas se o semáforo do veículo não estiver vermelho
        if (!vehicleLight.querySelector('.red').classList.contains('active')) {
            changeLights();
        }
    });

    // Inicializa as luzes dos semáforos
    setLight(vehicleLight, 'green');
    setLight(pedestrianLight, 'red');
});
