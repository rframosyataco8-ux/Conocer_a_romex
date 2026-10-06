let currentStep = 0;

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(viewId);
    if (el) el.classList.add('active');

    if (viewId === 'view-process') {
        currentStep = 0;
        updateProcessUI();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTimeline() {
    const box = document.getElementById('timeline-container');
    if (!box || typeof timelineData === 'undefined') return;

    box.innerHTML = timelineData.map(item => `
        <article class="timeline-item">
            ${item.image ? `<img class="timeline-img" src="${item.image}" alt="${item.year}" loading="lazy" onerror="this.style.display='none'">` : ''}
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-desc">${item.description}</div>
            </div>
        </article>
    `).join('');
}

function renderProcess() {
    const box = document.getElementById('process-container');
    if (!box || typeof processData === 'undefined') return;

    box.innerHTML = processData.map((step, i) => `
        <div class="step-card ${i === 0 ? 'active' : ''}" data-step="${i}">
            <div class="step-head">
                <span class="step-num">${step.number}</span>
                <h3>${step.title}</h3>
            </div>
            <p>${step.description}</p>
        </div>
    `).join('');

    document.getElementById('progress-total').textContent = processData.length;
    updateProcessUI();
}

function changeStep(dir) {
    const total = processData.length;
    currentStep = Math.max(0, Math.min(total - 1, currentStep + dir));
    updateProcessUI();
}

function updateProcessUI() {
    const total = processData.length;

    document.querySelectorAll('.step-card').forEach((card, i) => {
        card.classList.toggle('active', i === currentStep);
    });

    document.getElementById('progress-fill').style.width = ((currentStep + 1) / total * 100) + '%';
    document.getElementById('progress-current').textContent = currentStep + 1;

    document.getElementById('btn-prev').disabled = currentStep === 0;
    const next = document.getElementById('btn-next');
    next.disabled = currentStep === total - 1;
    next.textContent = currentStep === total - 1 ? 'Finalizado' : 'Siguiente';
}

function initCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (!localStorage.getItem('romex_cookie_consent')) {
        setTimeout(() => banner.classList.add('show'), 600);
    }

    document.getElementById('cookie-accept').onclick = () => {
        localStorage.setItem('romex_cookie_consent', 'accepted');
        banner.classList.remove('show');
    };

    document.getElementById('cookie-reject').onclick = () => {
        localStorage.setItem('romex_cookie_consent', 'rejected');
        banner.classList.remove('show');
    };
}

document.addEventListener('DOMContentLoaded', () => {
    renderTimeline();
    renderProcess();
    initCookies();

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') showView('view-home');
        if (document.getElementById('view-process').classList.contains('active')) {
            if (e.key === 'ArrowRight') changeStep(1);
            if (e.key === 'ArrowLeft') changeStep(-1);
        }
    });
});