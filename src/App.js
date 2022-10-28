import { useContext } from "react";
import { Context } from "./context/ContextProvider";

function App() {
  const { languages, setLanguages } = useContext(Context);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <>
      <header>
        <div>
          <select name="language" id="language" onChange={handleChange}>
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
      <main>
        <h1>hello there!</h1>
      </main>
    </>
  );
}

export default App;
