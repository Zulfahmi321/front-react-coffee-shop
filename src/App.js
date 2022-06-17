import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

import Home from './pages/home/home'
import Login from './pages/login/login'
import Signup from './pages/sign-up/signup'
import Profil from './pages/profil/profil'
import Product from './pages/product/product'
import Newproduct from './pages/newproduct/createproduct'
import Newpromo from './pages/newpromo/createpromo'
import Editpromo from './pages/editpromo/editpromo'
import Editproduct from './pages/editproduct/editproduct';
import Dashboard from './pages/Dashbord/dashboard';
import Forgot from './pages/forgot/forgot'
import Productdetail from './pages/productdetail/productdetail';
import Payment from './pages/payment/payment';
import History from './pages/history/history';
import PrivateElement from './components/privateroute/PrivateElement';
import {Provider as ReduxProvider} from 'react-redux';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <div className="App">
      <ReduxProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <Router>
              <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/profil/' 
                element={
                <PrivateElement redirectedTo='/login' extraData={{isAuthenticated:false}}>
                  <Profil/>
                </PrivateElement>
                }/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/newproduct' element={<Newproduct/>}/>
                <Route path='/newpromo' element={<Newpromo/>}/>
                <Route path='/editpromo' element={<Editpromo/>}/>
                <Route path='/editproduct' element={<Editproduct/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/forgot' element={<Forgot/>}/>
                <Route path='/product/:id'element={<Productdetail/>}/>
                <Route path='/payment' 
                element={
                  <PrivateElement redirectedTo='/login' extraData={{isAuthenticated:false}}>
                <Payment/>
                </PrivateElement>
                }/>
                <Route path='/history' 
                element={
                <PrivateElement redirectedTo='/login' extraData={{isAuthenticated:false}}>
                  <History/>
                </PrivateElement>
                }/>
              </Routes>
            </Router>
            </PersistGate>
      </ReduxProvider>
    </div>
  );
}

export default App;
