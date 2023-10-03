import { ComponentProps } from 'react';
import dedent from 'ts-dedent';
import { Front as Card } from './blocks/Front';

type Props = Required<
  Pick<
    ComponentProps<typeof Card>,
    'leader' | 'title' | 'decals' | 'release' | 'sub'
  >
> &
  Pick<ComponentProps<typeof Card>, 'id'>;

const text = dedent`
  Reveal when Battle Plans are revealed if  this leader is used by your opponent.
  
  You immediately win this battle and lose nothing (even if a Lasgun and Shield are revealed).
  
  Enemy leader is killed and you receive its fighting strength in spice.

  Both players lose if their leaders are traitors, and neither player gets any spice.
`;

export const TraitorCard = (props: Props) => {
  return (
    <Card
      {...props}
      base="DECAL"
      content={[text, 0.86]}
      head="BLACK"
      icon="SPECIAL_TRAITOR"
      sub={[`Traitor • ${props.sub[0]}`, props.sub[1] || 1]}
    />
  );
};
