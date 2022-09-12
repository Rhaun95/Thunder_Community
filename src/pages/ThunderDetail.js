import React from 'react';
import { useParams,useLocation } from 'react-router-dom';

const ThunderDetail=()=>{

  const {state} = useLocation();



  return(
    <>
      <h1>번개모임 {state.id}번 글입니다.</h1>
    </>
  )
}

export default ThunderDetail;