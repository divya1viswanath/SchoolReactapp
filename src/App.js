import logo from './logo.svg';
import './App.css';
import Addevent from './component/Addevent';
import Searchstudent from './component/Searchstudent';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Viewstud from './component/Viewstud';

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/'exact element={<Addevent/>} />
            <Route path='/search' exact element ={<Searchstudent/>} />
            <Route path='/viewall' exact element ={<Viewstud/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
