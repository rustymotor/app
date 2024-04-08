import logo from './logo.svg';
import cat from './cat.jpg';
import './App.css';
import Peach from './Peach';
// import Card from './Card';
function Comp() {
  //컴포넌트 만들기
  //반복된 UI 요소(태그)를 반환하는 함수
  //컴포넌트함수는반드시대문자로시작
  //바환값이 있어야 하고 UI요소여야함
  /* 함수형 컴포넌트의 조건0
  -함수명, 파일명은 대문자로 시작
  -export로 내보내기
  -return값이 태그여야 함
  */
  return <div className="text">새컴포넌트ㅋㅋㅋ</div>
}
function Nav(){
  return <span className="spa">ㅎㅎㅎㅎ</span>
}
function App() {
  return (
    <div className="App">
      <Peach/>
      <Comp/><Nav/>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
      <Comp/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <img src={cat} className="App-logo" alt="cat" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
