import styled from 'styled-components';
import { getRandomHexColor } from 'components/constans/randomHexColor';

export const Table = styled.table`
  font-family: ${p => p.theme.fonts.regular};
  font-size: ${p => p.theme.fontSizes.m};
  text-align: center;
`;

export const Heading = styled.th`
  font-weight: ${p => p.theme.fontWeights.bold};
  background: ${getRandomHexColor};
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[7]}px;
`;

export const Body = styled.td`
  background-color: ${p => p.theme.colors.table};
  :first-child {
    background: #afcde7;
    color: ${p => p.theme.colors.white};
    padding: ${p => p.theme.space[3]}px ${p => p.theme.space[7]}px;
    text-align: left;
  }
`;
