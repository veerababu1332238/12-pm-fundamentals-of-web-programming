import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import CounterComponent from './counter.component';
import Users from './users.component';
import TutorialsList from './tutorials/tutorials-list.component';
import AddTutorial from './tutorials/add-tutorial.component';
import EditTutorial from './tutorials/edit-tutorial.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/tutorials" element={<TutorialsList/>}></Route>
        <Route path="/add-tutorial" element={<AddTutorial/>}></Route>
        <Route path="/edit-tutorial/:id" element={<EditTutorial/>}></Route>
        <Route path="/" element={<CounterComponent/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
