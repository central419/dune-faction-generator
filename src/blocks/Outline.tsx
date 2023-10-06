import styled from '@emotion/styled';
import * as colors from '../presets/colors';

const variation = {
  generic: {
    background: colors.tint0,
  },
  example: {
    color: 'white',
    background: colors.tint2,
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
