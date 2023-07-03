import ColorBox from "./ColorBox";
import Input from './Input';
import { useState } from 'react'


function App() {
  const [color, setColor] = useState("");
  const [hexValue, setHexValue] = useState("");
  return (
    <div className="App">
      <ColorBox 
        colorValue = {color}
        hexValue = {hexValue}
      />
      <Input
        color = {color}
        setColor = {setColor}
        setHexValue = {setHexValue}
      />
    </div>
  );
}

export default App;
