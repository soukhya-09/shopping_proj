import logo from './logo.svg';
import './App.css';
import Navbar from './Shoppingapp/Navbar';
import { Routes,Route } from 'react-router-dom';
import Home from './Shoppingapp/Home';
import Cart from './Shoppingapp/Cart';
function App() {
 
  return (
    <div>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>} ></Route>
    <Route path="/cart" element={<Cart/>} ></Route>
   </Routes>
    </div>
  );
}

export default App;
