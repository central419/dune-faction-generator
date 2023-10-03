import styled from '@emotion/styled';
import { SVGProps, useMemo } from 'react';
import * as T from '../../../shared/enums';
import { add, empty, Mask, stroked, StrokedUse, Svg, times } from './Svg';
import { CardContainer, ContentArea, Layer, SubArea, TitleArea } from './Areas';
import {
  azimuth,
  decalPosition,
  decalSize,
  elevation,
  foreGroundColor,
  leaderCirclePosition,
  leaderLogoPosition,
  leaderLogoSize,
  middleColor,
  octaves,
  seed,
  sideCirclePosition,
  sideLogoPosition,
  sideLogoSize,
  surface,
} from './helpers';
import { size } from '../../../shared/card';
import { useCountId } from '../../../shared/useCount';
import { DecalField, FrontProps, TextField } from '../../../shared/types';
import { MarkdownContent } from '../../../components/MarkdownContent';

export const Front = ({
  id: pid,
  decals,
  base,
  content,
  head,
  icon,
  release,
  sub,
  title,
  side,
  leader,
  recolor = [],
}: FrontProps) => {
  const cid = useCountId();
  const prefix = useMemo(() => `${pid || cid}_`, [pid, cid]);

  const [titleText, titleSize] = useMemo(
    () => (Array.isArray(title) ? title : [title, 1]),
    [title]
  );
  const [subText, subSize] = useMemo(
    () => (Array.isArray(sub) ? sub : [sub, 1]),
    [sub]
  );
  const [contentText, contentSize] = useMemo(
    () => (Array.isArray(content) ? content : [content, 1]),
    [content]
  );

  return (
    <CardContainer>
      <Layer img={T.Layer.FRONT_DECAL_BG} />

      <Svg {...size}>
        <FrontDecals {...{ decals, prefix }} />

        <FrontHead {...{ prefix, recolor, head }} />

        {side && <FrontAside {...{ prefix, ...side }} />}
        {leader && <FrontLeader {...{ prefix, ...leader }} />}
      </Svg>

      <Layer img={T.Front[base]} />
      <Layer img={T.Icon[icon]} />
      {release && <Layer img={T.Release[release]} />}

      <TitleArea size={titleSize}>{titleText}</TitleArea>
      <SubArea size={subSize}>{subText}</SubArea>
      <ContentArea isFull={base === 'FULL'} size={contentSize}>
        <MarkdownContent>{contentText}</MarkdownContent>
      </ContentArea>
    </CardContainer>
  );
};

function FrontAside({
  logo,
  prefix,
  color,
}: { prefix: string } & FrontProps['side']) {
  const asideMask = `${prefix}aside-mask`;
  const roughpaper = `${prefix}roughpaper`;

  return (
    <>
      <defs>
        <filter height="100%" id={roughpaper} width="100%" x="0%" y="0%">
          <feTurbulence
            baseFrequency="0.03"
            numOctaves={octaves}
            result="noise"
            seed={seed}
            type="fractalNoise"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor={color}
            result="diffLight"
            surfaceScale={surface}
          >
            <feDistantLight azimuth={azimuth} elevation={elevation} />
          </feDiffuseLighting>
        </filter>

        <Mask href={'' + T.Layer.FRONT_ASIDE_MASK} id={asideMask} />
      </defs>
      <rect
        fill="hotpink"
        {...size}
        filter={`url(#${roughpaper})`}
        mask={`url(#${asideMask})`}
      />
      <g style={{ mixBlendMode: 'overlay', boxShadow: '0 0 10px black' }}>
        <circle
          cx={sideCirclePosition.x}
          cy={sideCirclePosition.y}
          fill="transparent"
          id="mainCircle"
          r="90"
          stroke="silver"
          strokeWidth={14}
        />
      </g>
      <StrokedUse
        fill={foreGroundColor}
        stroke="#000000"
        strokeWidth="220px"
        xlinkHref={`${T.Placeable[logo]}#root`}
        {...sideLogoPosition}
        {...sideLogoSize}
      />
    </>
  );
}

function FrontDecals({
  prefix,
  decals,
}: {
  decals: DecalField[];
  prefix: string;
}) {
  const fadedDecals = useMemo(
    () => decals.filter((d) => typeof d !== 'string' && d.fade === true),
    [decals]
  );
  const nonFadedDecals = useMemo(
    () => decals.filter((d) => typeof d === 'string' || d.fade !== true),
    [decals]
  );
  const decalsMask = `${prefix}decals-mask`;

  return (
    <>
      <defs>
        {fadedDecals.length > 0 && (
          <mask id={decalsMask} maskUnits="userSpaceOnUse">
            <rect fill="black" {...size} x={0} y={0} />
            {fadedDecals.map((d, i) =>
              typeof d === 'string' ? (
                <image
                  key={i}
                  {...decalPosition}
                  {...decalSize}
                  filter="invert(100%)"
                  xlinkHref={'' + T.Placeable[d]}
                />
              ) : (
                <image
                  key={i}
                  {...add(decalPosition, d.offset)}
                  {...times(decalSize, d.scale)}
                  filter="invert(100%)"
                  xlinkHref={'' + T.Placeable[d.id]}
                />
              )
            )}
          </mask>
        )}
      </defs>
      {fadedDecals.length > 0 && (
        <rect fill={middleColor} {...size} mask={`url(#${decalsMask})`} />
      )}

      {nonFadedDecals.map((d, i) =>
        typeof d === 'string' ? (
          <StrokedUse
            key={i}
            xlinkHref={`${T.Placeable[d]}#root`}
            {...decalPosition}
            {...decalSize}
            {...stroked}
          />
        ) : (
          <StrokedUse
            key={i}
            {...(d.outline !== false ? stroked : empty)}
            xlinkHref={`${T.Placeable[d.id]}#root`}
            {...add(decalPosition, d.offset)}
            {...times(decalSize, d.scale)}
          />
        )
      )}
    </>
  );
}

const StrengthText = styled((props: SVGProps<SVGTextElement>) => (
  <text {...props} />
))({
  fontFamily: 'C_Advokat_Modern',
  fontSize: '216px',
  textAnchor: 'end',
});

function FrontLeader({
  logo,
  prefix,
  color,
  image,
  strength,
}: { prefix: string } & FrontProps['leader']) {
  const roughpaper = `${prefix}roughpaper`;
  const logoMask = `${prefix}logoMask`;
  const leaderMask = `${prefix}leaderMask`;

  return (
    <>
      <defs>
        <filter height="100%" id={roughpaper} width="100%" x="0%" y="0%">
          <feTurbulence
            baseFrequency="0.03"
            numOctaves={octaves}
            result="noise"
            seed={seed}
            type="fractalNoise"
          />
          <feDiffuseLighting
            in="noise"
            lightingColor={color}
            result="diffLight"
            surfaceScale={surface}
          >
            <feDistantLight azimuth={azimuth} elevation={elevation} />
          </feDiffuseLighting>
        </filter>
        <mask id={logoMask} maskUnits="userSpaceOnUse">
          <rect fill="black" {...size} x={0} y={0} />
          <circle
            cx={leaderCirclePosition.x}
            cy={leaderCirclePosition.y}
            fill="white"
            r="70"
          />
        </mask>
        <mask id={leaderMask} maskUnits="userSpaceOnUse">
          <rect fill="black" {...size} x={0} y={0} />
          <circle cx="50%" cy="470px" fill="white" r="176px" />
        </mask>
      </defs>
      <circle
        cx={leaderCirclePosition.x}
        cy={leaderCirclePosition.y}
        fill="hotpink"
        filter={`url(#${roughpaper})`}
        mask={`url(#${logoMask})`}
        r="70"
      />
      <g style={{ mixBlendMode: 'overlay', boxShadow: '0 0 10px black' }}>
        <circle
          cx={leaderCirclePosition.x}
          cy={leaderCirclePosition.y}
          fill="transparent"
          r="65"
          stroke="silver"
          strokeWidth={10}
        />
      </g>
      <circle
        cx={leaderCirclePosition.x}
        cy={leaderCirclePosition.y}
        fill="transparent"
        r="70"
        stroke="rgba(0,0,0,0.8)"
        strokeWidth={5}
      />
      <circle
        cx={leaderCirclePosition.x}
        cy={leaderCirclePosition.y}
        fill="transparent"
        r="88"
        stroke="#887C55"
        strokeWidth={8}
      />
      <g style={{ mixBlendMode: 'luminosity' }}>
        <circle
          cx={leaderCirclePosition.x}
          cy={leaderCirclePosition.y}
          fill="transparent"
          r="42"
          stroke="red"
          strokeWidth={4}
        />
      </g>

      <circle cx="50%" cy="470px" fill="#CDBC81" r="176px" />

      <image
        height={354}
        mask={`url(#${leaderMask})`}
        width={354}
        x={273}
        xlinkHref={image}
        y={293}
      />

      <StrengthText x={795} y={658}>
        {strength}
      </StrengthText>

      <circle
        cx="50%"
        cy="470px"
        fill="transparent"
        r="180px"
        stroke="#887C55"
        strokeWidth={8}
      />
      <circle
        cx="50%"
        cy="470px"
        fill="transparent"
        r="196px"
        stroke="#887C55"
        strokeWidth={8}
      />
      <StrokedUse
        fill={foreGroundColor}
        stroke="#000000"
        strokeWidth="10%"
        xlinkHref={`${T.Placeable[logo]}#root`}
        {...leaderLogoPosition}
        {...leaderLogoSize}
      />
    </>
  );
}

function FrontHead({
  prefix,
  head,
  recolor,
}: {
  prefix: string;
  recolor: string[];
  head: keyof typeof T.Head;
}) {
  const frontHeadMask = `${prefix}front-head-mask`;

  return (
    <>
      <defs>
        <Mask href={'' + T.Layer.FRONT_HEAD_MASK} id={frontHeadMask} />
      </defs>

      <image
        {...size}
        mask={`url(#${frontHeadMask})`}
        style={{ filter: recolor[0] }}
        x={0}
        xlinkHref={'' + T.Head[head]}
        y={0}
      />
    </>
  );
}
