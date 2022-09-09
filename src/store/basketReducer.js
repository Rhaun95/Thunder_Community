import {createSlice} from '@reduxjs/toolkit'

let initialState={

    movieList: [
      {
        id: 1,
        title: "헌터",
        posterUrl: "https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg",
        genre:  "action",
        runtime: 125,
        limit : "15세 관람가",
        position:{
            lat:37.5505579,
            lng:126.8874528,
         } 
      },{
        id: 2,
        title: "탑건: 매버릭",
        posterUrl: "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
        genre:  "action",
        runtime:   130,
        limit : "전체 관람가",
        position:{
            lat:37.4813452,
            lng:126.878116,
          }
      },{
        id: 3,
        title: "놉",
        posterUrl: "https://img.megabox.co.kr/SharedImg/2022/08/02/hQsvDEd41AY0pmON6fAhJ55ouwS5K3wb_420.jpg",
        genre:   "공포(호러),미스터리",
        runtime:   130,
        limit :"12세이상 관람가",
        position:{
            lat:37.4789439,
            lng:126.8818645,
          }
      }, {
        id: 4,
        title: "헌터",
        posterUrl: "https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg",
        genre:  "action",
        runtime: 125,
        limit : "15세 관람가",
        position:{
            lat:37.4805921,
            lng:126.8815464,
          }
      },{
        id: 5,
        title: "탑건: 매버릭",
        posterUrl: "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
        genre:  "action",
        runtime:   130,
        limit : "전체 관람가",
        position:{
            lat:37.5505579,
            lng:126.8874528,
          }
      
      },{
        id: 6,
        title: "놉",
        posterUrl: "https://img.megabox.co.kr/SharedImg/2022/08/02/hQsvDEd41AY0pmON6fAhJ55ouwS5K3wb_420.jpg",
        genre:   "공포(호러),미스터리",
        runtime:   130,
        limit :"12세이상 관람가",
        position:{
            lat:37.5505579,
            lng:126.8874528,
          }
      }, {
        id: 7,
        title: "헌터",
        posterUrl: "https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg",
        genre:  "action",
        runtime: 125,
        limit : "15세 관람가",
        position:{
            lat:37.5505579,
            lng:126.8874528,
          }
      } ,{
        id: 8,
        title: "탑건: 매버릭",
        posterUrl: "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
        genre:  "action",
        runtime:   130,
        limit : "전체 관람가",  
        position:{
            lat:37.5505579,
            lng:126.8874528,
          } 
      },
      //  },{
      //   id: 9,
      //   title: "놉",
      //   posterUrl: "https://img.megabox.co.kr/SharedImg/2022/08/02/hQsvDEd41AY0pmON6fAhJ55ouwS5K3wb_420.jpg",
      //   genre:   "공포(호러),미스터리",
      //   runtime:   130,
      //   limit :"12세이상 관람가",
      //   position:{
      //     lat:37.5505579,
      //     lng:126.8874528,
      //   },
      // }, {
      //   id: 10,
      //   title: "헌터",
      //   posterUrl: "https://movie-phinf.pstatic.net/20220805_227/1659685387586PIORG_JPEG/movie_image.jpg",
      //   genre:  "action",
      //   runtime: 125,
      //   limit : "15세 관람가",
      //   position:{
      //       lat:37.5505579,
      //       lng:126.8874528,
      //     }
     
      // },{
      //   id: 11,
      //   title: "탑건: 매버릭",
      //   posterUrl: "https://movie-phinf.pstatic.net/20220509_176/1652081912471yhg3N_JPEG/movie_image.jpg",
      //   genre:  "action",
      //   runtime:   130,
      //   limit : "전체 관람가",
      //   position:{
      //       lat:37.5505579,
      //       lng:126.8874528,
      //     }
      // },{
      //   id: 12,
      //   title: "놉",
      //   posterUrl: "https://img.megabox.co.kr/SharedImg/2022/08/02/hQsvDEd41AY0pmON6fAhJ55ouwS5K3wb_420.jpg",
      //   genre:   "공포(호러),미스터리",
      //   runtime:   130,
      //   limit :"12세이상 관람가",
      //   position:{
      //       lat:37.5505579,
      //       lng:126.8874528,
      //     }
      // },
    ],
    movieBasket: [],  //장바구니 영화
    seatBasket: [],   //장바구니 좌석
    bookedSeats :[],  //예매된 자석(필요한가?)
}

const movieSlice = createSlice({
  name : 'basket',
  initialState,
  reducers : {
    getAllMovies(state, action){
       state.movieList= action.payload;
    },
    getMovieBasket(state,action){
      state.movieBasket = action.payload.totalBooking;
    },
    setSelectedSeat(state,action){
       state.seatBasket = action.payload.id;
    },
    setSeatInMovieBasket(state,action){
      state.movieBasket.seat_num = action.payload.resultBasket;
    },
    setSeatForDB(state,action){
      state.seatBasket = action.payload.resultDB;
    }, 
    //선택한 좌석들
    getBookedSeats(state, action){
      state.bookedSeats = action.payload.result;
    }
  }
});


export default movieSlice.reducer;

//action export
export const movieBasketActions = movieSlice.actions;
