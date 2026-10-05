// ========== STATE ==========
let currentStep = 0;

// ========== NAVEGACIÓN DE VISTAS ==========
function showView(viewId) {
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });

    const target = document.getElementById(viewId);
    if (target) {
        target.classList.add('active');
    }

    // Reset process step when entering process view
    if (viewId === 'view-process') {
        currentStep = 0;
        updateProcessUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== RENDER TIMELINE ==========
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

// ========== RENDER PROCESS ==========
function renderProcess() {
    const container = document.getElementById('process-container');
    if (!container || typeof processData === 'undefined') return;

    container.innerHTML = processData.map((step, index) => `
        <div class="step-card ${index === 0 ? 'active' : ''}" data-step="${index}">
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

    document.getElementById('progress-total').textContent = processData.length;
    updateProcessUI();
}

// ========== PROCESS NAVIGATION ==========
function changeStep(direction) {
    const total = processData.length;
    currentStep = Math.max(0, Math.min(total - 1, currentStep + direction));
    updateProcessUI();
}

function updateProcessUI() {
    const total = processData.length;

    // Show only current step
    document.querySelectorAll('.step-card').forEach((card, index) => {
        card.classList.toggle('active', index === currentStep);
    });

    // Progress bar
    const percent = ((currentStep + 1) / total) * 100;
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-current').textContent = currentStep + 1;

    // Buttons state
    document.getElementById('btn-prev').disabled = currentStep === 0;
    document.getElementById('btn-next').disabled = currentStep === total - 1;

    // Change next button text on last step
    const nextBtn = document.getElementById('btn-next');
    if (currentStep === total - 1) {
        nextBtn.innerHTML = 'Finalizado <span class="material-icons">check</span>';
    } else {
        nextBtn.innerHTML = 'Siguiente <span class="material-icons">arrow_forward</span>';
    }
}

// ========== COOKIE CONSENT ==========
function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('cookie-accept');
    const rejectBtn = document.getElementById('cookie-reject');

    if (!banner) return;

    const consent = localStorage.getItem('romex_cookie_consent');

    if (!consent) {
        setTimeout(() => {
            banner.classList.add('show');
        }, 900);
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'accepted');
        banner.classList.remove('show');
    });

    rejectBtn.addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'rejected');
        banner.classList.remove('show');
    });
}

// ========== SCROLL TO TOP ==========
function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });
}

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderProcess();
    initCookieConsent();
    initScrollTop();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            showView('view-home');
        }
        // Arrow keys for process navigation
        if (document.getElementById('view-process').classList.contains('active')) {
            if (e.key === 'ArrowRight') changeStep(1);
            if (e.key === 'ArrowLeft') changeStep(-1);
        }
    });
});