import { ComponentProps } from 'react';

import { Back } from './blocks/Back';

type Props = ComponentProps<typeof Back>;

export const BackCard = (props: Props) => {
  return <Back {...props} />;
};
