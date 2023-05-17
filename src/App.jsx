import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Checkout from './Components/Checkout/Checkout';
import Cart from './Components/Cart/Cart';
import { createProducts, getProducts } from './Firebase/Firebase';






function App() {

  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:category" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//createProducts()
getProducts()
export default App;

