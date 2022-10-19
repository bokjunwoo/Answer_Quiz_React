import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import ButtonSkyblue from './ButtonSkyblue';
import { next, check } from '../store/modules/mbti';
import Progress from './Progress';

const SurveyQuestion = styled.p`
  font-size: 1.5em;
  color: #777;
`;

export default function Mbti() {
  const survey = useSelector((state) => state.mbti.survey);
  const page = useSelector((state) => state.mbti.page);
  const dispatch = useDispatch();

  return (
    <>
      <SurveyQuestion>{survey[page - 1].question}</SurveyQuestion>
      <ul>
        {survey[page - 1].answer.map((el, index) => {
          return (
            <li key={index}>
              <ButtonSkyblue
                text={el.text}
                clickEvent={() => {
                  dispatch(check(el.result));
                  dispatch(next());
                }}
              />
            </li>
          );
        })}
      </ul>
      <Progress page={page} maxPage={survey.length} />
    </>
  );
}
