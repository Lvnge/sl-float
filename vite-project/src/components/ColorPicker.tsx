import React, { useState } from "react";
import { ChromePicker, ColorResult } from "react-color";

interface ColorPickerProps {
  onSelectColor: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ onSelectColor }) => {
  // 9 predefined colors
  const predefinedColors = [
    "#FF5733",
    "#33FF57",
    "#3357FF",
    "#FF33F6",
    "#FF8C33",
    "#8CFF33",
    "#33FFF6",
    "#F6FF33",
    "#8C33FF",
  ];

  const [color, setColor] = useState<string>("#FF5733"); // Default color
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);

  const handleColorChange = (color: ColorResult) => {
    const hexColor = color.hex; // Extracting the hex value from the ColorResult
    setColor(hexColor);
    onSelectColor(hexColor);
  };

  return (
    <div>
      <div className="flex space-x-2">
        {predefinedColors.map((color) => (
          <div
            key={color}
            className="w-8 h-8 rounded-full"
            style={{ backgroundColor: color }}
            onClick={() => {
              setColor(color);
              onSelectColor(color);
            }}
          ></div>
        ))}
      </div>
      <div className="mt-2">
        <button
          className="border px-4 py-2 bg-gray-200 rounded"
          onClick={() => setShowColorPicker(!showColorPicker)}
        >
          Choose Custom Color
        </button>
        {showColorPicker && (
          <ChromePicker color={color} onChange={handleColorChange} />
        )}
      </div>
    </div>
  );
};

export default ColorPicker;
