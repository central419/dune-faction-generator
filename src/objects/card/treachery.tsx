import { ComponentProps } from 'react';

import { Front as Card } from './blocks/Front';

type Props = Required<
  Pick<
    ComponentProps<typeof Card>,
    | 'content'
    | 'title'
    | 'decals'
    | 'release'
    | 'head'
    | 'sub'
    | 'icon'
    | 'recolor'
  >
> &
  Pick<ComponentProps<typeof Card>, 'id'>;

export const TreacheryCard = (props: Props) => {
  const base: ComponentProps<typeof Card>['base'] = props.decals.length
    ? 'DECAL'
    : 'FULL';

  return <Card base={base} {...props} />;
};
