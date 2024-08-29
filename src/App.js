import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TermsOfService from './routes/TermsOfService'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/terms-of-service' element={<TermsOfService/>}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
