// SNS 플랫폼별 SVG 아이콘
const SNS_ICONS = {
  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>`,
  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`
};

// 프로필 섹션 렌더링
function renderProfile() {
  const { name, title, bio, email, phone, location, sns } = resumeData.profile;

  // 프로필 정보 채우기
  document.getElementById("profileName").textContent = name;
  document.getElementById("profileTitle").textContent = title;
  document.getElementById("profileBio").textContent = bio;

  // 연락처 정보
  const contactHTML = `
    <span class="flex items-center gap-2">📧 <a href="mailto:${email}" class="hover:text-orange-500 transition">${email}</a></span>
    <span class="flex items-center gap-2">📱 ${phone}</span>
    <span class="flex items-center gap-2">📍 ${location}</span>
  `;
  document.getElementById("profileContact").innerHTML = contactHTML;

  // SNS 링크
  const snsHTML = sns.map(({ platform, label, url, icon }) => `
    <a href="${url}" target="_blank" rel="noopener noreferrer"
       class="w-10 h-10 rounded-full bg-dark-card border border-dark-border flex items-center justify-center text-gray-300 hover:text-orange-500 hover:border-orange-500 transition-all duration-200"
       title="${label}">
      ${SNS_ICONS[icon] || ""}
    </a>
  `).join("");
  document.getElementById("profileSns").innerHTML = snsHTML;
}

// 기술 스택 섹션 렌더링
function renderSkills() {
  const categories = resumeData.skills.map(({ category, items }) => `
    <div class="group bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
      <h3 class="text-sm font-semibold text-orange-500 uppercase tracking-widest mb-4">${category}</h3>
      <div class="flex flex-wrap gap-2">
        ${items.map(item => `
          <span class="px-3 py-1.5 bg-dark-bg border border-dark-border text-gray-300 rounded-lg text-sm hover:border-orange-500/50 transition">${item}</span>
        `).join("")}
      </div>
    </div>
  `).join("");

  document.getElementById("skillsContainer").innerHTML = categories;
}

// 경력 섹션 렌더링
function renderExperience() {
  const items = resumeData.experience.map(({ company, position, duration, description }) => `
    <div class="group bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
      <div class="flex items-start justify-between gap-4 mb-4">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-orange-500 transition">${position}</h3>
          <p class="text-orange-500 font-medium text-sm">${company}</p>
        </div>
        <span class="text-xs text-gray-400 bg-dark-bg px-3 py-1 rounded-full whitespace-nowrap">${duration}</span>
      </div>
      <ul class="space-y-2">
        ${description.map(d => `<li class="text-gray-400 text-sm flex gap-2"><span class="text-orange-500 flex-shrink-0 mt-0.5">▸</span><span>${d}</span></li>`).join("")}
      </ul>
    </div>
  `).join("");

  document.getElementById("experienceContainer").innerHTML = items;
}

// 프로젝트 섹션 렌더링
function renderProjects() {
  const cards = resumeData.projects.map(({ title, description, skills, github, demo }) => `
    <div class="group bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300 flex flex-col">
      <h3 class="text-lg font-bold text-white mb-2 group-hover:text-orange-500 transition">${title}</h3>
      <p class="text-gray-400 text-sm mb-4 flex-1 leading-relaxed">${description}</p>
      <div class="flex flex-wrap gap-2 mb-4">
        ${skills.map(s => `<span class="px-2.5 py-1 bg-orange-500/10 text-orange-400 rounded text-xs font-medium border border-orange-500/20">${s}</span>`).join("")}
      </div>
      <div class="flex gap-3 border-t border-dark-border pt-4">
        ${github ? `<a href="${github}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-500 transition">${SNS_ICONS.github} GitHub</a>` : ""}
        ${demo ? `<a href="${demo}" target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-sm text-gray-400 hover:text-orange-500 transition">🔗 Live Demo</a>` : ""}
      </div>
    </div>
  `).join("");

  document.getElementById("projectsContainer").innerHTML = cards;
}

// 학력 섹션 렌더링
function renderEducation() {
  const items = resumeData.education.map(({ school, degree, graduation, note }) => `
    <div class="group bg-dark-card border border-dark-border rounded-2xl p-6 hover:border-orange-500/50 transition-all duration-300">
      <div class="flex items-start justify-between gap-4">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-orange-500 transition">${school}</h3>
          <p class="text-orange-500 font-medium text-sm">${degree}</p>
          ${note ? `<p class="text-gray-400 text-sm mt-2">${note}</p>` : ""}
        </div>
        <span class="text-xs text-gray-400 bg-dark-bg px-3 py-1 rounded-full whitespace-nowrap">${graduation}</span>
      </div>
    </div>
  `).join("");

  document.getElementById("educationContainer").innerHTML = items;
}

// 다크모드 토글 (항상 다크 상태 유지)
function initDarkMode() {
  const btn = document.getElementById("darkToggle");
  if (btn) {
    btn.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");
      const sunIcon = btn.querySelector(".sun-icon");
      const moonIcon = btn.querySelector(".moon-icon");
      sunIcon?.classList.toggle("hidden");
      moonIcon?.classList.toggle("hidden");
    });
  }
}

// 스크롤 스파이 (사이드바 네비 하이라이트)
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll("aside a[href^='#']");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const isActive = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("active", isActive);
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(section => observer.observe(section));
}

// 진입 애니메이션
function initScrollAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));
}

// 전체 렌더링
function renderResume() {
  renderProfile();
  renderSkills();
  renderExperience();
  renderProjects();
  renderEducation();
}

document.addEventListener("DOMContentLoaded", () => {
  renderResume();
  initDarkMode();
  initScrollSpy();
  initScrollAnimation();
});
