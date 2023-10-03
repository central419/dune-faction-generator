import styled from '@emotion/styled';
import { FC, SVGProps } from 'react';
import { foreGroundColor } from './helpers';
import { Scale, Size, Location } from '../../../shared/types';
import { size } from '../../../shared/card';

export const Svg = styled.svg({
  position: 'absolute',
  top: 0,
  left: 0,
});

export const add = (p1: Location, p2: [number, number] | undefined): Location =>
  p2
    ? {
        x: p1.x + p2[0],
        y: p1.y + p2[1],
      }
    : p1;

export const times = (p1: Size, s: Scale | undefined): Size =>
  s
    ? {
        width: p1.width * s,
        height: p1.height * s,
      }
    : p1;

export const Mask = ({
  id,
  href,
  ...rest
}: { id: string; href: string } & SVGProps<SVGImageElement>) => (
  <mask id={id} maskUnits="userSpaceOnUse">
    <rect fill="black" {...size} x={0} y={0} />
    <image {...size} x={0} y={0} {...rest} xlinkHref={href} />
  </mask>
);

export const StrokedUse: FC<SVGProps<SVGUseElement>> = ({
  stroke,
  strokeWidth,
  ...rest
}) => (
  <>
    <use {...{ stroke, strokeWidth }} {...rest} />
    <use {...rest} />
  </>
);

export const stroked = { stroke: foreGroundColor, strokeWidth: '2%' };
export const empty = {};
