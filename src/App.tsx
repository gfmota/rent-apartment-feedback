import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CheckOut } from './pages/CheckOut';
import { Feedback } from './pages/Feedback';

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Feedback />}
      />
      <Route
        path="/checkout"
        element={<CheckOut />}
      />
    </Routes>
  );
}

export default App;
