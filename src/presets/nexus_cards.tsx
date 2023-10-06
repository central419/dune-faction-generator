import dedent from 'ts-dedent';
import { Front as Card } from '../objects/card/blocks/Front';
import * as colors from './colors';

export const nexus_1 = (
  <Card
    base="DECAL"
    head="MUSH"
    icon="SPECIAL_HANDSHAKE"
    sub={['Downdown', 1]}
    title={['No Nexus', 1]}
    content={[
      dedent`
      Draw exactly 5 Nexus cards from the Nexus draw deck (one at a time), placing them on the Nexus discard deck.
      When a drawn card is titled *Perform Nexus*, then:
      1. Stop drawing cards
      2. Perform a Nexus
      3. Shuffle all Nexus cards back into a new Nexus draw deck.
    `,
      0.9,
    ]}
    decals={[
      {
        id: 'CROSS',
        scale: 0.8,
        offset: [75, 40],
      },
    ]}
    leader={{ strength: '5', color: '#500', image: '', logo: 'CROSS' }}
  />
);

export const nexus_yes = (
  <Card
    base="DECAL"
    head="MUSH"
    icon="SPECIAL_HANDSHAKE"
    sub={['Perform Nexus', 1]}
    title={['Perform Nexus', 0.95]}
    content={[
      dedent`
        1. Stop drawing cards
        2. Perform a Nexus
        3. Shuffle all Nexus cards (including this card, draw deck and discard deck) back into a new Nexus draw deck.
      `,
      1,
    ]}
    decals={[
      {
        id: 'HAND',
        scale: 0.65,
        offset: [125, 80],
      },
    ]}
    leader={{ strength: '!', color: '#050', image: '', logo: 'ASTERISK' }}
  />
);
