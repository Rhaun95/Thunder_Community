import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import Post from "./components/Post";
import './css/Thunder.css';
import { useNavigate } from "react-router-dom";



//Card 형식
const Thunder = () => {
    
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const postList = useSelector((state)=> state.basket.movieList);

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
                
                {postList.map((post)=>(
                <>
                <div className="post">
                    <Post post={post}/>
                    {/* <div className="post_back">
                        <h3>{post.title}</h3>
                        <p>장르 : {post.genre}</p>
                        <p>상영시간 : {post.runtime}</p>
                        <p>제한 : {post.limit}</p>
                        <button>참여하기</button>
                    </div>    */}
                </div>
                </>
                ))}
            </div>
        </div>
    );
};

export default Thunder;