import Link from "next/link";

export const metadata = {
  title: "AI Face Analyzer — Learn Computer Vision & ML | Tynixor",
  description:
    "Educational tracks exploring facial recognition, computer vision, and machine learning — with an ethics-first approach.",
};

const TRACKS = [
  {
    title: "Personality Detection",
    desc: "Learn how facial-analysis models attempt to correlate features and expressions with personality traits. Covers tools like MediaPipe and scikit-learn, with notes on the ethical limits of these approaches. ⏳ 2-6 weeks",
    href: "https://aifaceanalyzer.netlify.app",
  },
  {
    title: "Mood & Emotion Scanning",
    desc: "Explore micro-expression detection and valence-arousal emotion models using OpenCV and TensorFlow Lite. Includes guidance on consent and appropriate use. ⏳ 4-8 weeks",
    href: "https://aifaceanalyzer.netlify.app",
  },
  {
    title: "Generative Face Tech",
    desc: "Learn how GAN-based tools simulate aging or generate digital avatars, and the privacy considerations involved in this kind of technology. ⏳ 6-12 weeks",
    href: "https://aifaceanalyzer.netlify.app",
  },
  {
    title: "Ethical & Advanced AI",
    desc: "Study bias mitigation and privacy-preserving techniques like federated learning. Covers fairness auditing tools such as Fairlearn. ⏳ Varies",
    href: "https://aifaceanalyzer.netlify.app",
  },
  {
    title: "AR & Real-World Applications",
    desc: "Learn how AR filters and emotion-aware interfaces are built with tools like ARKit, ARCore, and Spark AR — with attention to user data controls. ⏳ 8-16 weeks",
    href: "https://aifaceanalyzer.netlify.app",
  },
];

export default function FaceAnalysisPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">AI Face Analyzer: Learn Computer Vision & ML</h1>
          <h2 className="hero-subtitle-anim">
            Educational tracks in facial recognition, CV & machine learning
          </h2>
          <p className="hero-subtitle">
            Explore how AI systems interpret facial features and expressions
            — through an ethics-first, educational lens. Free tutorials and
            hands-on learning tracks.
          </p>
          <div className="hero-cta">
            <a
              href="https://aifaceanalyzer.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Explore the Tool
            </a>
            <a href="#paths" className="btn btn-secondary">
              See Learning Tracks
            </a>
          </div>
        </div>
      </section>

      <section id="paths">
        <div className="container">
          <h2 className="section-title">Learning Tracks</h2>
          <p className="section-subtitle">
            Structured paths from fundamentals to advanced computer-vision
            topics, with ethical considerations built in.
          </p>
          <div className="card-grid">
            {TRACKS.map((t) => (
              <div className="card" key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.desc}</p>
                <a
                  href={t.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ marginTop: 12, padding: "8px 16px", fontSize: 13.5 }}
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p
            style={{
              maxWidth: 640,
              margin: "0 auto 24px",
              textAlign: "center",
              color: "var(--text-mid)",
              fontSize: 14.5,
            }}
          >
            Note: results from facial-analysis tools are experimental and
            should be treated as educational demonstrations, not scientific
            or diagnostic assessments of any individual.
          </p>
          <div style={{ textAlign: "center" }}>
            <Link href="/" className="btn btn-secondary">
              ← Back to Tynixor
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
