import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import ExamInterface from './components/exam/ExamInterface';
import styled from 'styled-components';

function App() {
  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/exam/:id" element={<ExamInterface />} />
        </Routes>
      </Router>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f6fa;
`;

export default App;