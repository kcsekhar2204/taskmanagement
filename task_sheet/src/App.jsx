import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TaskSheet from "./pages";

function App() {

  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route exact path='/' element={<TaskSheet />}/>
          <Route path='*' element={<div className="mt-64 flex justify-center">404 Page not found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
