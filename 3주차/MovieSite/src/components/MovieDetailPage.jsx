// import React from 'react'

// export default function MovieDetail() {
//     return (
//         <div>MovieDetail</div>
//     )
// }

import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import useAxiosMovies from './Api.jsx';

export default function MovieDetail() {
  const { title } = useParams();
  const { state } = useLocation();



  return (
    <div className="page-info">
      <div style={{display: 'flex'}}>
        <img style={{width: '300px', height: '450px'}} src={IMG_BASE_URL + state.poster_path} alt='영화 포스터 이미지' />
        <div>
          <div style={{ fontSize: "32px" }}>{title}</div>
        </div>
      </div>
    </div>
  );
};