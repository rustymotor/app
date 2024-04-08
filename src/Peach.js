/* 
컴포넌트란
UI를 반환하는 함수/클래스

*/
//선언적함수의 컴포넌트 선언
import "./Peach.css";
function Peach() {
    return (<nav>
        <ul>
            <li>menu1</li>
            <li>menu2</li>
            <li>menu3</li>
            <li>menu4</li>
            </ul>
        </nav>);
        
        
        
    //return은 종료기능도 있어서 return문의 다음에 적힌 건 실행이 안 된다.
}
//함수 내보내기
export default Peach;