import { FC, Fragment, ReactNode } from 'react';
import { Page } from './page';
import dedent from 'ts-dedent';

const defaultRatio = Math.sqrt(2);

export const Book: FC<{
  pages: ReactNode[];
  background?: boolean;
  ratio?: number;
}> = ({ pages, background = true, ratio = defaultRatio }) => {
  return (
    <Fragment>
      <style
        media="print"
        dangerouslySetInnerHTML={{
          __html: dedent`
            @page {
              margin: 0;
              size: 400mm ${ratio * 400}mm;
            }

            code {
              -webkit-print-color-adjust: exact;
              color-adjust: exact;
            }

            p {
              -webkit-hyphens: auto;
              -ms-hyphens: auto;
              hyphens: auto;
            }

            figure {
              break-inside: avoid;
            }
          `,
        }}
      />

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
