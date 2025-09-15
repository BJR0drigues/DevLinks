// Função para alternar entre modo claro e escuro
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');
    
    // Salvar a preferência no localStorage
    if (html.classList.contains('light')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
    
    // Mudar a imagem de perfil de acordo com o tema
    const img = document.querySelector("#profile-img");
    
    if (html.classList.contains('light')) {
        img.setAttribute('src', 'https://github.com/BJR0drigues.png');
    } else {
        img.setAttribute('src', 'https://github.com/BJR0drigues.png');
    }
}

// Verificar preferência do usuário ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const html = document.documentElement;
    const img = document.querySelector("#profile-img");
    
    if (savedTheme === 'light') {
        html.classList.add('light');
        img.setAttribute('src', 'https://github.com/BJR0drigues.png');
    } else {
        img.setAttribute('src', 'https://github.com/BJR0drigues.png');
    }
});