import styled from '@emotion/styled';
import { ComponentProps, FC } from 'react';
import { Size } from '../shared/types';

export const Svg = styled.svg<{ isCircle?: boolean }>(
  {
    display: 'block',
    overflow: 'hidden',
    // boxShadow: '3px 3px 20px rgba(0,0,0,0.4)',
  },
  ({ isCircle }) => ({ borderRadius: isCircle ? '50%' : 8 })
);

export const Wrapper: FC<
  ComponentProps<typeof Svg> & { size: Size; isCircle?: boolean }
> = ({ size, children, isCircle, ...rest }) => (
  <Svg
    {...rest}
    isCircle={isCircle}
    viewBox={`0 0 ${size.width} ${size.height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="0" y="0" {...size}>
      {children}
    </foreignObject>
  </Svg>
);
