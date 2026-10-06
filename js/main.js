let storyObserver = null;

function showView(viewId) {
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    const el = document.getElementById(viewId);
    if (el) el.classList.add('active');

    if (viewId === 'view-timeline' || viewId === 'view-process') {
        requestAnimationFrame(() => setTimeout(initStoryReveal, 60));
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
            <p>Planta Exportadora Romex S.A. — instalaciones actuales</p>
        </div>
    `;
}

function renderProcess() {
    const box = document.getElementById('process-container');
    if (!box || typeof processData === 'undefined') return;

    box.innerHTML = processData.map((step, i) => {
        const hasImage = !!step.image;
        return `
        <article class="story-block process-block ${hasImage ? '' : 'no-image'}" data-index="${i}">
            <div class="story-text">
                <div class="process-label">
                    <span class="process-step-badge">0${step.number}</span>
                    <span class="material-icons process-step-icon">${step.icon}</span>
                </div>
                <div class="story-year process-title">${step.title}</div>
                <p>${step.description}</p>
            </div>
            ${hasImage ? `
            <div class="story-media">
                <img src="${step.image}" alt="${step.title}" loading="lazy" onerror="this.parentElement.classList.add('process-visual')">
            </div>` : `
            <div class="story-media process-visual">
                <div class="process-visual-inner">
                    <span class="material-icons">${step.icon}</span>
                    <span class="process-visual-num">0${step.number}</span>
                </div>
            </div>`}
        </article>`;
    }).join('');
}

function initStoryReveal() {
    if (storyObserver) {
        storyObserver.disconnect();
        storyObserver = null;
    }

    const blocks = document.querySelectorAll('#view-timeline.active .story-block, #view-timeline.active .plant-mention, #view-process.active .story-block');
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
        { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0.08 }
    );

    blocks.forEach(b => storyObserver.observe(b));
}

function initCookies() {
    const banner = document.getElementById('cookie-banner');
    if (!banner) return;

    if (!localStorage.getItem('romex_cookie_consent')) {
        setTimeout(() => banner.classList.add('show'), 800);
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
    });
});