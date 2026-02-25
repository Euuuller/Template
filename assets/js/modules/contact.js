/**
 * CONTACT MODULE
 * Handle form submission using AJAX and provide UI feedback.
 */

export const initContact = () => {
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) return;

    const submitBtn = contactForm.querySelector('.btn-submit');
    const originalBtnText = submitBtn.innerHTML;

    /**
     * Update button state
     * @param {boolean} isLoading 
     */
    const setLoading = (isLoading) => {
        if (isLoading) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="ri-loader-4-line ri-spin"></i> Enviando...';
        } else {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
        }
    };

    /**
     * Show notification toast
     * @param {string} message 
     * @param {string} type - 'success' | 'error'
     */
    const showNotification = (message, type) => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `
            <i class="${type === 'success' ? 'ri-checkbox-circle-line' : 'ri-error-warning-line'}"></i>
            <span>${message}</span>
        `;
        document.body.appendChild(toast);

        // Animate in
        setTimeout(() => toast.classList.add('show'), 100);

        // Remove after 5s
        setTimeout(() => {
            toast.classList.remove('show');
            setTimeout(() => toast.remove(), 400);
        }, 5000);
    };

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Basic validation check (HTML5 handle most, but JS is extra layer)
        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        setLoading(true);

        const formData = new FormData(contactForm);
        const action = contactForm.getAttribute('action');

        try {
            const response = await fetch(action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                showNotification('Mensagem enviada com sucesso! Entrarei em contato em breve.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Falha ao enviar');
            }
        } catch (error) {
            showNotification('Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde.', 'error');
        } finally {
            setLoading(false);
        }
    });
};
