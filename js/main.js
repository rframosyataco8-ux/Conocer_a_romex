let storyObserver = null;
let processObserver = null;

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(viewId);
    if (el) el.classList.add('active');

    if (viewId === 'view-timeline') {
        requestAnimationFrame(() => setTimeout(initStoryReveal, 80));
    }

    if (viewId === 'view-process') {
        requestAnimationFrame(() => setTimeout(initProcessReveal, 80));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderTimeline() {
    const box = document.getElementById('timeline-container');
    if (!box || typeof timelineData === 'undefined') return;

    box.innerHTML = timelineData.map((item, i) => {
        const hasImage = !!item.image;
        return `
        <article class="story-block ${hasImage ? '' : 'no-image'}" data-index="${i}">
            <div class="story-text">
                <div class="story-year">${item.year}</div>
                <p>${item.description}</p>
            </div>
            ${hasImage ? `
            <div class="story-media">
                <img src="${item.image}" alt="${item.year}" loading="lazy" onerror="this.parentElement.style.display='none'">
            </div>` : ''}
        </article>`;
    }).join('');

    box.innerHTML += `
        <div class="plant-mention">
            <img src="assets/images/Planta_Exportadora%20RomEx_actual.jpg" alt="Planta Exportadora Romex" loading="lazy" onerror="this.style.display='none'">
            <p>Planta Exportadora Romex — instalaciones actuales</p>
        </div>
    `;
}

function initStoryReveal() {
    if (storyObserver) {
        storyObserver.disconnect();
        storyObserver = null;
    }

    const blocks = document.querySelectorAll('.story-block, .plant-mention');
    if (!blocks.length) return;

    blocks.forEach(b => b.classList.remove('is-visible'));

    storyObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    storyObserver.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -8% 0px', threshold: 0.1 }
    );

    blocks.forEach(b => storyObserver.observe(b));
}

function renderProcess() {
    const box = document.getElementById('process-container');
    if (!box || typeof processData === 'undefined') return;

    box.innerHTML = processData.map((step, i) => `
        <div class="process-step" data-step="${i}">
            <div class="process-step-rail">
                <div class="process-step-dot">
                    <span class="material-icons">${step.icon}</span>
                </div>
                ${i < processData.length - 1 ? '<div class="process-step-line"></div>' : ''}
            </div>
            <div class="process-step-body">
                <span class="process-step-num">0${step.number}</span>
                <h3>${step.title}</h3>
                <p>${step.description}</p>
            </div>
        </div>
    `).join('');
}

function initProcessReveal() {
    if (processObserver) {
        processObserver.disconnect();
        processObserver = null;
    }

    const steps = document.querySelectorAll('.process-step');
    if (!steps.length) return;

    steps.forEach(s => s.classList.remove('is-visible'));

    processObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    processObserver.unobserve(entry.target);
                }
            });
        },
        { root: null, rootMargin: '0px 0px -6% 0px', threshold: 0.15 }
    );

    steps.forEach(s => processObserver.observe(s));
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
    });
});