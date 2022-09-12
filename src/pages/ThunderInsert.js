import React,{useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
// import moment from "moment";
import axios from "axios";
import {Form} from "react-bootstrap";



import './css/ThunderInsert.css';

const ThunderInsert= ()=>{

  const navigate = useNavigate();
  
  const [val, setVal] = useState({
    username:"kim",
    title:"",
    category:"",
    content:"",
    image:"",
    openlink: "",
  })
  const [images, setImages]=useState([]);


  useEffect(()=>{
    getImages();
  
  },[])

  const getImages= async()=>{
    try{
      const temp = await axios.get("http://localhost:8080/thunderinsert")
      setImages(temp.data) ;

    }catch(error){
      console.log("번개 이미지 호출 에러: ",error);
    }
  }

  const ChangeValue = (e) => {
      setVal({
          ...val,
          [e.target.name]: e.target.value,

      });
      console.log(val)
  }

  function addImage(e){
    setVal({
      ...val,
      image: e.target.src,
    })
    console.log(val)
  }


  const addThunder = (e) => {
      e.preventDefault()
      console.log(val)
      axios.post("http://localhost:8080/thunder/insert",val)
      .then((res) => {
          if (res.data === 1) {
              console.log('추가 성공');
              console.log(res.data);
              navigate('/user/thunder');
          } else {
              alert("문의글 등록에 실패하셨습니다. 빈칸 없이 작성해주시기 바랍니다.");
              console.log('추가 실패');
          }
      });
  }


  const toThunder = (e) => {
      navigate("/user/thunder");
  }
  return (
    <>

      <div className="thunderinsert">

          <h1>번개 모임 등록</h1>
          <Form className="board_write" onSubmit={addThunder}>
              <div className="board_write_wrap">
                    제목 <input type="text" placeholder="제목 입력" name="title" onChange={ChangeValue} value={val.title}/>
                    아이디<input type="text" placeholder="아이디 입력" name="username" onChange={ChangeValue} value={val.username}/>
                    문의글 유형   
                        <select name="category" onChange={ChangeValue}>
                            <option value="none">=== 선택 ===</option>
                            <option value ="같이보기" name="category">같이보기</option>
                            <option value ="이벤트 투어" name="category">이벤트 투어</option>
                            <option value ="기타" name="category">기타</option>
                        </select>

                  <div className="thunderinsert_main">
                      <textarea cols="70" rows="20" placeholder="내용 입력" name="content" onChange={ChangeValue}
                                value={val.content}/>

                      <div className='thunderinsert_imagebox'>
                        <div>이미지 선택</div>
                        
                          {images.map((image)=>(
                            // <div className="thunderinsert_images">
                              <img key={image.id} className="thunderinsert_image" src={image.url} name="image" onClick={addImage} value={image.url}/>
                            // </div>
                          ))}
                      </div>
                  </div>

                  <div>              
                      카카오 오픈링크<input type="text" name="openlink" onChange={ChangeValue} value={val.openlink}/>
                      <div>
                        위치 찍기
                        <button>지도보기</button>
                      </div>
                  </div>
              </div>
       


              <div className="bt_wrap">
                  <button type="submit" className="on">등록</button>
                  <button onClick={toThunder}>취소</button>
              </div>
          </Form>
      </div>
      
    </>
  )
}


export default ThunderInsert;