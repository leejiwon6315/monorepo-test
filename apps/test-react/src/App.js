import logo from './logo.svg';
import './App.css';
import { Button } from 'core-react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Button color="blue">코어에서 불러온 리액트 버튼</Button>
      </header>
    </div>
  );
}

export default App;