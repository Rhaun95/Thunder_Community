import React from 'react';
import {Card} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Post = (props) => {

    const{id, username, title, image, category, content, regdate} = props.thunder;
    const data = props.thunder
    console.log(data)
   

    const date = regdate.substring(0,10);

    const navigate = useNavigate();

    function viewDetail(){
        navigate("/user/thunder/"+id, {state: data})
    }

    return (
        <>
        <Card className="post_box">
            <Card.Img variant="top" src= {image} />
            {/* onClick={()=>{
                navigate('/user/thunder/'+id, {state:props.thunder});
            }} */}
                <Card.Header>{title}</Card.Header>
                <Card.Body className="post_body">
                <Card.Text >
                    카테고리: {category}
                </Card.Text>
                <Card.Text >
                     {date}
                </Card.Text>
                </Card.Body>
            <div className="post_back">
                <h3>{title}</h3>
                <p>주최자 : {username}</p>
                <p>카테고리: {category}</p>
                <p>제한 : 20세 이상</p>
                <button onClick={viewDetail} style={{cursor:"pointer"}}>참여하기</button>
            </div>  
        </Card>
        </>
    );
};

export default Post;