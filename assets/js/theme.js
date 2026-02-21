/**
 * Dark/Light Mode Management
 */
export function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    if (!themeToggle) return;

    const icon = themeToggle.querySelector('i');

    // Check for saved theme or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateIcon(newTheme);
    });

    function updateIcon(theme) {
        if (!icon) return;
        if (theme === 'dark') {
            icon.className = 'ri-moon-line';
        } else {
            icon.className = 'ri-sun-line';
        }
    }
}
