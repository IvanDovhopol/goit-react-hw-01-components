import styled from 'styled-components';
import { getRandomHexColor } from 'components/constans/randomHexColor';

export const List = styled('ul')({
  display: 'grid',
  gap: p => p.theme.space[3] + 'px',
  listStyle: 'none',
});

export const Card = styled('li')({
  display: 'flex',
  alingItems: 'center',
  gap: p => p.theme.space[4] + 'px',
  padding: p => p.theme.space[2] + 'px',
  height: '50px',
  width: '200px',
  border: p => p.theme.borders.normal + ' ' + getRandomHexColor,
  boxShadow: p => p.theme.shadows.normal + ' ' + p.theme.colors.text,
});
