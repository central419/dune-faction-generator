import styled from '@emotion/styled';

export const WithBottom = styled.div({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,

  '& > *:first-child': {
    flex: 1,
  },
});

export const SideBySide = styled.div<{ gap?: number }>(({ gap = 4 }) => ({
  display: 'flex',
  gap: `${gap}vw`,
}));
