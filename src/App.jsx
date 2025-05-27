import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import { FaMoon, FaSun, FaBars, FaTimes, FaArrowUp, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import './index.css';
import 'devicon/devicon.min.css';

const experienceData = [
  {
    title: "Software Engineer – VMC Technologies Pvt Ltd",
    date: "June 2024 – Present | Bangalore, India",
    points: [
      "I am a Full Stack Developer with expertise in AngularJS for front-end development and CodeIgniter 4, Laravel, PHP with MySQL for backend development.",
      "Developed MCUBE Big Basket lead management system with bulk assignment & role-based access",
      "Built and maintained master panels, reporting modules, and admin controls",
    ],
  },
  {
    title: "Junior Software Developer – Prazo.In",
    date: "May 2023 – April 2024 | Bangalore, India",
    points: [
      "Established and executed an innovative strategy to enhance Prazo.In the PG Management System, resulting in a 40% increase in booking efficiency and a 25% boost in customer satisfaction ratings.",
      "Spearheaded the implementation of a dynamic Dashboard feature, providing real-time insights into PG occupancy, revenue streams, and maintenance schedules.",
      "Strategically revamped the rent payment module, reducing payment processing time by 20% and improving overall financial transaction efficiency.",
    ],
  },
  {
    title: "Junior Software Developer Intern – prazo.In",
    date: "Jan 2023 – May 2023 | Bangalore, India",
    points: [
      "Formulated an Internal Tool for CRUD operations and integrated REST APIs.",
      "Maintained high-quality web applications using Vue.js and JavaScript.",
      "Refactored legacy code base to the latest standards and versions",
    ],
  },
];

function ExperienceCarousel() {
  const [current, setCurrent] = useState(0);
  const length = experienceData.length;

  const nextCard = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevCard = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const goToCard = (index) => {
    setCurrent(index);
  };

  return (
    <section id="experience" className="container" data-aos="fade-up">
      <h2>Work Experience</h2>
      <div className="carousel-container" aria-live="polite">
        <button
          aria-label="Previous experience"
          className="carousel-arrow left"
          onClick={prevCard}
        >
          <FaArrowLeft size={20} />
        </button>

        {experienceData.map((exp, index) => (
          <div
            key={index}
            className={`project-card carousel-card ${
              index === current ? "active" : "inactive"
            }`}
            aria-hidden={index !== current}
          >
            <h3>{exp.title}</h3>
            <p>
              <em>{exp.date}</em>
            </p>
            <ul>
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}

        <button
          aria-label="Next experience"
          className="carousel-arrow right"
          onClick={nextCard}
        >
          <FaArrowRight size={20} />
        </button>
      </div>

      <div className="carousel-dots" role="tablist" aria-label="Experience navigation">
        {experienceData.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === current ? "active" : ""}`}
            onClick={() => goToCard(index)}
            aria-selected={index === current}
            role="tab"
            tabIndex={index === current ? 0 : -1}
            aria-label={`Go to experience ${index + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
}

const App = () => {
  const [theme, setTheme] = useState("light");
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.body.classList.add(`${savedTheme}-mode`);
    
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => {
    if (menuOpen) setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.body.classList.remove(`${theme}-mode`);
    document.body.classList.add(`${newTheme}-mode`);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <header className="navbar">
        <h1>Sivaparvathi Jupalle</h1>
        <nav className={`nav-right ${menuOpen ? "open" : ""}`}>
          <ul>
            {["home", "about", "skills", "experience", "projects", "education", "contact"].map(
              (section) => (
                <li key={section}>
                  <a href={`#${section}`} onClick={handleNavClick}>
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              )
            )}
          </ul>
          <button className="dark-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </nav>

        <button
          className="hamburger-btn"
          onClick={toggleMenu}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </header>

      <section id="home">
        <div className="typing-section">
          <h2 className="typed-wrapper">
            <ReactTyped
              strings={[
                "Hi, I'm Sivaparvathi Jupalle",
                "Full-stack developer specializing in web and Mobile Applications.",
                "Building modern apps and intelligent tools.",
                "Always learning, always building something new."
              ]}
              typeSpeed={60}
              backSpeed={40}
              backDelay={1500}
              smartBackspace={true}
              showCursor
              cursorChar="|"
              loop
            />
          </h2>
        </div>
        <p>
          Full-Stack Software Engineer with 2+ years of experience building scalable web applications using React, Angular, Vuejs, Laravel, PHP, Nodejs and MySQL.
        </p>
        <a href="/Sivaparvathi Jupalle.pdf" download className="resume-btn">Download My Resume</a>
      </section>

      <section id="about" className="container" data-aos="fade-up">
        <h2>About Me</h2>
        <div className="about-wrapper">
    <img
      src="/profile.jpg" 
      alt="Sivaparvathi Jupalle"
      className="about-image"
    />
    <div className="about-text">
      <p>
        Self-driven and passionate Full Stack Developer with hands-on experience building dynamic, scalable web and mobile applications.
      </p>
      <p>
        Skilled in modern front-end and back-end technologies including Angular, Vue.js, Laravel, and MySQL.
        Demonstrated success in optimizing systems, leading feature development, and collaborating in agile environments.
      </p>
    </div>
  </div>
      </section>

      <section id="skills" className="container" data-aos="fade-up">
        <h2>Skills</h2>
        <div className="skills-grid">
          <span className="chip"><i className="devicon-react-original colored"></i> React</span>
          <span className="chip"><i className="devicon-angularjs-plain colored"></i> Angular</span>
          <span className="chip"><i className="devicon-vuejs-plain colored"></i> Vue.js</span>
          <span className="chip"><i className="devicon-javascript-plain colored"></i> JavaScript</span>
          <span className="chip"><i className="devicon-html5-plain colored"></i> HTML5</span>
          <span className="chip"><i className="devicon-css3-plain colored"></i> CSS3</span>
          <span className="chip"><i className="devicon-laravel-plain colored"></i> Laravel</span>
          <span className="chip"><i className="devicon-codeigniter-plain colored"></i> Codeigniter</span>
          <span className="chip"><i className="devicon-php-plain colored"></i> PHP</span>
          <span className="chip"><i className="devicon-nodejs-plain colored"></i> Node.js</span>
          <span className="chip"><i className="devicon-mysql-plain colored"></i> MySQL</span>
          <span className="chip"><i className="devicon-firebase-plain colored"></i> Firebase</span>
          <span className="chip"><i className="devicon-vscode-plain colored"></i> VS Code</span>
          <span className="chip"><i className="devicon-postman-plain colored"></i> Postman</span>
          <span className="chip"><i className="devicon-jira-plain colored"></i> Jira</span>
          <span className="chip"><i className="devicon-bitbucket-original colored"></i> Bitbucket</span>
          <span className="chip"><i className="devicon-git-plain colored"></i> Git</span>
        </div>
      </section>

      {/* Use the carousel component here */}
      <ExperienceCarousel />

      <section id="projects" className="container" data-aos="fade-up">
        <h2>Projects</h2>
        <div className="project-grid">
          <div className="project-card" data-aos="zoom-in">
            <h3>Classic- Call Analytics</h3>
            <p>Managed  a classic panel	for	handling all	incoming,outgoing,and callback calls, ensuring	seamless operations	across	multiple channels.
			Oversaw call reporting, tracking key metrics for calls,	groups,	and	employee performance.
			Led	SMS,WhatsApp and email integrations,	facilitating customer communications across	various	platforms.
			Generated and downloaded detailed reports to	analyze	and	improve	team and system	performance.
			</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3>MCUBE BIG BASKET</h3>
            <p>Developed a robust lead management platform with Angular and CodeIgniter, featuring dashboards, role-based access, CSV imports, and performance-optimized queries. Enabled detailed reporting and dynamic lead assignment.
			Created modules for agent and lead management,	with features like bulk	assignments	and	status	updates.</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3>MCUBE MASTER PANEL</h3>
            <p>Led enhancements and maintenance of the MCUBE Master Panel, resolving bugs, optimizing performance, and implementing user-requested features. Ensured smooth operation and scalability with structured code and clear documentation. Streamlined	project	workflows	by	optimizing code	structure and improving	existing functionalities.
			Worked on REST API development,responsive UI.</p>
          </div>
          <div className="project-card" data-aos="zoom-in">
            <h3> Guest Management App(PG-GuestConnect)</h3>
            <p>Successfully	built a	comprehensive Guest	Management App for Paying Guests(PGs) utilizing the Angular,Ionic,and Capacitor framework.
			This app caters	to	the	specific needs	of	PG	accommodations,	providing essential	features	such as	KYC	submission,	payments using UPI
			and	Razorpay,complaints	management,	and	other	necessary functionalities to enhance the overall experience for both guests	and	PG administrators.</p>
          </div>
		  <div className="project-card" data-aos="zoom-in">
            <h3>PG Management System</h3>
            <p>Developed and managed a PG(PayingGuest)	Management System that handled	guest	enrollment,roombookings,stay duration tracking,	and	integrated paymentprocessing,providing	a	seamless experience	for	both guests	and	administrators.
			Managed	the	entire guest enrollment	process,	including data collection,validation,and	profile	creation.
			Enabled	guests to bookrooms,trackbooking	status,and manage reservations efficiently	through	an intuitive userinterface.</p>
          </div>
        </div>

      </section>

      <section id="education" className="container" data-aos="fade-up">
        <h2>Education</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-content">
              <h3>B.Tech – Civil Engineering</h3>
              <span className="timeline-date">2019 – 2023</span>
              <p>JNTU College of Engineering Pulivendula</p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="container" data-aos="fade-up">
        <h2>Contact Me</h2>
        <p><strong>Email:</strong> <a href="mailto:jupallesivaparvathi@gmail.com">jupallesivaparvathi@gmail.com</a></p>
        <p><strong>Phone:</strong> <a href="tel:+917780787875">+91 9014742697</a></p>
        <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sivaparvathi-jupalle-8a4822249" target="_blank" rel="noopener noreferrer">linkedin.com/in/sivaparvathi-jupalle</a></p>
      </section>

      {showTopBtn && (
        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          title="Back to top"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default App;
