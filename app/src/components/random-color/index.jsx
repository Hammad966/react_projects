import { useEffect, useState } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const generateColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const generateHexColor = () => {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[generateColor(hex.length)];
    }
    setColor(hexColor);
  };

  const generateRgbColor = () => {
    const r = generateColor(256);
    const g = generateColor(256);
    const b = generateColor(256);
    setColor(`rgb(${r}, ${g}, ${b})`);
  };

  useEffect(() => {
    if (typeOfColor === "rgb") generateRgbColor();
    else generateHexColor();
  }, [typeOfColor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <div className="flex justify-center">
        <button
          className="m-2 p-2 bg-white text-black rounded-lg hover:bg-neutral-300 focus:outline-dashed"
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          className="m-2 p-2 bg-white text-black rounded-lg hover:bg-neutral-300  focus:outline-dashed"
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
        <button
          className="m-2 p-2 bg-white text-black rounded-lg hover:bg-neutral-300  focus:outline-dashed"
          onClick={
            typeOfColor === "hex" ? generateHexColor : generateRgbColor }
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeOfColor === "rgb" ? "RGB color" : "Hex color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
