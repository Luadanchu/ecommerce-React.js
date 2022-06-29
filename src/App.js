
import './App.css';
// import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
// import '/imagenes/navLogo.png'

function App() {
  return (
    <div className="App" >
      <header>
        <img className="logoNav" src='/imagenes/navLogo.png' alt="logo" />
        <NavBar />
      </header>
      {/* <ItemListContainer greeting={"Tienda"} ></ItemListContainer> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;

