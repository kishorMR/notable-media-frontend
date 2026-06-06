import { useState, useRef, useEffect } from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    category: 'Website Development',
    categoryColor: '#e91e8c',
    title: 'Luxe Interiors — Brand Website',
    description:
      'A full-scale, high-performance website built for a premium interior design studio. Features cinematic scroll animations, an interactive portfolio gallery, and a custom booking system.',
    tags: ['React', 'Next.js', 'Framer Motion'],
    youtubeId: 'dQw4w9WgXcQ',
    year: '2024',
  },
  {
    id: '02',
    category: 'AI Chatbots & Automation',
    categoryColor: '#b44fdc',
    title: 'ShopBot AI — E-commerce Assistant',
    description:
      'An intelligent AI chatbot deployed for an e-commerce brand that handles customer queries, recommends products, processes returns, and automates order tracking — 24/7 with zero human input.',
    tags: ['LLM', 'n8n Automation', 'API Integration'],
    youtubeId: 'dQw4w9WgXcQ',
    year: '2024',
  },
  {
    id: '03',
    category: 'Social Media Marketing',
    categoryColor: '#ff6b6b',
    title: 'Pulse Clothing — Growth Campaign',
    description:
      'A 3-month social media growth campaign for a fashion brand that grew their Instagram from 4K to 38K followers, drove a 220% increase in website traffic, and generated $80K in attributed revenue.',
    tags: ['Instagram', 'Reels Strategy', 'Paid Ads'],
    youtubeId: 'dQw4w9WgXcQ',
    year: '2024',
  },
];

function YoutubeModal({ videoId, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      className="modal-overlay"
      ref={overlayRef}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div className="modal-box">
        <button className="modal-close" onClick={onClose} aria-label="Close video">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M2 2l14 14M16 2L2 16" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
          </svg>
        </button>
        <div className="modal-video-wrap">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Project Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeVideo, setActiveVideo] = useState(null);
  const [visible, setVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects-section" ref={sectionRef}>
      <div className="projects-noise" />

      <div className="projects-inner">
        {/* Header */}
        <div className={`projects-header ${visible ? 'revealed' : ''}`}>
          <span className="projects-tag">Our Work</span>
          <h2 className="projects-title">
            Featured <span className="projects-title-accent">Projects</span>
          </h2>
          <p className="projects-subtitle">
            Real results for real businesses. Click any project to watch the full case study.
          </p>
        </div>

        {/* Cards */}
        <div className="proj-grid">
          {projects.map((proj, i) => (
            <div
              key={proj.id}
              className={`proj-card ${visible ? 'revealed' : ''} ${hoveredCard === i ? 'hovered' : ''}`}
              style={{ '--delay': `${0.1 + i * 0.15}s`, '--accent': proj.categoryColor }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Glow */}
              <div className="proj-glow" />

              {/* Top row */}
              <div className="proj-top">
                <div className="proj-meta">
                  <span
                    className="proj-category"
                    style={{ color: proj.categoryColor, borderColor: `${proj.categoryColor}40`, background: `${proj.categoryColor}12` }}
                  >
                    {proj.category}
                  </span>
                  <span className="proj-year">{proj.year}</span>
                </div>
                <span className="proj-num">{proj.id}</span>
              </div>

              {/* YouTube Thumbnail */}
              <div
                className="proj-thumb"
                onClick={() => setActiveVideo(proj.youtubeId)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setActiveVideo(proj.youtubeId)}
                aria-label={`Watch ${proj.title} video`}
              >
                <img
                  src={`https://img.youtube.com/vi/${proj.youtubeId}/hqdefault.jpg`}
                  alt={proj.title}
                  className="proj-thumb-img"
                />
                <div className="proj-thumb-overlay" />
                {/* Play button */}
                <div className="play-btn" style={{ '--accent': proj.categoryColor }}>
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <circle cx="11" cy="11" r="10" stroke="white" strokeWidth="1.5" fill="rgba(0,0,0,0.45)"/>
                    <path d="M9 7.5l7 3.5-7 3.5V7.5z" fill="white"/>
                  </svg>
                  <span>Watch Case Study</span>
                </div>
              </div>

              {/* Content */}
              <div className="proj-body">
                <h3 className="proj-title">{proj.title}</h3>
                <p className="proj-desc">{proj.description}</p>

                {/* Tags */}
                <div className="proj-tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="proj-tag-pill" style={{ '--accent': proj.categoryColor }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Footer */}
                <div className="proj-footer">
                  <button
                    className="proj-watch-btn"
                    style={{ '--accent': proj.categoryColor }}
                    onClick={() => setActiveVideo(proj.youtubeId)}
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
                      <path d="M7.5 1.5C4.19 1.5 1.5 4.19 1.5 7.5S4.19 13.5 7.5 13.5 13.5 10.81 13.5 7.5 10.81 1.5 7.5 1.5zm-1 8.75V4.75l4 2.75-4 2.75z" fill="currentColor"/>
                    </svg>
                    Watch Video
                  </button>
                  <button className="proj-details-btn">
                    View Details
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M2 6.5h9M8 3l3 3.5-3 3.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Side accent bar */}
              <div className="proj-side-bar" style={{ background: proj.categoryColor }} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`projects-cta-row ${visible ? 'revealed' : ''}`}>
          <p className="projects-cta-text">Have a project in mind?</p>
          <button
            className="projects-cta-btn"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Let's Talk
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
              <path d="M2 7.5h11M9 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <YoutubeModal
          videoId={activeVideo}
          onClose={() => setActiveVideo(null)}
        />
      )}
    </section>
  );
}
