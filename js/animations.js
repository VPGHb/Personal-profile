const progressBar = document.querySelector(".scroll-progress");

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
}

function isMotionReduced() {
  return document.documentElement.classList.contains("motion-reduced") || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function setupMarqueeVelocity() {
  const track = document.querySelector(".marquee-track");
  if (!track) return;

  let x = 0;
  let velocity = 0.34;
  let scrollBoost = 0;
  let lastScrollY = window.scrollY;
  let segmentWidth = 1;
  let running = false;

  function measure() {
    segmentWidth = Math.max(track.scrollWidth / 2, 1);
  }

  function stopManual() {
    running = false;
    track.classList.remove("is-manual");
    track.style.transform = "";
  }

  function startManual() {
    if (isMotionReduced()) {
      stopManual();
      return;
    }
    measure();
    track.classList.add("is-manual");
    if (!running) {
      running = true;
      requestAnimationFrame(tick);
    }
  }

  function tick() {
    if (!running || isMotionReduced()) {
      stopManual();
      return;
    }

    scrollBoost *= 0.9;
    velocity += (0.34 + scrollBoost - velocity) * 0.08;
    x = (x - velocity) % segmentWidth;
    track.style.transform = `translate3d(${x}px, 0, 0)`;
    requestAnimationFrame(tick);
  }

  window.addEventListener("scroll", () => {
    if (isMotionReduced()) return;
    const delta = Math.abs(window.scrollY - lastScrollY);
    lastScrollY = window.scrollY;
    scrollBoost = Math.min(3.2, scrollBoost + delta * 0.018);
  }, { passive: true });

  window.addEventListener("resize", measure);
  window.addEventListener("portfolio:motionchange", (event) => {
    if (event.detail.reduced) {
      stopManual();
    } else {
      startManual();
    }
  });

  startManual();
}

function setupFallbackReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.18 });

  document.querySelectorAll(".reveal:not(.hero-title):not(.hero-photo-wrap), .skill-card").forEach((element) => observer.observe(element));
}

function setupButtonMotion(animate) {
  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("mousemove", (event) => {
      const rect = button.getBoundingClientRect();
      const x = (event.clientX - rect.left - rect.width / 2) * 0.08;
      const y = (event.clientY - rect.top - rect.height / 2) * 0.1;
      animate(button, { x, y, duration: 260, ease: "outCubic" });
    });

    button.addEventListener("mouseleave", () => {
      animate(button, { x: 0, y: 0, duration: 520, ease: "outExpo" });
    });
  });
}

function setupAnimeReveal(animate, onScroll) {
  document.querySelectorAll(".reveal:not(.hero-title):not(.hero-photo-wrap)").forEach((element) => {
    const revealDelay = Number.parseInt(getComputedStyle(element).getPropertyValue("--reveal-delay"), 10) || 0;
    const itemIndex = Number.parseInt(getComputedStyle(element).getPropertyValue("--i"), 10) || 0;
    const staggerDelay = element.matches(".cert-card, .project-card, .skill-group, .experience-card")
      ? Math.min(itemIndex * 70, 280)
      : 0;

    animate(element, {
      opacity: [0, 1],
      y: [28, 0],
      filter: ["blur(8px)", "blur(0px)"],
      duration: 720,
      delay: revealDelay + staggerDelay,
      ease: "outCubic",
      autoplay: onScroll({
        target: element,
        container: window,
        enter: "bottom-=10% top",
        leave: "top+=20% bottom",
        sync: 0.35
      })
    });
  });

  document.querySelectorAll(".section-heading").forEach((heading) => {
    animate(heading, {
      opacity: [0.7, 1],
      x: [-16, 0],
      duration: 620,
      ease: "outCubic",
      autoplay: onScroll({
        target: heading,
        enter: "bottom-=8% top",
        leave: "top+=30% bottom",
        sync: 0.28
      })
    });
  });
}

function setupSkillObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".skill-card").forEach((card) => observer.observe(card));
}

document.addEventListener("DOMContentLoaded", async () => {
  updateProgress();
  setupMarqueeVelocity();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  try {
    const { animate, onScroll } = await import("animejs");
    setupAnimeReveal(animate, onScroll);
    setupButtonMotion(animate);
    setupSkillObserver();
  } catch {
    setupFallbackReveal();
  }
});
