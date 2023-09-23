import Markdown from 'markdown-to-jsx';
import { FC, PropsWithChildren } from 'react';
import onlyText from 'react-children-utilities/lib/onlyText';

export const MarkdownContent: FC<
  PropsWithChildren<{
    forceInline?: boolean;
    forceBlock?: boolean;
  }>
> = ({ forceBlock, forceInline, children }) => {
  const v = onlyText(children).replace(/^(\w+.+)(\n)(^\w+.+)/gim, '$1  \n$3\n');

  return (
    <Markdown
      options={{ disableParsingRawHTML: true, forceBlock, forceInline }}
    >
      {v}
    </Markdown>
  );
};
