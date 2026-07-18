import Link from "next/link";

export const metadata = {
  title: "LearnTools — Free Career Roadmaps & Resources | Tynixor",
  description:
    "Free career roadmaps, tutorials, and project ideas for 30+ professions — from Doctor to Software Engineer.",
};

const FEATURES = [
  { icon: "🗺️", title: "Career Roadmaps", desc: "Step-by-step guides for 30+ professions with timelines, qualifications, skills, and challenges." },
  { icon: "📚", title: "Free Resources", desc: "Courses, books, journals, and communities to help you learn without paying for access." },
  { icon: "💡", title: "Project Ideas", desc: "Real-world projects to build portfolios — from coding apps to hands-on simulations." },
  { icon: "🎯", title: "Skill Development", desc: "Guidance, trend insights, and tips to help you navigate challenges in your field." },
];

const PROFESSIONS = [
  { name: "Doctor", path: "MBBS → Internship → Specialization | 10+ Years" },
  { name: "Software Engineer", path: "Foundations → Core Programming → Advanced Dev | 1-4 Years" },
  { name: "Lawyer", path: "LLB → Bar Exam → Practice | 5+ Years" },
  { name: "Artist", path: "Practice → Portfolio → Gigs | Variable" },
  { name: "Nurse", path: "BSc Nursing → Clinical Training → Specialization | 2-4 Years" },
  { name: "Entrepreneur", path: "Idea → MVP → Scaling | Variable" },
];

export default function LearnToolPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">LearnTools: Free Learning for Everyone</h1>
          <h2 className="hero-subtitle-anim">
            Career Roadmaps • Project Ideas • Free Tutorials • Skill Building
          </h2>
          <p className="hero-subtitle">
            Step-by-step roadmaps, free resources, and real-world projects for
            30+ professions. From Doctor to Software Engineer, build your
            future with Tynixor-powered tools.
          </p>
          <div className="hero-cta">
            <a
              href="https://learntools.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LearnTools
            </a>
            <a href="#features" className="btn btn-secondary">
              Explore Features
            </a>
          </div>
        </div>
      </section>

      <section id="features">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <p className="section-subtitle">
            Tailored for aspiring professionals — roadmaps, resources, and
            inspiration at your fingertips.
          </p>
          <div className="card-grid">
            {FEATURES.map((f) => (
              <div className="card" key={f.title}>
                <div className="card-icon" style={{ fontSize: 22 }}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Explore Professions</h2>
          <p className="section-subtitle">Choose your path and dive into detailed roadmaps.</p>
          <div className="card-grid">
            {PROFESSIONS.map((p) => (
              <div className="card" key={p.name}>
                <h3>{p.name}</h3>
                <p>{p.path}</p>
                <a
                  href="https://learntools.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ marginTop: 12, padding: "8px 16px", fontSize: 13.5 }}
                >
                  View Roadmap
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container">
          <h2 className="section-title">Why LearnTools?</h2>
          <p style={{ maxWidth: 640, margin: "0 auto 24px", textAlign: "center", color: "var(--text-mid)" }}>
            Part of the Tynixor ecosystem, LearnTools helps students,
            parents, and professionals with free, accessible guides to 30+
            careers. No subscriptions — just useful resources.
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
