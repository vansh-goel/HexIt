import React from 'react'

function Disp({ colorValue, hexValue }) {
  return (
  <div 
    id="colorBox"
    style={{backgroundColor: colorValue}}
  >
    <p>{colorValue ? colorValue : "Empty Value"}</p>
    <p>{hexValue ? hexValue : null}</p>
  </div>
  )
}

export default Disp