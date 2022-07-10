import './App.css';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound';
import Cart from './containers/Cart';
import CartProvider from './context/CartContext';
// import '/imagenes/navLogo.png'

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App" >
            <NavBar />
            <Routes>
              <Route path='/' element={<ItemListContainer greeting={"Welcome"} />} />
              <Route path='/category/:idCategory' element={<ItemListContainer />} />
              <Route path='/detail/:idProduct' element={<ItemDetailContainer />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;