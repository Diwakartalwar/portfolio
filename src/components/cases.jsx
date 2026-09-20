const cases = [
  {
    number: "01",
    title: "ANVI",
    type: "AI SYSTEM",
    description:
      "A lightweight modular AI assistant built around a supervisor model, specialized experts, tools, memory, and dynamic task routing.",
    stack: "Python · LLMs · QLoRA · Ollama",
    status: "ACTIVE",
    link: "https://github.com/Diwakartalwar/anvi",
  },
  {
    number: "02",
    title: "MEGACALCHUB",
    type: "WEB APPLICATION",
    description:
      "A collection of practical calculators transformed into a fast, SEO-focused static web experience with search and internal navigation.",
    stack: "Django · JavaScript · HTML · CSS",
    status: "DEPLOYED",
    link: "https://github.com/Diwakartalwar",
  },
  {
    number: "03",
    title: "FERRY DEMAND FORECASTING",
    type: "PREDICTIVE SYSTEM",
    description:
      "A time-series forecasting and decision-support system designed to analyze and predict ferry ticket demand.",
    stack: "Python · Pandas · Machine Learning · Streamlit",
    status: "ACTIVE",
    link: "https://github.com/Diwakartalwar/ferry-demand-forecasting",
  },
  {
    number: "04",
    title: "SHIPPING ROUTE ANALYSIS",
    type: "DATA ANALYTICS",
    description:
      "An interactive analysis system for evaluating factory-to-customer shipping routes, delivery performance, costs, and operational efficiency.",
    stack: "Python · Streamlit · Pandas · Data Visualization",
    status: "ACTIVE",
    link: "https://github.com/Diwakartalwar/shipping-route-analysis",
  },
  {
    number: "05",
    title: "LUDO",
    type: "GAME",
    description:
      "A 2D Ludo game exploring game logic, interaction systems, and real-time player mechanics.",
    stack: "Unity · C#",
    status: "IN DEVELOPMENT",
    link: "https://github.com/Diwakartalwar/ludo",
  },
  {
    number: "06",
    title: "AI CHATBOT",
    type: "AI APPLICATION",
    description:
      "An experimental conversational AI application built to explore local models, inference, and assistant-style interactions.",
    stack: "Python · AI · Local LLMs",
    status: "ARCHIVED",
    link: "https://github.com/Diwakartalwar/ai-chatbot",
  },
];

const Cases = () => {
  return (
    <section id="cases" className="cases">

      <div className="section-heading">
        <span>03</span>

        <div>
          <p>THE FILES</p>
          <h2>CASE FILES</h2>
        </div>
      </div>

      <div className="cases-list">

        {cases.map((item) => (
          <article className="case" key={item.number}>

            <div className="case-number">
              {item.number}
            </div>

            <div className="case-main">

              <div className="case-top">
                <span className="case-type">
                  {item.type}
                </span>

                <span className="case-status">
                  {item.status}
                </span>
              </div>

              <h3>{item.title}</h3>

              <p className="case-description">
                {item.description}
              </p>

              <p className="case-stack">
                {item.stack}
              </p>

              <a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="case-link"
              >
                OPEN CASE
                <span>↗</span>
              </a>

            </div>

          </article>
        ))}

      </div>

    </section>
  );
};

export default Cases;