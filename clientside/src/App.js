import './App.css';
import {Route, Routes} from 'react-router-dom'
import Pricing from '../src/Pages/Pricing'
import Notfound from './Pages/Notfound';

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Pricing />}/>
      <Route path='/*' element={<Notfound />}/> 
    </Routes>
  );
}

export default App;
