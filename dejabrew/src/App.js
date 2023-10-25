import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/cafe' element={<></>}/>
        <Route path='/capsulas' element={<></>}/>
        <Route path='/accesorios' element={<></>}/>
        <Route path='/maquinaria' element={<></>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
