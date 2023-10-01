import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  faq,
  leader,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const blin = leader({
  image: 'blin.png',
  name: 'Blin',
  strength: '0',
});
export const zoal = leader({
  image: 'zoal.png',
  name: 'Zoal',
  strength: '2',
});
export const wykk = leader({
  image: 'wykk.png',
  name: 'Wykk',
  strength: '3',
});
export const zaaf = leader({
  image: 'zaaf.png',
  name: 'Master Zaaf',
  strength: '4',
});
export const hidar = leader({
  image: 'hidar.png',
  name: 'Hider Fen Ajidica',
  strength: '5',
});

export const normal = troop({
  front: troopSide({
    variant: 'BT_TROOP',
    name: 'forces',
    description:
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const masters = leader({ name: 'Masters', image: '', strength: '10' });
export const sheet: Faction = {
  __typename: 'Faction',
  description: dedent`
    The Bene Tleilax are led by their Masters Council. They control the Axlotl tanks used to regenerate lost individuals as gholas for other factions, and to infiltrate other factions with deadly Face Dancers.
    Although loathed by other factions, they are tolerated because of the miracles they are able to produce.
  `,
  name: 'Bene Tleilaxu',
  assets: assets({
    color: '#4F1683',
    hero: masters,
    leaders: [blin, zoal, wykk, zaaf, hidar],
    logo: 'BT_LOGO',
    pattern: pattern1,
    troops: [normal],
  }),
  rules: {
    __typename: 'FactionRules',
    advantages: [
      advantage({
        body: dedent`
          You have superior genetic engineering technology.
        `,
      }),
      advantage({
        title: 'Dishonorable',
        body: dedent`
        You may not give/receive bribes except during Mentat Phase, or make binding deals except receiving info of cards up for bid in exchange for spice during the Bidding Phase. (You may not bindingly disclose information, including showing cards to other players.)
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: 'Infiltration',
        body: dedent`
        During setup after each faction has selected their traitors you randomly and secretly take one Traitor Card from each player, and return the last 2 to the traitor deck. (Take a card from the unseen traitor cards instead of taking a card from Harkonnen.) Separate one of these cards to be your traitor and the rest are your face dancers.

        During Storm Phase you may place a face dancer card that matches a leader in the Tleilaxu Tanks in front of your Player Shield with one of your own leaders on top of it. Revive the dead leader and give it to its faction. That faction is now infiltrated as long as the leader remains alive and you hold the face dancer card. The leader you commit may not be used in combat until the Infiltration ends. Your leader may be called traitor by the target faction to prevent the Infiltration. In combat your leader may be called traitor in place of the target leader.
        
        At any time you may look the the spice totals, Treachery Cards, and Battle Plans (step 3.2) of infiltrated factions. If an infiltrated faction wins the game you and that faction win together (instead of the faction's ally). Infiltration is ignored if the winning alliance controls 5+ strongholds.
        
        You may discard face down and redraw one face dancer from the deck during Mentat Phase. You may at any time commit that you will reshuffle a specific face dancer during Mentat Phase and it will be binding. Whenever the Infiltration ends redraw the face dancer card and kill your impersonating leader as well as the target leader face down.
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: 'Revival Income',
        body: dedent`
        Take one spice for every non-BT force revived. You collect all spice from non-BT revived leaders. You may set prices to revive any one leader per faction per turn. You may also increase any faction's troop revival limit from 3 to 5.
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: 'Tleilaxu Revival',
        body: dedent`
        You have no revival limits. You pay half price (rounded up) when reviving anything except your face down leaders, which are full price.
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: 'Synthetic Spice',
        body: dedent`
        Whenever you ship you may kill your forces in reserves to pay for the shipment. Each troop is worth one spice, which is taken from the Spice Bank to pay for the shipment.
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: 'zoal',
        body: dedent`
        If Zoal is revealed in a Battle Plan (step 4.4), survives, and the opposing leader dies you may have Zoal infiltrate that faction. If so, the opponent wins the fight and loses nothing. You may keep any Treachery Cards you used. All of your troops in that territory are brought back to reserves for free. You keep any spice you used to dial.

        To infiltrate set aside Zoal and the killed leader until the Storm Phase the following turn at which point put the target leader in front of its faction's Player Shield and Zoal is placed aside that faction's leaders. Zoal is considered to be the target leader in combat. Zoal or the target leader can be called traitor in combat. Otherwise follow normal Infiltration rules.
        `,
        karamaEffect: dedent`
        TBD
      `,
      }),
      advantage({
        title: '',
        body: dedent`
        `,
      }),
    ],
    alliance: [
      advantage({
        title: 'Shared Revival Discount',
        body: dedent`
        Your ally may revive their forces and leaders at Tleilaxu Revival prices.
        `,
      }),
    ],
    fate: [
      advantage({
        title: 'Stone Burner',
        body: dedent`
        Play your fate card during battle (before step 3) to make all forces in a territory unable to be spice dialed this phase (Including Fremen).
        `,
      }),
    ],
    revivalText: '0 forces.',
    startText: `20 forces in reserves (*off-planet*), Start with 10 spice.`,
  },
  faq: [
    faq({
      question: dedent`
        lalala?
      `,
      answer: dedent`
        lala la
      `,
    }),
    faq({
      question: dedent`
        TBD
      `,
      answer: dedent`
        TBD
      `,
    }),
  ],
};
