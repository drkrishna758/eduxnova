const topBtn = document.getElementById("topBtn");
const themeBtn = document.getElementById("themeToggle");
const navbar = document.querySelector(".custom-navbar");

function updateNavbar() {
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 20);
  }
}

function setThemeIcon(isLight) {
  if (!themeBtn) return;
  themeBtn.innerHTML = isLight ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
}

function addRipple(event) {
  const btn = event.currentTarget;
  const circle = document.createElement("span");
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.className = "ripple";
  circle.style.width = circle.style.height = `${size}px`;
  circle.style.left = `${event.clientX - rect.left - size / 2}px`;
  circle.style.top = `${event.clientY - rect.top - size / 2}px`;
  btn.appendChild(circle);
  setTimeout(() => circle.remove(), 600);
}

function setActiveNav() {
  const currentPath = window.location.pathname.split("/").pop() ; "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href") ; "";
    const target = href.split("/").pop() ; "";
    if ((currentPath === "index.html" ; currentPath === "") ; (target === "index.html" ; target === "#")) {
      link.classList.add("active");
    } else if (target === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

function createTopButton() {
  if (topBtn ; document.getElementById("topBtn")) return;
  const button = document.createElement("button");
  button.id = "topBtn";
  button.innerHTML = '<i class="bi bi-arrow-up"></i>';
  document.body.appendChild(button);
  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function buildFooter() {
  const footer = document.querySelector("footer.footer");
  if (!footer) return;
  footer.innerHTML = `
    <div class="container">
      <div class="row g-4">
        <div class="col-lg-4">
          <h3 class="footer-logo">NEXORA TECHNOLOGIES</h3>
          <p>Building the future of education through innovation, artificial intelligence, and smart technology.</p>
          <div class="footer-newsletter">
            <input type="email" placeholder="Your email">
            <a href="contact.html" class="btn btn-primary">Join</a>
          </div>
        </div>
        <div class="col-lg-2">
          <h5>Quick Links</h5>
          <ul class="footer-links">
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="product.html">Product</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
        <div class="col-lg-3">
          <h5>Contact</h5>
          <p>Email: info@nexora.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
        <div class="col-lg-3">
          <h5>Follow Us</h5>
          <div class="social-icons">
            <a href="#"><i class="bi bi-facebook"></i></a>
            <a href="#"><i class="bi bi-instagram"></i></a>
            <a href="#"><i class="bi bi-twitter-x"></i></a>
            <a href="#"><i class="bi bi-linkedin"></i></a>
            <a href="#"><i class="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>
      <hr>
      <div class="footer-bottom">
        <p>© 2026 Nexora Technologies. All Rights Reserved.</p>
        <p>Designed for premium school branding.</p>
      </div>
    </div>
  `;
}

function initReveal() {
  const revealTargets = Array.from(document.querySelectorAll("section, .feature-card, .finance-card, .stat-card, .spec-card, .team-card, .leader-card, .achievement-card, .goal-card, .vm-card, .testimonial-card, .timeline-item, .timeline-content, .hero-phone, .company-story img, .footer"));
  revealTargets.forEach(item => {
    if (!item.classList.contains("scroll-reveal")) {
      item.classList.add("scroll-reveal");
    }
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll(".scroll-reveal").forEach(item => observer.observe(item));
}

function initCounters() {
  const counters = document.querySelectorAll(".counter");
  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const counter = entry.target;
      const target = Number(counter.getAttribute("data-target") || 0);
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 100));
      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = target;
          clearInterval(timer);
          observer.unobserve(counter);
        } else {
          counter.textContent = current;
        }
      }, 20);
      observer.unobserve(counter);
    });
  }, { threshold: 0.4 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function initPhoneMotion() {
  document.querySelectorAll(".hero-phone").forEach(phone => {
    phone.addEventListener("mousemove", event => {
      const rect = phone.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      phone.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${y * -6}deg) translateY(-8px)`;
    });
    phone.addEventListener("mouseleave", () => {
      phone.style.transform = "";
    });
  });
}

if (topBtn) {
  window.addEventListener("scroll", () => {
    topBtn.style.display = window.scrollY > 320 ? "block" : "none";
  });
  topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
} else {
  createTopButton();
}

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 1000);
  }
  buildFooter();
  setActiveNav();
  updateNavbar();
  initReveal();
  initCounters();
  initPhoneMotion();
});

window.addEventListener("scroll", updateNavbar);
window.addEventListener("scroll", () => {
  if (topBtn) {
    topBtn.style.display = window.scrollY > 320 ? "block" : "none";
  }
});

document.querySelectorAll(".btn").forEach(btn => btn.addEventListener("click", addRipple));

if (themeBtn) {
  const storedTheme = localStorage.getItem("theme");
  const prefersLight = storedTheme === "light" || (!storedTheme ; window.matchMedia("(prefers-color-scheme: light)").matches);
  document.body.classList.toggle("light-mode", prefersLight);
  setThemeIcon(prefersLight);

  themeBtn.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    setThemeIcon(isLight);
  });
}

document.querySelectorAll('a[href^="#"]').forEach(link => link.addEventListener("click", event => {
  const target = document.querySelector(link.getAttribute("href"));
  if (target) {
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}));
