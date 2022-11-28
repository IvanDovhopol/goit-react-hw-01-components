import styled from 'styled-components';
import { getRandomHexColor } from 'components/constans/randomHexColor';

export const List = styled.ul`
  display: grid;
  gap: ${p => p.theme.space[3]}px;
  list-style: none;
`;

export const Card = styled.li`
  display: flex;
  aling-items: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px;
  height: 50px;
  width: 200px;
  border: ${p => p.theme.borders.normal} ${getRandomHexColor};
  box-shadow: ${p => p.theme.shadows.normal} ${p => p.theme.colors.text};
`;
