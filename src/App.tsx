import React, { useState } from 'react';
import {
  ArrowUpRight,
  Award,
  BriefcaseBusiness,
  FileText,
  Github,
  Linkedin,
  Mail,
  Menu,
  MapPin,
  Phone,
  Sparkles,
  X,
} from 'lucide-react';
import './App.css';

type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
};

type Project = {
  title: string;
  meta: string;
  description: string;
  stack: string[];
  link?: string;
};

const links = {
  portfolio: 'https://jayb71.github.io/',
  github: 'https://github.com/jayb71',
  linkedin: 'https://linkedin.com/in/jayb71',
  email: 'mailto:jaybharambe42@gmail.com',
  phone: 'tel:+917972323518',
  resume: '/Jay_Bharambe_Resume.pdf',
};

const skillGroups = [
  {
    title: 'ML / Deep Learning',
    skills: ['PyTorch', 'scikit-learn', 'HuggingFace Transformers', 'CNNs', 'model fine-tuning'],
  },
  {
    title: 'NLP / LLMs',
    skills: ['LangChain', 'LLM fine-tuning', 'prompt engineering', 'mBART', 'XLM-R'],
  },
  {
    title: 'Stats / Causal Inference',
    skills: ['Regression', 'classification', 'mixed-effects modelling', 'Difference-in-Differences'],
  },
  {
    title: 'Data at Scale',
    skills: ['PySpark', 'Databricks', 'FAISS', 'Pandas', 'NumPy'],
  },
  {
    title: 'Engineering',
    skills: ['Python', 'SQL', 'Dart', 'Flask', 'Git', 'Bash', 'Jupyter', 'VS Code'],
  },
];

const experience: Experience[] = [
  {
    role: 'Data Science Intern',
    company: 'MiQ Digital',
    location: 'Bengaluru',
    period: 'Jan 2026 - Jun 2026',
    highlights: [
      'Built the UK reach-curve estimator, adopted by clients and unlocking about $100K in new revenue.',
      'Designed a FAISS similarity-search pipeline for UK postcode matching across economic and population data, improving match accuracy from 85% to 95%.',
      'Delivered Difference-in-Differences KPI lift measurement across UK clients and modelled client-level effects with mixed-effects methods.',
    ],
  },
  {
    role: 'Android Development Intern',
    company: 'SimDaaS',
    location: 'Kanpur',
    period: 'May 2025 - Dec 2025',
    highlights: [
      'Built a Flutter app to remotely control a real-time autonomous IoT sprayer over MQTT.',
      'Shipped internal procurement and leave-management tools backed by Supabase SQL and Firebase NoSQL systems.',
    ],
  },
];

const projects: Project[] = [
  {
    title: 'CAMBART',
    meta: 'BS Thesis, IISER Bhopal',
    description:
      'Character-aware multilingual NLP framework for code-mixed Hinglish, built on frozen mBART-50 and XLM-R backbones with lightweight character-injection adapters.',
    stack: ['PyTorch', 'mBART-50', 'XLM-R', 'CharCNN', 'NLP'],
    link: 'https://github.com/jayb71/CAMBART',
  },
  {
    title: 'LLM Capabilities for Complex Semantic Tasks',
    meta: 'ISL Lab, IISER Bhopal',
    description:
      'Benchmarked LLMs on humor, hate speech, code-mixed detection, and translation quality, designing prompt pipelines for better English-Hindi semantic transfer.',
    stack: ['LLMs', 'prompt engineering', 'code-mixed NLP', 'evaluation'],
    link: 'https://github.com/jayb71/code_mixed_hate_detection',
  },
  {
    title: 'Pix2Struct Fine-Tuning',
    meta: 'Image-to-HTML generation',
    description:
      'Fine-tuned a vision-language model on WebSight to generate HTML from webpage screenshots, demonstrating multimodal sequence-to-sequence modelling.',
    stack: ['Pix2Struct', 'WebSight', 'vision-language models', 'HTML'],
    link: 'https://github.com/jayb71/image-to-code/tree/main/pix2struct',
  },
  {
    title: 'Graph-Based Movie Recommendation System',
    meta: 'Recommendation systems',
    description:
      'Modelled users and movies as graph nodes, combining collaborative and content-based filtering with Louvain community detection.',
    stack: ['Graphs', 'Louvain', 'recommendation systems', 'Python'],
    link: 'https://github.com/jayb71/Graph-Based-Movie-Recommendation-System',
  },
];

const achievements = [
  'Finalist, Smart India Hackathon 2023',
  'Rank 3, Status Code 2 - Vultr Track, 2025',
  'Finalist, Armacode 0, 2025',
  'Senior Developer, Coding & Networking Club, IISER Bhopal',
  'Developer, VISTAR Cell, Dept. of Data Science & Engineering, IISER Bhopal',
];

const navItems = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
  { label: 'Resume', href: links.resume, isDocument: true },
];

function ButtonLink({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const opensNewTab = href.startsWith('http') || href.endsWith('.pdf');

  return (
    <a className={`button-link ${variant}`} href={href} target={opensNewTab ? '_blank' : undefined} rel={opensNewTab ? 'noreferrer' : undefined}>
      <span className="button-sheen" aria-hidden="true" />
      <span className="button-content">{children}</span>
    </a>
  );
}

function SectionHeading({ eyebrow, title, italic }: { eyebrow: string; title: string; italic: string }) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <h2>
        {title} <em>{italic}</em>
      </h2>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="portfolio-shell">
      <div className="paper-grain" aria-hidden="true" />
      <div className="grid-lines" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <nav className="site-nav" aria-label="Primary navigation">
        <a className="brand" href="#profile">
          Jay Bharambe
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
        </button>
        <div className="nav-links" id="mobile-navigation" data-open={menuOpen}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.isDocument ? '_blank' : undefined}
              rel={item.isDocument ? 'noreferrer' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <section id="profile" className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span />
            Data Scientist / ML-AI Engineer
          </div>
          <h1>
            Jay <em>Bharambe</em>
          </h1>
          <p className="intro">
            Data Scientist building production analytics, causal measurement, and multilingual AI systems across PySpark,
            PyTorch, NLP, and large-scale AdTech data.
          </p>
          <div className="hero-actions">
            <ButtonLink href={links.email}>Start a conversation</ButtonLink>
            <ButtonLink href={links.github} variant="secondary">
              View GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
            </ButtonLink>
            <ButtonLink href={links.resume} variant="secondary">
              Resume <FileText size={14} strokeWidth={1.5} />
            </ButtonLink>
          </div>
        </div>

        <figure className="hero-image group-image">
          <img src="/jay.jpeg" alt="Stylized portrait of Jay Bharambe" />
          <figcaption>Portfolio / Vol. 2026</figcaption>
        </figure>

        {/* <div className="hero-stats" aria-label="Career highlights">
          <div>
            <strong>$100K</strong>
            <span>client revenue unlocked through reach-curve analytics</span>
          </div>
          <div>
            <strong>95%</strong>
            <span>postcode matching accuracy after FAISS pipeline redesign</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>B.S. Data Science, IISER Bhopal</span>
          </div>
        </div> */}
      </section>

      <section id="experience" className="content-section dark-section">
        <SectionHeading eyebrow="Work" title="Professional" italic="Experience" />
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.company}-${item.role}`}>
              <div className="timeline-meta">
                <span>{item.period}</span>
                <span>
                  <MapPin size={13} strokeWidth={1.5} />
                  {item.location}
                </span>
              </div>
              <div className="timeline-body">
                <h3>{item.role}</h3>
                <p>{item.company}</p>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="content-section">
        <SectionHeading eyebrow="Projects" title="Research and" italic="systems" />
        <div className="project-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-index">{String(index + 1).padStart(2, '0')}</div>
              <div>
                <p className="project-meta">{project.meta}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="tag-row">
                {project.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              {project.link && (
                <a className="project-link" href={project.link} target="_blank" rel="noreferrer">
                  GitHub <ArrowUpRight size={14} strokeWidth={1.5} />
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="content-section split-section">
        <div>
          <SectionHeading eyebrow="Stack" title="Methods with" italic="range" />
          <p className="dropcap-copy">
            From statistical modelling and causal inference to transformer fine-tuning and product-minded analytics, I like
            work where research ideas have to survive real users, noisy data, and business constraints.
          </p>
        </div>
        <div className="skill-list">
          {skillGroups.map((group) => (
            <article key={group.title}>
              <h3>{group.title}</h3>
              <div className="tag-row">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section dark-section achievements-section">
        <SectionHeading eyebrow="Recognition" title="Signals of" italic="craft" />
        <div className="achievement-grid">
          {achievements.map((achievement) => (
            <div className="achievement" key={achievement}>
              <Award size={18} strokeWidth={1.5} />
              <span>{achievement}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-copy">
          <Sparkles size={18} strokeWidth={1.5} />
          <h2>
            Building AI that is <em>measured</em>, useful, and shippable.
          </h2>
          <p>Currently seeking Data Scientist, ML Engineer, or AI Engineer roles.</p>
        </div>
        <div className="contact-panel">
          <a href={links.email}>
            <Mail size={18} strokeWidth={1.5} />
            jaybharambe42@gmail.com
          </a>
          <a href={links.phone}>
            <Phone size={18} strokeWidth={1.5} />
            +91 7972323518
          </a>
          <a href={links.github} target="_blank" rel="noreferrer">
            <Github size={18} strokeWidth={1.5} />
            github.com/jayb71
          </a>
          <a href={links.linkedin} target="_blank" rel="noreferrer">
            <Linkedin size={18} strokeWidth={1.5} />
            linkedin.com/in/jayb71
          </a>
          <span>
            <BriefcaseBusiness size={18} strokeWidth={1.5} />
            Bengaluru, Karnataka
          </span>
        </div>
      </section>
    </main>
  );
}

export default App;
