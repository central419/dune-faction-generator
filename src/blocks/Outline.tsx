import styled from '@emotion/styled';
import { tint0, tint2 } from '../presets/colors';

const variation = {
  generic: {
    background: tint0,
  },
  example: {
    color: 'white',
    background: tint2,
  },
};

export const Outline = styled.div<{
  variant: keyof typeof variation;
  center?: boolean;
}>(
  {
    padding: '2vw',
  },
  ({ variant }) => variation[variant],
  ({ center = false }) =>
    center
      ? {
          '& h1': {
            textAlign: 'center',
          },
        }
      : {}
);
