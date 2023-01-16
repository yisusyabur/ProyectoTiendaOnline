import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MostrarProductos from './components/MostrarProductos';
import CrearProducto from './components/CrearProducto';
import EditarProducto from './components/EditarProducto';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>

     <Route path='/' element={<MostrarProductos/>}/>
     <Route path='/create' element={<CrearProducto/>}/>
     <Route path='/edit/:id' element={<EditarProducto/>}/>


     </Routes>
     
     
     </BrowserRouter> 
    </div>
  );
}

export default App;
