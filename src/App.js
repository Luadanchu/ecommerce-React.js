
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
// import '/imagenes/navLogo.png'

function App() {
  return (
    <div className="App">
      <header>
        <img className="logoNav" src='/imagenes/navLogo.png' alt="logo" />
        <NavBar/>
      </header>
      <ItemListContainer greeting={"E-commerce"}></ItemListContainer>
    </div>
  );
}

export default App;
