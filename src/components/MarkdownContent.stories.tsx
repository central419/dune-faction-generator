import dedent from 'ts-dedent';
import { MarkdownContent } from './MarkdownContent';

export default {
  component: MarkdownContent,
  args: {
    children: '',
  },
};

export const Simple = {
  args: {
    children: 'A short string',
  },
};
export const Dedented = {
  args: {
    children: dedent`
      A dedented string
    `,
  },
};

export const SomeMarkdwon = {
  args: {
    children: dedent`
      # A heading

      a paragraph, and then...

      another paragraph

      - list item number 1
      - list item number 2
      - list item number 3
      - list item number 4

      ..as well as an ordered list:

      1. item
      2. item
      3. item
      4. item
    `,
  },
};
