import React, { useState } from "react";

// const ColorPicker = () => {
//   const [selectedColor, setSelectedColor] = useState("");

//   const handleColorChange = (event) => {
//     setSelectedColor(event.target.value);
//   };

//   return (
//     <div>
//       <select value={selectedColor} onChange={handleColorChange}>
//         <option value="">Select a color</option>
//         <option value="red">Red</option>
//         <option value="green">Green</option>
//         <option value="blue">Blue</option>
//       </select>
//       {selectedColor && (
//         <div
//           style={{
//             marginTop: "10px",
//             backgroundColor: selectedColor,
//             width: "100px",
//             height: "30px",
//           }}
//         ></div>
//       )}
//     </div>
//   );
// };

// export default ColorPicker;

const SelectColors = () => {
  // State variable to manage the color
  const [color, setColor] = useState("");

  // Function to handle input change and update color state
  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      {/* Input field for the user to enter color */}
      <input
        type="text"
        placeholder="Enter a color name or code"
        value={color}
        onChange={handleInputChange}
      />
      {/* Display a colored box based on the user input */}
      <div
        style={{
          //   marginRight: "400px",
          width: "500px",
          height: "400px",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: color,
        }}
      ></div>
    </div>
  );
};

export default SelectColors;
