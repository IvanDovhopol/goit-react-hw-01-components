import styled from 'styled-components';

export const Card = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '300px',
  height: '400px',
  marginBottom: p => p.theme.space[4] + 'px',
  boxShadow: p => p.theme.shadows.normal + ' ' + p.theme.colors.black,
});

export const Description = styled.div({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
});

export const Name = styled.p({
  color: p => p.theme.colors.text,
  fontSize: p => p.theme.fontSizes.m,
  fontWeight: p => p.theme.fontWeights.bold,
});

export const Tag = styled.p({
  color: p => p.theme.colors.primary,
  fontSize: p => p.theme.fontSizes.m,
  margin: p => p.theme.space[0],
});

export const Location = styled.p({
  color: p => p.theme.colors.primary,
  fontSize: p => p.theme.fontSizes.m,
});

export const StatsList = styled.ul({
  display: 'flex',
  alignItems: 'center',
  listStyle: 'none',
  padding: p => p.theme.space[0] + 'px',
});

export const Stats = styled.li({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: p => p.theme.shadows.normal + ' ' + p.theme.colors.text,
  width: '80px',
  height: '80px',
});
