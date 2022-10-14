import { useSelector } from 'react-redux';
import Start from './components/Start';
import styled from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Mbti from './components/Mbti';
import Show from './components/Show';

const Main = styled.main`
  box-sizing: border-box;
  width: 100%;
  max-width: 500px;
  padding: 0 35px;
  margin: auto;
  text-align: center;
`;

function App() {
  const page = useSelector((state) => state.mbti.page);
  const survey = useSelector((state) => state.mbti.survey);

  return (
    <div className="App">
      <>
        <GlobalStyle />
        <Main>
          {page === 0 ? (
            <Start />
          ) : page !== survey.length + 1 ? (
            <Mbti />
          ) : (
            <Show />
          )}
        </Main>
      </>
    </div>
  );
}

export default App;
