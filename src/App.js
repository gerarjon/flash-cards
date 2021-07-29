import 'bulma/css/bulma.min.css';
import './App.css';
import MainPage from './pages/MainPage';
import Container from './components/Container';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <MainPage />
      </Container>
    </>
  );
}

export default App;
