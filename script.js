
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('actionButton');

    if (button) { // Проверяем, что кнопка существует
        button.addEventListener('click', function() {
            this.textContent = "Ура, ты на пути в Контур!"; // Исправлена опечатка
            this.style.background = "#4CAF50";

            this.classList.add('animate');

            setTimeout(() => {
                this.classList.remove('animate');
            }, 1000);
        });
    } else {
        console.error("Кнопка с id 'actionButton' не найдена!");
    }
});