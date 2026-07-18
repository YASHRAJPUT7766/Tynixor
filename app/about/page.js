export const metadata = {
  title: "About — Tynixor",
  description:
    "Meet Yash Rajput, founder of Tynixor — an educational platform from Bihar, India, empowering learners worldwide with free tools and AI resources.",
};

const PILLARS = [
  {
    title: "Free Learning Resources",
    body: "Comprehensive career roadmaps with step-by-step guides, timelines, and milestone trackers. Tutorials on Python mastery, AI/ML, full-stack web development, game creation, data science, and business analytics — plus curated project repositories with source code and portfolio-ready ideas.",
  },
  {
    title: "AI-Powered Tools",
    body: "AI Face Analyzer for entertaining, insightful trait breakdowns and pattern detection. A growing AI Analyzer suite for behavior analytics and trend forecasting, built with an ethical-first approach: zero unnecessary data sharing and user-controlled analytics.",
  },
  {
    title: "Community & Support",
    body: "Discussion forums for peer-to-peer troubleshooting and idea sharing. Secure Google sign-in for effortless, passwordless access. Resources tailored for varied learning styles — visual, audio, and hands-on project kits.",
  },
  {
    title: "Career Acceleration Tools",
    body: "Resume-building guidance, mock interview practice concepts, certification pathway guides for Google/AWS/Microsoft, and portfolio-building resources to help learners stand out.",
  },
  {
    title: "Innovation & Future Roadmap",
    body: "Plans for immersive learning labs, verifiable digital credentials, and social impact initiatives — including scholarships for Bihar students and free tech training for underserved communities.",
  },
];

export default function AboutPage() {
  return (
    <main className="static-page">
      <h1>About Tynixor</h1>
      <p className="updated">
        Empowering learning through free tools and AI resources — founded by
        Yash Rajput from Bihar, India.
      </p>

      <h2>Meet the Founder: Yash Rajput</h2>
      <p>
        Yash Rajput is a passionate innovator and lifelong learner dedicated
        to making education more accessible. Hailing from Bihar, India, he
        began his coding journey at 16, driven by a goal to make quality
        educational resources available to learners regardless of background
        or location.
      </p>
      <p>
        A self-taught developer with experience in Python, AI/ML, and
        full-stack web development, Yash launched Tynixor in early 2025 as a
        personal project focused on curating free, high-quality learning
        resources.
      </p>
      <p>
        <strong>Personal motto:</strong> "Grow Smarter, Explore More" — a
        philosophy centered on continuous learning and exploration.
      </p>

      <h2>Our Mission</h2>
      <p>
        To make high-quality education more accessible by curating free,
        well-organized resources spanning programming, AI, data science,
        digital marketing, and beyond. Rooted in Bihar, India, Tynixor aims to
        help learners everywhere build meaningful skills regardless of
        financial or geographical barriers.
      </p>
      <ul>
        <li>Structured curricula with tutorials, interactive quizzes, and hands-on coding challenges.</li>
        <li>A supportive community through forums and shared learning resources.</li>
        <li>Thoughtful use of AI for learning-path recommendations.</li>
        <li>Career-focused resources: resume guidance, interview prep concepts, and certification pathway guides.</li>
        <li>A focus on underrepresented regions, with accessible content for learners in Bihar and beyond.</li>
      </ul>

      <h2>Our Vision</h2>
      <p>
        A future of lifelong learning where opportunity isn't limited by
        geography. From its roots in Bihar, Tynixor aims to grow into a
        platform that helps learners worldwide build real, usable skills —
        "Learning Simplified."
      </p>

      <h2>What Tynixor Offers</h2>
      {PILLARS.map((p) => (
        <div key={p.title} style={{ marginBottom: 18 }}>
          <h2 style={{ fontSize: 17, margin: "18px 0 6px" }}>{p.title}</h2>
          <p>{p.body}</p>
        </div>
      ))}

      <h2>Get in Touch</h2>
      <p>
        Questions, suggestions, or partnership ideas — Yash and the Tynixor
        team would love to hear from you.
      </p>
      <ul>
        <li>Email: <a href="mailto:yash92726@gmail.com">yash92726@gmail.com</a></li>
        <li>Location: Bihar, India</li>
        <li>
          Instagram: <a href="https://www.instagram.com/tynixor" target="_blank" rel="noopener noreferrer">@tynixor</a>
        </li>
      </ul>
    </main>
  );
}
