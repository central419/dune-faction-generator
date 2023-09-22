import Markdown from 'markdown-to-jsx';
import { FC, PropsWithChildren } from 'react';
import onlyText from 'react-children-utilities/lib/onlyText';

import { HTMLContent } from './HTMLContent';

export const MarkdownContent: FC<
  PropsWithChildren<{
    value?: string;
    forceInline?: boolean;
    forceBlock?: boolean;
  }>
> = ({ forceBlock, forceInline, value = '', children }) => {
  const v = `${value}${onlyText(children)}`.replace(
    /^(\w+.+)(\n)(^\w+.+)/gim,
    '$1  \n$3\n'
  );

  return (
    <HTMLContent>
      <Markdown
        options={{ disableParsingRawHTML: true, forceBlock, forceInline }}
      >
        {v}
      </Markdown>
    </HTMLContent>
  );
};
