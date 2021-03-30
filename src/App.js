import React from "react";
import Main from "./containers/Main";
import "./App.css";
import { OptionsContextProvider } from "./utils/OptionsManager";

function App() {
  return (
    <div className="container">
      <section className="main-wrapper">
        <OptionsContextProvider>
          <Main />
        </OptionsContextProvider>
      </section>
    </div>
  );
}

export default App;