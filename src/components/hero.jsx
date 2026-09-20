const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">

        <p className="eyebrow">
          SOFTWARE DEVELOPER & LEGAL HELPER
        </p>

        <h1>
          Diwakar
          <br />
          Talwar<span>.</span>
        </h1>

        <p className="hero-description">
              Software developer at Nelson & Murdock.
    Building reliable systems, intelligent applications,
    and digital tools for people who need them to work.
        </p>

        <div className="hero-actions">
          <a href="#cases" className="button primary">
            View My Projects
          </a>

          <a href="#contact" className="button secondary">
            Contact Office
          </a>
        </div>

      </div>

      <div className="hero-meta">
        <span>Nelson, Murdock & Page</span>
        <span>NYC — 40.7128° N</span>
      </div>
    </section>
  );
};

export default Hero;