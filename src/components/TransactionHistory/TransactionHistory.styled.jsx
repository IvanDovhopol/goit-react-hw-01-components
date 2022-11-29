import styled from 'styled-components';

export const Table = styled('table')({
  fontFamily: p => p.theme.fonts.regular,
  fontSize: p => p.theme.fontSizes.m,
  textAlign: 'center',
});

export const Heading = styled('th')({
  fontWeight: p => p.theme.fontWeights.bold,
  backgroundColor: p => p.theme.colors.tableAccent,
  padding: p => p.theme.space[5] + 'px ' + p.theme.space[7] + 'px',
});

export const Body = styled('td')({
  ':first-child': {
    padding: p => p.theme.space[3] + 'px ' + p.theme.space[7] + 'px',
    textAlign: 'left',
  },
});

export const Row = styled('tr')({
  backgroundColor: p => p.theme.colors.table,
  ':nth-child(even)': {
    backgroundColor: p => p.theme.colors.tableAccent,
  },
});
