// ==========================================================================
// PORTFOLIO APPLICATION LOGIC — RONALD GUTIERREZ
// Renderizado modular, filtrado de credenciales, lightbox y navegación limpia
// ==========================================================================

import {
  profileData,
  featuredProjects,
  experiences,
  educationList,
  skillGroups,
  hackathonsList,
  certificationsList
} from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderProjects();
  renderExperience();
  renderEducationAndSkills();
  renderCredentialGroup('hackathons-grid', hackathonsList);
  renderCredentialGroup('certs-grid', certificationsList);
  initCredentialFilters();
  initLightbox();
  initCvModal();
  initClipboardActions();
  initNavigation();
});

function renderStats() {
  const container = document.getElementById('hero-stats');
  if (!container) return;

  container.innerHTML = profileData.stats
    .map(
      (item) => `
      <div class="stat-cell">
        <div class="stat-value">${item.value}</div>
        <span class="stat-label">${item.label}</span>
      </div>
    `
    )
    .join('');
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = featuredProjects
    .map(
      (p) => `
      <article class="project-card" data-id="${p.id}">
        <div class="project-media">
          <img src="${p.image}" alt="${p.title}" loading="lazy">
          <span class="project-status">${p.status}</span>
        </div>
        <div class="project-body">
          <span class="project-category">${p.category}</span>
          <h3 class="project-title">${p.title}</h3>
          <p class="project-desc">${p.desc}</p>
          <div class="project-tags">
            ${p.tags.map((t) => `<span class="tag-chip">${t}</span>`).join('')}
          </div>
          <div class="project-links">
            ${
              p.demo
                ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="card-btn primary">Ver Demo ↗</a>`
                : ''
            }
            ${
              p.github
                ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer" class="card-btn">GitHub ↗</a>`
                : ''
            }
            ${
              p.video
                ? `<a href="${p.video}" target="_blank" rel="noopener noreferrer" class="card-btn">Video Demo ↗</a>`
                : ''
            }
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function renderExperience() {
  const container = document.getElementById('experience-list');
  if (!container) return;

  container.innerHTML = experiences
    .map(
      (exp) => `
      <article class="exp-card">
        <div class="exp-top">
          <span class="exp-company">${exp.company}</span>
          <span class="exp-period">${exp.period}</span>
        </div>
        <h3 class="exp-role">${exp.role}</h3>
        <div class="exp-modality">${exp.modality}</div>
        <ul class="exp-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join('')}
        </ul>
        <div class="exp-tags">
          ${exp.tags.map((t) => `<span class="tag-chip">${t}</span>`).join('')}
        </div>
      </article>
    `
    )
    .join('');
}

function renderEducationAndSkills() {
  const eduContainer = document.getElementById('education-list');
  if (eduContainer) {
    eduContainer.innerHTML = educationList
      .map(
        (ed) => `
        <div class="edu-item">
          <div class="edu-degree">${ed.degree}</div>
          <div class="edu-inst">${ed.institution}</div>
          <div class="edu-period">${ed.period}</div>
          <p class="edu-detail">${ed.detail}</p>
        </div>
      `
      )
      .join('');
  }

  const skillsContainer = document.getElementById('skills-list');
  if (skillsContainer) {
    skillsContainer.innerHTML = skillGroups
      .map(
        (g) => `
        <div class="skill-group">
          <div class="skill-area">${g.area}</div>
          <div class="skill-chips">
            ${g.items.map((item) => `<span class="tag-chip">${item}</span>`).join('')}
          </div>
        </div>
      `
      )
      .join('');
  }
}

function renderCredentialGroup(containerId, items) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = items
    .map(
      (c) => `
      <article class="cred-card">
        ${
          c.certImg
            ? `<button type="button" class="cred-thumb cred-thumb-btn" data-img="${c.certImg}" data-title="${c.title} — ${c.issuer}" aria-label="Ampliar ${c.title}">
                 <img src="${c.certImg}" alt="${c.title}">
               </button>`
            : `<div class="cred-thumb" aria-hidden="true">
                 <span class="cred-thumb-seal">UNSA</span>
               </div>`
        }
        <div class="cred-info">
          <div class="cred-meta">
            <span class="cred-issuer">${c.issuer}</span>
            <span class="cred-date">${c.date}</span>
          </div>
          <h4 class="cred-title">${c.title}</h4>
          ${c.idCode ? `<div class="cred-id">ID: ${c.idCode}</div>` : ''}
          <div class="cred-actions">
            ${
              c.certImg
                ? `<button type="button" class="cred-action-link js-open-cert" data-img="${c.certImg}" data-title="${c.title} — ${c.issuer}">Ver documento</button>`
                : ''
            }
            ${
              c.link
                ? `<a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cred-action-link">Verificar credencial ↗</a>`
                : ''
            }
          </div>
        </div>
      </article>
    `
    )
    .join('');
}

function initCredentialFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  const hackGroup = document.getElementById('group-hackathons');
  const certGroup = document.getElementById('group-certs');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      buttons.forEach((b) => {
        const isActive = b === btn;
        b.classList.toggle('active', isActive);
        b.setAttribute('aria-selected', String(isActive));
      });

      if (hackGroup) {
        hackGroup.classList.toggle('is-hidden', filter === 'certs');
      }
      if (certGroup) {
        certGroup.classList.toggle('is-hidden', filter === 'hackathons');
      }
    });
  });
}

function initLightbox() {
  const modal = document.getElementById('lightbox');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.cred-thumb-btn, .js-open-cert');
    if (!trigger) return;

    const imgUrl = trigger.getAttribute('data-img');
    const title = trigger.getAttribute('data-title') || 'Credencial Oficial';
    if (!imgUrl) return;

    modalImg.src = imgUrl;
    modalCaption.textContent = title;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
  });

  const closeModal = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
  };

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

function initCvModal() {
  const modal = document.getElementById('cv-modal');
  const frame = document.getElementById('cv-frame');
  const closeBtn = document.getElementById('cv-close');
  const triggers = document.querySelectorAll('.js-open-cv');

  if (!modal || !frame || !triggers.length) return;

  const openCv = () => {
    const src = frame.getAttribute('data-src');
    if (src && !frame.getAttribute('src')) {
      frame.setAttribute('src', src);
    }
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeCv = () => {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  triggers.forEach((btn) => btn.addEventListener('click', openCv));
  if (closeBtn) closeBtn.addEventListener('click', closeCv);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCv();
  });
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeCv();
    }
  });
}

function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast');

  copyButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const value = btn.getAttribute('data-copy');
      if (!value) return;

      navigator.clipboard
        .writeText(value)
        .then(() => showToast(`Copiado: ${value}`))
        .catch(() => showToast('No se pudo copiar al portapapeles'));
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }
}

function initNavigation() {
  const navbar = document.getElementById('navbar');
  const navLinks = document.getElementById('nav-links');
  const burgerBtn = document.getElementById('burger-btn');

  window.addEventListener(
    'scroll',
    () => {
      if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 24);
    },
    { passive: true }
  );

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      burgerBtn.setAttribute('aria-expanded', String(isOpen));
    });

    document.querySelectorAll('.nav-item').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        burgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }
}
