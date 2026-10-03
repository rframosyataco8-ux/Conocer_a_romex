// ========== NAVEGACIÓN DE VISTAS ==========
function showView(viewId) {
    // Ocultar todas las vistas
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    // Mostrar la vista seleccionada
    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    // Scroll suave al inicio
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

// ========== INICIALIZACIÓN ==========
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderProcess();

    // Atajo de teclado: Escape vuelve al inicio
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            showView('view-home');
        }
    });
});