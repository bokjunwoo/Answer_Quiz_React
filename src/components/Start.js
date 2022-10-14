import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti'

const Header = styled.p`
  font-size: 3rem;
`;

const MainImg = styled.img`
  width: inherit;
`;

export default function Start() {
  const dispatch = useDispatch();

  return (
    <>
      <Header>나를 맞춰 보세요!</Header>
      <MainImg src="/images/main.jpg" alt="메인 이미지" />
      <ButtonOrange text="테스트 시작" clickEvent={() => dispatch(next())} />
    </>
  );
}
