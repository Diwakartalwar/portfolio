const practiceAreas = [
  {
    number: "01",
    title: "SOFTWARE DEVELOPMENT",
    description:
      "Building full-stack applications, APIs, interactive interfaces, and practical software systems.",
    skills: "Python · JavaScript · React · Django · Flask",
  },
  {
    number: "02",
    title: "ARTIFICIAL INTELLIGENCE",
    description:
      "Experimenting with local AI systems, language models, intelligent routing, and modular AI architectures.",
    skills: "LLMs · Python · Ollama · QLoRA · AI Systems",
  },
  {
    number: "03",
    title: "DATA & ANALYTICS",
    description:
      "Turning raw data into dashboards, insights, visualizations, and decision-support systems.",
    skills: "Power BI · DAX · SQL · Pandas · Python",
  },
  {
    number: "04",
    title: "WEB & APPLICATIONS",
    description:
      "Designing responsive digital experiences with a focus on usability, performance, and clean interfaces.",
    skills: "HTML · CSS · JavaScript · React · Vite",
  },
];

const Practice = () => {
  return (
    <section id="practice" className="practice">

      <div className="practice-heading">
        <div className="practice-number">
          02
        </div>

        <div>
          <p>THE PRACTICE</p>
          <h2>
            Areas of<br />
            expertise.
          </h2>
        </div>
      </div>

      <div className="practice-grid">

        {practiceAreas.map((area) => (
          <article
            className="practice-card"
            key={area.number}
          >
            <div className="practice-card-top">
              <span>{area.number}</span>

              <span className="practice-mark">
                +
              </span>
            </div>

            <h3>{area.title}</h3>

            <p>
              {area.description}
            </p>

            <div className="practice-skills">
              {area.skills}
            </div>
          </article>
        ))}

      </div>

    </section>
  );
};

export default Practice;