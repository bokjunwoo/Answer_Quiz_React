import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonOrange from './ButtonOrange';
import { reset } from '../store/modules/quzi';
import { useEffect } from 'react';

const Header = styled.p`
  font-size: 3em;
`;

const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Show() {
  const dispatch = useDispatch();

  const result = useSelector((state) => state.quzi.quziResult);
  const explanation = useSelector((state) => state.quzi.explanation[result]);

  useEffect(() => {
    async function sendData() {
      const resInc = await fetch('http://54.180.136.213:3001/mongo/inccount', {
        method: 'POST',
      }); // POST 방식으로 보내다

      if (resInc.status === 200) {
        console.log(await resInc.json());
      } else {
        throw new Error('통신 이상');
      }
    }
    sendData();
  }, []);

  return (
    <>
      <Header>당신의 점수 결과는?</Header>
      <Explaination>{explanation.text}</Explaination>
      <Explaination>{explanation.explanation}</Explaination>
      <ButtonOrange text='다시 검사하기' clickEvent={() => dispatch(reset())} />
    </>
  );
}
