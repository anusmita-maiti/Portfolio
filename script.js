document.addEventListener("DOMContentLoaded", () => {
  // Hero animations
  gsap.to(".hero-title", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
  });

  gsap.to(".hero-subtitle", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.6
  });

  gsap.to(".hero-button", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1
  });

  gsap.to(".hero-socials", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    delay: 1.3
  });

  // About Section
  gsap.to(".about-image img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(".about-text", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 80%",
    },
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.2
  });

  // Tech Stack
  gsap.to(".tech-content h2", {
    scrollTrigger: {
      trigger: ".tech-section",
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });

  gsap.to(".tech-list", {
    scrollTrigger: {
      trigger: ".tech-section",
      start: "top 80%",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.3
  });

  // Skills Animation
  gsap.utils.toArray(".skill").forEach((skill, i) => {
    gsap.from(skill, {
      scrollTrigger: {
        trigger: skill,
        start: "top 85%",
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: i * 0.1,
      ease: "power2.out"
    });
  });

  // Education Animation
  gsap.utils.toArray(".timeline-item").forEach((item, i) => {
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: "top 85%",
      },
      opacity: 0,
      y: 50,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out"
    });
  });

  // Project Card Animation (Gesture Control Robotic Arm)
  gsap.utils.toArray(".project-card").forEach((project, i) => {
    gsap.to(project, {
      scrollTrigger: {
        trigger: project,
        start: "top 85%",
      },
      opacity: 1,
      y: 0,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out"
    });
  });

  // Project Link Button (if any)
  gsap.utils.toArray(".project-link").forEach((link, i) => {
    gsap.from(link, {
      scrollTrigger: {
        trigger: link,
        start: "top 85%",
      },
      opacity: 0,
      y: 20,
      duration: 1,
      delay: i * 0.2,
      ease: "power2.out"
    });
  });
});
