import * as T from '../../shared/enums';
import { FactionAssets } from '../../shared/schema';
import { pattern1 } from '../.././presets/patterns';
import { StrokedUse, Svg } from '../../components/Svg';
import { TokenContainer } from './components/areas';
import { Background } from './components/background';
import { size } from '../../shared/disc';

const foreGroundColor = '#e3dbb3';
const iconSize = { width: 470, height: 470 };
const iconLocation = {
  x: 450 - iconSize.width / 2,
  y: 450 - iconSize.height / 2,
};

export const FactionToken = ({
  logo,
  color,
  circleType = 'ring',
  pattern = pattern1,
}: Pick<FactionAssets, 'color' | 'logo' | 'pattern'> & {
  circleType?: 'ring' | 'disc';
}) => {
  const prefix = logo
    .toString()
    .toLocaleLowerCase()
    .replace(/[^a-z]/gi, '');

  return (
    <TokenContainer color={color}>
      <Background id={`${prefix}roughpaper`} pattern={pattern} />
      <Svg {...size}>
        {circleType === 'ring' && (
          <>
            <g filter={'drop-shadow( 0 0 13px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 43px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 13px rgba(0, 0, 0, 0.8))'}>
              <circle
                cx="450"
                cy="450"
                fill="transparent"
                id="mainCircle"
                r="395"
                stroke={foreGroundColor}
                strokeWidth={16}
              />
            </g>
            <g filter={'drop-shadow( 0 0 43px rgba(0, 0, 0, 0.8))'}>
              <circle
                cx="450"
                cy="450"
                fill="transparent"
                id="mainCircle"
                r="395"
                stroke={foreGroundColor}
                strokeWidth={16}
              />
            </g>
          </>
        )}

        {circleType === 'disc' && (
          <>
            <g filter={'drop-shadow( 0 0 8px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 13px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 33px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 83px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>
            <g filter={'drop-shadow( 0 0 143px rgba(0, 0, 0, 0.6))'}>
              <StrokedUse
                xlinkHref={`${T.Logo[logo]}#root`}
                {...iconLocation}
                {...iconSize}
                fill={foreGroundColor}
              />
            </g>

            <g style={{ mixBlendMode: 'overlay', filter: 'contrast(2.5)' }}>
              <g filter={'drop-shadow( 0 0 8px rgba(255, 255, 255, 0.6))'}>
                <circle
                  cx="450"
                  cy="450"
                  fill="transparent"
                  id="mainCircle"
                  r="290"
                  stroke={foreGroundColor}
                  strokeWidth={34}
                />
              </g>
            </g>
          </>
        )}
      </Svg>
    </TokenContainer>
  );
};
