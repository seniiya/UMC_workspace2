
// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpComing from './components/UpComing';
import TopRated from './components/TopRatedPage';
import Popular from './components/PopularPage';
import MainPage from './components/MainPage';
import NowPlay from './components/NowPlayingPage';
import Navbar from './components/Navbar';
import MovieDetail from './components/MovieDetailPage';
import NotFound from './components/NotFound';


function App() {
  return (

    <div className="root-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplay" element={<NowPlay />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />


          <Route path='/nowplay/:title' element={<MovieDetail />}/>  
          {/* movie 로 라우팅 바꾸고 싶은데 ... 다른 카테고리 사진 데이터도 안 받아와짐 */}
          <Route path='/poular/:title' element={<MovieDetail />}/> 
          <Route path='/top/:title' element={<MovieDetail />}/> 
          <Route path='/upcoming/:title' element={<MovieDetail />}/> 
          
          <Route path='/*' element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>

  
    </div>
   
    
  );

  
}

export default App;