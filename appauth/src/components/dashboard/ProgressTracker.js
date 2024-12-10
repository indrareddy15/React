import React from 'react';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const mockData = {
  labels: ['Completed', 'Upcoming', 'Missed'],
  datasets: [{
    data: [12, 3, 1],
    backgroundColor: ['#6c5ce7', '#00b894', '#ff7675'],
    borderWidth: 0
  }]
};

const ProgressTracker = () => {
  return (
    <TrackerContainer>
      <h2>Progress Overview</h2>
      <ChartContainer>
        <Doughnut data={mockData} options={{ responsive: true }} />
      </ChartContainer>
      <StatsList>
        <StatItem>
          <Label>Total Exams</Label>
          <Value>16</Value>
        </StatItem>
        <StatItem>
          <Label>Average Score</Label>
          <Value>85%</Value>
        </StatItem>
      </StatsList>
    </TrackerContainer>
  );
};

const TrackerContainer = styled.div`
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h2 {
    color: #2d3436;
    margin-bottom: 1.5rem;
    font-size: 1.2rem;
  }
`;

const ChartContainer = styled.div`
  margin: 1.5rem 0;
`;

const StatsList = styled.div`
  margin-top: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 0;
  border-bottom: 1px solid #eee;

  &:last-child {
    border-bottom: none;
  }
`;

const Label = styled.span`
  color: #636e72;
`;

const Value = styled.span`
  color: #2d3436;
  font-weight: 500;
`;

export default ProgressTracker;