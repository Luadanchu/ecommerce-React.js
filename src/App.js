
import './App.css';
// import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import NotFound from './components/NotFound';
// import '/imagenes/navLogo.png'

function App() {
  return (
    <div className="App" >
      <header>
        <img className="logoNav" src='/imagenes/navLogo.png' alt="logo" />
        <NavBar />
        {/* <BrowserRouter>
          <Routes>
            <Route path='/' element={<ItemListContainer /> } />

            <Route path='*' element={<NotFound /> } />
          </Routes>
        </BrowserRouter> */}
      </header>
      {/* <ItemListContainer greeting={"Tienda"} ></ItemListContainer> */}
      <ItemDetailContainer />
    </div>
  );
}

export default App;

