
import './App.css';
import React, {useState} from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

const Default_Colors = ['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red']

function App() {
  const [colors, setColors] = useState(Default_Colors)

  const onAddColor = (newColor => setColors([...colors, newColor]))

  const colorMap = colors.map(
    (color, index) => <ColorBlock key={index} color={color} />
    )

  return (
    <div className="App">
      {colorMap}
      <ColorForm onAddColor={onAddColor}/>
    </div>
  );
}

export default App;
