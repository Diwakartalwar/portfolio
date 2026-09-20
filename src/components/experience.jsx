const experience = [
  {
    year: "2026 — PRESENT",
    title: "SOFTWARE DEVELOPER",
    company: "NELSON & MURDOCK",
    description:
      "Building software systems, AI experiments, data tools, and web applications behind the scenes at the firm.",
  },
  {
    year: "2026 — PRESENT",
    title: "MCA — COMPUTER APPLICATIONS",
    company: "UNIVERSITY OF LUCKNOW",
    description:
      "Pursuing postgraduate studies in computer applications while continuing independent software development and AI projects.",
  },
  {
    year: "2024",
    title: "BCA — COMPUTER APPLICATIONS",
    company: "UNIVERSITY OF LUCKNOW",
    description:
      "Completed undergraduate studies in computer applications and developed a foundation across programming, web development, databases, and software engineering.",
  },
  {
    year: "ONGOING",
    title: "INDEPENDENT BUILDER",
    company: "PERSONAL PROJECTS",
    description:
      "Developing AI systems, web applications, games, dashboards, and experimental software across multiple technologies.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section">

      <div className="section-label">
        04 — THE RECORD
      </div>

      <div className="section-grid">

        <div>
          <h2>
            Experience<br />
            & education.
          </h2>
        </div>

        <div className="timeline">

          {experience.map((item) => (
            <article
              className="timeline-item"
              key={`${item.year}-${item.title}`}
            >

              <span>
                {item.year}
              </span>

              <div>
                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.company}
                </p>

                <p>
                  {item.description}
                </p>
              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
};

export default Experience;