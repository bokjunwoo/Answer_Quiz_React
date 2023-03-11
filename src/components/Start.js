import styled from 'styled-components';
import ButtonOrange from './ButtonOrange';
import { useDispatch, useSelector } from 'react-redux';
import { next, init } from '../store/modules/quzi';
import { useEffect } from 'react';
import { fetchCounts, fetchData } from '../store/modules/data';

const Header = styled.p`
  font-size: 3rem;
`;

const MainImg = styled.img`
  width: inherit;
`;

export default function Start() {
  const dispatch = useDispatch();

  const { quziData, loadingData, errorData } = useSelector(
    (state) => state.data
  );
  const { counts, loadingCounts, errorCounts } = useSelector(
    (state) => state.data
  );

  useEffect(() => {
    dispatch(fetchData());
    dispatch(fetchCounts());
  }, [dispatch]);

  return (
    <>
      <Header>나를 맞춰 보세요!</Header>
      <p>지금 까지 참여한 인원 {counts}명</p>
      <MainImg src='/images/kakao.png' alt='메인 이미지' />
      <ButtonOrange
        text='테스트 시작'
        clickEvent={() => {
          dispatch(next());
          dispatch(init(quziData));
        }}
      />
    </>
  );
}
