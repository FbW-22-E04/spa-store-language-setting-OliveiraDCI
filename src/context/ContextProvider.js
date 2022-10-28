import { createContext, useState } from "react";

export const Context = createContext();

const langObj = {
  portuguese: "Ola",
  english: "Hello",
  spanish: "Hola",
  german: "Hallo",
  javascript: "<div>Hello</div>",
};

function ContextProvider({ children }) {
  const [languages, setLanguages] = useState(langObj);
  return (
    <Context.Provider value={{ languages, setLanguages }}>
      {children}
    </Context.Provider>
  );
}

export default ContextProvider;
