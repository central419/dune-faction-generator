import styled from '@emotion/styled';
import { Children, FC, PropsWithChildren, useCallback, useState } from 'react';
import { Wrapper } from './Wrapper';
import { Size } from '../shared/types';

const Relative = styled.div({
  position: 'relative',
});

export const Fan: FC<
  PropsWithChildren<{ spacing?: number; size: Size; mask?: 'circle' }>
> = ({ children, spacing = -2, size, mask }) => {
  const [isHovered, setHovered] = useState(false);
  const exponent = isHovered ? 1.6 : 1;
  const fanOut = useCallback(() => setHovered(true), []);
  const fanIn = useCallback(() => setHovered(false), []);

  const items = Children.toArray(children)
    //@ts-ignore
    .filter((c) => typeof c === 'object' && typeof c.type === 'function')
    .map((value, index, { length }) => (
      <FanItem
        isAbsolute={index !== 0}
        key={index}
        rotation={(((length - 1) / 2) * -1 + index) * spacing * exponent}
      >
        <Wrapper isCircle={mask === 'circle'} size={size}>
          {value}
        </Wrapper>
      </FanItem>
    ));

  return (
    <Relative onMouseEnter={fanOut} onMouseLeave={fanIn}>
      {items}
    </Relative>
  );
};

const FanItem = styled.div<{ rotation: number; isAbsolute: boolean }>(
  ({ rotation }) => ({
    transform: `rotateZ(${rotation}deg)`,
    zIndex: 1,
    transformOrigin: 'center 200%',
    transition: 'transform 0.2s ease-out',
    willChange: 'transform',
  }),
  ({ isAbsolute }) =>
    isAbsolute
      ? {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }
      : {
          position: 'relative',
        }
);
