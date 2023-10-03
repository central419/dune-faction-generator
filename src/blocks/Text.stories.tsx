import { Fragment } from 'react';
import { Text } from './Text';

export default {
  component: Text,
  args: {
    children: (
      <Fragment>
        <p>A long long text</p>
        <p>A long long text</p>
      </Fragment>
    ),
  },
};

export const Columns1 = {
  args: { columns: 1 },
};
export const Columns2 = {
  args: { columns: 2 },
};
export const RichContent = {
  args: {
    children: (
      <Fragment>
        <p>A short paragraph</p>
        <p>A second short paragraph</p>
        <ul>
          <li>A first list item</li>
          <li>A second list item</li>
        </ul>
        <p>An intermediate paragraph</p>
        <ol>
          <li>ordered list item</li>
          <li>ordered list item</li>
        </ol>
      </Fragment>
    ),
  },
};
export const HeadingsContent = {
  args: {
    children: (
      <Fragment>
        <h1>A short paragraph</h1>
        <p>A second short paragraph</p>
        <h2>A short paragraph</h2>
        <p>A second short paragraph</p>
        <h3>A short paragraph</h3>
        <p>A second short paragraph</p>
      </Fragment>
    ),
  },
};
