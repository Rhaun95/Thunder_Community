import React from 'react';
import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    const{id, title, posterUrl, genre, runtime, limit} = props.post;
    const navigate = useNavigate();

    return (
        <>
        <Card className="post_box">
            <Card.Img variant="top" src= {posterUrl} onClick={()=>{
                navigate(''+id);
            }}/>
           
                <Card.Header>{title}</Card.Header>
                <Card.Body className="post_body">
                <Card.Text >
                    여기에는 태그??
                </Card.Text>
                </Card.Body>
            <div className="post_back" onClick={()=>{
                navigate(''+id);
            }}>
                <h3>{title}</h3>
                <p>장르 : {genre}</p>
                <p>상영시간 : {runtime}</p>
                <p>제한 : {limit}</p>
                <button>참여하기</button>
            </div>  
        </Card>
        </>
    );
};

export default Post;