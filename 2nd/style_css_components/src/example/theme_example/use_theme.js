import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import theme from "./theme";

// 전역 스타일 생성
const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font-family: ${(props) => props.theme.fonts.body};
    margin: 0;
  }
`;

// 버튼 스타일 정의
const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

// 텍스트 스타일 정의
const Text = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-size: 16px;
`;

const App = () => {
  // 테마 객체를 ThemeProvider 컴포넌트의 theme prop으로 전달
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Button>Click me</Button>
      <Text>Styled Components Theming Example</Text>
    </ThemeProvider>
  );
};

export default App;
