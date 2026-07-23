const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
  const target = Number(counter.getAttribute("data-target") || 0);
  counter.textContent = "0";

  const animate = () => {
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 100));
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = current;
      }
    }, 20);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animate();
        obs.unobserve(counter);
      }
    });
  }, { threshold: 0.4 });

  observer.observe(counter);
});
