import React from 'react';
import styled from 'styled-components';
import ExamList from './ExamList';
import ProgressTracker from './ProgressTracker';

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>
        <h1>Student Dashboard</h1>
        <UserInfo>
          <span>Welcome, Student</span>
        </UserInfo>
      </Header>
      <Content>
        <MainSection>
          <ExamList />
        </MainSection>
        <Sidebar>
          <ProgressTracker />
        </Sidebar>
      </Content>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: #f5f6fa;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    color: #2d3436;
    font-size: 1.8rem;
  }
`;

const UserInfo = styled.div`
  span {
    color: #6c5ce7;
    font-weight: 500;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainSection = styled.main`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Sidebar = styled.aside`
  @media (max-width: 768px) {
    grid-row: 1;
  }
`;

export default Dashboard;