import { useState } from 'react';
import './App.css';
import Box from "./component/Box";

// 1. 박스 2개
// 2. 타이틀
// 3. 사진정보
// 4. 결과값
// 5. 가위바위보 버튼이 존재
// 6. 버튼을 클릭하면 박스에 보임
// 7. 컴퓨터는 아이템을 랜덤한게 선택한다
// 5,6,7 결과를 따지고 결과값을 보여준다
// 승패결과에 따라 테투리 색상이 변한다(이기면 초록, 지면 빨강, 비기면 검정)
const choice = {
  rock: {
    name: "Rock",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9GMyAGUFbExJfAv2tyfomoE_MEQDyUfexZw&usqp=CAU"
  },
  paper: {
    name: "Paper",
    img: "https://lh3.googleusercontent.com/proxy/zn40CTfDNMHdcg0peqrmYPPI2azSscjcRxcB5rX2PljId48nVY4YnExfLjVKlZOmpBIMGn5P3m4tb2gBhdpIlC-K8xR6tU0"
  },
  scissors: {
    name: "Scissors",
    img: "https://blog.kakaocdn.net/dn/2mqrU/btqFofJ2wP2/bofI0Wf6C0uQZPyHsKtSS0/img.png"
  }
}
function App() {
  const [userSelect, setUseSelect] = useState(null)

  const play = (userChoice) => {
    setUseSelect(choice[userChoice])
  }
  return (
    <div>
      <div className="main">
        <Box title="You" item ={userSelect}/>
        {/* <Box title="Computer" /> */}
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
