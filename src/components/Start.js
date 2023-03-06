import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch } from 'react-redux';
import { next, init } from '../store/modules/quzi';
import { useEffect, useState } from 'react';
import { useCallback } from 'react';

const Header = styled.p`
  font-size: 3rem;
`;

const MainImg = styled.img`
  width: inherit;
`;

export default function Start() {
  const [counts, setCounts] = useState(0);
  const dispatch = useDispatch();

  const fetchCount = useCallback(async () => {
    const resCount = await fetch('http://54.180.136.213:3001/mongo/count');
    if (resCount.status === 200) {
      const num = await resCount.json();
      if (num[0].counts !== 0) setCounts(num[0].counts);
    } else {
      throw new Error('통신 이상');
    }
  }, []);

  const fetchData = useCallback(async () => {
    const resData = await fetch('http://54.180.136.213:3001/mongo/getdata');
    if (resData.status === 200) {
      const data = await resData.json();
      if (data[0].survey.length !== 0) {
        dispatch(init(data[0]));
      }
    } else {
      throw new Error('통신 이상');
    }
  }, [dispatch]);

  useEffect(() => {
    fetchCount();
    fetchData();
  }, [fetchCount, fetchData]);

  return (
    <>
      <Header>나를 맞춰 보세요!</Header>
      <p>지금 까지 참여한 인원 {counts}명</p>
      <MainImg src='/images/kakao.png' alt='메인 이미지' />
      <ButtonOrange text='테스트 시작' clickEvent={() => dispatch(next())} />
    </>
  );
}
