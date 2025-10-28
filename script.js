// JavaScript для интерактивности (пока пустой)

document.addEventListener('DOMContentLoaded', () => {
    const serviceSections = document.querySelectorAll('.service-detail-section');
    const mainServicesSection = document.getElementById('services');
    const serviceItems = document.querySelectorAll('.service-grid a');
    const backButtons = document.querySelectorAll('.back-to-services');

    // Функция для показа одной секции и скрытия остальных
    const showSection = (sectionToShow) => {
        mainServicesSection.classList.add('hidden');
        serviceSections.forEach(section => section.classList.add('hidden'));
        sectionToShow.classList.remove('hidden');
    };

    // Функция для возврата к основному меню услуг
    const showMainServices = () => {
        serviceSections.forEach(section => section.classList.add('hidden'));
        mainServicesSection.classList.remove('hidden');
    };

    // Обработчики для кликов по услугам
    serviceItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1); // Получаем ID секции (например, 'service-automation')
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                showSection(targetSection);
            }
        });
    });

    // Обработчики для кнопок "Назад к услугам"
    backButtons.forEach(button => {
        button.addEventListener('click', () => {
            showMainServices();
        });
    });

    // При загрузке страницы, убедимся, что основная секция услуг видима, а детальные скрыты
    showMainServices();
});