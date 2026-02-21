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

        // Target the SVG or the i element for animation
        const currentIcon = themeToggle.querySelector('svg') || themeToggle.querySelector('i');
        if (currentIcon) {
            currentIcon.classList.add('animate-spin-once');
        }

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        setTimeout(() => {
            updateIcon(newTheme);
            setTimeout(() => {
                icon.classList.remove('animate-spin-once');
            }, 300);
        }, 300);
    });

    function updateIcon(theme) {
        if (!themeToggle) return;

        // Remove old icon content
        themeToggle.innerHTML = '';

        // Create new icon element for Lucide
        const newIcon = document.createElement('i');
        newIcon.setAttribute('data-lucide', theme === 'dark' ? 'moon' : 'sun');
        newIcon.className = 'theme-icon';

        themeToggle.appendChild(newIcon);

        // Tells Lucide to render the new icon
        if (window.lucide) {
            lucide.createIcons();
        }
    }

}
