import './App.css';
import { Container } from '@mui/material';
import StylingCellsGrid from './components/utilities/utilities';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container className='container'>
          <StylingCellsGrid />
        </Container>
      </header>
    </div>
  );
}

export default App;
