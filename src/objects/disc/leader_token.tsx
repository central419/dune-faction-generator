import styled from '@emotion/styled';
import { SVGProps, useMemo } from 'react';
import * as T from '../../shared/enums';
import { TokenContainer } from './components/areas';
import { Background } from './components/background';
import { size } from '../../shared/disc';
import { StrokedUse, Svg } from '../../components/Svg';
import { pattern1 } from '../../presets/patterns';
import { useCountId } from '../../shared/useCount';
import { FactionAssets, FactionLeader } from '../../shared/schema';

const LeaderText = styled((props: SVGProps<SVGTextPathElement>) => (
  <text>
    <textPath {...props} />
  </text>
))({
  fontFamily: 'C_Copperplate_Gothic',
  fontSize: '88px',
  fontWeight: 'bold',
  textAnchor: 'middle',
});

const StrengthText = styled((props: SVGProps<SVGTextElement>) => (
  <text {...props} />
))({
  fontFamily: 'C_Advokat_Modern',
  fontSize: '380px',
  fontWeight: 'bold',
  textAnchor: 'end',
});

type Props = FactionLeader & {
  id?: string;
  logo: FactionAssets['logo'];
  pattern: FactionAssets['pattern'];
  color: FactionAssets['color'];
};

const iconSize = { width: 124, height: 124 };
const iconLocation = { x: 450 - iconSize.width / 2, y: 650 };

const foreGroundColor = '#e3dbb3';

export const LeaderToken = ({
  strength,
  image: url,
  name,
  logo,
  color,
  pattern = pattern1,
  id: pid,
}: Props) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${pid || cid}_`, [pid, cid]);

  const curvedTextPath = `${prefix}curvedTextPath`;

  const discMask = `${prefix}mask-disc`;

  return (
    <TokenContainer color={color}>
      <Background id={`${prefix}roughpaper`} pattern={pattern} />
      <Svg {...size}>
        <defs>
          <path d="m50,490 a320,280 0 0 0 800,0" id={curvedTextPath}></path>

          <mask id={discMask} maskUnits="userSpaceOnUse">
            <rect {...size} fill="black" />
            <circle cx="450" cy="395" fill="white" r="345"></circle>
            <StrokedUse
              xlinkHref={`${T.Logo[logo]}#root`}
              {...iconLocation}
              {...iconSize}
              fill="black"
              stroke="black"
              strokeWidth="20%"
            />
            <StrengthText
              fill="black"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="50px"
              x="800"
              y="550"
            >
              {strength}
            </StrengthText>
          </mask>
        </defs>
        <image
          height={690}
          mask={`url(#${discMask})`}
          width={690}
          x={105}
          xlinkHref={url}
          y={50}
        />
        <circle
          cx="450"
          cy="395"
          fill="transparent"
          id="mainCircle"
          mask={`url(#${discMask})`}
          r="345"
          stroke={foreGroundColor}
          strokeWidth={20}
        />
        <StrengthText fill={foreGroundColor} x="800" y="550">
          {strength}
        </StrengthText>
        <LeaderText
          fill={foreGroundColor}
          filter={'drop-shadow(0 0 1.75rem rgba(0,0,0,0.6))'}
          startOffset="50%"
          xlinkHref={`#${curvedTextPath}`}
        >
          {name}
        </LeaderText>
        <StrokedUse
          xlinkHref={`${T.Logo[logo]}#root`}
          {...iconLocation}
          {...iconSize}
          fill={foreGroundColor}
        />
      </Svg>
    </TokenContainer>
  );
};
