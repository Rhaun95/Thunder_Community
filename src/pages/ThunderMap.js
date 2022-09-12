import React,{useState, useEffect} from 'react';
import axios from 'axios';
import './css/ThunderMap.css';
import { useNavigate } from 'react-router-dom';

import { Map, MapMarker,CustomOverlayMap,MarkerClusterer, useMap } from "react-kakao-maps-sdk";
import ThunderBoardItem from './components/ThunderBoardItem';

import {useSelector, useDispatch} from 'react-redux';

//Map과(Marker) 계시글 형식
const ThunderMap = () => {
    const navigate = useNavigate();

    //임시
    const postList = useSelector((state)=> state.basket.movieList);
    const dispatch = useDispatch();


    const [thunders, setThunders]  = useState([]);
    const [location, setLocation] = useState("모두보기");


    useEffect(()=>{
        getThunders()
    },[])

    useEffect(()=>{
        console.log("location",location)
        if(location == "none"){
            getThunders()
        }else{
        axios.get("http://localhost:8080/thunder/select/"+ location)
        .then((res)=>{
            setThunders(res.data)
        })
    }

    },[location])


    const getThunders= async()=>{
        try{
          const temp = await axios.get("http://localhost:8080/thunder")
          setThunders(temp.data) ;
    
        }catch(error){
          console.log("번개 이미지 호출 에러: ",error);
        }
      }

    const changeLocation = (e)=>{
        setLocation(e.target.value)
        console.log(e.target.value)
        //  try{
        //   const temp = axios.get("http://localhost:8080/thunder/"+location)
        //   setThunders(temp.data) ;
    
        // }catch(error){
        //   console.log("번개 이미지 호출 에러: ",error);
        // }

     }
       
      


    const EventMarkerContainer = ({thunder}) => {
        const map = useMap()
        const [isVisible, setIsVisible] = useState(false)
  
    
        return (
          <MapMarker
            position={{ lat:thunder.lat, lng:thunder.lng }} // 마커를 표시할 위치
            onClick={(marker) => {
                map.panTo(marker.getPosition())
                
            }}
            onMouseOver={() => setIsVisible(true)}
            onMouseOut={() => setIsVisible(false)}
          >
           
                {isVisible && <div style={{width: "350px", height: "120px",display:"flex", padding:"10px"}}>
                                <div>
                                    <img src={thunder.image} alt="" width="80px" height="100px"/>
                                </div>
                                <div style={{}}>
                                    <div>제목 : {thunder.title}</div>
                                    <div>카테고리 : {thunder.category}</div>
                                </div>
                                    
                              </div>}
          </MapMarker>
        )
      }
    
    return (
        <>
            
        <h1 style={{marginTop:"100px"}}>ThunderMap 임</h1>

        <div className="container">
            <div className="board_container">
                <div  className="board_container_title">모임 리스트</div>
                {thunders.map((thunder)=>(
                    <>
                     <ThunderBoardItem thunder={thunder} onMouseOver={()=>{}}/>
                    </>
                ))}
            </div>

            <div className="map_container">
                <select name="location" onChange={changeLocation} value={location}>
                    <option value="none">모두 보기</option>
                    <option value="건대" >건대</option>
                    <option value="남양주">남양주</option>
                    <option value="장승배기" >장승배기</option>
                    <option value="가산" >가산</option>
                    <option value="부천">부천</option>
                    <option value="한강" >한강</option>
                </select>
                <Map className='map_item'
                    center={{ lat: 37.5973028, lng: 127.0291826 }}
                    level={9}>
                
                    {thunders.map((thunder)=>(
                        <>
                        
                            <EventMarkerContainer
                                key={`EventMarkerContainer-${thunder.lat}-${thunder.lng}`}
                                thunder={thunder}
                            />
                        </>
                    ))}

                </Map>
            </div>
        </div>


                {/* {postList.map((pos)=>(
                    <>
                    <MapMarker 
                        position={pos.position}
                        onClick={(e)=>{
                            navigate('/user/thunder/' + pos.id);
                        }}>
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                    </>
                ))} */}
                
                {/* <Map className='map_item'
                    center={{ lat: 33.5563, lng: 126.79581 }}
                    // style={{ width: "100%", height: "360px" }}
                    >
                    <MapMarker 
                        position={{ lat: 33.55635, lng: 126.795841 }}
                        onClick={view}
                        >
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                </Map> */}
                
      

            {/* <Map className='map_item'
                center={{ lat: 33.5563, lng: 126.79581 }}
                style={{ width: "100%", height: "360px" }}
            >
                <CustomOverlayMap position={{ lat: 33.55635, lng: 126.795841 }}>
                    <div
                    style={{padding:"42px", backgroundColor:"#323232", color:"#fff"}}
                    >
                    Custom Overlay!
                    </div>
                </CustomOverlayMap>
            </Map> 

            /*
                * 색이 있는 원, 각 지역의 마커 갯수 표시            
        
            <Map className='map_item'
        //         center={{ lat: 37.5208513, lng:126.88353235 }}
        //         style={{ width: "100%", height: "360px" }}
        //         level={10}
        //     >
        //         <MarkerClusterer
        //             averageCenter={true}
        //             minLevel={9}
        //         >
        //             {clusterPositionsData.map((pos) => (


        //             // <MapMarker
        //             //     key={`${pos.lat}-${pos.lng}`}
        //             //     position={pos}
        //             // />
        //             <CustomOverlayMap
        //                 key={`${pos.lat}-${pos.lng}`}
        //                 position={{
        //                 lat: pos.lat,
        //                 lng: pos.lng,
        //                 }}
        //             >
        //                 <div style={{
        //                     color: "black",
        //                     textAlign: "center",
        //                     background: "white",
        //                     width: "4rem",
        //                     height: "4rem",
        //                     borderRadius: "50%"
        //                  }}
        //                 >
        //                 뭘까
        //             </div>
        //           </CustomOverlayMap>
        //             ))}
        //         </MarkerClusterer>
        //     </Map>*/}
           

   

        </>
    );
};

export default ThunderMap;