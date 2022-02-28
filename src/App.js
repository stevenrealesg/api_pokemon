import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import PokemonList from './pages/PokemonList';
import PokemonView from './pages/PokemonView';

function App() {
  return (
    <div className='container d-flex justify-content-center'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PokemonList />} />
          <Route path='/pokemon/:id' element={<PokemonView />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
