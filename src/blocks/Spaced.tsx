import styled from '@emotion/styled';

export const Spaced = styled.div({
  '& > * + *': {
    marginTop: '2vw',
    boxSizing: 'border-box',
  },
});
