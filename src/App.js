import { useContext } from "react";
import { Context } from "./context/ContextProvider";

function App() {
  const { dispatch } = useContext(Context);

  return (
    <header>
      <div>
        <select
          name="language"
          id="language"
          onChange={(e) => dispatch({ type: e.target.value })}
        >
          <option value="" className=""></option>
          <option value="portuguese" className="value">
            Portuguese
          </option>
          <option value="english" className="value">
            English
          </option>
          <option value="spanish" className="value">
            Spanish
          </option>
          <option value="german" className="value">
            German
          </option>
          <option value="javascript" className="value">
            JavaScript
          </option>
        </select>
      </div>
    </header>
  );
}

export default App;
