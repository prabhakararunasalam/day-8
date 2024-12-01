import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Create from './pages/Create';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Edit from './pages/Edit';


const App = () => {
  const [id ,setId] = useState(0);
  return (
    <div>
     <BrowserRouter>
     <div>
      <Navbar/>
     </div>
     <Routes>
      <Route path='/' element ={<Home setId={setId}/>}/>
      <Route path='/Create' element ={<Create/>}/>
      <Route path='/edit/:id' element = {<Edit id = {id}/>} />
     </Routes>
     <div>
      <Footer/>
     </div>
     </BrowserRouter>
    </div>
  );
};

export default App;