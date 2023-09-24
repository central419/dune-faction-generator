import styled from '@emotion/styled';
import bottom from '../../asset/page/bottom.svg';

export const Page = styled.div<{
  pageNumber: number;
  background: boolean;
  ratio: number;
}>(
  {
    padding: '4vw 4vw 6vw 4vw',
    position: 'relative',
    pageBreakBefore: 'always',
    width: '100vw',
    backgroundColor: '#FFFAEE',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
  },
  ({ ratio }) => ({
    height: `calc(100vw * ${ratio})`,
  }),
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
