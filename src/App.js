import logo from './logo.svg';
import './App.css';
import {useState, createContext} from 'react';

const ThemeContext = createContext();


function Text({children, color}) {
  return (
    <>
      <ThemeContext.Consumer>
        {(theme) => {
          let actualColor = color ? color : theme;
          return <h1 style={{color: actualColor}}>{children}</h1>
        }}
      </ThemeContext.Consumer>
      {/* // <h1 style={{color}}>{children}</h1> */}
    </>
  )
}

function Button({children, color}) {
  return (
    <ThemeContext.Consumer>
        {(theme) => {
          let actualColor = color ? color : theme;
          return <button style={{color: actualColor}}>{children}</button>
        }}
    </ThemeContext.Consumer>
    // <button style={{color}}>{children}</button>
  )
}

function Display() {
  return (
    <>
      <Text>This is my personal Display text</Text>
      <Button>Click me!</Button>
    </>
  )
}

function App() {
  const [theme, setTheme] = useState('blue');
  return (
    <>
      <ThemeContext.Provider value={theme}>
        <h1>This is my Theme decided: {theme}</h1>
        <button onClick={() => {setTheme('blue')}}>Blue</button>
        <button onClick={() => {setTheme('green')}}>Green</button>
        <hr/>
        <Text color={theme}>Hello This is Sample Text</Text>
        <Text color='red'>Hello This is another Sample Text</Text>
        <Display color={theme}></Display>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
