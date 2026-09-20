import { useEffect, useState } from "react";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCrimeReport, setIsCrimeReport] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [isOpen]);

  const openForm = (crimeReport = false) => {
    setIsCrimeReport(crimeReport);
    setSubmitted(false);
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact">

      <p className="section-label">05 — CONTACT</p>

      <h2>
        Need an
        <br />
        advocate?
      </h2>

      <p>
        Nelson, Murdock & Page
        <br />
        Hell's Kitchen, New York
      </p>

      <button className="button primary" onClick={() => openForm()}>
        Contact Office
      </button>

      {isOpen && (
        <div className="contact-modal" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}>
          <div className="contact-dialog" role="dialog" aria-modal="true" aria-labelledby="contact-dialog-title">
            <button className="modal-close" onClick={() => setIsOpen(false)} aria-label="Close contact form">
              ×
            </button>

            <p className="section-label">{isCrimeReport ? "CLASSIFIED CHANNEL" : "OFFICE CHANNEL"}</p>
            <h3 id="contact-dialog-title">
              {isCrimeReport ? "Report a crime." : "How can we help?"}
            </h3>

            {submitted ? (
              <p className="form-success">
                {isCrimeReport
                  ? "Report received. Stay safe and do not put yourself in danger."
                  : "Message received. Our office will get back to you soon."}
              </p>
            ) : (
              <form onSubmit={handleSubmit}>
                {!isCrimeReport ? (
                  <>
                    <label>
                      Name
                      <input name="name" required />
                    </label>
                    <label>
                      Email
                      <input name="email" type="email" required />
                    </label>
                    <label>
                      Message
                      <textarea name="message" rows="4" required />
                    </label>
                  </>
                ) : (
                  <>
                    <label>
                      Incident
                      <input name="incident" placeholder="What happened?" required />
                    </label>
                    <label>
                      Location
                      <input name="location" placeholder="Where did it happen?" required />
                    </label>
                    <label>
                      Details
                      <textarea name="details" rows="4" required />
                    </label>
                    <label className="checkbox-label">
                      <input name="anonymous" type="checkbox" />
                      Submit anonymously
                    </label>
                  </>
                )}

                <button className="button primary" type="submit">
                  {isCrimeReport ? "Send Report" : "Send Message"}
                </button>
              </form>
            )}

            <button className="crime-toggle" onClick={() => openForm(!isCrimeReport)}>
              {isCrimeReport ? "Contact the office instead" : "Report a crime securely"}
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Contact;
