import logo from './logo.svg';
import './App.css';
import CounterComponent from './components/counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <CounterComponent />
      </header>
    </div>
  );
}

export default App;
