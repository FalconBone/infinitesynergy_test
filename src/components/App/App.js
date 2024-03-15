import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import Profile from '../Profile/Profile';
import classes from './App.module.css';


function App() {

  return (
    <BrowserRouter>
      <div className={classes.container}>
        <Nav />
        <Routes>
          <Route path='/:userId' element={<Profile />}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
