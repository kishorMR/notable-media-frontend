import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './ServiceDetail.css';

const serviceData = {
  'web-development': {
    title: 'Website Development',
    tagline: 'Built to Perform. Designed to Impress.',
    accent: '#e91e8c',
    gradFrom: 'rgba(233,30,140,0.15)',
    emoji: '🌐',
    intro:
      'Your website is your hardest-working sales rep — it never sleeps, never calls in sick, and meets every potential customer before you do. We build websites that are fast, beautiful, and engineered to convert.',

    differentiators: [
      {
        title: 'We build for speed — not just looks',
        desc: 'Every site we ship scores 90+ on Google PageSpeed. A 1-second delay in load time reduces conversions by 7%. Our sites are optimised from the ground up — compressed assets, lazy loading, edge-cached delivery.',
      },
      {
        title: 'Mobile-first, always',
        desc: 'Over 70% of web traffic in India comes from mobile. We design for the smallest screen first and scale up — not the other way around. Your site will feel native on every device.',
      },
      {
        title: 'SEO baked in, not bolted on',
        desc: 'Semantic HTML, structured data, meta strategy, sitemap, and Core Web Vitals compliance are part of every build — not an add-on. You rank better from day one.',
      },
      {
        title: 'No templates. No shortcuts.',
        desc: 'Every site is custom-designed to your brand. We don\'t use WordPress themes or page builders. You get a unique codebase that you own completely.',
      },
      {
        title: 'Ongoing support included',
        desc: 'After launch, we don\'t disappear. Every package includes post-launch support, bug fixes, and a handover walkthrough so your team can manage content confidently.',
      },
    ],

    impact: [
      { stat: '3×', label: 'Average increase in time-on-site after redesign' },
      { stat: '90+', label: 'PageSpeed score on every site we ship' },
      { stat: '40%', label: 'Average uplift in lead form conversions' },
      { stat: '2 wks', label: 'Typical turnaround for a landing page' },
    ],

    packages: [
      {
        name: 'Landing Page',
        price: '₹25,000 – ₹45,000',
        duration: '1–2 weeks',
        ideal: 'Startups, campaigns, product launches',
        includes: [
          'Custom single-page design',
          'Mobile responsive',
          'Contact form integration',
          'Basic SEO setup',
          'Hosting guidance',
          '2 rounds of revisions',
        ],
      },
      {
        name: 'Business Website',
        price: '₹60,000 – ₹1,20,000',
        duration: '3–5 weeks',
        ideal: 'SMBs, agencies, service businesses',
        includes: [
          '5–10 custom pages',
          'CMS integration (edit content yourself)',
          'Blog or news section',
          'Advanced SEO + analytics',
          'WhatsApp / CRM integration',
          '3 months post-launch support',
        ],
        highlight: true,
      },
      {
        name: 'Web Application',
        price: '₹1,50,000 – ₹4,00,000+',
        duration: '6–12 weeks',
        ideal: 'SaaS products, booking platforms, portals',
        includes: [
          'Full-stack React + Spring Boot',
          'User authentication & dashboards',
          'Database design & API development',
          'Payment gateway integration',
          'Admin panel',
          '6 months support & maintenance',
        ],
      },
    ],
  },

  'ai-automation': {
    title: 'AI Chatbots & Automation',
    tagline: 'Your Business, Running 24/7.',
    accent: '#b44fdc',
    gradFrom: 'rgba(180,79,220,0.15)',
    emoji: '🤖',
    intro:
      'The businesses winning right now aren\'t working harder — they\'re automating smarter. We build AI systems that handle your repetitive work, respond to customers instantly, and give your team back hours every week.',

    differentiators: [
      {
        title: 'Custom AI — not a chatbot widget',
        desc: 'We don\'t install a generic chat plugin. We build AI trained on your business — your products, your tone, your FAQs, your processes. It knows your business as well as your best employee.',
      },
      {
        title: 'Connects to your existing tools',
        desc: 'Your AI can read and write to your CRM, send emails, update spreadsheets, book calendar appointments, and push data to any API. It fits into how you already work — not the other way around.',
      },
      {
        title: 'Handles the full conversation',
        desc: 'Not just FAQs — our bots can qualify leads, take orders, process returns, collect feedback, and hand off to a human at exactly the right moment with full context.',
      },
      {
        title: 'No-code automation pipelines',
        desc: 'Using tools like n8n and Make, we build visual automation workflows you can modify yourself. No engineering degree required to maintain what we build.',
      },
      {
        title: 'Measurable ROI from month one',
        desc: 'Every automation we build comes with a dashboard showing you exactly what it\'s doing — conversations handled, time saved, leads generated. You see the value immediately.',
      },
    ],

    impact: [
      { stat: '80%', label: 'Reduction in repetitive support queries' },
      { stat: '24/7', label: 'Customer response — zero human hours' },
      { stat: '3×', label: 'More leads qualified per day vs manual process' },
      { stat: '60%', label: 'Average team time saved on admin tasks' },
    ],

    packages: [
      {
        name: 'Starter Chatbot',
        price: '₹20,000 – ₹40,000',
        duration: '1–2 weeks',
        ideal: 'Businesses new to AI, FAQ automation',
        includes: [
          'Custom AI chatbot for website',
          'Trained on your FAQs & content',
          'WhatsApp or web deployment',
          'Lead capture & email notification',
          'Basic analytics dashboard',
          '1 month of tweaks included',
        ],
      },
      {
        name: 'Business Automation Suite',
        price: '₹60,000 – ₹1,50,000',
        duration: '3–6 weeks',
        ideal: 'Teams spending hours on repetitive tasks',
        includes: [
          'Full AI chatbot with CRM integration',
          'Automated lead follow-up sequences',
          'Appointment booking automation',
          'Invoice / document generation',
          'Slack / email notification workflows',
          '3 months support',
        ],
        highlight: true,
      },
      {
        name: 'Enterprise AI System',
        price: '₹2,00,000 – ₹5,00,000+',
        duration: '8–16 weeks',
        ideal: 'Large teams, complex workflows, high volume',
        includes: [
          'Multi-agent AI pipeline',
          'Custom LLM fine-tuning',
          'ERP / database integration',
          'Internal operations automation',
          'Staff training & documentation',
          '12 months support SLA',
        ],
      },
    ],
  },

  'social-marketing': {
    title: 'Social Media Marketing',
    tagline: 'Content that Stops the Scroll.',
    accent: '#ff6b6b',
    gradFrom: 'rgba(255,107,107,0.15)',
    emoji: '📈',
    intro:
      'Posting randomly and hoping for growth is not a strategy. We bring data, creative direction, and paid amplification together into a system that consistently grows your audience and drives real revenue — not just likes.',

    differentiators: [
      {
        title: 'Strategy before content',
        desc: 'We start with a 30-day content audit and competitor analysis before creating a single post. Every piece of content serves a specific goal in your funnel — awareness, consideration, or conversion.',
      },
      {
        title: 'Reels-first creative direction',
        desc: 'Short-form video gets 3× the reach of static posts in 2025. We write scripts, direct shoots (or work with your existing footage), and edit Reels that are built to be shared — not just watched.',
      },
      {
        title: 'Paid ads that actually convert',
        desc: 'We manage Meta and Google ad campaigns with a direct-response focus — not brand awareness vanity metrics. Every rupee is tracked to a lead, sale, or measurable action.',
      },
      {
        title: 'You own the content calendar',
        desc: 'We share a live content calendar every month — you see every post before it goes live, can request changes, and always have full visibility. No surprises.',
      },
      {
        title: 'Monthly reports you can actually read',
        desc: 'No 40-page PDFs full of metrics that don\'t matter. Our monthly reports show reach, follower growth, leads generated, and ad spend ROI in plain language — under two pages.',
      },
    ],

    impact: [
      { stat: '8×', label: 'Average follower growth in first 90 days' },
      { stat: '220%', label: 'Average increase in profile website clicks' },
      { stat: '₹4.2', label: 'Average cost per lead on Meta ads' },
      { stat: '12', label: 'High-quality posts per month, minimum' },
    ],

    packages: [
      {
        name: 'Starter Growth',
        price: '₹15,000 / month',
        duration: 'Monthly retainer',
        ideal: 'Businesses just starting on social',
        includes: [
          '8 posts per month (static + carousel)',
          'Caption writing & hashtag strategy',
          'Story content (3× per week)',
          'Monthly performance report',
          'Community management (comments)',
          'Min. 3-month commitment',
        ],
      },
      {
        name: 'Growth + Reels',
        price: '₹30,000 – ₹45,000 / month',
        duration: 'Monthly retainer',
        ideal: 'Brands serious about rapid growth',
        includes: [
          '12 posts (mix of static, carousel, Reels)',
          '4 Reels per month — scripted & edited',
          'Paid ad management (up to ₹50K budget)',
          'Influencer outreach (2 per month)',
          'Bi-weekly strategy calls',
          'Competitor monitoring',
        ],
        highlight: true,
      },
      {
        name: 'Full-Service Marketing',
        price: '₹75,000 – ₹1,20,000 / month',
        duration: 'Monthly retainer',
        ideal: 'Established brands wanting market dominance',
        includes: [
          'Unlimited posts across all platforms',
          'Weekly Reels production',
          'Large-scale paid ad management',
          'Dedicated account manager',
          'Monthly brand content shoot',
          'Quarterly strategy review & roadmap',
        ],
      },
    ],
  },
};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const svc = serviceData[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!svc) {
    return (
      <div className="svc-detail-notfound">
        <h2>Service not found</h2>
        <button onClick={() => navigate('/')}>← Back to Home</button>
      </div>
    );
  }

  return (
    <div className="svc-detail-page">

      {/* Hero */}
      <div className="svc-detail-hero" style={{ '--accent': svc.accent, '--grad': svc.gradFrom }}>
        <div className="svc-detail-hero-bg" />
        <div className="svc-detail-hero-inner">
          <button className="svc-back-btn" onClick={() => navigate('/#services')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M12 8H4M4 8l4-4M4 8l4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Services
          </button>
          <div className="svc-detail-emoji">{svc.emoji}</div>
          <h1 className="svc-detail-title" style={{ color: svc.accent }}>{svc.title}</h1>
          <p className="svc-detail-tagline">{svc.tagline}</p>
          <p className="svc-detail-intro">{svc.intro}</p>
        </div>
      </div>

      {/* Impact Numbers */}
      <div className="svc-detail-impact" style={{ '--accent': svc.accent }}>
        {svc.impact.map((item, i) => (
          <div className="impact-item" key={i}>
            <span className="impact-stat" style={{ color: svc.accent }}>{item.stat}</span>
            <span className="impact-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Why We're Different */}
      <div className="svc-detail-section">
        <div className="svc-detail-section-inner">
          <div className="svc-section-label" style={{ color: svc.accent }}>Why Notable Media</div>
          <h2 className="svc-section-title">What makes us different</h2>
          <div className="svc-diff-list">
            {svc.differentiators.map((d, i) => (
              <div className="svc-diff-item" key={i} style={{ '--accent': svc.accent }}>
                <div className="svc-diff-check" style={{ background: svc.gradFrom, borderColor: svc.accent }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2.5 7l3 3 6-6" stroke={svc.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="svc-diff-content">
                  <h3 className="svc-diff-title">{d.title}</h3>
                  <p className="svc-diff-desc">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="svc-detail-pricing" style={{ '--accent': svc.accent }}>
        <div className="svc-detail-section-inner">
          <div className="svc-section-label" style={{ color: svc.accent }}>Transparent Pricing</div>
          <h2 className="svc-section-title">Choose your package</h2>
          <p className="svc-pricing-note">All prices are indicative. Final quote based on your specific requirements after a free discovery call.</p>
          <div className="svc-packages">
            {svc.packages.map((pkg, i) => (
              <div
                className={`svc-package ${pkg.highlight ? 'svc-package-highlight' : ''}`}
                key={i}
                style={{ '--accent': svc.accent, '--grad': svc.gradFrom }}
              >
                {pkg.highlight && (
                  <div className="svc-package-badge" style={{ background: svc.accent }}>Most Popular</div>
                )}
                <div className="svc-package-top">
                  <h3 className="svc-package-name">{pkg.name}</h3>
                  <div className="svc-package-price" style={{ color: svc.accent }}>{pkg.price}</div>
                  <div className="svc-package-meta">
                    <span>⏱ {pkg.duration}</span>
                    <span>✦ {pkg.ideal}</span>
                  </div>
                </div>
                <ul className="svc-package-includes">
                  {pkg.includes.map((item, j) => (
                    <li key={j}>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2.5 7l3 3 6-6" stroke={svc.accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <button
                  className="svc-package-cta"
                  style={pkg.highlight ? { background: svc.accent } : { borderColor: svc.accent, color: svc.accent }}
                  onClick={() => navigate('/#contact')}
                >
                  Get a Free Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="svc-detail-bottom-cta">
        <div className="svc-detail-section-inner" style={{ textAlign: 'center' }}>
          <h2 className="svc-bottom-cta-title">Ready to get started?</h2>
          <p className="svc-bottom-cta-sub">Book a free 30-minute discovery call. No pressure, no pitch — just a conversation about your goals.</p>
          <div className="svc-bottom-cta-btns">
            <button
              className="svc-bottom-primary"
              style={{ background: svc.accent }}
              onClick={() => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); }}
            >
              Contact Us →
            </button>
            <button
              className="svc-bottom-secondary"
              onClick={() => navigate('/')}
            >
              ← View All Services
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
