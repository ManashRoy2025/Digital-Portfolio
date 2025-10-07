# Digital-Portfolio
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Digital Portfolio</title>
    <link rel="stylesheet" href="style.css">
    </head>
<body>

    <header>
        <nav>
            <a href="#about" class="nav-link">About Me</a>
            <a href="#skills" class="nav-link">Skills</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
        </nav>
    </header>

    <main>
        <section id="about" class="section">
            <div class="content-wrapper">
                <h1>Hi, I'm [Your Name] 👋</h1>
                <p>I'm a passionate developer focused on creating dynamic and interactive web experiences. This portfolio is built with pure HTML, CSS, and JavaScript.</p>
                <button class="cta-button">View My Resume</button>
            </div>
        </section>

        <section id="skills" class="section">
            <div class="content-wrapper">
                <h2>Skills & Tech</h2>
                <div class="skill-container">
                    <div class="skill-item" data-level="90">HTML & CSS</div>
                    <div class="skill-item" data-level="80">JavaScript</div>
                    <div class="skill-item" data-level="70">GSAP/Animation</div>
                </div>
            </div>
        </section>

        <section id="projects" class="section">
            <div class="content-wrapper">
                <h2>Featured Projects</h2>
                <div class="project-gallery">
                    <div class="project-card">
                        <h3>Project One: E-commerce Site</h3>
                        <p>A mock e-commerce platform built with modern design principles.</p>
                        <a href="#" target="_blank">View Live</a> | <a href="#" target="_blank">Code</a>
                    </div>
                    <div class="project-card">
                        <h3>Project Two: Data Dashboard</h3>
                        <p>An interactive dashboard for visualizing large datasets.</p>
                        <a href="#" target="_blank">View Live</a> | <a href="#" target="_blank">Code</a>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" class="section">
            <div class="content-wrapper">
                <h2>Get In Touch</h2>
                <form id="contact-form">
                    <input type="text" placeholder="Your Name" required>
                    <input type="email" placeholder="Your Email" required>
                    <textarea placeholder="Your Message" rows="5" required></textarea>
                    <button type="submit" class="cta-button">Send Message</button>
                </form>
            </div>
        </section>
    </main>

    <script src="script.js"></script>
</body>
</html>
