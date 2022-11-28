import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 400px;
  margin-bottom: ${p => p.theme.space[4]}px;
  box-shadow: ${p => p.theme.shadows.normal} ${p => p.theme.colors.black};
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Name = styled.p`
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const Tag = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
  margin: 0;
`;

export const Location = styled.p`
  color: ${p => p.theme.colors.primary};
  font-size: ${p => p.theme.fontSizes.m};
`;

export const StatsList = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding: ${p => p.theme.space[0]};
`;

export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // border: 1px solid ${p => p.theme.colors.black};
  box-shadow: ${p => p.theme.shadows.normal} ${p => p.theme.colors.text};
  width: 80px;
  height: 80px;
`;
