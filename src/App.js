import logo from './logo.svg';
import './App.css';
import KeyboardComponent from './components/keyboardComponent'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <KeyboardComponent />

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Simple React App to demonstrate the use of window event listeners.<br />
          The keyboard component is a simple component that listens for keypresses and updates the state of the text field.
        </p>
      </header>
    </div>
  );
}

export default App;
