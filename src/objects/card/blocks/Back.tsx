import { ComponentProps, useMemo } from 'react';
import * as T from '../../../shared/enums';
import { CardContainer, Layer } from './Areas';
import { size } from '../../../shared/card';
import { useCountId } from '../../../shared/useCount';
import { Svg } from '../../../components/Svg';

interface BackProps {
  id?: string;
  base: keyof typeof T.Back;
  shield?: keyof typeof T.Shield;
  title: string;
  recolor?: string[];
}

export const Back = ({
  base,
  shield,
  title,
  id: pid,
  recolor = [],
}: BackProps) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${pid || cid}_`, [pid, cid]);

  const textMask = `${prefix}text-mask`;
  const textShadeMask = `${prefix}text-shade-mask`;
  const gradient = `${prefix}gradient`;

  return (
    <CardContainer>
      <Layer img={T.Layer.BACK_UNDERLAY} recolor={recolor[2]} />
      <Layer img={T.Back[base]} recolor={recolor[1]} />
      {shield && <Layer img={T.Shield[shield]} recolor={recolor[0]} />}
      <Svg {...size}>
        <defs>
          <linearGradient id={gradient} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#faf8eb" />
            <stop offset="100%" stopColor="#cfaf45" />
          </linearGradient>
          <mask id={textMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} />
            <text
              dominantBaseline="middle"
              fill="white"
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 250}
            >
              {title}
            </text>
          </mask>
          <mask id={textShadeMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} />
            <text
              dominantBaseline="middle"
              fill="white"
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 250}
            >
              {title}
            </text>
            <text
              dominantBaseline="middle"
              fill="black"
              fontFamily="C_Busorama"
              fontSize="90"
              letterSpacing="-0.7"
              style={{ textTransform: 'uppercase' }}
              textAnchor="middle"
              x="50%"
              y={size.height - 254}
            >
              {title}
            </text>
          </mask>

          <filter
            height="300%"
            id="dropshadow"
            width="300%"
            x="-100%"
            y="-100%"
          >
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="#000000"
              floodOpacity="1"
              stdDeviation="8"
            />
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="#000000"
              floodOpacity="1"
              stdDeviation="4"
            />
            <feDropShadow
              dx="0"
              dy="0"
              floodColor="#000000"
              floodOpacity="1"
              stdDeviation="2"
            />
          </filter>
        </defs>
        <g filter={`url(#dropshadow)`}>
          <text
            dominantBaseline="middle"
            fill="black"
            fontFamily="C_Busorama"
            fontSize="90"
            letterSpacing="-0.7"
            style={{ textTransform: 'uppercase' }}
            textAnchor="middle"
            x="50%"
            y={size.height - 250}
          >
            {title}
          </text>
        </g>
        <rect
          fill={`url(#${gradient})`}
          y={size.height - 300}
          {...size}
          height={100}
          mask={`url(#${textMask})`}
        />
        <g style={{ mixBlendMode: 'overlay' }}>
          <rect
            fill="black"
            y={size.height - 300}
            {...size}
            height={100}
            mask={`url(#${textShadeMask})`}
          />
        </g>
        <g
          style={{
            mixBlendMode: 'color-burn',
            filter: 'invert(100%) saturate(6.2) contrast(22.1) grayscale(1)',
          }}
        >
          <image
            {...size}
            mask={`url(#${textMask})`}
            x={0}
            xlinkHref={T.Back[base]}
            y={-80}
          />
        </g>
      </Svg>
      <Layer img={T.Layer.BACK_OVERLAY} />
    </CardContainer>
  );
};
