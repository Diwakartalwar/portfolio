import { useEffect, useRef } from "react";
import daredevilSuit from "../assets/daredevil.png";
import daredevilLogo from "../assets/daredevillogo.svg";

const missions = [
  {
    number: "01",
    title: "Hell's Kitchen",
    description: "Protecting the neighborhood after dark.",
    status: "ACTIVE",
  },
  {
    number: "02",
    title: "The Devil's Due",
    description: "Uncovering what the law cannot reach.",
    status: "CLOSED",
  },
  {
    number: "03",
    title: "Nelson & Murdock",
    description: "Two lives. One pursuit of justice.",
    status: "CLASSIFIED",
  },
];

const abilities = [
  ["HEIGHTENED SENSES", "98%", "Reading the city through sound, motion, and intent."],
  ["COMBAT", "91%", "Close-quarters precision when the streets turn hostile."],
  ["DETECTIVE WORK", "94%", "Following patterns others miss before they become threats."],
  ["LAW", "96%", "Using the system by day to protect people at night."],
];

const operations = [
  ["01", "LEGAL COVER", "Nelson & Murdock", "DAY SHIFT", "A legitimate front for an illegitimate amount of justice.", "https://www.marvel.com/characters/daredevil-matthew-murdock/on-screen"],
  ["02", "NIGHT PATROL", "Hell's Kitchen", "ACTIVE", "Protecting the neighborhood block by block.", "https://www.marvel.com/comics/guides/78/daredevil-the-man-without-fear"],
  ["03", "INTELLIGENCE", "Radar network", "ONLINE", "Every footstep, siren, and heartbeat leaves a trace.", "https://www.marvel.com/characters/daredevil-matthew-murdock/on-screen"],
  ["04", "SAFEHOUSE", "Midland Circle", "SECURE", "A quiet place to regroup before the next call.", "https://www.marvel.com/comics/list/characters/1009262"],
  ["05", "ALLIES", "The Defenders", "STANDBY", "Good people make the dangerous work survivable.", "https://www.marvel.com/characters/daredevil-matthew-murdock/on-screen"],
  ["06", "CASE FILES", "Unresolved", "CLASSIFIED", "The truth is still out there waiting to be found.", "https://www.marvel.com/comics/list/characters/1009262"],
];

const DaredevilMode = ({ onSwitch, active }) => {
  const iframeRef = useRef(null);
  const widgetRef = useRef(null);
  const startTime = 70_000;

  useEffect(() => {
    if (!active || !iframeRef.current) return undefined;

    const setupWidget = () => {
      if (!window.SC || !iframeRef.current || widgetRef.current || !active) return;

      const widget = window.SC.Widget(iframeRef.current);
      widgetRef.current = widget;

      widget.bind(window.SC.Widget.Events.READY, () => {
        window.setTimeout(() => {
          widget.seekTo(startTime);
          window.setTimeout(() => widget.play(), 300);
        }, 500);
      });

      widget.bind(window.SC.Widget.Events.FINISH, () => {
        widget.seekTo(0);
        window.setTimeout(() => widget.play(), 200);
      });
    };

    if (window.SC) {
      setupWidget();
    } else {
      let script = document.querySelector("script[data-soundcloud-widget]");

      if (!script) {
        script = document.createElement("script");
        script.src = "https://w.soundcloud.com/player/api.js";
        script.async = true;
        script.dataset.soundcloudWidget = "true";
        document.body.appendChild(script);
      }

      script.addEventListener("load", setupWidget, { once: true });
    }

    return () => {
      widgetRef.current = null;
    };
  }, [active]);

  return (
      <div className="daredevil-mode">
      <header className="dd-navbar">
        <button className="dd-logo" onClick={onSwitch}>
          <span>DD</span>
          <small>HELL'S KITCHEN</small>
        </button>

        <nav>
          <a href="#missions">Missions</a>
          <a href="#operations">Operations</a>
          <a href="#transmissions">Transmissions</a>
          <a href="#abilities">Abilities</a>
          <a href="#identity">Identity</a>
        </nav>

        <div className="radar-status">
          <span></span>
          NIGHT ACTIVE
        </div>

      </header>

      <main>

        {/* HERO */}

        <section className="dd-hero">

          <div className="dd-background-text">
            DAREDEVIL
          </div>

          <div className="dd-hero-content">

            <img
              className="dd-emblem"
              src={daredevilLogo}
              alt="Daredevil emblem"
            />

            <p className="dd-eyebrow">
              THE DEVIL OF HELL'S KITCHEN
            </p>

            <h1>
              Daredevil
              <span>.</span>
            </h1>

            <p className="dd-description">
              Justice doesn't always arrive in a courtroom.
              Sometimes it moves through the darkness.
            </p>

            <div className="dd-coordinates">
              40.7676° N &nbsp; / &nbsp; 73.9903° W
            </div>

            <div className="dd-hero-actions">
              <a href="https://www.marvel.com/comics/list/characters/1009262" target="_blank" rel="noreferrer">
                COMICS ↗
              </a>
              <a href="https://www.marvel.com/tv-shows/daredevil-born-again/1" target="_blank" rel="noreferrer">
                TV SERIES ↗
              </a>
              <a href="https://www.marvelrivals.com/20251009/41360_1263889.html" target="_blank" rel="noreferrer">
                MARVEL RIVALS ↗
              </a>
            </div>

          </div>

          <div className="dd-suit">
            <img src={daredevilSuit} alt="Daredevil suit" />
          </div>

          <div className="radar">
            <div className="radar-ring ring-one"></div>
            <div className="radar-ring ring-two"></div>
            <div className="radar-ring ring-three"></div>
            <div className="radar-center"></div>
            <div className="radar-line"></div>
          </div>

        </section>

        {/* MISSIONS */}

        <section id="missions" className="dd-section">

          <div className="dd-section-heading">
            <span>01</span>
            <h2>MISSIONS</h2>
          </div>

          <div className="mission-list">

            {missions.map((mission) => (
              <article className="mission" key={mission.number}>

                <span className="mission-number">
                  {mission.number}
                </span>

                <div>
                  <h3>{mission.title}</h3>
                  <p>{mission.description}</p>
                </div>

                <span className="mission-status">
                  {mission.status}
                </span>

              </article>
            ))}

          </div>

        </section>
        {/* OPERATIONS */}

        <section id="operations" className="dd-section dd-operations">

          <div className="dd-section-heading">
            <span>02</span>
            <h2>OPERATIONS</h2>
          </div>

          <div className="operations-grid">
            {operations.map(([number, label, value, status, description, url]) => (
              <a className="operation-card" href={url} target="_blank" rel="noreferrer" key={number}>
                <span className="operation-number">{number}</span>
                <span className="operation-label">{label}</span>
                <h3>{value}</h3>
                <p>{description}</p>
                <span className="operation-status">{status} <i /></span>
              </a>
            ))}
          </div>

        </section>

        {/* TRANSMISSIONS */}

        <section id="transmissions" className="dd-section dd-media">

        <div className="dd-section-heading">
          <span>03</span>
          <h2>TRANSMISSIONS</h2>
        </div>

        <div className="dd-media-grid">

          <a
            className="dd-media-card"
            href="https://www.marvel.com/comics/list/characters/1009262"
            target="_blank"
            rel="noreferrer"
          >
            <div className="media-number">01</div>

            <div>
              <span>MARVEL COMICS</span>
              <h3>DAREDEVIL</h3>
              <p>Read the official Daredevil comic archive</p>
            </div>

            <span className="media-arrow">↗</span>
          </a>

          <a
            className="dd-media-card"
            href="https://www.marvel.com/tv-shows/daredevil-born-again/1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="media-number">02</div>

            <div>
              <span>MARVEL TELEVISION</span>
              <h3>BORN AGAIN</h3>
              <p>Official Daredevil: Born Again series page</p>
            </div>

            <span className="media-arrow">↗</span>
          </a>

          <a
            className="dd-media-card"
            href="https://www.marvelrivals.com/20251009/41360_1263889.html"
            target="_blank"
            rel="noreferrer"
          >
            <div className="media-number">03</div>

            <div>
              <span>MARVEL RIVALS</span>
              <h3>THE DEVIL</h3>
              <p>Official Daredevil hero transmission</p>
            </div>

            <span className="media-arrow">↗</span>
          </a>

        </div>

      </section>
        {/* ABILITIES */}

        <section id="abilities" className="dd-section">

          <div className="dd-section-heading">
            <span>04</span>
            <h2>ABILITIES</h2>
          </div>

          <div className="abilities">

            {abilities.map(([name, level, description]) => (
              <div className="ability" key={name}>

                  <div className="ability-header">
                    <span>{name}</span>
                    <span>{level}</span>
                  </div>

                  <p>{description}</p>

                  <div className="ability-bar">
                  <div style={{ width: level }}></div>
                </div>

              </div>
            ))}

          </div>

        </section>

        {/* IDENTITY */}

        <section id="identity" className="dd-identity">

          <p>THE MAN BEHIND THE MASK</p>

          <h2>
            Two identities.
            <br />
            One purpose.
          </h2>

          <button onClick={onSwitch}>
            RETURN TO MATT MURDOCK
          </button>

        </section>

      </main>

      <footer className="dd-footer">
        <span>DD // 2026</span>
        <span>HELL'S KITCHEN, NEW YORK</span>
        <span>KEEP THE CITY SAFE</span>
      </footer>

      {active && (
        <iframe
          ref={iframeRef}
          title="Daredevil mode soundtrack"
          width="100%"
          height="50"
          style={{ border: "1px solid #ccc" }}
          allow="autoplay; encrypted-media"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
            "https://soundcloud.com/user-319815954/the-devil-doesnt-kneel"
          )}&color=%23d50916&auto_play=true&hide_related=true&show_comments=false&show_user=false&show_reposts=false&show_teaser=false`}
        ></iframe>
      )}
    </div>
  );
};

export default DaredevilMode;
