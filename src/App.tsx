import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import HomePage from './components/HomePage';
import DogList from './components/DogList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>} />
          <Route path='/home' element={<HomePage/>}/>
          <Route path='/dogs' element={<DogList/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
