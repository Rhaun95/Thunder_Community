import React from 'react';
import { useParams } from 'react-router-dom';

const ThunderDetail=()=>{

  const {id} = useParams();

  return(
    <>
      <h1>번개모임 {id}번 글입니다.</h1>
    </>
  )
}

export default ThunderDetail;