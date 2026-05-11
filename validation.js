// Пример: маска для телефона и запрет цифр в имени
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('blur', () => {
        input.classList.add('touched');
    });
});

const nameInput = document.getElementById('fullName');
if (nameInput) {
    nameInput.addEventListener('input', (e) => {
        // Удаляем цифры, если пользователь пытается их ввести в ФИО
        e.target.value = e.target.value.replace(/[0-9]/g, '');
    });
}