document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('active');
    });
});

document.querySelector('.toggle-button').addEventListener('click', () => {
    const answers = document.querySelectorAll('.faq-answer');
    answers.forEach(answer => {
        answer.classList.toggle('active');
    });
});