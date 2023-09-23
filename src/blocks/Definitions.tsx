import styled from '@emotion/styled';

export const Definitions = styled.dl<{ size?: number }>({
  margin: 0,
  display: 'grid',
  gap: '1vw 2vw',
  gridTemplateColumns: 'auto auto',

  dt: {
    alignSelf: 'flex-start',
    justifySelf: 'end',
    fontWeight: '700',
    '::after': {
      content: "':'",
    },
  },
  dd: {
    alignSelf: 'flex-start',
    justifySelf: 'start',
    margin: 0,
  },
});
