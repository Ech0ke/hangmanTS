import "./styles/KeyboardStyle.css";
import KEYS from "./data/Keys.json";

function Keyboard() {
  return (
    <div className="keyboard-wrapper">
      {KEYS.map((key) => {
        return (
          <button className="keyboard-button" key={key}>
            {key}
          </button>
        );
      })}
    </div>
  );
}

export default Keyboard;
