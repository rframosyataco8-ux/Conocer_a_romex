let currentStep = 0;

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const target = document.getElementById(viewId);
    if (target) target.classList.add('active');

    if (viewId === 'view-process') {
        currentStep = 0;
        updateProcessUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

function changeStep(direction) {
    const total = processData.length;
    currentStep = Math.max(0, Math.min(total - 1, currentStep + direction));
    updateProcessUI();
}

function updateProcessUI() {
    const total = processData.length;

    document.querySelectorAll('.step-card').forEach((card, index) => {
        card.classList.toggle('active', index === currentStep);
    });

    const percent = ((currentStep + 1) / total) * 100;
    document.getElementById('progress-fill').style.width = percent + '%';
    document.getElementById('progress-current').textContent = currentStep + 1;

    document.getElementById('btn-prev').disabled = currentStep === 0;
    document.getElementById('btn-next').disabled = currentStep === total - 1;

    const nextBtn = document.getElementById('btn-next');
    if (currentStep === total - 1) {
        nextBtn.innerHTML = 'Finalizado <span class="material-icons">check</span>';
    } else {
        nextBtn.innerHTML = 'Siguiente <span class="material-icons">arrow_forward</span>';
    }
}

function initCookieConsent() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    const consent = localStorage.getItem('romex_cookie_consent');
    if (!consent) {
        setTimeout(() => banner.classList.add('show'), 800);
    }

    document.getElementById('cookie-accept').addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'accepted');
        banner.classList.remove('show');
    });

    document.getElementById('cookie-reject').addEventListener('click', () => {
        localStorage.setItem('romex_cookie_consent', 'rejected');
        banner.classList.remove('show');
    });
}

function initScrollTop() {
    const btn = document.getElementById('scroll-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 280);
    });
}

// Hide empty state if a real video ID is present
function checkVideo() {
    const iframe = document.getElementById('drive-video');
    const empty = document.getElementById('video-empty');
    if (!iframe || !empty) return;

    const src = iframe.getAttribute('src') || '';
    if (src.includes('VIDEO_ID_AQUI')) {
        empty.style.display = 'flex';
    } else {
        empty.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderProcess();
    initCookieConsent();
    initScrollTop();
    checkVideo();

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') showView('view-home');
        if (document.getElementById('view-process').classList.contains('active')) {
            if (e.key === 'ArrowRight') changeStep(1);
            if (e.key === 'ArrowLeft') changeStep(-1);
        }
    });
});