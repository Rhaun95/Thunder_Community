import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';

import Post from "./components/Post";
import './css/Thunder.css';
import { useNavigate } from "react-router-dom";



//Card 형식
const Thunder = () => {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();

    //임시
    const postList = useSelector((state)=> state.basket.movieList);

    const [thunders, setThunders]  = useState([]);

    useEffect(()=>{
        getThunders()
    },[])

    const getThunders= async()=>{
        try{
          const temp = await axios.get("http://localhost:8080/thunder")
          setThunders(temp.data) ;
    
        }catch(error){
          console.log("번개 이미지 호출 에러: ",error);
        }
      }

    function toMap(e){
        e.preventDefault();
        navigate("/user/thunderMap");
    }

    function toInsert(e){
        navigate("/user/thunderInsert");
    }


    

    return (
        <div className="thunder">
            <header className="thunder_header">
                <h2 style={{margin:"0"}}>번개 모임</h2>
                <h3>지겨운 일상 속에 번개같은 반짝임!<br/>
                    새로운 만남을 가져보세요 : )
                </h3>
            </header>
            <div>
                <button type="button" className="toMap" onClick={toMap}>지도로 보기</button>
                <select>
                    <option value="같이보기">같이보기</option>
                    <option value="이벤트(투어)">이벤트(투어)</option>
                </select>
            </div>
            <div>
                <button onClick={toInsert}>번개 등록</button>
            </div>

            <div className="post_container">
                
                {thunders.map((thunder)=>(
                <>
                <div className="post">
                    <Post thunder={thunder}/>
                </div>
                </>
                ))}
            </div>
        </div>
    );
};

export default Thunder;