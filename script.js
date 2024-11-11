// 모든 버튼요소 가져오기
const buttons = document.querySelectorAll(".button");
const display = document.querySelector('.num-display');

// 버튼 클릭이벤트 리스너 추가하기
// 변수명 eachButton으로 지정.화살표 화살표 함수로 표현
// forEach문으로 제사용을 함수를 만들어서 코드의 길이를 줄여준다.
buttons.forEach(Button => {
    Button.addEventListener("click", () => {
        const value= Button.value; // 버튼 벨류 값으로 나타낸다.
        console.log(value); // 콘솔에 모든 버튼의 벨류값을 반환하여 보여준다.

        if(Button.classList.contains("number")) { // 클래스명이 넘버인 버튼
            
            
            if (display.textContent === "0") { // 디스플레이 요소의 초기값이 0일때 텍스트 값을 넣는다.
                display.textContent = value; // 초기값 0일 경우 새로운 값으로 대체한다. 버튼 숫자값으로 대체.
            } else {
                display.textContent += value; // 초기값이 아닌경우 클릭한 버튼의 값을 추가 한다.
            }
        } else if (value === "C"){ // C 버튼 누를 시 초기화 '0' 으로 되돌리기.
                display.textContent = "0" // 
            }
            else if (value === "."){ // 소수점 버튼을 누를 경우 (벨류 일치연산 소수점)
                if (!display.textContent.includes(".")) { // 소수점이 이미 있거나, 0일때 소수점이 입력되지 않는다.
                    display.textContent += "."; // '0' 대신 '0.'로 초기화
                    
                }
            }
        })
    }) 

