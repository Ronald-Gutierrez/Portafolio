// ==========================================================================
// PORTFOLIO APPLICATION LOGIC — RONALD GUTIERREZ
// Direct · Precise · High Visual Impact (Three.js WebGL)
// ==========================================================================

import { profileData, featuredProjects, keyRoles, officialCertifications } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initThreeJsBackground();
  initCustomCursor();
  initSoundEngine();
  renderPortfolio();
  initTiltCards();
  initLightbox();
  initClipboardActions();
  initNavigation();
});

// ==========================================================================
// 1. THREE.JS 3D SCROLLABLE COSMOS ENGINE
// ==========================================================================

let threeSceneControls = {
  scrollY: 0,
  targetScrollY: 0,
  mouseX: 0,
  mouseY: 0,
  targetMouseX: 0,
  targetMouseY: 0
};

function initThreeJsBackground() {
  const canvas = document.getElementById('gl');
  if (!canvas || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070a, 0.0012);

  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 3000);
  camera.position.set(0, 0, 480);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Layer 1: Nebula Point Cloud
  const particleCount = 1100;
  const particleGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const colorVermilion = new THREE.Color(0xe0231c);
  const colorCyan = new THREE.Color(0x38bdf8);
  const colorBone = new THREE.Color(0xdfe7e0);
  const colorGold = new THREE.Color(0xc9a24a);

  for (let i = 0; i < particleCount; i++) {
    const i3 = i * 3;
    const radius = Math.pow(Math.random(), 1.6) * 1250 + 50;
    const theta = Math.random() * Math.PI * 2;
    const phi = (Math.random() - 0.5) * Math.PI * 0.95;

    positions[i3] = radius * Math.cos(theta) * Math.cos(phi);
    positions[i3 + 1] = radius * Math.sin(phi) * 0.8;
    positions[i3 + 2] = radius * Math.sin(theta) * Math.cos(phi) - 180;

    const rand = Math.random();
    let col = colorBone;
    if (rand > 0.8) col = colorVermilion;
    else if (rand > 0.58) col = colorCyan;
    else if (rand > 0.46) col = colorGold;

    colors[i3] = col.r;
    colors[i3 + 1] = col.g;
    colors[i3 + 2] = col.b;
  }

  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  // Dot texture
  const textureCanvas = document.createElement('canvas');
  textureCanvas.width = 64;
  textureCanvas.height = 64;
  const ctx = textureCanvas.getContext('2d');
  const radGrad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
  radGrad.addColorStop(0, 'rgba(255, 255, 255, 1)');
  radGrad.addColorStop(0.25, 'rgba(255, 255, 255, 0.85)');
  radGrad.addColorStop(0.6, 'rgba(255, 255, 255, 0.2)');
  radGrad.addColorStop(1, 'rgba(255, 255, 255, 0)');
  ctx.fillStyle = radGrad;
  ctx.fillRect(0, 0, 64, 64);

  const particleTexture = new THREE.CanvasTexture(textureCanvas);

  const particleMat = new THREE.PointsMaterial({
    size: 7,
    vertexColors: true,
    map: particleTexture,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  });

  const particleField = new THREE.Points(particleGeo, particleMat);
  scene.add(particleField);

  // Layer 2: Geometric Floating Objects
  const nodesGroup = new THREE.Group();
  scene.add(nodesGroup);

  const icoGeo = new THREE.IcosahedronGeometry(95, 2);
  const icoMat = new THREE.MeshBasicMaterial({
    color: 0xe0231c,
    wireframe: true,
    transparent: true,
    opacity: 0.16
  });
  const heroSphere = new THREE.Mesh(icoGeo, icoMat);
  heroSphere.position.set(240, 30, -70);
  nodesGroup.add(heroSphere);

  const coreGeo = new THREE.OctahedronGeometry(48, 0);
  const coreMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.26
  });
  const heroCore = new THREE.Mesh(coreGeo, coreMat);
  heroSphere.add(heroCore);

  const ringGeo = new THREE.TorusGeometry(145, 1.8, 16, 120);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    wireframe: true,
    transparent: true,
    opacity: 0.18
  });
  const projectRing = new THREE.Mesh(ringGeo, ringMat);
  projectRing.position.set(-270, -320, -180);
  projectRing.rotation.x = Math.PI / 3;
  nodesGroup.add(projectRing);

  // Scroll & Mouse Listeners
  window.addEventListener('scroll', () => {
    threeSceneControls.targetScrollY = window.scrollY;
  }, { passive: true });

  window.addEventListener('mousemove', (e) => {
    threeSceneControls.targetMouseX = (e.clientX - window.innerWidth / 2) * 0.35;
    threeSceneControls.targetMouseY = (e.clientY - window.innerHeight / 2) * 0.35;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  let clock = new THREE.Clock();

  function renderFrame() {
    requestAnimationFrame(renderFrame);
    const delta = clock.getDelta();
    const elapsedTime = clock.getElapsedTime();

    threeSceneControls.mouseX += (threeSceneControls.targetMouseX - threeSceneControls.mouseX) * 0.05;
    threeSceneControls.mouseY += (threeSceneControls.targetMouseY - threeSceneControls.mouseY) * 0.05;
    threeSceneControls.scrollY += (threeSceneControls.targetScrollY - threeSceneControls.scrollY) * 0.06;

    const scrollFactor = threeSceneControls.scrollY * 0.16;
    camera.position.x = threeSceneControls.mouseX * 0.7;
    camera.position.y = -threeSceneControls.mouseY * 0.6 - scrollFactor;
    camera.position.z = 480 + Math.sin(elapsedTime * 0.4) * 15;

    particleField.rotation.y = elapsedTime * 0.02 + threeSceneControls.scrollY * 0.0003;
    particleField.rotation.x = Math.sin(elapsedTime * 0.015) * 0.1;

    heroSphere.rotation.x = elapsedTime * 0.15;
    heroSphere.rotation.y = elapsedTime * 0.22;
    heroCore.rotation.y = -elapsedTime * 0.4;

    projectRing.rotation.z = elapsedTime * 0.12;
    projectRing.rotation.x = Math.PI / 3 + Math.sin(elapsedTime * 0.3) * 0.1;

    renderer.render(scene, camera);
  }

  renderFrame();
}

// ==========================================================================
// 2. RENDER PORTFOLIO CONTENT (Concise & Impactful)
// ==========================================================================

function renderPortfolio() {
  renderProjects();
  renderRoles();
  renderCertifications();
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = featuredProjects.map(p => `
    <article class="clean-project-card tilt-card" data-id="${p.id}">
      <div class="card-shine"></div>
      <div class="clean-project-thumb">
        <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='HeroImage.jpg'">
        <div class="clean-thumb-overlay"></div>
        <span class="clean-category-badge">${p.category}</span>
        <span class="clean-status-pill">${p.badge}</span>
      </div>
      <div class="clean-project-body">
        <h3 class="clean-project-title">${p.title}</h3>
        <p class="clean-project-desc">${p.desc}</p>
        <div class="clean-project-tags">
          ${p.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
        </div>
        <div class="clean-project-actions">
          ${p.demo ? `
            <a href="${p.demo}" target="_blank" rel="noopener noreferrer" class="btn-card-action demo-btn">
              <span>Probar App</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
            </a>
          ` : ''}
          ${p.github ? `
            <a href="${p.github}" target="_blank" rel="noopener noreferrer" class="btn-card-action">
              <span>GitHub</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          ` : ''}
          ${p.video ? `
            <a href="${p.video}" target="_blank" rel="noopener noreferrer" class="btn-card-action">
              <span>Video Demo</span>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polygon points="10 8 16 12 10 16 10 8"/></svg>
            </a>
          ` : ''}
        </div>
      </div>
    </article>
  `).join('');
}

function renderRoles() {
  const container = document.getElementById('roles-grid');
  if (!container) return;

  container.innerHTML = keyRoles.map(r => `
    <div class="clean-role-card tilt-card">
      <div class="role-top">
        <span class="role-period">${r.period}</span>
        <span class="role-location">${r.location}</span>
      </div>
      <h3 class="role-title">${r.role}</h3>
      <div class="role-company">${r.company}</div>
      <p class="role-summary">${r.summary}</p>
      <div class="card-tags">
        ${r.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

function renderCertifications() {
  const container = document.getElementById('certs-grid');
  if (!container) return;

  container.innerHTML = officialCertifications.map(c => `
    <div class="clean-cert-card tilt-card" data-img="${c.certImg}" data-title="${c.title}">
      <div class="cert-thumb-preview">
        <img src="${c.certImg}" alt="${c.title}" loading="lazy" onerror="this.src='certs/transformagob_2026.jpg'">
        <div class="cert-zoom-overlay">
          <span>🔍 Ver Certificado HD</span>
        </div>
      </div>
      <div class="cert-body">
        <div class="cert-meta-row">
          <span class="cert-type-pill">${c.type}</span>
          <span class="cert-date">${c.date}</span>
        </div>
        <div class="cert-issuer-row">
          <img src="${c.logo}" alt="${c.issuer}" class="issuer-logo" onerror="this.style.display='none'">
          <span class="issuer-name">${c.issuer}</span>
        </div>
        <h4 class="cert-name">${c.title}</h4>
        ${c.idCode ? `<div class="cert-id-code">ID: <span>${c.idCode}</span></div>` : ''}
        ${c.link ? `
          <a href="${c.link}" target="_blank" rel="noopener noreferrer" class="cert-direct-link" onclick="event.stopPropagation()">
            <span>Verificar Credencial</span>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 17L17 7M17 7H7M17 7V17"/></svg>
          </a>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// ==========================================================================
// 3. 3D TILT ENGINE
// ==========================================================================

function initTiltCards() {
  const cards = document.querySelectorAll('.tilt-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -6;
      const rotateY = ((x - centerX) / centerX) * 6;

      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.015, 1.015, 1.015)`;

      const percentX = (x / rect.width) * 100;
      const percentY = (y / rect.height) * 100;
      card.style.setProperty('--mouse-x', `${percentX}%`);
      card.style.setProperty('--mouse-y', `${percentY}%`);
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

// ==========================================================================
// 4. LIGHTBOX MODAL FOR CERTIFICATES
// ==========================================================================

function initLightbox() {
  const modal = document.getElementById('lightbox-modal');
  const modalImg = document.getElementById('lightbox-img');
  const modalCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');

  if (!modal || !modalImg) return;

  document.addEventListener('click', (e) => {
    const certCard = e.target.closest('.clean-cert-card');
    if (certCard) {
      const imgUrl = certCard.getAttribute('data-img');
      const title = certCard.getAttribute('data-title') || 'Certificado Oficial';

      if (imgUrl) {
        modalImg.src = imgUrl;
        modalCaption.textContent = title;
        modal.classList.add('open');
        playSound('zoom');
      }
    }
  });

  const closeModal = () => {
    modal.classList.remove('open');
    playSound('click');
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

// ==========================================================================
// 5. CLIPBOARD ACTIONS & TOAST
// ==========================================================================

function initClipboardActions() {
  const copyButtons = document.querySelectorAll('[data-copy]');
  const toast = document.getElementById('toast-message');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        showToast(`✓ Copiado: ${textToCopy}`);
        playSound('success');
      }).catch(() => {
        showToast(`Error al copiar`);
      });
    });
  });

  function showToast(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

// ==========================================================================
// 6. NAVIGATION & CURSOR
// ==========================================================================

function initNavigation() {
  const navbar = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  const burgerBtn = document.querySelector('.burger-btn');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  if (burgerBtn && navLinks) {
    burgerBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      playSound('click');
    });

    document.querySelectorAll('.nav-item').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
}

function initCustomCursor() {
  const dot = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');

  if (!dot || !ring) return;

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left = `${mouseX}px`;
    dot.style.top = `${mouseY}px`;
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.left = `${ringX}px`;
    ring.style.top = `${ringY}px`;

    requestAnimationFrame(renderRing);
  }
  renderRing();

  const interactives = 'a, button, .tilt-card, .clean-cert-card';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactives)) {
      ring.classList.add('hovering');
    }
  });

  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactives)) {
      ring.classList.remove('hovering');
    }
  });
}

// ==========================================================================
// 7. SYNTHESIZED WEB AUDIO
// ==========================================================================

let audioCtx = null;
let soundEnabled = false;

function initSoundEngine() {
  const soundBtn = document.getElementById('sound-toggle');
  if (!soundBtn) return;

  soundBtn.addEventListener('click', () => {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) audioCtx = new AudioContextClass();
    }

    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    soundEnabled = !soundEnabled;
    soundBtn.classList.toggle('sound-on', soundEnabled);
    playSound(soundEnabled ? 'success' : 'click');
  });
}

function playSound(type) {
  if (!soundEnabled || !audioCtx) return;

  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(650, now);
      osc.frequency.exponentialRampToValueAtTime(160, now + 0.05);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === 'zoom') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(820, now + 0.12);
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.12);
      osc.start(now);
      osc.stop(now + 0.12);
    } else if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.setValueAtTime(880, now + 0.08);
      gain.gain.setValueAtTime(0.07, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.18);
      osc.start(now);
      osc.stop(now + 0.18);
    }
  } catch (err) {
    // Silent
  }
}
