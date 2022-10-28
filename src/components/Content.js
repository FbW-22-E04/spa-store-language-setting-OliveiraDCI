import { Context } from "../context/ContextProvider";
import { useContext } from "react";

function Content() {
  const { state } = useContext(Context);
  return <h1>{state}</h1>;
}

export default Content;
