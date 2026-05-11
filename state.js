document.addEventListener('DOMContentLoaded', () => {
    const step1Form = document.getElementById('step1-form');
    const step2Form = document.getElementById('step2-form');

    // Логика для первой страницы
    if (step1Form) {
        const savedData = JSON.parse(sessionStorage.getItem('studentData')) || {};
        if(savedData.fullName) document.getElementById('fullName').value = savedData.fullName;
        if(savedData.email) document.getElementById('email').value = savedData.email;
        if(savedData.phone) document.getElementById('phone').value = savedData.phone;

        step1Form.addEventListener('submit', (e) => {
            e.preventDefault();
            const data = {
                fullName: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value
            };
            sessionStorage.setItem('studentData', JSON.stringify(data));
            window.location.href = 'step2.html';
        });
    }

    // Логика для второй страницы
    if (step2Form) {
        step2Form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Получаем данные из первой формы
            const existingData = JSON.parse(sessionStorage.getItem('studentData')) || {};
            
            // Добавляем данные второй формы
            const finalData = {
                ...existingData,
                faculty: document.getElementById('faculty').value,
                fileName: document.getElementById('diploma').files[0].name 
            };

            console.log('Отправка данных на сервер:', finalData);
            sessionStorage.setItem('studentData', JSON.stringify(finalData));
            
            // Имитация задержки сервера
            setTimeout(() => {
                window.location.href = 'success.html';
            }, 500);
        });
    }
});
