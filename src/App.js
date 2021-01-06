import './App.css';
import Dnrm from './Dnrm';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  flex-direction: column;
  padding: 0;
`;

function App() {
  return (
    <Container className="App">
      <Dnrm />
    </Container>
  );
}

export default App;
