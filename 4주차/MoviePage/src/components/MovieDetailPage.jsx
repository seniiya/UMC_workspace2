
import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

const InfoContainer = styled.div`
  background-image: url(${movie => `https://image.tmdb.org/t/p/w500${movie.poster_path}`});
  background-size: cover;
  background-blur:20px;
  display: felx;
  flex-direction: column;
`;
//이거 왜 안 뜨지 

const Title = styled.h1`
  font-size: 25px;
  color: white;
  display: flex;
`
const Rating =styled.div`
  font-size: 25px;
  color: white;
  display: grid;

`

export default function MovieDetail() {

  const { title } = useParams();
  const { state:movie } = useLocation(); // state 사용하는 코드가 없음. movie 반환 

  const stars = "⭐️".repeat(Math.floor(movie.vote_average));
  //grid-template-columns: repeat(8, 1fr);
 // const stars = Array(Math.floor(movie.vote_average)).fill('⭐️');
  

  return (
    <InfoContainer movie={movie} >
    <div className='info-container' >
      <div>   
        <img 
        style={{width: "300px", height: "450px"}}
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
        alt='영화 포스터 이미지' />
        <Title>{title}</Title>
        
        <Rating style={{fontSize: "25px"}}>{stars}</Rating>

        <Title style={{fontSize: "20px"}}>개봉일 {movie.release_date}</Title>
        <Title style={{fontSize: "20px"}}>{movie.overview ? movie.overview: 'TMDB에서 제공하는 상세 줄거리 정보가 없습니다.'}</Title>
      </div>
    </div>
    </InfoContainer>
  );
}