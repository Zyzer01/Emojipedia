import React from "react";
import Entry from "./Entry";
import { emojipedia } from "../emojipedia.js";

function createEntry(emojipedia) {
  return (
    <Entry
      emoji={emojipedia.emoji}
      name={emojipedia.name}
      description={emojipedia.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <div className="term">
        <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
      </div>
    </div>
  );
}

export default App;
