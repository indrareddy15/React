import React from 'react';
import styled from 'styled-components';

const mockExams = [
  {
    id: 1,
    title: 'Mathematics Final',
    duration: '2 hours',
    date: '2024-03-25',
    status: 'upcoming'
  },
  {
    id: 2,
    title: 'Physics Mid-term',
    duration: '1.5 hours',
    date: '2024-03-28',
    status: 'upcoming'
  }
];

const ExamList = () => {
  return (
    <ExamListContainer>
      <h2>Upcoming Exams</h2>
      <ExamGrid>
        {mockExams.map(exam => (
          <ExamCard key={exam.id}>
            <ExamTitle>{exam.title}</ExamTitle>
            <ExamInfo>
              <InfoItem>
                <span>Duration:</span> {exam.duration}
              </InfoItem>
              <InfoItem>
                <span>Date:</span> {exam.date}
              </InfoItem>
            </ExamInfo>
            <StartButton>Start Exam</StartButton>
          </ExamCard>
        ))}
      </ExamGrid>
    </ExamListContainer>
  );
};

const ExamListContainer = styled.div`
  h2 {
    color: #2d3436;
    margin-bottom: 1.5rem;
  }
`;

const ExamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
`;

const ExamCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const ExamTitle = styled.h3`
  color: #2d3436;
  margin-bottom: 1rem;
`;

const ExamInfo = styled.div`
  margin-bottom: 1rem;
`;

const InfoItem = styled.p`
  color: #636e72;
  margin: 0.5rem 0;

  span {
    font-weight: 500;
    color: #2d3436;
  }
`;

const StartButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #6c5ce7;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #5f3dc4;
  }
`;

export default ExamList;