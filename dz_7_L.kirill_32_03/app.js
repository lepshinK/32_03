const showAnswerButtons = document.querySelectorAll('.show-answer');
showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        if (answer.classList.contains('hidden')) {
            answer.classList.remove('hidden');
            button.textContent = 'Скрыть ответ';
        } else {
            answer.classList.add('hidden');
            button.textContent = 'Показать ответ';
        }
    });
});