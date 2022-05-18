import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Quiz from './components/Quiz';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Quiz />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
