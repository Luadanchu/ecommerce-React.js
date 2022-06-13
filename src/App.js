
import './App.css';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <img className="logoNav" src={require('./imagenes/nav-logo.png')} alt="logo"/>
        <NavBar/>
      </header>
    </div>
  );
}

export default App;
