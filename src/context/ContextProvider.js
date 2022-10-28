import { createContext, useReducer } from "react";

export const Context = createContext();

const langObj = {
  portuguese: "Ola",
  english: "Hello",
  spanish: "Hola",
  german: "Hallo",
  javascript: " < div > Hello </ div > ",
};

function ContextProvider({ children }) {
  const reducer = (state, action) => {
    switch (action.type) {
      case "english":
        return langObj.english;
      case "spanish":
        return langObj.spanish;
      case "german":
        return langObj.german;
      case "javascript":
        return langObj.javascript;
      case "portuguese":
      default:
        return langObj.portuguese;
    }
  };

  const [state, dispatch] = useReducer(reducer, "<></>");

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
