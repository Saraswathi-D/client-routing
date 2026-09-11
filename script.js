const app = document.getElementById("app");
const navMenu = document.getElementById("navMenu");
const menuBtn = document.getElementById("menuBtn");

const pages = {

    home: `
        <section class="hero page-animation">

            <div class="hero-content">

                <span class="badge">
                    🚀 Modern Digital Solutions
                </span>

                <h1>
                    Build Something
                    <span class="gradient-text">
                        Amazing.
                    </span>
                </h1>

                <p>
                    We create modern websites, cloud solutions,
                    and digital experiences that help businesses
                    grow faster.
                </p>

                <div class="buttons">

                    <a href="#/services"
                       data-link
                       class="btn btn-primary">
                        Explore Services →
                    </a>

                    <a href="#/contact"
                       data-link
                       class="btn btn-secondary">
                        Contact Us
                    </a>

                </div>

            </div>

            <div class="hero-card">

                <div class="hero-icon">
                    💻
                </div>

                <h2>
                    Smart Technology
                </h2>

                <p>
                    Innovative solutions designed
                    for the modern digital world.
                </p>

            </div>

        </section>

        <section>

            <div class="page-header">

                <h2>
                    Why Choose Us?
                </h2>

                <p>
                    We combine technology, creativity and
                    strategy to build better digital products.
                </p>

            </div>

            <div class="cards">

                <div class="card">

                    <div class="card-icon">
                        ⚡
                    </div>

                    <h3>
                        Fast Performance
                    </h3>

                    <p>
                        Optimized websites and applications
                        that provide a smooth experience.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        🔐
                    </div>

                    <h3>
                        Secure
                    </h3>

                    <p>
                        Security-focused development practices
                        protect your applications and data.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        🎨
                    </div>

                    <h3>
                        Modern Design
                    </h3>

                    <p>
                        Clean, responsive and user-friendly
                        interfaces for every device.
                    </p>

                </div>

            </div>

        </section>
    `,

    about: `
        <section class="page-animation">

            <div class="page-header">

                <span class="badge">
                    👨‍💻 About Us
                </span>

                <h1>
                    About <span class="gradient-text">TechNova</span>
                </h1>

                <p>
                    TechNova is a technology-focused team
                    creating modern digital experiences and
                    software solutions.
                </p>

            </div>

            <div class="cards">

                <div class="card">

                    <div class="card-icon">
                        🎯
                    </div>

                    <h3>
                        Our Mission
                    </h3>

                    <p>
                        To make technology simple, useful and
                        accessible for businesses and users.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        💡
                    </div>

                    <h3>
                        Innovation
                    </h3>

                    <p>
                        We continuously explore new technologies
                        and creative solutions.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        🤝
                    </div>

                    <h3>
                        Collaboration
                    </h3>

                    <p>
                        We believe great products are created
                        through teamwork and communication.
                    </p>

                </div>

            </div>

            <div class="stats">

                <div class="stat">
                    <h2><span class="stat-number" data-target="50">0</span>+</h2>
                    <p>Projects</p>
                </div>

                <div class="stat">
                    <h2><span class="stat-number" data-target="25">0</span>+</h2>
                    <p>Clients</p>
                </div>

                <div class="stat">
                    <h2><span class="stat-number" data-target="10">0</span>+</h2>
                    <p>Technologies</p>
                </div>

                <div class="stat">
                    <h2><span class="stat-number" data-target="5">0</span>+</h2>
                    <p>Years Experience</p>
                </div>

            </div>

        </section>
    `,

    services: `
        <section class="page-animation">

            <div class="page-header">

                <span class="badge">
                    🛠️ Our Services
                </span>

                <h1>
                    What We <span class="gradient-text">Do</span>
                </h1>

                <p>
                    Explore our technology services designed
                    to help businesses build and grow online.
                </p>

            </div>

            <div class="cards">

                <div class="card">

                    <div class="card-icon">
                        🌐
                    </div>

                    <h3>
                        Web Development
                    </h3>

                    <p>
                        Responsive and modern websites using
                        the latest web technologies.
                    </p>

                    <br>

                    <a href="#/contact"
                       data-link
                       class="btn btn-primary">
                        Get Started
                    </a>

                </div>

                <div class="card">

                    <div class="card-icon">
                        ☁️
                    </div>

                    <h3>
                        Cloud Solutions
                    </h3>

                    <p>
                        Scalable cloud solutions for modern
                        applications and businesses.
                    </p>

                    <br>

                    <a href="#/contact"
                       data-link
                       class="btn btn-primary">
                        Get Started
                    </a>

                </div>

                <div class="card">

                    <div class="card-icon">
                        📱
                    </div>

                    <h3>
                        Digital Solutions
                    </h3>

                    <p>
                        Creative digital solutions to improve
                        customer engagement and productivity.
                    </p>

                    <br>

                    <a href="#/contact"
                       data-link
                       class="btn btn-primary">
                        Get Started
                    </a>

                </div>

                <div class="card">

                    <div class="card-icon">
                        📊
                    </div>

                    <h3>
                        Data Analytics
                    </h3>

                    <p>
                        Transform your business data into useful
                        insights for better decisions.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        🤖
                    </div>

                    <h3>
                        AI Solutions
                    </h3>

                    <p>
                        Intelligent solutions powered by modern
                        artificial intelligence technologies.
                    </p>

                </div>

                <div class="card">

                    <div class="card-icon">
                        🔧
                    </div>

                    <h3>
                        Technical Support
                    </h3>

                    <p>
                        Reliable technical support and maintenance
                        for your digital products.
                    </p>

                </div>

            </div>

        </section>
    `,

    contact: `
        <section class="page-animation">

            <div class="page-header">

                <span class="badge">
                    📩 Contact Us
                </span>

                <h1>
                    Let's <span class="gradient-text">Talk</span>
                </h1>

                <p>
                    Have a project idea? Send us a message
                    and let's build something great together.
                </p>

            </div>

            <div class="contact-container">

                <form id="contactForm"
                      class="contact-form">

                    <div class="form-group">

                        <label for="name">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            placeholder="Enter your name"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="email">
                            Email
                        </label>

                        <input
                            type="email"
                            id="email"
                            placeholder="Enter your email"
                            required
                        >

                    </div>

                    <div class="form-group">

                        <label for="message">
                            Message
                        </label>

                        <textarea
                            id="message"
                            placeholder="Write your message..."
                            maxlength="300"
                            required
                        ></textarea>

                        <div id="characterCount" class="character-count">
                            0 / 300 characters
                        </div>

                    </div>

                    <button
                        type="submit"
                        class="btn btn-primary">
                        Send Message 🚀
                    </button>

                </form>

            </div>

        </section>
    `,

    notFound: `
        <section class="page-animation not-found-page">

            <div class="page-header">

                <h1>404</h1>

                <h2>Page Not Found</h2>

                <p>The page you are looking for doesn't exist.</p>

                <a href="#/" data-link class="btn btn-primary">
                    Back to Home
                </a>

            </div>

        </section>
    `
};

function router() {

    let hash = window.location.hash;
    let path = hash.replace("#", "");

    if (path === "" || path === "/") {
        path = "/";
    }

    let page;

    switch (path) {

        case "/":
            page = "home";
            break;

        case "/about":
            page = "about";
            break;

        case "/services":
            page = "services";
            break;

        case "/contact":
            page = "contact";
            break;

        default:
            page = "notFound";
    }

    if (path === "/contact") {
        document.body.classList.add("contact-page");
    } else {
        document.body.classList.remove("contact-page");
    }

    app.innerHTML = pages[page];

    updateActiveLink(path);

    navMenu.classList.remove("show");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.setAttribute("aria-label", "Open navigation menu");

    setupContactForm();
    setupStatistics();

    window.scrollTo(0, 0);
}

document.addEventListener("click", function (event) {

    const link = event.target.closest("[data-link]");

    if (!link) {
        return;
    }

    event.preventDefault();

    const url = link.getAttribute("href");

    window.location.hash = url.substring(1);

});

window.addEventListener("hashchange", router);

function updateActiveLink(path) {

    const links = document.querySelectorAll(".nav-link");

    links.forEach(link => {

        link.classList.remove("active");
        link.removeAttribute("aria-current");

        const href = link
            .getAttribute("href")
            .replace(/^#/, "");

        if (
            href === path ||
            (path === "/index.html" && href === "/")
        ) {

            link.classList.add("active");
            link.setAttribute("aria-current", "page");

        }

    });
}
menuBtn.addEventListener("click", function () {

    const isOpen = navMenu.classList.toggle("show");

    menuBtn.setAttribute("aria-expanded", String(isOpen));
    menuBtn.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

});

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape" && navMenu.classList.contains("show")) {
        navMenu.classList.remove("show");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.setAttribute("aria-label", "Open navigation menu");
        menuBtn.focus();
    }

});

function setupContactForm() {

    const form = document.getElementById("contactForm");

    if (!form) {
        return;
    }

    const messageField = document.getElementById("message");
    const characterCount = document.getElementById("characterCount");

    messageField.addEventListener("input", function () {
        characterCount.textContent = `${messageField.value.length} / 300 characters`;
    });

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value.trim();

        const email =
            document.getElementById("email").value.trim();

        const message =
            document.getElementById("message").value.trim();

        if (!name || !email || !message) {

            showToast(
                "Please fill all fields.",
                "error"
            );

            return;
        }

        showToast(
            "Message sent successfully! 🚀"
        );

        form.reset();

    });

}

function setupStatistics() {

    const statistics = document.querySelectorAll(".stat-number");

    if (!statistics.length) {
        return;
    }

    const animateStatistics = () => {
        statistics.forEach(statistic => {
            const target = Number(statistic.dataset.target);
            const duration = 1000;
            const startTime = performance.now();

            function updateNumber(currentTime) {
                const progress = Math.min((currentTime - startTime) / duration, 1);
                const easedProgress = 1 - Math.pow(1 - progress, 3);

                statistic.textContent = Math.round(target * easedProgress);

                if (progress < 1) {
                    requestAnimationFrame(updateNumber);
                }
            }

            requestAnimationFrame(updateNumber);
        });
    };

    const observer = new IntersectionObserver(entries => {
        if (entries.some(entry => entry.isIntersecting)) {
            animateStatistics();
            observer.disconnect();
        }
    }, { threshold: 0.2 });

    const firstStatistic = statistics[0].getBoundingClientRect();

    if (firstStatistic.top < window.innerHeight && firstStatistic.bottom > 0) {
        animateStatistics();
    } else {
        observer.observe(statistics[0]);
    }
}

function showToast(message, type = "success") {

    const toast = document.getElementById("toast");

    toast.textContent = message;

    toast.style.background =
        type === "error"
            ? "#dc2626"
            : "#16a34a";

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    }, 3000);
}

const themeToggle =
    document.getElementById("themeToggle");

function updateThemeToggleLabel() {
    const isDark = document.body.classList.contains("dark");

    themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light mode" : "Switch to dark mode"
    );
}

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "dark");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "light");

    }

    updateThemeToggleLabel();

});


const savedTheme =
    localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark");

    themeToggle.textContent = "☀️";

}

updateThemeToggleLabel();

const backToTop = document.getElementById("backToTop");
const scrollProgress = document.getElementById("scrollProgress");
let scrollUpdatePending = false;

function updateScrollControls() {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0
        ? (window.scrollY / scrollableHeight) * 100
        : 0;

    scrollProgress.style.width = `${progress}%`;
    backToTop.classList.toggle("show", window.scrollY >= 300);
    scrollUpdatePending = false;
}

window.addEventListener("scroll", function () {
    if (!scrollUpdatePending) {
        scrollUpdatePending = true;
        requestAnimationFrame(updateScrollControls);
    }
}, { passive: true });

backToTop.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

router();