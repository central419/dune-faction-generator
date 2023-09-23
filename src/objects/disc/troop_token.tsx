import { useMemo } from 'react';
import * as T from '../../shared/enums';
import { size } from '../../shared/disc';
import { Layer, TokenContainer } from './components/areas';
import { Background } from './components/background';
import { Svg } from '../../components/Wrapper';
import { StrokedUse } from '../../components/Svg';
import { FactionTroopSideModifiers, Pattern } from '../../shared/schema';
import { useCountId } from '../../shared/useCount';

interface Props {
  id?: string;
  variant: keyof typeof T.Troop;
  color: string;
  pattern: Pattern;
  modifiers: FactionTroopSideModifiers;
}

const foreGroundColor = '#e3dbb3';
const iconSize = { width: 810, height: 810 };
const iconLocation = {
  x: 450 - iconSize.width / 2,
  y: 450 - iconSize.height / 2,
};

export const TroopToken = ({
  id: pid,
  variant,
  color,
  pattern,
  modifiers,
}: Props) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${pid || cid}_`, [pid, cid]);

  const stripedMask = `${prefix}striped-mask`;
  const shadeMask = `${prefix}shade-mask`;

  return (
    <TokenContainer color={color}>
      <Background id={`${prefix}roughpaper`} pattern={pattern} />
      <Svg {...size}>
        <defs>
          <mask id={stripedMask} maskUnits="userSpaceOnUse">
            <StrokedUse
              xlinkHref={`${T.Troop[variant]}#root`}
              {...iconLocation}
              {...iconSize}
              fill="white"
              stroke="white"
            />
            {modifiers?.stroked && (
              <>
                <rect fill="black" height="20" width={size.width} y="109" />
                <rect fill="black" height="20" width={size.width} y="149" />
                <rect fill="black" height="20" width={size.width} y="189" />
                <rect fill="black" height="20" width={size.width} y="229" />
                <rect fill="black" height="20" width={size.width} y="269" />
                <rect fill="black" height="20" width={size.width} y="309" />
                <rect fill="black" height="20" width={size.width} y="349" />
                <rect fill="black" height="20" width={size.width} y="389" />
                <rect fill="black" height="20" width={size.width} y="429" />
                <rect fill="black" height="20" width={size.width} y="469" />
                <rect fill="black" height="20" width={size.width} y="509" />
                <rect fill="black" height="20" width={size.width} y="549" />
                <rect fill="black" height="20" width={size.width} y="589" />
                <rect fill="black" height="20" width={size.width} y="629" />
                <rect fill="black" height="20" width={size.width} y="669" />
                <rect fill="black" height="20" width={size.width} y="709" />
                <rect fill="black" height="20" width={size.width} y="749" />
                <rect fill="black" height="20" width={size.width} y="789" />
              </>
            )}
          </mask>
          <mask id={shadeMask} maskUnits="userSpaceOnUse">
            <StrokedUse
              xlinkHref={`${T.Troop[variant]}#root`}
              {...iconLocation}
              {...iconSize}
              fill="white"
              stroke="white"
              strokeWidth="5%"
            />
          </mask>
        </defs>

        {modifiers?.star && modifiers.star !== 'none' && (
          <circle
            cx="450"
            cy="450"
            fill={`${foreGroundColor}77`}
            id="mainCircle"
            opacity={0.5}
            r="280"
            stroke={foreGroundColor}
            strokeWidth={24}
          />
        )}
        <rect fill="rgba(0,0,0,0.4)" {...size} mask={`url(#${shadeMask})`} />
        <rect fill={foreGroundColor} {...size} mask={`url(#${stripedMask})`} />
      </Svg>
      {modifiers?.star === 'r3' && (
        <Layer
          img={T.Troop_Stars.RIGHT as unknown as string}
          style={{ transform: 'translateY(300px)' }}
        />
      )}
      {(modifiers?.star === 'r2' || modifiers?.star === 'r3') && (
        <Layer
          img={T.Troop_Stars.RIGHT as unknown as string}
          style={{ transform: 'translateY(150px)' }}
        />
      )}
      {(modifiers?.star === 'r1' ||
        modifiers?.star === 'r2' ||
        modifiers?.star === 'r3') && (
        <Layer img={T.Troop_Stars.RIGHT as unknown as string} />
      )}
      {modifiers?.star === 'l1' && (
        <Layer img={T.Troop_Stars.LEFT as unknown as string} />
      )}
    </TokenContainer>
  );
};
