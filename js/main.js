document.addEventListener("DOMContentLoaded", () => {
  const data = portfolioData;
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("bio-text").textContent = data.bio;
  document.getElementById("hero-name").textContent = data.name;

  hydrateSocial("hero-social", data.social);
  hydrateSocial("footer-social", data.social);
  hydrateStats(data.stats);
  hydrateExperience(data.experience);
  hydrateProjects(data.projects);
  hydrateSkills(data.skills);
  if (!window.ScrollTrigger) {
    document.querySelectorAll(".skill-card").forEach((card) => card.classList.add("is-visible"));
  }
  hydrateTestimonials(data.testimonials);
  hydrateContact(data);
  setupLocalTimeStatus();
  setupNavigation();
  setupContactForm();
  setupCursor();

  if (window.Typed) {
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
    linkedin: "fa-brands fa-linkedin-in",
    twitter: "fa-brands fa-x-twitter",
    youtube: "fa-brands fa-youtube",
    devto: "fa-brands fa-dev"
  };
  const target = document.getElementById(targetId);
  target.innerHTML = Object.entries(social).map(([name, url]) => `
    <a class="social-icon magnetic ${url === "#" ? "is-muted" : ""}" href="${url}" target="${url === "#" ? "_self" : "_blank"}" rel="noreferrer" aria-label="${name}">
      <i class="${icons[name]}"></i>
    </a>
  `).join("");
}

function setupTypingFallback(roles) {
  const target = document.getElementById("typed-role");
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
  document.getElementById("stats-grid").innerHTML = stats.map((stat) => `
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
  document.getElementById("project-grid").innerHTML = projects.map((project) => `
    <article class="project-card reveal" style="--accent:${project.accent}">
      <div class="project-card-inner">
        <div class="project-face project-front">
          <div class="project-preview">
            <span></span><span></span><span></span>
          </div>
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="tag-row">${project.tech.map((tag) => `<span>${tag}</span>`).join("")}</div>
        </div>
        <div class="project-face project-back">
          <h3>${project.title}</h3>
          <p>Explore the implementation, stack decisions, and source details.</p>
          <div class="card-links">
            ${project.liveLink ? `<a href="${project.liveLink}" target="_blank" rel="noreferrer"><i class="fa-solid fa-display"></i> Demo</a>` : ""}
            <a href="${project.githubLink}" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i> GitHub</a>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function hydrateSkills(skills) {
  document.getElementById("skill-grid").innerHTML = skills.map((skill) => `
    <div class="skill-card reveal" title="${skill.detail}" style="--percent:${skill.percentage}">
      <div class="skill-ring">
        <svg viewBox="0 0 120 120" aria-hidden="true">
          <circle cx="60" cy="60" r="48"></circle>
          <circle class="meter" cx="60" cy="60" r="48"></circle>
        </svg>
        <i class="${["fa-cube", "fa-code", "fa-layer-group"].includes(skill.icon) ? "fa-solid" : "fa-brands"} ${skill.icon}"></i>
      </div>
      <strong>${skill.name}</strong>
      <span>${skill.percentage}%</span>
      <p>${skill.detail}</p>
    </div>
  `).join("");
}

function hydrateTestimonials(testimonials) {
  document.getElementById("testimonial-carousel").innerHTML = testimonials.map((item, index) => `
    <article class="testimonial-card reveal" style="--r:${index - 1}">
      <div class="stars">${"&#9733;".repeat(item.rating)}</div>
      <p>"${item.quote}"</p>
      <strong>${item.author}</strong>
      <span>${item.role}</span>
    </article>
  `).join("");
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
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const valid = ["name", "email", "message"].every((key) => String(formData.get(key) || "").trim());
    if (!valid) {
      status.textContent = "Please complete every field.";
      status.className = "form-status is-error";
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${formData.get("name")}`);
    const body = encodeURIComponent(`${formData.get("message")}\n\nReply to: ${formData.get("email")}`);
    window.location.href = `mailto:${portfolioData.email}?subject=${subject}&body=${body}`;
    status.textContent = "Opening your email app...";
    status.className = "form-status is-success";
    form.reset();
  });
}

function setupCursor() {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let mouseX = 0;
  let mouseY = 0;
  let ringX = 0;
  let ringY = 0;

  window.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
  });

  function render() {
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;
    ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
    requestAnimationFrame(render);
  }
  render();
}
