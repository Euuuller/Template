import { initTheme } from './theme.js';
import { initTypingEffect } from './typing.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Theme System
    initTheme();

    // Initialize Hero Typing Effect
    initTypingEffect();

    // Smooth scroll for anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
