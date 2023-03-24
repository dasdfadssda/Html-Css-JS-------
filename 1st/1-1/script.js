// 변수를 선언하고 값을 할당합니다.
const button = document.querySelector('button');

// 클릭 이벤트를 처리하는 함수를 정의합니다.
function handleClick() {
  alert('버튼 눌렸다.!');
}

// 클릭 이벤트 리스너를 등록합니다.
button.addEventListener('click', handleClick);
