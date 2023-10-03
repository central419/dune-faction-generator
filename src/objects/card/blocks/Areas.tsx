import styled from '@emotion/styled';
import { size } from '../../../shared/card';

export const CardContainer = styled.div({
  ...size,
  overflow: 'hidden',
  position: 'relative',
  backgroundColor: '#000',
});

export const TitleArea = styled.div<{ size?: number }>(({ size = 1 }) => ({
  left: 95,
  top: 73,
  width: 640,
  height: 86,
  overflow: 'hidden',
  position: 'absolute',
  fontFamily: 'C_Copperplate_Gothic',
  fontSize: `${size * 66}px`,
  color: 'white',
  lineHeight: '86px',
  opacity: 0.937,
}));

export const SubArea = styled.div<{ size?: number }>(({ size = 1 }) => ({
  left: 102,
  top: 176,
  width: 470,
  height: 67,
  overflow: 'hidden',
  position: 'absolute',
  fontFamily: 'C_Trebuchet',
  fontSize: `${size * 48}px`,
  color: '#0b0503',
  lineHeight: '67px',
  opacity: 0.937,
}));

export const ContentArea = styled.div<{ size?: number; isFull: boolean }>(
  ({ isFull }) =>
    isFull ? { top: 268, height: 1016 } : { top: 704, height: 499 },
  ({ size = 1 }) => ({
    width: 734,
    left: 89,
    overflow: 'hidden',
    position: 'absolute',
    fontFamily: 'C_Candara',
    fontSize: `${size * 47}px`,
    color: '#0b0503',
    opacity: 0.937,
    whiteSpace: 'pre-wrap',
    lineHeight: '1.15em',

    p: {
      margin: 0,
    },
    'P + p': {
      marginTop: 18,
    },
  })
);

export const Layer = styled.div<{ img: any; recolor?: string }>(
  {
    ...size,
    overflow: 'hidden',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  ({ img }) => ({
    background: `url(${img})`,
    backgroundSize: 'cover',
  }),
  ({ recolor }) => (recolor ? { filter: recolor } : {})
);
