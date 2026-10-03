// ========== NAVEGACIÓN DE VISTAS ==========
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== RENDERIZAR LÍNEA DE TIEMPO ==========
function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container || typeof timelineData === 'undefined') return;

    container.innerHTML = timelineData.map(item => `
        <div class="timeline-item">
            <div class="timeline-year">${item.year}</div>
            <div class="timeline-desc">${item.description}</div>
        </div>
    `).join('');
}

// ========== RENDERIZAR PROCESO ==========
function renderProcess() {
    const container = document.getElementById('process-container');
    if (!container || typeof processData === 'undefined') return;

    container.innerHTML = processData.map(step => `
        <div class="step-card">
            <img class="step-img" 
                 src="${step.image}" 
                 alt="${step.alt}"
                 loading="lazy"
                 onerror="this.style.display='none'">
            <div class="step-body">
                <div class="step-icon">
                    <span class="material-icons">${step.icon}</span>
                </div>
                <div class="step-text">
                    <h4>
                        <span class="step-num">${step.number}</span>
                        ${step.title}
                    </h4>
                    <p>${step.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// ========== COOKIE CONSENT ==========
function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (!banner) return;

    // Verificar si ya eligió antes
    const consent = localStorage.getItem('romex_cookie_consent');

    if (!consent) {
        // Mostrar banner después de un pequeño delay
        setTimeout(() => {
            banner.classList.add('show');
        }, 800);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'accepted');
        banner.classList.remove('show');
        // Aquí se pueden activar scripts de análisis en el futuro
        console.log('Cookies aceptadas');
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'rejected');
        banner.classList.remove('show');
        console.log('Cookies rechazadas');
    });
}

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderProcess();
    initCookieConsent();

    // Atajo de teclado: Escape vuelve al inicio
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            showView('view-home');
        }
    });
});