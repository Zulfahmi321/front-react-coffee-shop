import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/sign-up/signup'
import Profil from './pages/profil/profil'
import Product from './pages/product/product'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/profil' element={<Profil/>}/>
          <Route path='/product' element={<Product/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
