import { HTMLProps, useCallback, useEffect, useRef } from 'react';
import { Pattern } from '../../../shared/schema';
import { size } from '../../../shared/disc';

const getPatternString = (
  id: string,
  pattern: Omit<Pattern, '__typename'>,
  scale: number
) => {
  const { height, width } = size;
  const { azimuth, elevation, octaves, seed, surface } = pattern;
  const w = width * scale;
  const h = height * scale;

  const svg =
    `<svg xmlns='http://www.w3.org/2000/svg' width='${w}' height='${h}'><defs><filter id='${id}' x='0%' y='0%' width='${w}' height='${h}'><feTurbulence baseFrequency='0.03' numOctaves='${octaves}' result='noise' seed='${seed}' type='fractalNoise' /><feDiffuseLighting in='noise' lightingColor='currentColor' result='diffLight' surfaceScale='${surface}'><feDistantLight azimuth='${azimuth}' elevation='${elevation}' /></feDiffuseLighting></filter></defs><rect fill='hotpink' width='${w}' height='${h}' filter='url(#${id})' /></svg>`.trim();

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
};
export const Background = ({
  id,
  pattern,
  style = {},
}: { id: string; pattern: Omit<Pattern, '__typename'> } & Omit<
  HTMLProps<HTMLDivElement>,
  'pattern'
>) => {
  const ref = useRef<HTMLDivElement>(null);
  const scale = useRef(1);
  const timer = useRef<number>(0);

  const update = useCallback(() => {
    if (ref.current) {
      const { width } = ref.current.getBoundingClientRect();
      const newScale = size.width / width;

      if (scale.current !== newScale) {
        scale.current = newScale;
        ref.current.style.background = `url("${getPatternString(
          id,
          pattern,
          1
        )}")`;
        ref.current.style.backgroundSize = `${size.width * scale.current}px ${
          size.height * scale.current
        }px`;
      }
    }

    timer.current = requestAnimationFrame(update);
  }, [id, pattern]);

  useEffect(() => {
    cancelAnimationFrame(timer.current);
    timer.current = requestAnimationFrame(update);

    if (ref.current) {
      ref.current.style.backgroundImage = `url("${getPatternString(
        id,
        pattern,
        1
      )}")`;
      ref.current.style.backgroundSize = `${size.width * scale.current}px ${
        size.height * scale.current
      }px`;
    }

    return () => {
      cancelAnimationFrame(timer.current);
    };
  }, [id, pattern, update]);

  return (
    <div
      ref={ref}
      style={{
        ...style,
        backgroundImage: `url("${getPatternString(id, pattern, 1)}")`,
        backgroundPosition: 'center center',
        backgroundSize: `${size.width * scale.current}px ${
          size.height * scale.current
        }px`,
        mixBlendMode: 'multiply',
        position: 'absolute',
        ...size,
      }}
    ></div>
  );
};
