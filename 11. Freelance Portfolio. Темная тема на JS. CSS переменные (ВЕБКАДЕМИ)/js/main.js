// nav button, mobile menu
const navBtn = document.querySelector('.nav-btn');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

navBtn.addEventListener('click', function() {
    mobileMenu.classList.toggle('mobile-menu-active');
    navBtn.classList.toggle('nav-btn-close');
    body.classList.toggle('no-scroll');
})

// dark mode button
const btnDarkMode = document.querySelector('.dark-mode-btn');

// 1. проверка темной темы на уровне системных настроек
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
}

// 2. проверка темной темы в local storage
if (localStorage.getItem('btnDarkMode') === 'dark') {
    btnDarkMode.classList.add('dark-mode-btn--active');
    document.body.classList.add('dark');
} else {
    btnDarkMode.classList.remove('dark-mode-btn--active');
    document.body.classList.remove('dark');
}

// если меняются системные настройки меняем тему
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(event) {
    const newColorScheme = event.matches ? 'dark' : 'light';

    if (newColorScheme === 'dark') {
        btnDarkMode.classList.add('dark-mode-btn--active');
        document.body.classList.add('dark');
        localStorage.setItem('btnDarkMode', 'dark');
    } else {
        btnDarkMode.classList.remove('dark-mode-btn--active');
        document.body.classList.remove('dark');
        localStorage.setItem('btnDarkMode', 'light');
    }
})

// включение ночного режима по кнопке
btnDarkMode.onclick = function() {
    btnDarkMode.classList.toggle('dark-mode-btn--active');
    const isDark = document.body.classList.toggle('dark');

    if (isDark) {
        localStorage.setItem('btnDarkMode', 'dark')
    } else {
        localStorage.setItem('btnDarkMode', 'light');
    }
}