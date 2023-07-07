// eslint - disable

import './App.css';
import { useState } from 'react';
//유용한 점: html에 자동 변경 된다. 페이지 안에서 자주 바뀌는 것들을 state로

// map 배우기
//1.array 자료 갯수 만큼 함수 안의 코드 실행해줌
//2.함수의 파라미터는 array안에 있던 자료임
//3. return에 뭐 적으면 array로 담아준다.
//[1, 2, 3].map(function (a) {
//console.log(a);         //2. => 1,2,3 반복된다.
//return '12121212'         // ['12121212' ,'12121212' ,'12121212' ]
//})

function App() {

  let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState(['겨울 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  //let [따봉, 따봉변경] = useState(0); //state를 만들 때 변수 이름 2개까지 가능. 
  //let [따봉1, 따봉변경1] = useState(0);
  //let [따봉2, 따봉변경2] = useState(0);
  let [따봉, 따봉변경] = useState(0);
  // let num = [1, 2];
  //let a = num[0]; //1
  //let c = num[1]; //2
  //똑같은 방식
  // let [a, c] = [1, 2]
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');

  return (
    //return 안에는 하나의 div 안에서 완성되야 한다. div-div 못 옴
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: 'blue', fontSize: '26px' }}>ReactBlog</h4>
      </div>

      <button onClick={() => {
        let copy = [...글제목];
        // =>기존 state가 array나 object다 ! => 독립적인 state를 만들어줘야 한다.
        copy[0] = '여자 코트 추천';
        글제목변경(copy);

        // 글제목[0] = '여자 코트 추천';
        // 글제목변경(글제목);

        // { 글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) 
      }}> 수정버튼 </button>
      <button onClick={() => {
        let copy2 = [...글제목];
        copy2.sort();
        글제목변경(copy2)
      }}>정렬버튼      </button>

      {/* <div className="list">
        <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4> */}
      {/* onClick={} 안에는 함수이름을 넣어야함 */}
      {/* state 변경하는 법(등호로 금지,'따봉변경' 이용=>재렌더링도 잘됨) */}
      {/* <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4 onClick={() => { setModal(!modal) }}>{글제목[2]}</h4>
        <p>2월 17일 발행</p>
      </div> */}


      {/* 실제 블로그 글 갯수만큼html 추가하는 법  => 파라미터 a 추가하기 */}
      {
        글제목.map(function (a, i) { //두번째 파라미터 => 반복문 돌 때마다 0부터 1씩 증가하는 정수
          return (
            <div className='list' key={i}>

              {/* <h4>{글제목[0]} <span onClick={() => { 따봉변경(따봉 + 1) }}>👍</span> {따봉} </h4> */}
              <h4 onClick={() => { setModal(true); setTitle(i) }}>
                {글제목[i]}
                <span onClick={(e) => { e.stopPropagation(); 따봉변경(따봉 + 1) }
                }>👍</span> {따봉}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
              }}>삭제</button>
            </div>
          )
        })
      }

      <input onChange={(e) => {
        입력값변경(e.target.value);
      }}></input>
      <button onClick={() => {
        let copy = [...글제목]
        //copy맨 처음에 유저가 입력한 글 추가
        copy.unshift(입력값);
        글제목변경(copy)
      }}>글발행</button>

      {
        //조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드  
        //1 == 2 ? '맞음' : '아님'
        modal == true ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} color={'skyblue'} /> : null
      }

      <button onClick={() => { setTitle(0) }}>글제목0</button>
      <button onClick={() => { setTitle(1) }}>글제목1</button>
      <button onClick={() => { setTitle(2) }}> 글제목2</button>

    </div >
  );
}

// let Modal =()=>{
//   return(
//     <div></div>
//   )
// }

function Modal(props) {
  return (
    <div className='modal' style={{ backgroundColor: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={() => { props.글제목변경(['여자 코트 추천', '강남 우동 맛집', '파이썬 독학']) }}>글수정</button>
    </div>
  )
}

{/* <Modal2 />

class Modal2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'kim',
      age: 20
    }
  }
  render() {
    return (
      <div>
        안녕{this.props}
        <button onClick={() => {
          this.setState({ age: 21 })
        }}></button>
      </div>
    )
  }
} */}

export default App;
