import { FC, Fragment, ReactNode } from 'react';
import { Page } from './page';

export const Book: FC<{ pages: ReactNode[]; background?: boolean }> = ({
  pages,
  background = true,
}) => {
  return (
    <Fragment>
      {pages.map((c, index) => (
        <Page key={index} pageNumber={index + 1} background={background}>
          {c}
        </Page>
      ))}
    </Fragment>
  );
};
