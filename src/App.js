import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let slug = "realDonaldTrump";
  let screenName = "realDonaldTrump";
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      twttr.widgets.createTimeline(
  {
    sourceType: "list",
    ownerScreenName: "TwitterDev",
    slug: "national-parks"
  },
  document.getElementById("container")
);
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;
