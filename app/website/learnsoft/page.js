import Link from "next/link";

export const metadata = {
  title: "LearnSoftware — Master Software Development | Tynixor",
  description:
    "Free roadmap to Web, Mobile & Game development. Build projects, access tutorials and tools for lifelong coding success.",
};

const TRACKS = [
  {
    title: "Web Development",
    desc: "From static sites to full-stack apps: HTML/CSS/JS foundations, React/Vue frontends, Node/Express backends, databases, APIs. Projects: blogs, e-commerce, dashboards. ⏳ 6-12 months • Tools: VS Code, Git",
    href: "https://learnsoftware.netlify.app/pages/website-development",
    cta: "Start Web Path",
  },
  {
    title: "Mobile Development",
    desc: "Cross-platform mastery: Flutter, React Native. Covers UI/UX, state management, offline sync, push notifications. Projects: fitness trackers, social feeds. ⏳ 8-18 months • Tools: Android Studio, Xcode",
    href: "https://learnsoftware.netlify.app/pages/app-development",
    cta: "Start Mobile Path",
  },
  {
    title: "Game Development",
    desc: "Interactive worlds with C#/Unity or Unreal. Learn physics, animations, UI, multiplayer basics. Projects: puzzle games, prototypes. ⏳ 9-24 months • Tools: Blender, GIMP",
    href: "https://learnsoftware.netlify.app/pages/game-development",
    cta: "Start Game Path",
  },
  {
    title: "AI & Emerging Tech",
    desc: "Future-facing skills: Python/TensorFlow for ML, blockchain basics, cloud with AWS. Projects: chatbots, predictors. ⏳ Varies • Tools: Jupyter, Postman",
    href: "https://learnsoftware.netlify.app/pages/more-learning",
    cta: "Explore Emerging Tech",
  },
  {
    title: "Full-Stack Mastery",
    desc: "End-to-end building: MERN/MEAN stacks, authentication, testing, scaling. Projects: SaaS tools, social networks. ⏳ 12-24 months • Tools: Docker, Jenkins",
    href: "https://learnsoftware.netlify.app/pages/game-development",
    cta: "Full-Stack Guide",
  },
  {
    title: "DevOps & Cloud",
    desc: "Deployment fundamentals: CI/CD pipelines, Kubernetes, serverless. Projects: automated infra, monitoring dashboards. ⏳ 6-15 months • Tools: Terraform, Jenkins",
    href: "https://learnsoftware.netlify.app/pages/more-learning",
    cta: "DevOps Roadmap",
  },
];

export default function LearnSoftPage() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Master Software Development</h1>
          <p className="hero-subtitle">
            Tynixor's free roadmap to Web, Mobile & Game Dev — build projects,
            learn practical skills, and access tutorials and tools for
            lifelong coding growth.
          </p>
          <div className="hero-cta">
            <a
              href="https://learnsoftware.netlify.app"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit LearnSoftware
            </a>
            <a href="#paths" className="btn btn-secondary">
              Explore Paths
            </a>
          </div>
        </div>
      </section>

      <section id="paths">
        <div className="container">
          <h2 className="section-title">Development Tracks</h2>
          <p className="section-subtitle">
            Specialized paths with timelines, skills, and project ideas —
            tailored for beginners to experts.
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
                  {t.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ textAlign: "center" }}>
          <Link href="/" className="btn btn-secondary">
            ← Back to Tynixor
          </Link>
        </div>
      </section>
    </>
  );
}
