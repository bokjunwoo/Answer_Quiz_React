import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonOrange from './ButtonOrange';
import { reset } from '../store/modules/mbti';
import { useEffect } from 'react';

const Header = styled.p`
  font-size: 3em;
`;

const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explanation = useSelector((state) => state.mbti.explanation[result]);
  const dispatch = useDispatch();

  useEffect(() => {
    async function sendData() {
      const resInc = await fetch('http://localhost:3001/data/inccount', { method: 'POST' }); // POST 방식으로 보내다

      if(resInc.status === 200) {
        console.log(await resInc.json());
      } else {
        throw new Error('통신 이상')
      }
    };
    sendData();
  }, [])

  // useEffect(() => {
  //   async function sendData() {
  //     const resInc = await fetch('http://localhost:3001/mongo/inccount', { method: 'POST' }); // POST 방식으로 보내다

  //     if(resInc.status === 200) {
  //       console.log(await resInc.json());
  //     } else {
  //       throw new Error('통신 이상')
  //     }
  //   };
  //   sendData();
  // }, [])

  return (
    <>
      <Header>당신의 점수 결과는?</Header>
      <Explaination>{explanation.explanation}</Explaination>
      <ButtonOrange text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
