import { FC, Fragment, ReactNode } from 'react';
import { Page } from './page';

const defaultRatio = Math.sqrt(2);

export const Book: FC<{
  pages: ReactNode[];
  background?: boolean;
  ratio?: number;
}> = ({ pages, background = true, ratio = defaultRatio }) => {
  return (
    <Fragment>
      {pages.map((c, index) => (
        <Page
          key={index}
          pageNumber={index + 1}
          background={background}
          ratio={ratio}
        >
          {c}
        </Page>
      ))}
    </Fragment>
  );
};
