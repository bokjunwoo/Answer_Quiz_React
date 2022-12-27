import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/mbti'
import { useEffect, useState } from 'react';

const Header = styled.p`
  font-size: 3rem;
`;

const MainImg = styled.img`
  width: inherit;
`;

export default function Start() {
  const [counts, setCounts] = useState(0)
  const dispatch = useDispatch();

  /*
  function makeData(survey, explanation) {
    const initData = { survey: [], explanation: {}};
    if(initData.survey.length === 0) {
      for(let i = 0; i < survey.length; i = i + 4) {
        initData.survey.push({
          question: survey[i].QUESTION_TEXT,
          answer: [{
            text: survey[i].ANSWER_TEXT,
            result: survey[i].RESULT,
          }, {
            text: survey[i+1].ANSWER_TEXT,
            result: survey[i+1].RESULT,
          }, {
            text: survey[i+2].ANSWER_TEXT,
            result: survey[i+2].RESULT,
          }, {
            text: survey[i+3].ANSWER_TEXT,
            result: survey[i+3].RESULT,
          }],
        });
      ;}
    };

    for(let i = 0; i < explanation.length; i++) {
      initData.explanation[explanation[i].SCORE] = {
        explanation: explanation[i].EXPLANATION,
      };
    };
    return initData;
  }
  */
  // async function sqlfetchData() {
  //   // counts 값 받아오기
  //   const resCount = await fetch('http://localhost:3001/data/counts');
  //   if(resCount.status === 200) {
  //     const num = await resCount.json();
  //     if (num[0].counts !== 0) setCounts(num[0].counts);
  //   } else {
  //     throw new Error('통신 이상');
  //   };

  //   // survey 값 받아오기
  //   const resSurvey = await fetch('http://localhost:3001/data/survey');
  //   if(resSurvey.status === 200) {
  //     const surveyData = await resSurvey.json();
      
  //     // explanation 값 받아오기
  //     const resExplanation = await fetch('http://localhost:3001/data/explanation');
  //     if(resExplanation.status === 200) {
  //       const explanationData = await resExplanation.json();
  //       const madeData =  makeData(surveyData, explanationData);
  //       dispatch(init(madeData));
  //     } else {
  //       throw new Error('통신 이상');
  //     };
  //   } else {
  //     throw new Error('통신 이상');
  //   };
  // };

  async function mongoFetData() {
    // count 값 받아오기
    const resCount = await fetch('http://54.180.136.213:3001/mongo/count');
    if(resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    };

    // 설문 전체 값 받아오기
    const resData = await fetch('http://54.180.136.213:3001/mongo/getdata');
    if (resData.status === 200) {
      const data = await resData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      };
    } else {
      throw new Error('통신 이상');
    };
  }
  
  useEffect(() => {
    // sqlfetchData();
    mongoFetData();
  }, [])

  return (
    <>
      <Header>나를 맞춰 보세요!</Header>
      <p>지금 까지 참여한 인원 {counts}명</p>
      <MainImg src="/images/kakao.png" alt="메인 이미지" />
      <ButtonOrange text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
