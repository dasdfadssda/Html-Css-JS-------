import React from "react";
import styled, { keyframes } from "styled-components";

// keyframes 함수를 이용하여 애니메이션 효과를 정의합니다.
const rotate = keyframes`
  from {
    transform: rotate(0deg); /* 회전각도를 0도로 설정 */
  }

  to {
    transform: rotate(360deg); /* 회전각도를 360도로 설정 */
  }
`;

// 애니메이션 효과의 이름은 grow 입니다.
const grow = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.2);
  }
`;

// styled-components 라이브러리를 이용하여 버튼 컴포넌트를 정의합니다.

const GrowButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  // 버튼이 처음 렌더링될 때 grow 애니메이션을 적용합니다.
  animation: ${grow} 0.2s ease-in-out;

  &:hover {
    background-color: #27ae60;
    // hover 상태에서 grow 애니메이션을 적용하고, transform 속성을 추가합니다.
    animation: ${grow} 0.2s ease-in-out;
    transform: scale(1.2);
  }
`;

const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-top-color: #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  // 1초 동안 linear한 속도로 무한 반복하도록 설정
  animation: ${rotate} 1s linear infinite; 
  margin: 0 auto;
`;

// 스타일된 버튼 컴포넌트
const SpinButton = styled.button`
  background-color: #2ecc71; /* 배경색상 설정 */
  color: #fff; /* 글자색상 설정 */
  padding: 8px 16px; /* 안쪽 여백 설정 */
  border: none; /* 테두리 없앰 */
  border-radius: 4px; /* 테두리 둥글게 설정 */
  font-size: 16px; /* 글자 크기 설정 */
  cursor: pointer; /* 커서 모양을 포인터로 변경 */
  transition: background-color 0.3s ease-in-out; /* 배경색상 변경 시 애니메이션 효과 추가 */

  &:hover { /* 버튼에 마우스를 올리면 */
    background-color: #27ae60; /* 배경색상을 더 진한 색상으로 변경 */
    animation: ${rotate} 2s linear infinite; /* 회전 애니메이션을 적용 */
    /* ${rotate}는 위에서 정의한 rotate 키프레임을 참조하는데, 2s는 애니메이션 지속 시간을, 
    linear는 애니메이션의 타이밍 함수를 설정하는데, infinite는 애니메이션 반복 여부를 나타냄 */
  }
`;

const App = () => {
  return (
   <div>
      <SpinButton>Hover me</SpinButton>
    <GrowButton>GrowMe</GrowButton>
   </div>
  );
};

export default App;
