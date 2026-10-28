<script setup lang="ts">
import { ref } from 'vue'

useSeoMeta({
  title: 'Rashid Ismael Rashid | Aspiring Software Developer',
  description:
    'Meet Rashid Ismael Rashid, an Applied Computer Technology student exploring software development, practical technology, and community leadership.',
})

const menuOpen = ref(false)

const projects = [
  {
    number: '01',
    category: 'WEB DEVELOPMENT',
    title: 'CompostPulse',
    description:
      'A web development project focused on composting and sustainable waste management. Built with modern web technologies.',
    technologies: ['Nuxt', 'Vue.js', 'TypeScript'],
    icon: 'CP',
    style: 'green',
    status: 'Website project',
  },
  {
    number: '02',
    category: 'IOT & EMBEDDED SYSTEMS',
    title: 'Smart Flood Detection',
    description:
      'An Arduino-based flood detection and control system designed to monitor water levels, provide alerts, and support automated responses.',
    technologies: ['Arduino', 'C/C++', 'Sensors'],
    icon: 'IoT',
    style: 'blue',
    status: 'Academic project',
  },
  {
    number: '03',
    category: 'DATABASE DEVELOPMENT',
    title: 'Immunization Management',
    description:
      'A desktop application concept for managing children’s immunization records and organizing information in a MySQL database.',
    technologies: ['Java', 'Swing', 'MySQL'],
    icon: 'DB',
    style: 'purple',
    status: 'Academic project',
  },
]

const skillGroups = [
  {
    title: 'Programming',
    skills: ['Java', 'JavaScript', 'TypeScript', 'Python', 'C/C++'],
  },
  {
    title: 'Web development',
    skills: ['Vue.js', 'Nuxt', 'HTML', 'CSS', 'Responsive design'],
  },
  {
    title: 'Data & systems',
    skills: ['MySQL', 'SQL', 'Operating systems', 'Data structures'],
  },
  {
    title: 'Networking & tools',
    skills: ['Computer networks', 'Git', 'VS Code', 'Arduino'],
  },
]

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <div>
    <header class="site-header">
      <nav class="container nav-bar" aria-label="Main navigation">
        <a class="brand" href="#home" @click="closeMenu">
          <span class="brand-mark">R</span>
          <span>Rashid<span class="brand-dot">.</span></span>
        </a>

        <button
          class="menu-toggle"
          type="button"
          :aria-expanded="menuOpen"
          aria-label="Toggle navigation"
          @click="menuOpen = !menuOpen"
        >
          {{ menuOpen ? 'Close' : 'Menu' }}
        </button>

        <div class="nav-links" :class="{ 'nav-open': menuOpen }">
          <a href="#about" @click="closeMenu">About</a>
          <a href="#projects" @click="closeMenu">Projects</a>
          <a href="#skills" @click="closeMenu">Skills</a>
          <a href="#education" @click="closeMenu">Education</a>
          <a href="#leadership" @click="closeMenu">Leadership</a>
          <a class="nav-contact" href="#contact" @click="closeMenu">
            Contact me ↗
          </a>
        </div>
      </nav>
    </header>

    <main>
      <section id="home" class="hero section">
        <div class="container hero-grid">
          <div class="hero-content">
            <div class="availability">
              <span class="status-dot"></span>
              SOFTWARE DEVELOPER &amp; CYBER SECURITY
            </div>

            <p class="eyebrow">HELLO, I'M</p>
            <h1>
              Rashid Ismael<br />
              <span>Rashid.</span>
            </h1>

            <h2>
              A Software Developer
              <span class="muted-heading">&amp; Cyber Security Enthusiast</span>
            </h2>

            <p class="hero-description">
              I build technology-driven solutions, explore new ideas, and use
              software development to solve practical problems. I am passionate
              about continuous learning, innovation, and meaningful impact.
            </p>

            <div class="hero-actions">
              <a class="button button-primary" href="#projects">
                Explore my work <span>↗</span>
              </a>
              <a class="button button-secondary" href="#contact">
                Let's connect
              </a>
            </div>

            <div class="hero-note">
              <span class="note-line"></span>
              <span>Technology · Problem-solving · Leadership</span>
            </div>
          </div>

          <div class="hero-visual">
            <div class="visual-glow"></div>
            <img
              src="/rashid.jpeg"
              alt="Portrait of Rashid Ismael Rashid"
              class="profile-image"
              fetchpriority="high"
            />
          </div>
        </div>

        <div class="container quick-facts">
          <div>
            <span class="fact-number">01</span>
            <span class="fact-label">Build</span>
          </div>
          <div>
            <span class="fact-number">02</span>
            <span class="fact-label">Learn</span>
          </div>
          <div>
            <span class="fact-number">03</span>
            <span class="fact-label">Lead</span>
          </div>
          <div>
            <span class="fact-number">04</span>
            <span class="fact-label">Make an impact</span>
          </div>
        </div>
      </section>

      <section id="about" class="section section-light">
        <div class="container about-grid">
          <div>
            <p class="eyebrow">01 / ABOUT ME</p>
            <h2 class="section-title">
              Technology is a tool.<br />
              <span class="text-accent">Impact is the goal.</span>
            </h2>
          </div>

          <div class="about-copy">
            <p>
              I am a Bachelor of Science in Applied Computer Technology
              student at the United States International University–Africa
              (USIU-Africa), interested in software development, information
              systems, and emerging technologies.
            </p>
            <p>
              My learning journey includes building web applications,
              working with databases, exploring networking concepts, and
              developing practical technology projects.
            </p>
            <p>
              Beyond technology, I value integrity, service, collaboration,
              and leadership. I believe good technology should address real
              needs and create opportunities for people.
            </p>

            <a class="text-link" href="#education">
              More about my journey <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <section id="projects" class="section">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">02 / SELECTED WORK</p>
              <h2 class="section-title">
                Projects I've <span class="text-accent">explored.</span>
              </h2>
            </div>
            <p class="section-intro">
              A selection of software and technology projects that reflect
              my learning, creativity, and problem-solving interests.
            </p>
          </div>

          <div class="projects-grid">
            <article
              v-for="project in projects"
              :key="project.number"
              class="project-card"
            >
              <div class="project-art" :class="`art-${project.style}`">
                <span class="project-number">{{ project.number }}</span>
                <div class="project-symbol">{{ project.icon }}</div>
                <span class="project-category">{{ project.category }}</span>
              </div>

              <div class="project-body">
                <span class="project-status">{{ project.status }}</span>
                <h3>{{ project.title }}</h3>
                <p>{{ project.description }}</p>

                <div class="tag-list">
                  <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tag"
                  >
                    {{ tech }}
                  </span>
                </div>
              </div>
            </article>
          </div>

         <!--
<p class="section-footnote">
  Project descriptions are summaries. Add your GitHub repositories,
  screenshots, and live demos when they are ready.
</p>
-->
        </div>
      </section>

      <section id="skills" class="section section-dark">
        <div class="container">
          <p class="eyebrow">03 / TECHNICAL TOOLKIT</p>
          <h2 class="section-title">
            Skills I'm building<span class="text-accent">.</span>
          </h2>
          <p class="section-intro dark-intro">
            A growing toolkit shaped by coursework, practice, and project work.
          </p>

          <div class="skills-grid">
            <article
              v-for="(group, index) in skillGroups"
              :key="group.title"
              class="skill-card"
            >
              <span class="skill-index">
                {{ String(index + 1).padStart(2, '0') }}
              </span>
              <h3>{{ group.title }}</h3>
              <div class="skill-list">
                <span v-for="skill in group.skills" :key="skill">
                  {{ skill }}
                </span>
              </div>
            </article>
          </div>

         <!--
<p class="skills-note">
  This list represents technologies and topics I have studied or
  explored. Update it to reflect your current practical proficiency.
</p>
-->
        </div>
      </section>

      <section id="education" class="section section-light">
        <div class="container">
          <p class="eyebrow">04 / EDUCATION</p>
          <h2 class="section-title">
            My learning <span class="text-accent">journey.</span>
          </h2>

          <div class="timeline">
            <article class="timeline-item">
              <div class="timeline-marker"></div>
              <div class="timeline-content">
                <span class="timeline-label">CURRENT STUDIES</span>
                <h3>Bachelor of Science in Applied Computer Technology</h3>
                <p class="timeline-place">
                  United States International University–Africa (USIU-Africa)
                </p>
                <p>
                  Studying software development, programming, databases,
                  computer networks, operating systems, and related computing
                  disciplines.
                </p>
              </div>
            </article>
          </div>

          <div class="education-callout">
            <span class="callout-symbol">↗</span>
            <div>
              <h3>Always learning. Always improving.</h3>
              <p>
                My goal is to keep strengthening my technical foundation
                through practical projects, collaboration, and continued study.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" class="section">
        <div class="container leadership-grid">
          <div>
            <p class="eyebrow">05 / LEADERSHIP &amp; SERVICE</p>
            <h2 class="section-title">
              Leading with purpose<span class="text-accent">.</span>
            </h2>
            <p class="section-intro">
              I believe leadership is about service, accountability,
              listening, and helping others succeed.
            </p>
          </div>

          <div class="leadership-list">
            <article class="leadership-item">
              <div class="leadership-icon">01</div>
              <div>
                <h3>Mastercard Foundation Scholar Council</h3>
                <p class="leadership-role">President · USIU-Africa</p>
                <p>
                  Supporting scholar representation, communication,
                  participation, and constructive engagement with program
                  stakeholders.
                </p>
              </div>
            </article>

            <article class="leadership-item">
              <div class="leadership-icon">02</div>
              <div>
                <h3>Sudan and South Sudan Culture Week</h3>
                <p class="leadership-role">Chairman · USIU-Africa · 2024</p>
                <p>
                  Served as chairman of the event. The team won six trophies
                  during the culture week.
                </p>
              </div>
            </article>

            <article class="leadership-item">
              <div class="leadership-icon">03</div>
              <div>
                <h3>Martin Luther Family</h3>
                <p class="leadership-role">Family Father · 2025</p>
                <p>
                  Served as the father of the Martin Luther Family, supporting
                  and guiding members of the family.
                </p>
              </div>
            </article>

            <article class="leadership-item">
              <div class="leadership-icon">04</div>
              <div>
                <h3>Community engagement</h3>
                <p class="leadership-role">Service &amp; collaboration</p>
                <p>
                  Interested in initiatives that promote education,
                  inclusion, community development, and meaningful
                  opportunities for young people.
                </p>
              </div>
            </article>

            <article class="leadership-item">
              <div class="leadership-icon">05</div>
              <div>
                <h3>Leadership philosophy</h3>
                <p class="leadership-role">Integrity · Humility · Service</p>
                <p>
                  I value listening to different perspectives, acting
                  responsibly, learning from feedback, and working toward
                  shared goals.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" class="section contact-section">
        <div class="container contact-panel">
          <p class="eyebrow">06 / GET IN TOUCH</p>
          <h2>
            Have an idea?<br />
            <span>Let's build something meaningful.</span>
          </h2>
          <p>
            I'm interested in connecting with developers, collaborating on
            projects, learning from others, and exploring opportunities in
            technology.
          </p>
          <p class="contact-note">
            Get in touch to discuss technology, collaboration, or new
            opportunities.
          </p>
        </div>
      </section>
    </main>

    <footer class="site-footer">
      <div class="container footer-inner">
        <a class="brand footer-brand" href="#home">
          <span class="brand-mark">R</span>
          <span>Rashid<span class="brand-dot">.</span></span>
        </a>
        <p>Designed and developed with Vue.js &amp; Nuxt.</p>
        <a href="#home" class="back-top">Back to top ↑</a>
      </div>
      <div class="container copyright">
        © {{ new Date().getFullYear() }} Rashid Ismael Rashid.
        Built with purpose.
      </div>
    </footer>
  </div>
</template>
