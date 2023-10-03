import { Outline } from './Outline';
import { Text } from './Text';

export default {
  component: Outline,
  args: {
    variant: 'generic',
    children: (
      <Text>
        <h1>A title</h1>
        <p>A long long text</p>
      </Text>
    ),
  },
  argTypes: {
    children: { control: false },
  },
};

export const Generic = {
  args: { variant: 'generic' },
};
export const Example = {
  args: { variant: 'example' },
};
