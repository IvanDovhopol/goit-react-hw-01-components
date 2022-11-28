import styled from 'styled-components';
import { getRandomHexColor } from 'components/constans/randomHexColor';

export const Card = styled.section`
  display: inline-flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  color: ${p => p.theme.colors.text};
`;

export const StatList = styled.ul`
  display: flex;

  list-style: none;
  padding: ${p => p.theme.space[0]};
  margin: ${p => p.theme.space[0]};
`;

export const Stats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: ${p => p.theme.space[3]}px;
  width: 60px;
  height: 60px;
  background-color: ${getRandomHexColor};
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.normal} ${p => p.theme.colors.text};
`;
