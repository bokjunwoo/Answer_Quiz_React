import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import ButtonOrange from './ButtonOrange';
import { reset } from '../store/modules/mbti';

const Header = styled.p`
  font-size: 3em;
`;

const Explaination = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Show() {
  const result = useSelector((state) => state.mbti.mbtiResult);
  const explaination = useSelector((state) => state.mbti.explaination[result]);
  const dispatch = useDispatch();

  return (
    <>
      <Header>당신의 점수 결과는?</Header>
      <Explaination>{explaination.text}/</Explaination>
      <ButtonOrange text="다시 검사하기" clickEvent={() => dispatch(reset())} />
    </>
  );
}
