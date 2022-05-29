import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/sign-up/signup'
import Profil from './pages/profil/profil'
import Product from './pages/product/product'
import Forgot from './pages/forgot/forgot'
import Productdetail from './pages/productdetail/productdetail';
import Payment from './pages/payment/payment';
import History from './pages/history/history';

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
          <Route path='/forgot' element={<Forgot/>}/>
          <Route path='/product/detail'element={<Productdetail/>}/>
          <Route path='/payment' element={<Payment/>}/>
          <Route path='/history' element={<History/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
