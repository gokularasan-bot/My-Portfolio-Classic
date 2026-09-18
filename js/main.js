// ==========================================================================
// GOKULARASAN — ADVANCED 3D ENGINEERING PORTFOLIO
// UI Controllers, Dynamic Rendering & Interactive Systems
// ==========================================================================

import { portfolioData } from './data.js';
import { icons } from './icons.js';

document.addEventListener('DOMContentLoaded', () => {
  renderFocusAreas();
  renderSkills();
  renderProjects();
  renderExperience();
  renderIndustrialExposure();
  renderEducation();
  renderAchievements();
  renderProfiles();
  setupNavigation();
  setupContactForm();
  setupModals();
});

// --------------------------------------------------------------------------
// 01. FOCUS AREAS ("WHAT I'M EXPLORING")
// --------------------------------------------------------------------------
function renderFocusAreas() {
  const container = document.getElementById('focus-grid-container');
  if (!container) return;

  container.innerHTML = portfolioData.focusAreas.map(item => `
    <div class="focus-card" data-focus-id="${item.id}">
      <div>
        <div class="focus-header">
          <span class="focus-id">${item.id}</span>
          <div class="focus-icon">${icons[item.icon] || icons.zap}</div>
        </div>
        <h3 class="focus-title">${item.title}</h3>
        <div class="focus-subtitle">${item.subtitle}</div>
        <p class="focus-desc">${item.description}</p>
      </div>
      <div class="focus-tags">
        ${item.tags.map(tag => `<span class="focus-tag">${tag}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 02. SKILLS ("THE ENGINEERING STACK")
// --------------------------------------------------------------------------
let activeSkillCategory = 'electrical';

function renderSkills() {
  const navContainer = document.getElementById('skills-nav-container');
  const gridContainer = document.getElementById('skills-grid-container');
  if (!navContainer || !gridContainer) return;

  // Render Category Navigation Tabs
  navContainer.innerHTML = portfolioData.skills.categories.map(cat => `
    <button class="skills-tab-btn ${cat.id === activeSkillCategory ? 'active' : ''}" data-cat-id="${cat.id}">
      ${icons[cat.icon] || icons.terminal}
      <span>${cat.name}</span>
    </button>
  `).join('');

  // Render Active Category Skills
  function updateGrid(catId) {
    const category = portfolioData.skills.categories.find(c => c.id === catId);
    if (!category) return;

    gridContainer.innerHTML = category.skills.map(sk => `
      <div class="skill-tag-card">
        <span class="skill-name">${sk.name}</span>
        <span class="skill-level-badge">${sk.level}</span>
      </div>
    `).join('');
  }

  updateGrid(activeSkillCategory);

  // Tab switching events
  navContainer.querySelectorAll('.skills-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const catId = btn.getAttribute('data-cat-id');
      activeSkillCategory = catId;
      navContainer.querySelectorAll('.skills-tab-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateGrid(catId);
    });
  });
}

// --------------------------------------------------------------------------
// 03. PROJECTS CASE STUDIES
// --------------------------------------------------------------------------
function renderProjects() {
  const container = document.getElementById('projects-stack-container');
  if (!container) return;

  container.innerHTML = portfolioData.projects.map((proj, idx) => `
    <div class="project-plate ${idx % 2 !== 0 ? 'reverse' : ''}" id="${proj.id}">
      <div class="project-image-box">
        <img src="${proj.image}" alt="${proj.title}" class="project-img" loading="lazy" />
        <div class="project-caption">
          <strong>Hardware Setup:</strong> ${proj.imageCaption}
        </div>
      </div>
      <div class="project-info-box">
        <div class="project-meta-bar">
          <span class="project-number">PROJECT ${proj.number}</span>
          <span class="project-status">${proj.status}</span>
        </div>
        <h3 class="project-title">${proj.title}</h3>
        <p class="project-description">${proj.shortDescription}</p>

        ${proj.disclaimer ? `
          <div class="research-disclaimer-box">
            ${icons.info}
            <span><strong>Research Note:</strong> ${proj.disclaimer}</span>
          </div>
        ` : ''}

        <div class="project-tech-pills">
          ${proj.technologies.map(t => `<span class="tech-pill">${t}</span>`).join('')}
        </div>

        <div>
          <button class="btn btn-primary btn-sm view-project-btn" data-project-id="${proj.id}">
            <span>View Detailed Case Study</span>
            ${icons.arrowUpRight}
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Modal open triggers
  container.querySelectorAll('.view-project-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project-id');
      openProjectModal(projId);
    });
  });
}

function openProjectModal(projId) {
  const proj = portfolioData.projects.find(p => p.id === projId);
  if (!proj) return;

  const modalBody = document.getElementById('project-modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div style="margin-bottom: 24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="project-number">PROJECT ${proj.number}</span>
        <span class="project-status">${proj.status}</span>
      </div>
      <h2 style="font-size: 1.8rem; margin-bottom: 12px; color: var(--text-primary);">${proj.title}</h2>
      <p style="font-size: 1.05rem; color: var(--text-secondary); line-height: 1.6;">${proj.shortDescription}</p>
    </div>

    <div style="margin-bottom: 24px; border-radius: var(--radius-md); overflow: hidden; border: 1px solid var(--border-medium);">
      <img src="${proj.image}" alt="${proj.title}" style="width: 100%; height: auto; max-height: 360px; object-fit: cover;" />
      <div style="background: var(--bg-secondary); padding: 10px 16px; font-family: var(--font-mono); font-size: 0.8rem; color: var(--text-muted);">
        ${proj.imageCaption}
      </div>
    </div>

    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-bottom: 24px;">
      <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-blue); margin-bottom: 8px; font-size: 1rem;">Problem Statement</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary);">${proj.problem}</p>
      </div>
      <div style="background: var(--bg-secondary); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <h4 style="color: var(--accent-teal); margin-bottom: 8px; font-size: 1rem;">Engineered Solution</h4>
        <p style="font-size: 0.92rem; color: var(--text-secondary);">${proj.solution}</p>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="margin-bottom: 12px; font-size: 1.05rem; color: var(--text-primary);">Key System Features</h4>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 8px;">
        ${proj.keyFeatures.map(feat => `
          <li style="display: flex; align-items: center; gap: 10px; font-size: 0.92rem; color: var(--text-secondary);">
            <span style="color: var(--accent-blue); font-weight: bold;">✓</span>
            <span>${feat}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    ${proj.advancedParameters ? `
      <div style="margin-bottom: 24px;">
        <h4 style="margin-bottom: 12px; font-size: 1.05rem; color: var(--text-primary);">Parameters & Sensor Exploration</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${proj.advancedParameters.map(param => `
            <span style="font-family: var(--font-mono); font-size: 0.78rem; padding: 4px 10px; background: rgba(22, 110, 103, 0.08); border: 1px solid rgba(22, 110, 103, 0.2); border-radius: var(--radius-sm); color: var(--accent-teal);">
              ${param}
            </span>
          `).join('')}
        </div>
      </div>
    ` : ''}

    <div style="background: var(--bg-primary); padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-medium); margin-bottom: 20px;">
      <h4 style="color: var(--text-primary); margin-bottom: 8px; font-size: 0.95rem;">Contribution & Current Stage</h4>
      <p style="font-size: 0.9rem; color: var(--text-secondary); margin-bottom: 8px;"><strong>Role Contribution:</strong> ${proj.contribution}</p>
      <p style="font-size: 0.9rem; color: var(--text-secondary);"><strong>Current Stage:</strong> ${proj.outcome}</p>
    </div>

    ${proj.disclaimer ? `
      <div class="research-disclaimer-box">
        ${icons.info}
        <span><strong>Research Disclaimer:</strong> ${proj.disclaimer}</span>
      </div>
    ` : ''}
  `;

  const modal = document.getElementById('project-modal');
  if (modal) modal.classList.add('open');
}

// --------------------------------------------------------------------------
// 04. INDUSTRY EXPERIENCE
// --------------------------------------------------------------------------
function renderExperience() {
  const container = document.getElementById('experience-track-container');
  if (!container) return;

  container.innerHTML = portfolioData.experience.map((exp, idx) => `
    <div class="timeline-item">
      <div class="timeline-node ${idx === 0 ? 'highlight' : ''}"></div>
      <div class="timeline-card">
        <div class="timeline-card-header">
          <div>
            <h3 class="timeline-role">${exp.role}</h3>
            <div class="timeline-org">${exp.organization}</div>
          </div>
          <span class="project-status">${exp.year}</span>
        </div>

        <div class="timeline-meta-tags">
          <span>📅 ${exp.date}</span>
          <span>⏱️ ${exp.duration}</span>
          <span>📍 ${exp.location}</span>
        </div>

        <p style="font-size: 0.95rem; color: var(--text-secondary); margin-bottom: 16px;">${exp.description}</p>

        <ul class="timeline-bullets">
          ${exp.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>

        <div class="timeline-actions">
          ${exp.linkedinPostUrl ? `
            <a href="${exp.linkedinPostUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>View LinkedIn Post</span>
              ${icons.externalLink}
            </a>
          ` : ''}
          ${exp.linkedinCompanyUrl ? `
            <a href="${exp.linkedinCompanyUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>Company</span>
              ${icons.externalLink}
            </a>
          ` : ''}
          ${exp.mapsUrl ? `
            <a href="${exp.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>View Location</span>
              ${icons.mapPin}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 05. INDUSTRIAL EXPOSURE (INTEC & AMBERTEX)
// --------------------------------------------------------------------------
function renderIndustrialExposure() {
  const intecContainer = document.getElementById('intec-card-container');
  const ambertexContainer = document.getElementById('ambertex-card-container');
  if (!intecContainer || !ambertexContainer) return;

  const intec = portfolioData.industrialExposure[0];
  const ambertex = portfolioData.industrialExposure[1];

  // Render INTEC 2026
  intecContainer.innerHTML = `
    <div class="exposure-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
        <div>
          <span class="section-tag" style="margin-bottom:8px;"><span class="dot"></span>TRADE FAIR EXPOSURE</span>
          <h3 style="font-size:1.6rem; color:var(--text-primary);">${intec.title}</h3>
          <div style="font-family:var(--font-heading); color:var(--accent-blue); font-weight:600;">${intec.subtitle}</div>
        </div>
        <span class="project-status">${intec.date}</span>
      </div>

      <div class="timeline-meta-tags" style="margin-bottom:16px;">
        <span>📍 ${intec.location}</span>
      </div>

      <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:18px;">${intec.description}</p>

      <div style="margin-bottom:20px;">
        <h4 style="font-size:0.95rem; margin-bottom:10px; color:var(--text-primary);">Key Observations & Professional Discussions:</h4>
        <ul class="timeline-bullets">
          ${intec.observations.map(obs => `<li>${obs}</li>`).join('')}
        </ul>
      </div>

      <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:24px;">
        ${intec.keyLearning.map(kl => `<span class="tech-pill">${kl}</span>`).join('')}
      </div>

      <div>
        <a href="${intec.linkedinPostUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
          <span>View LinkedIn Post</span>
          ${icons.externalLink}
        </a>
      </div>
    </div>
  `;

  // Render Ambertex Spinning Division Interactive Process Flow
  ambertexContainer.innerHTML = `
    <div class="exposure-card">
      <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:12px; margin-bottom:12px;">
        <div>
          <span class="section-tag" style="margin-bottom:8px;"><span class="dot"></span>MANUFACTURING FACILITY VISIT</span>
          <h3 style="font-size:1.6rem; color:var(--text-primary);">${ambertex.title}</h3>
          <div style="font-family:var(--font-heading); color:var(--accent-blue); font-weight:600;">${ambertex.subtitle}</div>
        </div>
        <span class="project-status">${ambertex.date}</span>
      </div>

      <p style="font-size:0.95rem; color:var(--text-secondary); margin-bottom:20px;">${ambertex.description}</p>

      <div style="margin-bottom:8px;">
        <h4 style="font-size:0.95rem; color:var(--text-primary); display:flex; align-items:center; gap:8px;">
          <span>Industrial Process Sequence: Cotton Bale to Finished Yarn</span>
          <span style="font-family:var(--font-mono); font-size:0.75rem; color:var(--text-muted);">(Click or hover a stage)</span>
        </h4>
      </div>

      <!-- 9-Step Process Flow Track -->
      <div class="process-flow-track" id="spinning-process-track">
        ${ambertex.processSteps.map((st, i) => `
          <div class="process-step-node" title="${st.name} (Step ${st.step}): ${st.desc}">
            <div class="process-step-num">${st.step}</div>
            <div class="process-step-name">${st.name}</div>
          </div>
        `).join('')}
      </div>

      <!-- Rooftop Solar Installation Observation -->
      <div class="solar-observation-banner">
        <div class="solar-icon">${icons.sun}</div>
        <div>
          <strong style="color:var(--accent-teal); font-size:0.95rem;">Renewable Energy in Industry:</strong>
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-top:2px;">${ambertex.solarObservation}</p>
        </div>
      </div>

      <div style="margin-top:24px;">
        <a href="${ambertex.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
          <span>View Location</span>
          ${icons.mapPin}
        </a>
      </div>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 06. EDUCATION
// --------------------------------------------------------------------------
function renderEducation() {
  const container = document.getElementById('education-grid-container');
  if (!container) return;

  container.innerHTML = portfolioData.education.map(edu => `
    <div class="edu-card ${edu.stage === 'Higher Education' ? 'featured' : ''}">
      <div class="edu-img-wrap">
        <img src="${edu.image}" alt="${edu.institution}" class="edu-img" loading="lazy" />
      </div>
      <div class="edu-card-body">
        <div>
          <div class="edu-stage-tag">${edu.stage.toUpperCase()}</div>
          <h3 class="edu-institution">${edu.institution}</h3>
          ${edu.degree ? `<div class="edu-degree">${edu.degree}</div>` : ''}
          ${edu.grade ? `<div class="edu-degree">${edu.grade}</div>` : ''}
          <p style="font-size: 0.88rem; color: var(--text-secondary);">${edu.description}</p>

          ${edu.academicResults && edu.academicResults.length > 0 ? `
            <div class="edu-scores-list">
              ${edu.academicResults.map(res => `
                <div class="edu-score-item">
                  <span class="edu-score-label">${res.label}</span>
                  <span class="edu-score-val">${res.score}</span>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>

        <div class="edu-card-footer">
          ${edu.mapsUrl ? `
            <a href="${edu.mapsUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline btn-sm">
              <span>View Location</span>
              ${icons.mapPin}
            </a>
          ` : ''}
          ${edu.linkedinUrl ? `
            <a href="${edu.linkedinUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary btn-sm">
              <span>KCT on LinkedIn</span>
              ${icons.externalLink}
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 07. ACHIEVEMENTS, HACKATHONS & EVENTS
// --------------------------------------------------------------------------
function renderAchievements() {
  const container = document.getElementById('achievements-grid-container');
  if (!container) return;

  function getBadgeClass(role) {
    const r = role.toLowerCase();
    if (r.includes('management')) return 'management';
    if (r.includes('participant')) return 'participant';
    if (r.includes('coordinator')) return 'coordinator';
    return 'organizer';
  }

  container.innerHTML = portfolioData.achievements.map(ach => `
    <div class="event-card">
      <div>
        <div class="event-header">
          <h3 class="event-title">${ach.title}</h3>
          <span class="role-badge ${getBadgeClass(ach.role)}">${ach.role.toUpperCase()}</span>
        </div>
        <div class="event-meta">
          <span>🏛️ ${ach.organization}</span> &nbsp;|&nbsp; <span>📅 ${ach.date}</span>
        </div>
        <p class="event-desc">${ach.description}</p>
        <ul class="timeline-bullets" style="margin-bottom: 16px;">
          ${ach.bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>

      <div>
        <div class="event-skills">
          ${ach.skills.map(sk => `<span class="event-skill-tag">${sk}</span>`).join('')}
        </div>
        ${ach.linkedinPostUrl ? `
          <div>
            <a href="${ach.linkedinPostUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
              <span>View LinkedIn Post</span>
              ${icons.externalLink}
            </a>
          </div>
        ` : ''}
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 08. PROFILES & CONNECT
// --------------------------------------------------------------------------
function renderProfiles() {
  const container = document.getElementById('profiles-grid-container');
  if (!container) return;

  const social = portfolioData.student.socialLinks;

  container.innerHTML = `
    <div class="profile-card">
      <div>
        <div class="profile-icon-wrap">${icons.linkedin}</div>
        <h3>LinkedIn Profile</h3>
        <p>Explore technical posts, internship documentation, hackathon updates, and professional engineering connections.</p>
      </div>
      <a href="${social.linkedin}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <span>LinkedIn Profile</span>
        ${icons.externalLink}
      </a>
    </div>

    <div class="profile-card">
      <div>
        <div class="profile-icon-wrap">${icons.github}</div>
        <h3>GitHub Profile</h3>
        <p>Explore embedded microcontroller code, IoT repositories, sensor firmware experiments, and open-source explorations.</p>
      </div>
      <a href="${social.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
        <span>GitHub Profile</span>
        ${icons.externalLink}
      </a>
    </div>

    <div class="profile-card">
      <div>
        <div class="profile-icon-wrap">${icons.mail}</div>
        <h3>Email Contact</h3>
        <p>Direct communication channel for engineering internships, technical collaborations, and academic opportunities.</p>
      </div>
      <a href="${social.email}" class="btn btn-secondary btn-sm">
        <span>gokularasan.28eee@gmail.com</span>
        ${icons.arrowUpRight}
      </a>
    </div>
  `;
}

// --------------------------------------------------------------------------
// 09. NAVIGATION CONTROLLER & SCROLL SPY
// --------------------------------------------------------------------------
function setupNavigation() {
  const navbar = document.getElementById('navbar');
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  // Mobile menu toggle
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      menu.classList.toggle('open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('active');
        menu.classList.remove('open');
      });
    });
  }

  // Navbar background change on scroll & Scroll Spy
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset || window.scrollY;

    if (scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    // Scroll Spy active link
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 10. RESUME & PREVIEW MODALS
// --------------------------------------------------------------------------
function setupModals() {
  const projectModal = document.getElementById('project-modal');
  const resumeModal = document.getElementById('resume-modal');
  const closeBtns = document.querySelectorAll('.modal-close-btn');

  // Close modal when clicking backdrop or close button
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (projectModal) projectModal.classList.remove('open');
      if (resumeModal) resumeModal.classList.remove('open');
    });
  });

  [projectModal, resumeModal].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.classList.remove('open');
        }
      });
    }
  });

  // Resume preview trigger
  const previewPanel = document.getElementById('resume-preview-trigger');
  if (previewPanel && resumeModal) {
    previewPanel.addEventListener('click', () => {
      resumeModal.classList.add('open');
    });
  }

  // ESC key listener to close modals
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (projectModal) projectModal.classList.remove('open');
      if (resumeModal) resumeModal.classList.remove('open');
    }
  });
}

// --------------------------------------------------------------------------
// 11. CONTACT FORM HANDLER
// --------------------------------------------------------------------------
function setupContactForm() {
  const form = document.getElementById('contact-form');
  const feedback = document.getElementById('form-feedback');

  if (form && feedback) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = form.querySelector('button[type="submit"]');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';
      }

      setTimeout(() => {
        feedback.className = 'form-feedback success';
        feedback.innerHTML = `
          <strong>✓ Message Recorded Locally:</strong> Thank you, Gokularasan has received your communication request. (To connect directly, email <strong>gokularasan.28eee@gmail.com</strong>).
        `;
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Message';
        }
      }, 600);
    });
  }
}
