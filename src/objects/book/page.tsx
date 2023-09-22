import styled from '@emotion/styled';
import bottom from '../../asset/page/bottom.svg';

const ratio = Math.sqrt(2);

export const Page = styled.div<{ pageNumber: number; background: boolean }>(
  {
    padding: '4vw 4vw 6vw 4vw',
    position: 'relative',
    pageBreakBefore: 'always',
    height: `calc(100vw * ${ratio})`,
    width: '100vw',
    backgroundColor: '#FFFAEE',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ pageNumber, background }) =>
    background
      ? {
          backgroundImage: `url("${bottom}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: `200% auto`,
          backgroundPosition: `bottom ${pageNumber % 2 ? 'left' : 'right'}`,
        }
      : {}
);
