import styled from 'styled-components';
import { getRandomHexColor } from 'components/constans/randomHexColor';

export const Card = styled.section({
  display: 'inline-flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Title = styled.h2({
  color: p => p.theme.colors.text,
});

export const StatList = styled.ul({
  display: 'flex',

  listStyle: 'none',
  padding: p => p.theme.space[0] + 'px',
  margin: p => p.theme.space[0] + 'px',
});

export const Stats = styled.li({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  gap: p => p.theme.space[3] + 'px',
  width: '60px',
  height: '60px',
  backgroundColor: getRandomHexColor,
  borderRadius: p => p.theme.radii.normal,
  boxShadow: p => p.theme.shadows.normal + ' ' + p.theme.colors.text,
});
