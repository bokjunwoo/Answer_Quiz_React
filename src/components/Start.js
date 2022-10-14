import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch } from 'react-redux';
import { next } from '../store/modules/mbti'
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

  useEffect(() => {
    async function fetchData() {
      const resCount = await fetch('http://localhost:3001/data/counts');
      if (resCount.status === 200) {
        const num = await resCount.json();
        if (num[0].counts !== 0) setCounts(num[0].counts);
      } else {
        throw new Error('통신 이상');
      }
    }
    fetchData();
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
