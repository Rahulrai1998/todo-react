import React, { useState, useCallback } from "react";
import deb from "./deb.js";

const Debounce = () => {
  const [names] = useState(["Rahul", "Prem", "Chandan", "Alok"]);
  const [selectedName, setSelectedName] = useState("");
  const [name, setName] = useState("");
  const handleOnChange = (value) => {
    console.log("User typed:", value);
    const match = names.find(
      (name) => name.toLowerCase() === value.toLowerCase()
    );
    setName(match);
  };

  const debouncedCall = deb(handleOnChange, 1000);

  return (
    <div>
      <input
        type="text"
        value={selectedName}
        onChange={(e) => {
          setSelectedName(e.target.value);
          debouncedCall(e.target.value);
        }}
        placeholder="Type a name..."
      />
      <p>Matched Name: {name}</p>
    </div>
  );
};

export default Debounce;
