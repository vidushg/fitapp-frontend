//import logo from './logo.svg';
import './App.css';
import {Route, Routes} from "react-router-dom"
import React from 'react';
import ExerciseList from './components/exerciseList';
import Create from './components/create';

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<ExerciseList />}/>
      <Route path="/create" element={<Create />}>
      </Route>
      </Routes>
    </div>
  );
};

export default App;
