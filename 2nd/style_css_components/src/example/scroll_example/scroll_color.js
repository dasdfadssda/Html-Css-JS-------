import React, { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

// 전체 앱의 배경색상을 변수로 지정합니다.
const bgColor = '#fff';

// 스크롤 될 때 변경될 배경색상을 변수로 지정합니다.
const scrollColor = '#5262F5';

// createGlobalStyle로 전체 앱의 스타일을 변경합니다.
const GlobalStyle = createGlobalStyle`
  body {
    /* scroll prop 값에 따라 배경색상이 변경됩니다. */
    background-color: ${props => props.scroll ? scrollColor : bgColor};
    /* 배경색상이 자연스럽게 변경되도록 transition 속성을 추가합니다. */
    transition: background-color 0.5s ease-in-out;
  }
`;

// 스크롤 위치를 감지하고 scroll state를 업데이트하는 컴포넌트를 생성합니다.
const ScrollDetector = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      /* 현재 스크롤 위치를 가져옵니다. */
      const currentScrollY = window.scrollY;
      /* 스크롤 위치가 일정 기준치를 넘으면 scroll state를 true로 업데이트합니다. */
      const scrollThreshold = 100;
      if (currentScrollY > scrollThreshold) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    /* 스크롤 이벤트를 추가합니다. */
    window.addEventListener('scroll', handleScroll);

    /* 컴포넌트 언마운트 시, 스크롤 이벤트를 제거합니다. */
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /* GlobalStyle 컴포넌트를 렌더링하면서 scroll state 값을 전달합니다. */
  return <GlobalStyle scroll={scroll} />;
};

// 배경색상이 변경될 div를 생성합니다.
const StyledDiv = styled.div`
  height: 200vh;
`;

// 스크롤 감지 컴포넌트와 배경색상이 변경될 div를 렌더링합니다.
const App = () => {
  return (
    <>
      <ScrollDetector />
      <StyledDiv />
    </>
  );
};

export default App;
