import { VenetianMask } from "lucide-react";

const HiddenSwitch = ({ onSwitch }) => {
  return (
    <footer className="footer">

      <p>
        Justice is <span>blind</span>.
      </p>

      <button
        className="hidden-switch"
        onClick={onSwitch}
        aria-label="..."
        title=""
      >
        <VenetianMask size={15} strokeWidth={1.5} />
      </button>

      <p>
        © 2026 Matthew Murdock
      </p>

    </footer>
  );
};

export default HiddenSwitch;