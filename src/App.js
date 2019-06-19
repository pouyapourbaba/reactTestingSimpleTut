import React from "react";
import Header from "./components/header/Header";
import Headline from "./components/headline/Headline";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="main">
        <Headline header={"posts"} desc={"Click the button to render posts"} />
      </section>
    </div>
  );
}

export default App;
