import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Policy from './routes/Policy'
import Login from './routes/Login';
import Loggedin from './routes/Loggedin';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Login />}></Route>
          <Route exact path='/loggedin' element={<Loggedin/>}></Route>
          <Route exact path='/terms-of-service' element={<Policy />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
