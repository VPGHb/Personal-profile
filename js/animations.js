const progressBar = document.querySelector(".scroll-progress");

function updateProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;
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

  document.querySelectorAll(".reveal, .skill-card").forEach((element) => observer.observe(element));
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
  document.querySelectorAll(".reveal").forEach((element) => {
    animate(element, {
      opacity: [0, 1],
      y: [28, 0],
      filter: ["blur(8px)", "blur(0px)"],
      duration: 720,
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
