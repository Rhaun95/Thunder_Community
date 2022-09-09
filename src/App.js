import './App.css';

import React from 'react';
import {Routes,Route}from 'react-router-dom';
import ThunderMap from "./pages/ThunderMap";
import Thunder from "./pages/Thunder";
import ThunderDetail from './pages/ThunderDetail';

//설정
//npm install react-kakao-maps-sdk 
function App() {

  return (
    <>
      <Routes>
        <Route path="/user/thunder" element={<Thunder/>}/>
        <Route path="/user/thunder/:id" element={<ThunderDetail/>}/>
        <Route path="/user/thunderMap" element={<ThunderMap/>}/>
      </Routes>
    </>
  );
}

export default App;
