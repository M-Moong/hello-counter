/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import 버튼 from './components/atoms/버튼';
import 숫자표시기 from './components/atoms/숫자표시기';
import 더하기버튼 from './components/molcules/더하기버튼';
import 빼기버튼 from './components/molcules/빼기버튼';

//& 2. prop 받기

//& 1. props 쏘기
//# 카운터 컨텍스트
export const 카운터컨텍스트 = React.createContext(null);
const 카운터컨텍스트_프로바이더 = ({ children }) => {
  const [상태, set상태] = React.useState(0);
  const value = {
    상태,      // js 최신버전에서는 key만 써주는게 존멋탱이다.
    set상태: set상태  //  여기는 찐따버전
  };

  return <카운터컨텍스트.Provider value={value}>{children}</카운터컨텍스트.Provider>;
};

// TypeScript 대체
카운터컨텍스트_프로바이더.propTypes = {
  children: PropTypes.node
};

//# 카운터 
const 카운터 = (props) => {
  // const 초깃값 = 0
  // use~ 로 시작하는 함수는 React 컴포넌트와 한몸이고 hook 이라고 부른다.
  // 까서받기가 거의 룰이다


  const 리엑트엘리먼트 = (
    <카운터컨텍스트_프로바이더>
      <빼기버튼 />
      <숫자표시기 />
      <더하기버튼 />
    </카운터컨텍스트_프로바이더>
  );
  // console.log('리엑트엘리먼트', 리엑트엘리먼트);

  return 리엑트엘리먼트;
};

// TypeScript 대체 - 형을 지정해주는것
카운터.propTypes = {
  초깃값: PropTypes.number
};

//# 1번과 2번은 같은 식입니다.
//& 1번.
// const 초깃값 = 0;
// use~ 로 시작하는 함수는 React 컴포넌트와 한몸이고 hook 이라고 부른다.
// 까서받기가 거의 룰이다
// const 반환값 = React.useState(초깃값); // useState : 데이터를 다루는 저장소 역할.
// const 상태 = 반환값[0];
// const set상태 = 반환값[1];

/* //& 2번.
const [상태, set상태] = React.useState(() => { // useState 에는 초기화 함수를 넘길수도 있다.
  return +localStorage.getItem('초깃값'); // 문자로 내보내서 +1이 안먹기때문에 숫자형으로 return 한다.
});
const 빼기 = () => set상태(상태 - 1);
const 더하기 = () => {
  // const 미리계산한상태 = 상태 + 1;
  // set상태(미리계산한상태);

  // 상태 변화 함수에 넘긴 표현식은 예약이 걸린다!
  const 미리계산 = 상태 + 1;
      set상태(미리계산);
      console.log(미리계산); // 1이 아니라 0이 나온다.
}; */

/* -----------------------------*/

// const 리엑트엘리먼트 = (
//   <>
//     <button onClick={빼기}>-</button>
//     <span>{상태}</span>
//     <button onClick={더하기}>+</button>
//   </>
// );


function App() {
  return <카운터 초깃값={1} />;
}

export default App;
