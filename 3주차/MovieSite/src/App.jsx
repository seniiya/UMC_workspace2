// import React,{ useState } from 'react';
// import Nav from './components/Navbar';
// import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Popular from './components/PopularPage';
// import NowPlay from './components/NowPlayingPage';
// import TopRated from './components/TopRatedPage';
// import Upcoming from './components/UpComing';


// function App() {

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />}/>
//           <Route path="/sign" element={<Sign />}/>
//           <Route path="/popular" element={<Popular />}/>
//           <Route path="/nowplay" element={<NowPlay />}/>
//           <Route path="/toprated" element={<TopRated />}/>
//           <Route path="/upcoming" element={<Upcoming />}/>
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;

// 라우팅 작업

// import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UpComing from './components/UpComing';
import TopRated from './components/TopRatedPage';
import Popular from './components/PopularPage';
import MainPage from './components/MainPage';
import NowPlay from './components/NowPlayingPage';
import Navbar from './components/Navbar';
// import Loding from './components/Loding';

// import MovieDetail from './components/MovieDetailPage';


function App() {
  return (
    // const [loding, setLoding] = useState(true);
    <div className="root-wrap">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/nowplay" element={<NowPlay />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/top" element={<TopRated />} />
          <Route path="/upcoming" element={<UpComing />} />
        </Routes>
    </BrowserRouter>

    {/* {
      loding ? ( 
      <Loding/>): (
        <div>
          <Route/>
      )}
     */}
    </div>
   
    
  );

  
}

export default App;