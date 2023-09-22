import styled from '@emotion/styled';
import { size } from '../../../shared/disc';

export const TokenContainer = styled.div<{ color: string }>(({ color }) => ({
  ...size,
  overflow: 'hidden',
  position: 'relative',
  color,
  backgroundColor: color,
}));

export const Layer = styled.div<{ img: string }>(
  {
    width: 690,
    height: 690,
    overflow: 'hidden',
    position: 'absolute',
    top: 50,
    right: 105,
  },
  ({ img }) => ({
    background: `url(${img})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  })
);
