let currentStep = 0;
let storyObserver = null;

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(viewId);
    if (el) el.classList.add('active');

    if (viewId === 'view-process') {
        currentStep = 0;
        updateProcessUI();
    }

    if (viewId === 'view-timeline') {
        // Reiniciar animaciones al entrar a la timeline
        requestAnimationFrame(() => initStoryReveal());
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTimeline() {
    const box = document.getElementById('timeline-container');
    if (!box || typeof timelineData === 'undefined') return;

    box.innerHTML = timelineData.map(item => `
        <article class="story-block">
            <div class="story-text">
                <div class="story-year">${item.year}</div>
                <p>${item.description}</p>
            </div>
            <div class="story-media">
                ${item.image
                    ? `<img src="${item.image}" alt="${item.year}" loading="lazy" onerror="this.parentElement.style.display='none'">`
                    : ''}
            </div>
        </article>
    `).join('');
}

function initStoryReveal() {
    if (storyObserver) {
        storyObserver.disconnect();
        storyObserver = null;
    }

    const blocks = document.querySelectorAll('.story-block');
    if (!blocks.length) return;

    // Reset
    blocks.forEach(b => b.classList.remove('is-visible'));

    storyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Una vez visible, no hace falta seguir observando
                    storyObserver.unobserve(entry.target);
                }
            });
        },
        {
            root: null,
            rootMargin: '0px 0px -12% 0px',
            threshold: 0.15
        }
    );

    blocks.forEach(b => storyObserver.observe(b));
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
    initStoryReveal();

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape') showView('view-home');
        if (document.getElementById('view-process').classList.contains('active')) {
            if (e.key === 'ArrowRight') changeStep(1);
            if (e.key === 'ArrowLeft') changeStep(-1);
        }
    });
});