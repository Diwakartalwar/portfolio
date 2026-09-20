import { useLayoutEffect, useRef, useState } from "react";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Practice from "./components/practice";
import Cases from "./components/cases";
import Experience from "./components/experience";
import Contact from "./components/contact";
import HiddenSwitch from "./components/hiddenswitch";
import DaredevilMode from "./components/daredevilmode";

function App() {
  const [daredevil, setDaredevil] = useState(false);
  const daredevilWorldRef = useRef(null);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    daredevilWorldRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [daredevil]);

  return (
    <div className={`portfolio ${daredevil ? "daredevil-active" : ""}`}>

      {/* LAWYER WORLD */}
      <section className="world lawyer-world">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Practice />
          <Cases />
          <Experience />
          <Contact />
        </main>

        <HiddenSwitch
          onSwitch={() => setDaredevil(true)}
        />
      </section>


      {/* DAREDEVIL WORLD */}
      <section ref={daredevilWorldRef} className="world daredevil-world">
        <DaredevilMode
          active={daredevil}
          onSwitch={() => setDaredevil(false)}
        />
      </section>

    </div>
  );
}

export default App;
