import styled from '@emotion/styled';
import { ComponentProps, FC } from 'react';

function isLightOrDark(color) {
  let r, g, b;

  if (color.match(/^rgb/)) {
    [r, b, b] = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );
  } else {
    let out = +(
      '0x' + color.slice(1).replace(color.length < 5 && /./g, '$&$&')
    );
    r = out >> 16;
    g = (out >> 8) & 255;
    b = out & 255;
  }

  const hsp = Math.sqrt(0.199 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  return hsp > 157.5;
}

type Sizes = 'large' | 'medium' | 'small';

export const Title = styled.div<{ color: string; size?: Sizes }>(
  {
    overflow: 'hidden',
    fontFamily: 'C_Copperplate_Gothic',
    textTransform: 'uppercase',
    color: 'white',
    textAlign: 'center',
  },
  ({ size = 'large' }) => {
    switch (size) {
      case 'small': {
        return {
          fontSize: '2vw',
          lineHeight: '2.1vw',
          padding: '1vw',
        };
      }
      case 'medium': {
        return {
          fontSize: '4vw',
          lineHeight: '4.1vw',
          padding: '1vw',
        };
      }
      default:
      case 'large': {
        return {
          lineHeight: '5.1vw',
          fontSize: '5vw',
          padding: '1vw',
        };
      }
    }
  },
  ({ color }) => ({
    color: isLightOrDark(color) ? 'black' : 'white',
    backgroundColor: color,
  })
);

export const MediumTitle: FC<Omit<ComponentProps<typeof Title>, 'size'>> = (
  props
) => <Title size="medium" {...props} />;
