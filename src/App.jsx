import 'bootstrap/dist/css/bootstrap.min.css';
import Menubar from './components/Menubar';
import Cart from './components/Cart';
import Home from './components/Home';
import Products from './components/Products'
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Menubar /> 
        <Routes>
          <Route path='/' element = {<Home/>} /> 
          <Route path='/products' element = {<Products/>} /> 
          <Route path='/cart' element = {<Cart/>} /> 
        </Routes>
      </BrowserRouter>

      
      
    </div>
  )
}

export default App
