document.addEventListener("DOMContentLoaded", () => {
  initMotionPreference();
  const data = portfolioData;
  const year = document.getElementById("year");
  const bioText = document.getElementById("bio-text");
  const heroName = document.getElementById("hero-name");
  if (year) year.textContent = new Date().getFullYear();
  if (bioText) bioText.textContent = data.bio;
  if (heroName) heroName.textContent = data.name;

  hydrateSocial("hero-social", data.social);
  hydrateSocial("footer-social", data.social);
  hydrateStats(data.stats);
  hydrateExperience(data.experience);
  hydrateProjects(data.projects);
  setupProjectDetails(data.projects);
  hydrateSkills(data.skills);
  if (!window.ScrollTrigger) {
    document.querySelectorAll(".skill-card").forEach((card) => card.classList.add("is-visible"));
  }
  hydrateContact(data);
  setupMotionToggle();
  setupLocalTimeStatus();
  setupHeroTitleReveal();
  setupSectionSystems();
  setupAccentObserver(data);
  setupHeroParallax();
  setupSkillCountUp();
  setupTextScramble();
  setupCommandPalette(data);
  setupClickBursts();
  setupNavigation();
  setupContactForm();
  setupCursor();

  const typedTarget = document.getElementById("typed-role");
  if (typedTarget && window.Typed) {
    new Typed("#typed-role", {
      strings: data.roles,
      typeSpeed: 54,
      backSpeed: 30,
      backDelay: 1300,
      loop: true
    });
  } else {
    setupTypingFallback(data.roles);
  }

  if (window.VanillaTilt) {
    VanillaTilt.init(document.querySelectorAll(".tilt-card, .experience-card"), {
      max: 10,
      speed: 600,
      glare: false
    });
  }
});

function hydrateSocial(targetId, social) {
  const icons = {
    github: "fa-brands fa-github",
    linkedin: "fa-brands fa-linkedin-in"
  };
  const labels = {
    github: "GitHub",
    linkedin: "LinkedIn"
  };
  const target = document.getElementById(targetId);
  if (!target) return;
  target.innerHTML = Object.entries(social).filter(([, url]) => url && url !== "#").map(([name, url]) => `
    <a class="social-icon magnetic ${targetId === "footer-social" ? "social-link-wide" : ""}" href="${url}" target="_blank" rel="noreferrer" aria-label="${labels[name] || name}">
      <i class="${icons[name]}"></i>
      ${targetId === "footer-social" ? `<span>${labels[name] || name}</span>` : ""}
    </a>
  `).join("");
}

function setupTypingFallback(roles) {
  const target = document.getElementById("typed-role");
  if (!target) return;
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick() {
    const role = roles[roleIndex];
    target.textContent = role.slice(0, charIndex);
    if (!deleting && charIndex < role.length) {
      charIndex += 1;
    } else if (deleting && charIndex > 0) {
      charIndex -= 1;
    } else if (!deleting) {
      deleting = true;
      setTimeout(tick, 1100);
      return;
    } else {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(tick, deleting ? 34 : 58);
  }
  tick();
}

function hydrateStats(stats) {
  const target = document.getElementById("stats-grid");
  if (!target) return;
  target.innerHTML = stats.map((stat) => `
    <div class="stat-card reveal">
      <strong data-count="${stat.value}">${stat.value}</strong>
      <span>${stat.label}</span>
    </div>
  `).join("");
}

function hydrateExperience(experience) {
  document.getElementById("experience-list").innerHTML = experience.map((item, index) => `
    <article class="experience-card reveal tilt-card" style="--i:${index}">
      <div class="timeline-node"></div>
      <div class="experience-meta">
        <span>${item.dates}</span>
        <span>${item.location}</span>
      </div>
      <h3>${item.role}</h3>
      <p class="company">${item.company}</p>
      <p>${item.description}</p>
      <div class="tag-row">${item.highlights.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-links">
        ${item.liveLink ? `<a href="${item.liveLink}" target="_blank" rel="noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Live</a>` : ""}
        ${item.githubLink ? `<a href="${item.githubLink}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> Code</a>` : ""}
      </div>
    </article>
  `).join("");
}

function hydrateProjects(projects) {
  document.getElementById("project-grid").innerHTML = projects.map((project, index) => `
    <article class="project-card reveal" data-project-index="${index}" data-accent="${project.accent}" style="--accent:${project.accent}">
      <div class="project-card-inner">
        <div class="project-face project-front">
          <h3>${project.title}</h3>
          <div class="project-meta">${String(project.meta || "").split("\n").map((line) => `<span>${line}</span>`).join("")}</div>
          <p class="project-summary">${project.summary || project.points?.[0] || project.description || ""}</p>
          <button class="project-detail-trigger" type="button" data-project-index="${index}" aria-haspopup="dialog">
            <span>View details</span>
            <i class="fa-solid fa-arrow-up-right-from-square"></i>
          </button>
          <div class="card-links">
            <a href="${project.githubLink}" target="_blank" rel="noreferrer">source code &rarr;</a>
          </div>
          <div class="tag-row">${project.tech.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
      </div>
    </article>
  `).join("");
}

function setupProjectDetails(projects) {
  const modal = document.getElementById("project-detail-modal");
  const panel = document.querySelector(".project-detail-panel");
  const media = document.getElementById("project-detail-media");
  const content = document.getElementById("project-detail-content");
  const closeButton = document.getElementById("project-detail-close");
  const shell = document.querySelector(".project-carousel-shell");
  if (!modal || !panel || !media || !content || !closeButton) return;

  let lastTrigger = null;

  function renderProject(project) {
    panel.style.setProperty("--accent", project.accent || "#C2CABB");
    const fallbackLabel = project.imageLabel || project.title;
    media.innerHTML = project.image
      ? `<img src="${project.image}" alt="${project.title} preview">`
      : `<div class="project-detail-placeholder"><span>${fallbackLabel}</span></div>`;

    content.innerHTML = `
      <div class="project-detail-meta">${String(project.meta || "").split("\n").map((line) => `<span>${line}</span>`).join("")}</div>
      <h3 id="project-detail-title">${project.title}</h3>
      <p>${project.summary || ""}</p>
      <ul class="project-detail-points">${(project.points || []).map((point) => `<li>${point}</li>`).join("")}</ul>
      <div class="tag-row">${project.tech.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="card-links">
        ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noreferrer">live site &rarr;</a>` : ""}
        <a href="${project.githubLink}" target="_blank" rel="noreferrer">source code &rarr;</a>
      </div>
    `;
  }

  function showModal(project, trigger) {
    lastTrigger = trigger;
    renderProject(project);
    shell?.classList.add("is-detail-open");

    const open = () => {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("project-detail-active");
      panel.focus();
    };

    if (!isMotionReduced() && document.startViewTransition) {
      document.startViewTransition(open);
    } else {
      open();
    }
  }

  function closeModal() {
    if (!modal.classList.contains("is-open")) return;
    const close = () => {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      shell?.classList.remove("is-detail-open");
      document.body.classList.remove("project-detail-active");
    };

    if (!isMotionReduced() && document.startViewTransition) {
      document.startViewTransition(close);
    } else {
      close();
    }

    lastTrigger?.focus();
  }

  document.getElementById("project-grid")?.addEventListener("click", (event) => {
    if (!(event.target instanceof Element) || event.target.closest("a")) return;
    const trigger = event.target.closest(".project-detail-trigger");
    const card = event.target.closest(".project-card");
    const source = trigger || card;
    if (!source) return;
    const project = projects[Number(source.dataset.projectIndex)];
    if (project) showModal(project, trigger || card.querySelector(".project-detail-trigger") || card);
  });

  closeButton.addEventListener("click", closeModal);
  modal.addEventListener("click", (event) => {
    if (!event.target.closest(".project-detail-panel")) closeModal();
  });
  document.addEventListener("keydown", (event) => {
    if (!modal.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closeModal();
      return;
    }
    trapFocus(event, panel);
  });
}

function trapFocus(event, container) {
  if (event.key !== "Tab") return;

  const focusable = [...container.querySelectorAll([
    "a[href]",
    "button:not([disabled])",
    "input:not([disabled])",
    "textarea:not([disabled])",
    "select:not([disabled])",
    "[tabindex]:not([tabindex='-1'])"
  ].join(","))].filter((element) => element.offsetParent !== null);

  if (!focusable.length) {
    event.preventDefault();
    container.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  } else if (!container.contains(document.activeElement)) {
    event.preventDefault();
    first.focus();
  }
}

function hydrateSkills(skills) {
  const target = document.getElementById("skill-grid");
  if (!target) return;

  const groups = [
    {
      label: "Languages",
      items: [
        ["JavaScript / TypeScript", "Advanced", 85],
        ["Java", "Advanced", 85],
        ["Python / C++", "Intermediate", 60],
        ["HTML / CSS", "Expert", 95]
      ]
    },
    {
      label: "Frontend & Backend",
      items: [
        ["React Native / Expo", "Advanced", 80],
        ["Supabase / PostgreSQL", "Advanced", 80],
        ["MySQL / OracleDB", "Advanced", 75]
      ]
    },
    {
      label: "AI & Tools",
      items: [
        ["GitHub Copilot / Claude", "Advanced", 85],
        ["Groq API / Llama 3.3", "Intermediate", 60]
      ]
    },
    {
      label: "Environments & Networking",
      items: [
        ["Linux / Bash / SSH", "Advanced", 80],
        ["TCP/IP & DNS", "Intermediate", 55],
        ["Docker / AWS", "Learning", 30]
      ]
    }
  ];

  target.innerHTML = groups.map((group) => `
    <div class="skill-group reveal">
      <div class="skills-cat-label">${group.label}</div>
      ${group.items.map(([name, level, fill]) => `
        <div class="skill-bar-row">
          <div class="skill-bar-top"><span>${name}</span><span class="lvl"><span class="level-label">${level}</span><span class="skill-count" data-target="${fill}">0%</span></span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-fill="${fill}" style="--fill:${fill}%"></div></div>
        </div>
      `).join("")}
    </div>
  `).join("");
}

function setupHeroTitleReveal() {
  const title = document.querySelector(".hero-title");
  if (!title || title.dataset.split === "true") return;

  const parts = [];
  let index = 0;
  title.childNodes.forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent.split("").forEach((char) => {
        if (char === " ") {
          parts.push(" ");
          return;
        }
        parts.push(`<span class="hero-char" style="--i:${index}">${char}</span>`);
        index += 1;
      });
    } else if (node.nodeName === "BR") {
      parts.push("<br>");
    } else {
      node.textContent.split("").forEach((char) => {
        parts.push(`<span class="hero-char hero-char-accent" style="--i:${index}">${char}</span>`);
        index += 1;
      });
    }
  });

  title.innerHTML = parts.join("");
  title.dataset.split = "true";
}

function setupSectionSystems() {
  const sections = Array.from(document.querySelectorAll("main > .section[id]")).filter((section) => section.id !== "home");
  const indicator = document.getElementById("chapter-indicator");

  sections.forEach((section, index) => {
    const heading = section.querySelector(".section-heading");
    if (!heading) return;
    const number = String(index + 1).padStart(2, "0");
    heading.dataset.ghost = number;
    if (!heading.querySelector(".section-ghost")) {
      heading.insertAdjacentHTML("afterbegin", `<span class="section-ghost" aria-hidden="true">${number}</span>`);
    }
  });

  const headingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        headingObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.28 });

  sections.forEach((section) => {
    const heading = section.querySelector(".section-heading");
    if (heading) headingObserver.observe(heading);
  });

  if (!indicator || !sections.length) return;

  const observer = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const index = sections.indexOf(visible.target);
    const label = visible.target.querySelector(".section-heading h2")?.textContent?.trim() || visible.target.id;
    indicator.textContent = `${String(index + 1).padStart(2, "0")} / ${label}`;
    indicator.classList.remove("is-swapping");
    window.requestAnimationFrame(() => indicator.classList.add("is-swapping"));
  }, { threshold: [0.24, 0.42, 0.62], rootMargin: "-18% 0px -55% 0px" });

  sections.forEach((section) => observer.observe(section));
}

function setupHeroParallax() {
  const photo = document.querySelector(".hero-photo-wrap");
  if (!photo || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  window.addEventListener("mousemove", (event) => {
    if (isMotionReduced()) {
      photo.style.setProperty("--photo-x", "0px");
      photo.style.setProperty("--photo-y", "0px");
      return;
    }
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;
    photo.style.setProperty("--photo-x", `${x.toFixed(2)}px`);
    photo.style.setProperty("--photo-y", `${y.toFixed(2)}px`);
  }, { passive: true });
}

function setupSkillCountUp() {
  const rows = document.querySelectorAll(".skill-bar-row");
  if (!rows.length) return;

  const easeOut = (value) => 1 - Math.pow(1 - value, 3);
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting || entry.target.dataset.counted === "true") return;
      const row = entry.target;
      const fill = row.querySelector(".skill-bar-fill");
      const count = row.querySelector(".skill-count");
      const target = Number(count?.dataset.target || fill?.dataset.fill || 0);
      const start = performance.now();
      row.dataset.counted = "true";
      fill?.classList.add("is-filled");

      function tick(now) {
        const progress = Math.min((now - start) / 950, 1);
        const value = Math.round(easeOut(progress) * target);
        if (count) count.textContent = `${value}%`;
        if (progress < 1) {
          window.requestAnimationFrame(tick);
        }
      }

      window.requestAnimationFrame(tick);
      observer.unobserve(row);
    });
  }, { threshold: 0.35 });

  rows.forEach((row) => observer.observe(row));
}

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMotionReduced() {
  return document.documentElement.classList.contains("motion-reduced") || prefersReducedMotion();
}

function initMotionPreference() {
  const stored = localStorage.getItem("portfolio-motion");
  const reduced = stored === "reduced" || prefersReducedMotion();
  document.documentElement.classList.toggle("motion-reduced", reduced);
  window.portfolioMotionReduced = reduced;
}

function setMotionPreference(reduced) {
  document.documentElement.classList.toggle("motion-reduced", reduced);
  window.portfolioMotionReduced = reduced;
  localStorage.setItem("portfolio-motion", reduced ? "reduced" : "full");
  window.dispatchEvent(new CustomEvent("portfolio:motionchange", { detail: { reduced } }));
}

function setupMotionToggle() {
  const toggle = document.getElementById("motion-toggle");
  if (!toggle) return;

  function render() {
    const reduced = isMotionReduced();
    toggle.setAttribute("aria-pressed", String(reduced));
    toggle.querySelector("span").textContent = reduced ? "Still" : "Motion";
  }

  toggle.addEventListener("click", () => {
    setMotionPreference(!document.documentElement.classList.contains("motion-reduced"));
    render();
  });

  window.addEventListener("portfolio:motionchange", render);
  render();
}

function setupAccentObserver(data) {
  const root = document.documentElement;
  const sectionAccents = {
    home: "#C2CABB",
    about: "#C2CABB",
    education: "#C2CABB",
    experience: "#C2CABB",
    projects: data.projects[0]?.accent || "#C2CABB",
    skills: "#C2CABB",
    contact: "#C2CABB"
  };

  function setAccent(accent) {
    root.style.setProperty("--accent-live", accent || "#C2CABB");
  }

  const projectObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (visible?.target?.dataset.accent) {
      setAccent(visible.target.dataset.accent);
    }
  }, { threshold: [0.32, 0.48, 0.64], rootMargin: "-20% 0px -24% 0px" });

  document.querySelectorAll(".project-card[data-accent]").forEach((card) => projectObserver.observe(card));

  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible || visible.target.id === "projects") return;
    setAccent(sectionAccents[visible.target.id]);
  }, { threshold: [0.3, 0.5], rootMargin: "-18% 0px -55% 0px" });

  document.querySelectorAll("main > .section[id]").forEach((section) => sectionObserver.observe(section));
  setAccent(sectionAccents.home);
}

function setupTextScramble() {
  const glyphs = "!<>-_\\/[]{}=+*^?#________";
  const targets = document.querySelectorAll(".brand, .nav-links a, .section-heading h2");

  targets.forEach((target) => {
    target.dataset.scrambleText = target.textContent;
    target.addEventListener("mouseenter", () => {
      if (isMotionReduced() || target.dataset.scrambling === "true") return;
      const original = target.dataset.scrambleText || target.textContent;
      const start = performance.now();
      const duration = 380;
      target.dataset.scrambling = "true";

      function frame(now) {
        const progress = Math.min((now - start) / duration, 1);
        target.textContent = original.split("").map((char, index) => {
          if (char === " ") return " ";
          return progress > index / original.length ? char : glyphs[Math.floor(Math.random() * glyphs.length)];
        }).join("");

        if (progress < 1) {
          window.requestAnimationFrame(frame);
        } else {
          target.textContent = original;
          target.dataset.scrambling = "false";
        }
      }

      window.requestAnimationFrame(frame);
    });
  });
}

function setupCommandPalette(data) {
  const palette = document.getElementById("command-palette");
  const panel = palette?.querySelector(".command-panel");
  const input = document.getElementById("command-input");
  const list = document.getElementById("command-list");
  if (!palette || !panel || !input || !list) return;

  const commands = [
    { label: "Go to About", hint: "#about", action: () => location.assign("#about") },
    { label: "Go to Experience", hint: "#experience", action: () => location.assign("#experience") },
    { label: "Go to Projects", hint: "#projects", action: () => location.assign("#projects") },
    { label: "Go to Skills", hint: "#skills", action: () => location.assign("#skills") },
    { label: "Go to Contact", hint: "#contact", action: () => location.assign("#contact") },
    { label: "Copy Email", hint: data.email, action: () => copyText(data.email) },
    { label: "Open GitHub", hint: data.social.github, action: () => window.open(data.social.github, "_blank", "noreferrer") },
    { label: "Open LinkedIn", hint: data.social.linkedin, action: () => window.open(data.social.linkedin, "_blank", "noreferrer") }
  ];

  let activeIndex = 0;
  let current = commands;
  let lastPaletteFocus = null;

  function copyText(text) {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(text);
    } else {
      const area = document.createElement("textarea");
      area.value = text;
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
  }

  function render() {
    const query = input.value.trim().toLowerCase();
    current = commands.filter((command) => `${command.label} ${command.hint}`.toLowerCase().includes(query));
    activeIndex = Math.min(activeIndex, Math.max(current.length - 1, 0));
    list.innerHTML = current.map((command, index) => `
      <button class="command-item ${index === activeIndex ? "is-active" : ""}" type="button" data-index="${index}">
        <span>${command.label}</span>
        <small>${command.hint}</small>
      </button>
    `).join("") || `<div class="command-empty">No match</div>`;
  }

  function openPalette() {
    lastPaletteFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    palette.classList.add("is-open");
    palette.setAttribute("aria-hidden", "false");
    input.value = "";
    activeIndex = 0;
    render();
    input.focus();
  }

  function closePalette() {
    if (!palette.classList.contains("is-open")) return;
    palette.classList.remove("is-open");
    palette.setAttribute("aria-hidden", "true");
    lastPaletteFocus?.focus();
  }

  function runActive() {
    const command = current[activeIndex];
    if (!command) return;
    command.action();
    closePalette();
  }

  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      openPalette();
      return;
    }
    if (!palette.classList.contains("is-open")) return;
    if (event.key === "Escape") {
      closePalette();
      return;
    }
    trapFocus(event, panel);
    if (event.key === "ArrowDown") {
      event.preventDefault();
      activeIndex = Math.min(activeIndex + 1, current.length - 1);
      render();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      activeIndex = Math.max(activeIndex - 1, 0);
      render();
    }
    if (event.key === "Enter") {
      if (event.target instanceof Element && event.target.closest(".command-item")) return;
      event.preventDefault();
      runActive();
    }
  });

  input.addEventListener("input", () => {
    activeIndex = 0;
    render();
  });

  list.addEventListener("click", (event) => {
    const item = event.target.closest(".command-item");
    if (!item) return;
    activeIndex = Number(item.dataset.index);
    runActive();
  });

  palette.addEventListener("click", (event) => {
    if (event.target === palette) closePalette();
  });
}

function setupClickBursts() {
  const selectors = ".btn-primary, .social-icon, .back-top, .inline-link";

  document.addEventListener("click", (event) => {
    const target = event.target.closest(selectors);
    if (!target || isMotionReduced()) return;
    const rect = target.getBoundingClientRect();
    const centerX = event.clientX || rect.left + rect.width / 2;
    const centerY = event.clientY || rect.top + rect.height / 2;
    const burst = document.createElement("span");
    burst.className = "click-burst";
    burst.style.left = `${centerX}px`;
    burst.style.top = `${centerY}px`;

    for (let index = 0; index < 7; index += 1) {
      const dot = document.createElement("span");
      const angle = (Math.PI * 2 * index) / 7;
      const distance = 22 + Math.random() * 16;
      dot.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
      dot.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
      burst.appendChild(dot);
    }

    document.body.appendChild(burst);
    window.setTimeout(() => burst.remove(), 620);
  });
}

function hydrateContact(data) {
  document.getElementById("contact-details").innerHTML = `
    <a href="mailto:${data.email}"><i class="fa-solid fa-envelope"></i><span>${data.email}</span></a>
    <a href="tel:${data.phone.replace(/[^\d+]/g, "")}"><i class="fa-solid fa-phone"></i><span>${data.phone}</span></a>
    <p><i class="fa-solid fa-location-dot"></i><span>Hicksville, Long Island</span></p>
    <p><i class="fa-solid fa-clock"></i><span>Available Monday-Friday, 12-5 PM ET</span></p>
    <a href="${data.social.github}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i><span>${data.social.github.replace("https://", "")}</span></a>
  `;
}

function setupLocalTimeStatus() {
  const timeTarget = document.getElementById("ny-time");
  const modeTarget = document.getElementById("map-mode");
  const map = document.querySelector(".location-map");

  if (!timeTarget || !modeTarget || !map) {
    return;
  }

  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    weekday: "short",
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  });

  const hourFormatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    hour: "numeric",
    hourCycle: "h23"
  });

  function updateTime() {
    const now = new Date();
    const hour = Number(hourFormatter.format(now));
    const isDay = hour >= 7 && hour < 19;

    map.classList.toggle("is-day", isDay);
    map.classList.toggle("is-night", !isDay);
    modeTarget.textContent = isDay ? "Day map" : "Night map";
    timeTarget.textContent = `${formatter.format(now)} ET`;
  }

  updateTime();
  setInterval(updateTime, 30000);
}

function setupNavigation() {
  const toggle = document.getElementById("nav-toggle");
  const nav = document.getElementById("nav-links");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.innerHTML = `<i class="fa-solid ${isOpen ? "fa-xmark" : "fa-bars"}"></i>`;
  });
  nav.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });
}

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = document.getElementById("contact-submit");
  const icon = button?.querySelector("i");
  const label = button?.querySelector("span");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const valid = ["name", "email", "message"].every((key) => String(formData.get(key) || "").trim());
    if (!valid) {
      status.textContent = "Please complete every field.";
      status.className = "form-status is-error";
      button?.classList.remove("is-sending", "is-sent");
      if (icon) icon.className = "fa-solid fa-paper-plane";
      if (label) label.textContent = "Send";
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nReply to: ${formData.get("email")}`);
    button?.classList.add("is-sending");
    status.textContent = "Preparing message...";
    status.className = "form-status";

    window.setTimeout(() => {
      button?.classList.remove("is-sending");
      button?.classList.add("is-sent");
      if (icon) icon.className = "fa-solid fa-check";
      if (label) label.textContent = "Ready";
      status.textContent = "Opening your email app...";
      status.className = "form-status is-success";
      window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    }, 420);

    form.reset();
  });
}

function setupCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  const label = ring?.querySelector(".cursor-label");
  const finePointer = window.matchMedia("(pointer: fine)");
  if (!dot || !ring || !finePointer.matches) return;

  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  function resetCursorState() {
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    ring.style.removeProperty("--cursor-scale");
    ring.style.removeProperty("--cursor-accent");
    if (label) label.textContent = "";
  }

  function setCursorState(target) {
    if (isMotionReduced()) {
      resetCursorState();
      return;
    }

    const field = target.closest("input, textarea, select, [contenteditable='true']");
    const projectTrigger = target.closest(".project-detail-trigger, .project-card");
    const action = target.closest("a, button, .magnetic, .command-item, .btn, .social-icon, .back-top, .inline-link");
    const text = target.closest("p, li, .about-copy, .project-summary, .hero-copy, .contact-detail span");

    resetCursorState();

    if (field) {
      dot.classList.add("is-hidden");
      ring.classList.add("is-hidden");
      return;
    }

    if (projectTrigger) {
      const accent = projectTrigger.closest("[data-accent]")?.dataset.accent;
      if (accent) ring.style.setProperty("--cursor-accent", accent);
      dot.classList.add("is-link");
      ring.classList.add("is-project");
      ring.style.setProperty("--cursor-scale", "2.22");
      if (label) label.textContent = "View";
      return;
    }

    if (action) {
      dot.classList.add("is-link");
      ring.classList.add("is-link");
      ring.style.setProperty("--cursor-scale", "1.78");
      return;
    }

    if (text) {
      ring.classList.add("is-text");
      ring.style.setProperty("--cursor-scale", "0.64");
    }
  }

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    if (event.target instanceof Element) {
      setCursorState(event.target);
    } else {
      resetCursorState();
    }
  });

  document.addEventListener("mouseleave", () => {
    dot.classList.add("is-hidden");
    ring.classList.add("is-hidden");
  });

  document.addEventListener("mouseenter", resetCursorState);
  window.addEventListener("portfolio:motionchange", resetCursorState);

  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%) scale(var(--cursor-scale, 1))`;
    requestAnimationFrame(render);
  }
  render();
}
