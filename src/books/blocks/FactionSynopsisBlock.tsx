import { tint0 } from '../../presets/colors';
import styled from '@emotion/styled';

export const FactionSynopsisBlock = styled.div<{ flip?: boolean }>(
  {
    display: 'flex',
    background: tint0,
    height: '18vw',
  },
  ({ flip = true }) =>
    flip
      ? {
          padding: '2vw 9vw 2vw 2vw',
          marginRight: '-4vw',
          borderRadius: '10vw 0 0 10vw',
        }
      : {
          padding: '2vw 2vw 2vw 9vw',
          marginLeft: '-4vw',
          borderRadius: '0 10vw 10vw 0',
        }
);
