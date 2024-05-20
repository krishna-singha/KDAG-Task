import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NotFound, Template, Home, Course, DataCourse } from "./components/export"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route index element={<Home />} />
          <Route path="/courses" element={<Course />} />
          <Route path="/courses/data/:format/:id" element={<DataCourse />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
