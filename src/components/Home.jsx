import { useState, useEffect } from 'react';
import './Home.css';

const slides = [
  {
    bg: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2ab?w=1600&q=80',
    tag: 'Creative Agency',
    headline: 'Your website needs more than just visibility.\nIt needs Advantage',
    sub: 'Notable Media crafts powerful brand narratives through film, photography, and digital content that leaves a lasting impression.',
    cta: 'Explore Our Work',
  },
  {
    bg: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1600&q=80',
    tag: 'Visual Excellence',
    headline: 'Your digital presence should work as hard as you do.',
    sub: 'From concept to final cut, our team brings cinematic precision to every project — big or small.',
    cta: 'See Our Portfolio',
  },
  {
    bg: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=80',
    tag: 'Brand Identity',
    headline: 'Your Brand,\nAmplified',
    sub: "We partner with bold brands to create media that doesn't just communicate — it resonates.",
    cta: 'Work With Us',
  },
];

const features = [
  {
    icon: '🎬',
    title: 'Video Production',
    desc: 'Cinematic brand films, reels, and commercials crafted to captivate your audience and drive real results.',
  },
  {
    icon: '📸',
    title: 'Photography',
    desc: 'High-impact product, event, and editorial photography that defines your visual identity.',
  },
  {
    icon: '✦',
    title: 'Digital Strategy',
    desc: 'Data-driven content strategies that put your media in front of the right eyes at the right time.',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (indexOrFn) => {
    setAnimating(true);
    setTimeout(() => {
      setCurrent(typeof indexOrFn === 'function' ? indexOrFn(current) : indexOrFn);
      setAnimating(false);
    }, 400);
  };

  const slide = slides[current];

  return (
    <section id="home" className="home-section">
      {/* ── Hero Slider ── */}
      <div className="hero">
        <div
          className={`hero-bg ${animating ? 'fading' : ''}`}
          style={{ backgroundImage: `url(${slide.bg})` }}
        />
        <div className="hero-overlay" />

        <div className={`hero-content ${animating ? 'fading' : ''}`}>
          <span className="hero-tag">{slide.tag}</span>
          <h1 className="hero-headline">
            {slide.headline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="hero-sub">{slide.sub}</p>
          <button className="hero-cta">{slide.cta}</button>
        </div>

        {/* Dots */}
        <div className="hero-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="hero-progress">
          <div
            key={current}
            className="hero-progress-fill"
          />
        </div>
      </div>

      {/* ── Feature Cards ── */}
      <div className="features-grid">
        {features.map((f, i) => (
          <div className="feature-card" key={i}>
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
