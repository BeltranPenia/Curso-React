import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import NavBar from './components/NavBar/NavBar.jsx';
import Cart from './components/Cart/Cart.jsx';
import Error from './components/Error/Error.jsx';
//import Checkout from './components/Checkout/Checkout.jsx';
import CartContextProvider from './components/Contexts/CartContext.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Checkout from './components/Checkout/Checkout.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <CartContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer/>} />
            <Route path='/category/:categoria' element={<ItemListContainer/>}/>
            <Route path='/item/:id' element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/checkout' element={<Checkout/>}/>
            <Route path='*' element={<Error/>} />
            
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
