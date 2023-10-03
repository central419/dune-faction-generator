import { ComponentProps } from 'react';
import { Front as Card } from './blocks/Front';

type Props = Required<
  Pick<
    ComponentProps<typeof Card>,
    'side' | 'content' | 'title' | 'decals' | 'release'
  >
> &
  Pick<ComponentProps<typeof Card>, 'id'>;

export const AllianceCard = (props: Props) => {
  return (
    <Card
      {...props}
      base="DECAL"
      head="MUSH"
      icon="SPECIAL_HANDSHAKE"
      sub={['Alliance', 1]}
    />
  );
};
