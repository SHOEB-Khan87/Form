
import './App.css';
import Form from './components/Form';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sixth from './components/Sixth';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Form />} />
          <Route path='/Sixth' element={<Sixth />} />
        </Routes>

      </BrowserRouter>


    </div>
  );
}

export default App;
