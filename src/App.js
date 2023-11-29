import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import RegistrationForm from './Registration';
function App() {
  return (
    <div className="App">
       <Router>
        <Routes>
        <Route path='/registration' element={< RegistrationForm/>} />
        </Routes>
       </Router>
    </div>
  );
}

export default App;
