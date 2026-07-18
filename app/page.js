import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tynixor — Learning Tools, Software & AI Resources",
  description:
    "Dive into AI-powered learning, code masterpieces, and skill-building tools. Your journey to mastery starts here.",
};

const PLATFORMS = [
  {
    key: "learntools",
    name: "LearnTools",
    icon: "/assets/logos/learntools-logo.png",
    desc: "Curated free resources in programming, design, and beyond. Lifelong learning, zero barriers.",
    href: "/website/learntool",
  },
  {
    key: "learnsoftware",
    name: "LearnSoftware",
    icon: "/assets/logos/learnsoftware-logo.png",
    desc: "Master coding, web dev, and games with hands-on projects and expert guidance.",
    href: "/website/learnsoft",
  },
  {
    key: "aianalyzer",
    name: "AI Analyzer",
    icon: "/assets/logos/aianalyzer-logo.png",
    desc: "AI tools for pattern detection, trends, and insights. Smarter decisions, faster.",
    href: "/website/faceanalysis",
  },
];

const PILLARS = [
  {
    title: "Accessibility for All",
    body: "At Tynixor, we firmly believe that knowledge should be a universal right, not a privilege. By eliminating barriers such as cost and geography, we aim to create an inclusive environment where students, professionals, and enthusiasts alike can access high-quality educational materials without any restrictions.",
  },
  {
    title: "Diverse Learning Resources",
    body: "Our platform encompasses a vast array of learning tools, including programming courses, data science tutorials, marketing strategies, business analytics, software development guides, and design resources. With a structured curriculum and expert-led content, users can effortlessly explore new fields and strengthen their skill sets for academic success and professional growth.",
  },
  {
    title: "AI-Powered Personalization",
    body: "One of the standout features of Tynixor is our upcoming AI Analyzer, a powerful tool designed to track user behavior, learning patterns, and preferences. This cutting-edge technology delivers personalized learning paths, insightful recommendations, and performance analytics, helping users make informed decisions about their study routines and career trajectories.",
  },
  {
    title: "Depth in Every Domain",
    body: "Tynixor's educational resources are crafted with attention to both breadth and depth. From foundational topics like Python programming to advanced modules on artificial intelligence, machine learning, and cloud computing, our content ensures learners of every level can find relevant and actionable insights to accelerate their progress.",
  },
  {
    title: "Community and Collaboration",
    body: "Our community-driven approach encourages learners to collaborate through forums, webinars, and live Q&A sessions. Users can engage with mentors, industry professionals, and peers, creating opportunities for shared learning and networking across global platforms.",
  },
  {
    title: "Ethical and Secure Learning",
    body: "We also prioritize ethical learning and data privacy. Our platform incorporates stringent security measures to protect user information and promote responsible usage of educational resources. We support open-source initiatives and actively contribute to community projects to foster innovation and shared growth.",
  },
  {
    title: "Seamless Multi-Device Experience",
    body: "Tynixor is optimized for various devices, ensuring learners can access our resources on smartphones, tablets, and desktops with ease. Our responsive design, fast-loading pages, and intuitive interface make it easier for users to stay engaged and focused on their learning goals.",
  },
  {
    title: "Continuous Evolution",
    body: "Our content is continuously updated to align with industry trends and academic advancements. Regular feedback loops, expert reviews, and user analytics help us refine our materials, ensuring that learners always have access to the most relevant and up-to-date information.",
  },
  {
    title: "Career Acceleration Tools",
    body: "Tynixor's dedication to career development goes beyond educational content. We offer resume templates, interview preparation guides, and certification tracks to help learners stand out in competitive job markets. Our partnerships with global institutions provide opportunities for internships, projects, and real-world experience.",
  },
  {
    title: "Global Inclusivity",
    body: "By offering content in multiple languages and formats, Tynixor ensures that knowledge is accessible to learners from all parts of the world. Our inclusive platform fosters cross-cultural interactions and empowers users to learn in ways that best suit their learning styles and preferences.",
  },
  {
    title: "Vision for the Future",
    body: "Our vision is to build a global community where knowledge-sharing drives innovation and personal growth. Through strategic collaborations, community workshops, and educational programs, we aim to break down barriers and create equal opportunities for learners everywhere.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Unlock Infinite Possibilities</h1>
          <h2 className="hero-subtitle-anim">
            The Biggest Grower • Learning Simplified • Grow Smarter • Explore More
          </h2>
          <p className="hero-subtitle">
            Dive into AI-powered learning, code masterpieces, and skill-building
            tools. Your journey to mastery starts here – seamless, smart,
            unstoppable.
          </p>
          <div className="hero-cta">
            <a href="#platforms" className="btn btn-primary">
              Explore Platforms
            </a>
            <a href="#about" className="btn btn-secondary">
              Discover More
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <Image
            src="/assets/logos/brand-logo.png"
            alt="Tynixor"
            width={140}
            height={140}
          />
        </div>
      </section>

      {/* Teaser */}
      <section className="teaser">
        <div className="container">
          <p>
            Join thousands of innovators transforming ideas into reality with
            Tynixor. Our AI-driven tools make learning interactive and
            rewarding.
          </p>
          <p>
            From coding challenges to real-world projects, build skills that
            matter — your future awaits.
          </p>
          <p>
            Discover a community where curiosity meets opportunity. Dive in
            today and ignite your potential.
          </p>
        </div>
      </section>

      {/* Platforms */}
      <section id="platforms">
        <div className="container">
          <h2 className="section-title">Our Ecosystem</h2>
          <p className="section-subtitle">
            Tailored worlds for every learner – from code to career, we've got
            you covered.
          </p>
          <div className="card-grid">
            {PLATFORMS.map((p) => (
              <div className="card" key={p.key}>
                <div className="card-icon">
                  <Image src={p.icon} alt={p.name} width={24} height={24} />
                </div>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <div style={{ marginTop: 16 }}>
                  <Link href={p.href} className="btn btn-secondary" style={{ padding: "8px 16px", fontSize: 13.5 }}>
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="coming-soon">
        <div className="container">
          <h2 className="section-title">Horizons Ahead</h2>
          <p className="section-subtitle">
            More innovations incoming – advanced AI labs, global collabs, and
            new features to fuel your growth.
          </p>
          <Image
            src="/assets/logos/brand-logo.png"
            alt="Tynixor"
            width={72}
            height={72}
            style={{ margin: "0 auto" }}
          />
        </div>
      </section>

      {/* About */}
      <section id="about">
        <div className="container">
          <h2 className="section-title">The Tynixor Vision</h2>
          <p
            style={{
              maxWidth: 640,
              margin: "0 auto 32px",
              textAlign: "center",
              color: "var(--text-mid)",
              fontSize: 15.5,
            }}
          >
            Tynixor isn't just a platform – it's your launchpad to a world
            where learning meets opportunity. We blend cutting-edge AI with
            intuitive tools to make mastery accessible and enjoyable.
          </p>

          <div className="card-grid">
            <div className="card">
              <div className="card-icon">🚀</div>
              <h3>Personalized Paths</h3>
              <p>AI crafts your unique journey, adapting in real-time to your pace and passions.</p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3>Skill-Driven</h3>
              <p>Grow through challenges, quizzes, and milestones – turn knowledge into skill.</p>
            </div>
            <div className="card">
              <div className="card-icon">🌐</div>
              <h3>Global Community</h3>
              <p>Connect, collaborate, and grow with innovators worldwide.</p>
            </div>
            <div className="card">
              <div className="card-icon">🔒</div>
              <h3>Secure & Ethical</h3>
              <p>Your data, your future – protected with enterprise-grade privacy.</p>
            </div>
          </div>

          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num" id="views-num">—</span>
              <span className="stat-label">Views</span>
            </div>
            <div className="stat-item">
              <span className="stat-num" id="visitors-num">—</span>
              <span className="stat-label">Visitors</span>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Article */}
      <section id="brand-article">
        <div className="container">
          <h2 className="section-title">About Tynixor: Our Story & Impact</h2>
          <p
            style={{
              maxWidth: 720,
              margin: "0 auto 32px",
              color: "var(--text-mid)",
              fontSize: 15,
            }}
          >
            Tynixor is a transformative online learning platform committed to
            reshaping the educational landscape by providing accessible,
            affordable, and comprehensive learning tools. Our mission is to
            empower learners of all backgrounds by offering them expertly
            curated resources, interactive tutorials, and advanced AI-driven
            solutions.
          </p>

          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, textAlign: "center" }}>
            Core Pillars of Tynixor
          </h3>
          <div className="card-grid">
            {PILLARS.map((pillar) => (
              <div className="card" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>

          <h3 style={{ fontSize: 20, fontWeight: 700, margin: "40px 0 16px", textAlign: "center" }}>
            Spotlight on Tynixor Websites
          </h3>
          <div className="card-grid">
            <div className="card">
              <h3>LearnTools: Your Gateway to Free Knowledge</h3>
              <p>
                LearnTools stands as the cornerstone of Tynixor's free resource
                ecosystem, offering an expansive library of tutorials on web
                development (HTML, CSS, JavaScript, React), mobile app
                creation (Flutter, Swift), data analytics (Python Pandas,
                SQL), and digital marketing (SEO, content strategy).
                Beginners can start with bite-sized videos, while pros dive
                into advanced certifications.
              </p>
            </div>
            <div className="card">
              <h3>LearnSoftware: Building the Future, One Line at a Time</h3>
              <p>
                LearnSoftware is dedicated to software mastery, covering
                full-stack development, game engines (Unity, Unreal), and
                DevOps tools (Docker, Kubernetes). Interactive projects guide
                users from concept to deployment, with real-time code editors
                and AI-assisted debugging.
              </p>
            </div>
            <div className="card">
              <h3>AI Analyzer: Intelligence Meets Insight</h3>
              <p>
                AI Analyzer revolutionizes data interpretation with tools for
                sentiment analysis, predictive modeling, and facial
                recognition experiments. Users explore ethical AI
                applications through guided labs, from natural language
                processing to computer vision.
              </p>
            </div>
          </div>

          <p
            style={{
              maxWidth: 720,
              margin: "32px auto 0",
              color: "var(--text-mid)",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            We invite you to join the Tynixor family, where learning is
            limitless and growth is a shared journey. Explore our library of
            tutorials, interactive learning tools, and AI-powered solutions
            to unlock your full potential. Welcome to Tynixor — where your
            future begins.
          </p>
        </div>
      </section>

      {/* Quick Links */}
      <section>
        <div className="container">
          <h3 style={{ textAlign: "center", marginBottom: 20, fontSize: 20, fontWeight: 700 }}>
            Navigate Effortlessly
          </h3>
          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/disclaimer", label: "Disclaimer" },
              { href: "/terms", label: "Terms" },
              { href: "/privacy", label: "Privacy" },
              { href: "/careers", label: "Careers" },
              { href: "/partners", label: "Partners" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="btn btn-secondary">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
