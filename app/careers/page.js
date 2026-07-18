export const metadata = {
  title: "Careers — Tynixor",
  description: "Explore career and internship opportunities at Tynixor.",
};

const POSITIONS = [
  { role: "Content Developer", desc: "Create engaging tutorials, articles, and learning materials on programming, analytics, software tools, and more." },
  { role: "Software Engineer", desc: "Work on building robust, user-friendly applications, websites, and AI tools to enhance learning experiences." },
  { role: "AI Research Intern", desc: "Assist in developing intelligent algorithms that personalize learning paths and analyze user behavior." },
  { role: "Marketing Specialist", desc: "Promote Tynixor's educational content, develop campaigns, and help expand our user community globally." },
  { role: "Support and Operations", desc: "Help manage day-to-day activities, assist learners, and ensure smooth platform operation." },
];

const PERKS = [
  "Be part of an innovative platform shaping the future of education.",
  "Work remotely with flexible schedules.",
  "Collaborate with passionate experts and like-minded learners.",
  "Gain hands-on experience and enhance your career with meaningful projects.",
  "Access learning resources to grow professionally and personally.",
  "Participate in open-source initiatives and community-building events.",
];

export default function CareersPage() {
  return (
    <main className="static-page">
      <h1>Join Our Team at Tynixor</h1>
      <p className="updated">Careers & Internships</p>

      <p>
        At Tynixor, we're driven by the mission to make learning accessible,
        engaging, and transformative for learners around the world. If you're
        passionate about technology, education, and innovation, we'd love to
        hear from you.
      </p>
      <p>
        Our team is composed of people from diverse backgrounds working
        together to build a platform that empowers students, professionals,
        and lifelong learners.
      </p>

      <h2>Open Positions</h2>
      <ul>
        {POSITIONS.map((p) => (
          <li key={p.role}>
            <strong>{p.role}:</strong> {p.desc}
          </li>
        ))}
      </ul>

      <h2>Why Work With Us?</h2>
      <ul>
        {PERKS.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>

      <h2>Internships and Projects</h2>
      <p>
        We welcome students, fresh graduates, and aspiring professionals to
        join our internship programs. You'll get real-world experience by
        working on projects that impact learners, with mentorship along the
        way.
      </p>

      <h2>How to Apply</h2>
      <p>
        Interested in joining our team? Send your resume and a brief
        introduction to{" "}
        <a href="mailto:yash92726@gmail.com">yash92726@gmail.com</a>. Mention
        the role you're applying for and why you're excited to be part of
        Tynixor.
      </p>
    </main>
  );
}
