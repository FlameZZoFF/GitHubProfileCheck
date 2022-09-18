import React from 'react';
import {Routes,Route} from 'react-router-dom'
import StartPage from './pages/StartPage';
import UserPage from './pages/UserPage';
import Layout from './components/layout/layout';
function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>

      
      
      <Route path="/user/:id" element={<UserPage />}/> 
      <Route path="/" element={<StartPage />}/>



      </Route>
    </Routes>
  );
}

export default App;
