import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/BoardItem.css';


const BoardItem=(props)=>{
  const{id, title, genre, runtime, posterUrl}= props.post;

  const navigate= useNavigate();

  function view(e){
    e.preventDefault();
    navigate('/user/thunder/'+ id);
  }

  return(
    <>
    
      <div className="boardItem">
        <div className="boardItem_content">
          <div style={{margin:"0px"}}>제목: {title} </div> &nbsp; &nbsp; &nbsp; &nbsp;
          {/* <div style={{margin:"0px"}}>내용 : {genre}</div> &nbsp;  */}
          <div style={{margin:"0px"}}> id : {id}</div>
        </div>
          <button className="boardItem_btn" onClick={view}>게시글 보기</button>
      </div>

      
    </>
  );
}



export default BoardItem;