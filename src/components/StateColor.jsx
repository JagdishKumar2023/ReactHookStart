import React, { useState } from "react";

const StateColor = () => {
  const [inputValue, setInputValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    setIsValid(value.length <= 10); // Max length of 10 characters
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        style={{
          borderColor: isValid ? "green" : "red",
          padding: "40px",
        }}
      />
      {!isValid && <p>Input must be 10 characters or less.</p>}
    </div>
  );
};

export default StateColor;
