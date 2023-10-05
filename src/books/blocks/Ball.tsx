import styled from '@emotion/styled';

export const Ball = styled.div<{
  borderA?: 'dashed' | 'solid';
  borderB?: string;
}>(
  {
    textAlign: 'center',
    width: '3.2vw',
    height: '3.2vw',
    lineHeight: '3.2vw',
    borderRadius: '50%',
    position: 'relative',
    boxSizing: 'border-box',
    boxShadow: '0 0 0 1px black',
    backgroundColor: 'currentcolor',
    fontFamily: 'C_Copperplate_Gothic',
    fontSize: '1.6vw',
  },
  ({ borderA }) =>
    borderA
      ? {
          '&:after': {
            boxSizing: 'border-box',
            borderRadius: '50%',
            content: '""',
            position: 'absolute',
            top: '6%',
            left: '6%',
            width: '86%',
            height: '86%',
            border: `1px ${borderA} currentColor`,
          },
        }
      : {},
  ({ borderB }) =>
    borderB
      ? {
          '&:before': {
            boxSizing: 'border-box',
            borderRadius: '50%',
            content: '""',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: `0.7vw solid ${borderB}`,
          },
        }
      : {}
);
