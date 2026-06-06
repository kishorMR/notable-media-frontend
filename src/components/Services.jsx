import { useEffect, useRef, useState } from 'react';
import './Services.css';

const services = [
  {
    id: '01',
    title: 'Website Development',
    tagline: 'Built to Perform. Designed to Impress.',
    desc: 'We craft fast, responsive, pixel-perfect websites that convert visitors into customers. From sleek landing pages to full-scale web applications — every line of code is intentional.',
    features: ['Custom UI/UX Design', 'React & Next.js', 'SEO Optimised', 'Mobile First'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M4 16h40" stroke="currentColor" strokeWidth="2"/>
        <circle cx="11" cy="12" r="2" fill="currentColor"/>
        <circle cx="17" cy="12" r="2" fill="currentColor"/>
        <circle cx="23" cy="12" r="2" fill="currentColor"/>
        <path d="M15 26l-4 4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M33 26l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M27 24l-6 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#e91e8c',
    gradFrom: 'rgba(233,30,140,0.12)',
  },
  {
    id: '02',
    title: 'AI Chatbots & Automation',
    tagline: 'Your Business, Running 24/7.',
    desc: 'We build intelligent AI-powered chatbots and automation pipelines that eliminate repetitive work, delight customers, and scale your operations — without scaling your headcount.',
    features: ['Custom LLM Integration', 'Workflow Automation', 'CRM & API Sync', '24/7 Operation'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="14" width="28" height="22" rx="4" stroke="currentColor" strokeWidth="2"/>
        <circle cx="18" cy="25" r="2.5" fill="currentColor"/>
        <circle cx="30" cy="25" r="2.5" fill="currentColor"/>
        <path d="M20 31c1 1.5 2.5 2 4 2s3-0.5 4-2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 14V8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17 8h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M10 36l-3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M38 36l3 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="36" cy="18" r="3" fill="rgba(180,79,220,0.3)" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M35 18h2M36 17v2" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#b44fdc',
    gradFrom: 'rgba(180,79,220,0.12)',
  },
  {
    id: '03',
    title: 'Social Media Marketing',
    tagline: 'Content that Stops the Scroll.',
    desc: 'Strategic social media management, content creation, and growth campaigns designed to build your brand authority, grow your audience, and turn followers into paying customers.',
    features: ['Content Strategy', 'Reels & Short-form', 'Paid Ad Campaigns', 'Analytics & Reports'],
    icon: (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 36 L20 22 L28 30 L36 18 L44 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="20" cy="22" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="28" cy="30" r="3" fill="currentColor" opacity="0.5"/>
        <circle cx="36" cy="18" r="3" fill="currentColor" opacity="0.5"/>
        <path d="M40 10 L44 10 L44 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M44 10 L36 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    accent: '#ff6b6b',
    gradFrom: 'rgba(255,107,107,0.12)',
  },
];

export default function Services() {
  const sectionRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorDotRef = useRef(null);
  const [activeCard, setActiveCard] = useState(null);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const cursorPos = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const cursorEl = cursorRef.current;
    const dotEl = cursorDotRef.current;
    if (!section || !cursorEl || !dotEl) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      dotEl.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
    };
    const onEnter = () => { cursorEl.style.opacity = '1'; dotEl.style.opacity = '1'; };
    const onLeave = () => { cursorEl.style.opacity = '0'; dotEl.style.opacity = '0'; };

    const animate = () => {
      cursorPos.current.x += (mouse.current.x - cursorPos.current.x) * 0.08;
      cursorPos.current.y += (mouse.current.y - cursorPos.current.y) * 0.08;
      cursorEl.style.transform = `translate(${cursorPos.current.x - 20}px, ${cursorPos.current.y - 20}px)`;
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseenter', onEnter);
    section.addEventListener('mouseleave', onLeave);
    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseenter', onEnter);
      section.removeEventListener('mouseleave', onLeave);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section id="services" className="services-section" ref={sectionRef}>
      <div className="cursor-ring" ref={cursorRef} />
      <div className="cursor-dot" ref={cursorDotRef} />
      <div className="services-grid-bg" />
      <div className="services-inner">
        <div className={`services-header ${visible ? 'revealed' : ''}`}>
          <span className="services-tag">What We Offer</span>
          <h2 className="services-title">
            Three Ways We <span className="title-accent">Grow Your</span> Business
          </h2>
          <p className="services-subtitle">
            Every service is built around one goal — making your brand impossible to ignore.
          </p>
        </div>

        <div className="services-cards">
          {services.map((svc, i) => (
            <div
              key={svc.id}
              className={`svc-card ${visible ? 'revealed' : ''} ${activeCard === i ? 'hovered' : ''}`}
              style={{ '--delay': `${0.15 + i * 0.15}s`, '--accent': svc.accent, '--grad-from': svc.gradFrom }}
              onMouseEnter={() => setActiveCard(i)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div className="card-glow" />
              <span className="svc-num">{svc.id}</span>
              <div className="svc-icon" style={{ color: svc.accent }}>{svc.icon}</div>
              <h3 className="svc-title">{svc.title}</h3>
              <p className="svc-tagline" style={{ color: svc.accent }}>{svc.tagline}</p>
              <p className="svc-desc">{svc.desc}</p>
              <div className="svc-features">
                {svc.features.map((f) => (
                  <span key={f} className="svc-pill">{f}</span>
                ))}
              </div>
              <button className="svc-cta">
                Learn More
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="card-bar" style={{ background: svc.accent }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
