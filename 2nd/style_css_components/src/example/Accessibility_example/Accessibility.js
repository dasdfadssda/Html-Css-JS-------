import React from 'react';
import styled from 'styled-components';

// 스타일이 적용된 버튼 컴포넌트를 선언합니다.
const StyledButton = styled.button`
  background-color: ${props => props.disabled ? 'gray' : 'blue'}; // 비활성화된 버튼일 경우 회색, 활성화된 버튼일 경우 파란색 배경색상
  color: white; // 글자 색상
  padding: 10px; // 안쪽 여백
  border: none; // 외곽선 없음
  border-radius: 5px; // 둥근 테두리
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'}; // 비활성화된 버튼일 경우 'not-allowed' 커서, 활성화된 버튼일 경우 'pointer' 커서
  &:focus { // 포커스시 스타일 변경
    outline: 2px solid #0066ff; // 노란색 경계선 표시
  }
`;

function App() {
  return (
    <div>
      <h1>Accessibility에 대한 예시</h1>
      {/* 스타일이 적용된 버튼 컴포넌트 사용 */} 
      <StyledButton disabled aria-disabled="true">Disabled Button</StyledButton> 
       {/* HTML의 disabled 속성과 aria-disabled 속성 */}
      <StyledButton>Enabled Button</StyledButton>
    </div>
  );
}

export default App;
