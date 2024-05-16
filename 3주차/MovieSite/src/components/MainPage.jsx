import React from 'react'
import styled from 'styled-components';

const MainPageContainer = styled.div`
    background-color: #22254b;
    color: white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const WelcomeText = styled.h1`
    margin: 0;
    font-size: 2em;
`;

const SearchContainer = styled.div`
    margin: 20px 0;
`;

const SearchIcon = styled.span`
    margin-right: 10px;
`;

const SearchInput = styled.input`
    padding: 10px;
    width: 300px;
`;



export default function MainPage() {
    return (
        <MainPageContainer className="page-container">
            <WelcomeText>환영합니다</WelcomeText>
            <SearchContainer>
                <SearchIcon role="img" aira-label="camera">🎥</SearchIcon>
                Find your movies!
            </SearchContainer>
            <SearchInput type="text" />
        </MainPageContainer>
    );
};

//  배너 만들기와 styled components 적용 
// banner 컴포넌트를 따로 만들어 ?? 