import './App.css';
import {Route, Routes} from 'react-router-dom'
import Pricing from '../src/Pages/Pricing'
import Notfound from './Pages/Notfound';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {
  return (
    <Routes>
      <Route path='/'  element={<Pricing />}/>
      <Route path='/userAuth/registration' element={<Register />} />
      <Route path='/userAuth/login' element={<Login />} />
      <Route path='/*' element={<Notfound />}/> 
    </Routes>
  );
}

export default App;
