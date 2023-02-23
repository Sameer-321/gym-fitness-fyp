import React from 'react';
import Layout from './pages/Layout';
import Payment from './components/Payment'
import Test from './components/Test';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Rough from './pages/Rough';
import LoginRegister from './pages/LoginRegister';
function App() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/payment" element={<Payment />} /> 
          <Route path="/test" element={<Test />} /> 
          <Route path="/l" element={<Login />} />
          <Route path="/r" element={<Register />} />  
          <Route path="/login" element={<LoginRegister />} /> 
          {/* <Route path="/register" element={<Register />} />  */}
          <Route path="/rough" element={<Rough />} /> 
          <Route path="*" element={<Notfound />} /> 
        </Route>
      </Routes>
        
   

    </div>
  );
}

export default App;
