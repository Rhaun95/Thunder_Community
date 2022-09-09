import React from 'react';
import './css/ThunderMap.css';
import { useNavigate } from 'react-router-dom';

import { Map, MapMarker,CustomOverlayMap,MarkerClusterer } from "react-kakao-maps-sdk";
import BoardItem from './components/BoardItem';

import {useSelector, useDispatch} from 'react-redux';

//Map과(Marker) 계시글 형식
const ThunderMap = () => {

    const postList = useSelector((state)=> state.basket.movieList);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    // const clusterPositionsData=[
    //     {   
    //         id:1,
    //         lat:37.5505579,
    //         lng:126.8874528,
    //     },{
    //         id:2,
    //         lat:37.4813452,
    //         lng:126.878116,
    //     }
    //     ,{
    //         id:3,
    //         lat:37.4789439,
    //         lng:126.8818645,
    //     }
    //     ,{
    //         id:4,
    //         lat:37.4805921,
    //         lng:126.8815464,
    //     }
    // ]

    // function view(id){
    //     navigate('/user/thunder/' + id)
    // }

    
    return (
        <>
            
        <h1 style={{marginTop:"100px"}}>ThunderMap 임</h1>

        <div className="container">
            <div className="board_container">
                <div  className="board_container_title">모임 리스트</div>
                {postList.map((post)=>(
                    <>
                     <BoardItem post={post}/>
                    </>
                ))}
            </div>

            <div className="map_container">
            <Map className='map_item'
                center={{ lat: 33.5563, lng: 126.79581 }}
                level={8}>
                {postList.map((pos)=>(
                    <>
                    <MapMarker 
                        position={pos.position}
                        onClick={(e)=>{
                            navigate('/user/thunder/' + pos.id);
                        }}>
                        <div style={{color:"#000"}}>Hello World!</div>
                    </MapMarker>
                    </>
                ))}
                  </Map>
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
                
            </div>
        </div>


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