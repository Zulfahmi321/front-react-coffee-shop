import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
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
import PrivateElement from './components/privateroute/PrivateElement';
import {Provider as ReduxProvider} from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
      <Router>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/profil/' 
                element={
                <PrivateElement redirectedTo='/login'>
                  <Profil/>
                </PrivateElement>
                }/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/forgot' element={<Forgot/>}/>
                <Route path='/product/:id'element={<Productdetail/>}/>
                <Route path='/payment' 
                element={
                  <PrivateElement redirectedTo='/login'>
                <Payment/>
                </PrivateElement>
                }/>
                <Route path='/history' 
                element={
                <PrivateElement redirectedTo='/login'>
                  <History/>
                </PrivateElement>
                }/>
              </Routes>
            </Router>
      </ReduxProvider>
    </div>
  );
}

export default App;
