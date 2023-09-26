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
  description: '',
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
      }),
      advantage({
        title: 'Infiltration',
        body: dedent`
        During setup after each faction has selected their traitors you randomly and secretly take one Traitor Card from each player, and return the last 2 to the traitor deck. (Take a card from the unseen traitor cards instead of taking a card from Harkonnen.) Separate one of these cards to be your traitor and the rest are your face dancers.

        During Storm Phase you may place a face dancer card that matches a leader in the Tleilaxu Tanks in front of your Player Shield with one of your own leaders on top of it. Revive the dead leader and give it to its faction. That faction is now infiltrated as long as the leader remains alive and you hold the face dancer card. The leader you commit may not be used in combat until the Infiltration ends. Your leader may be called traitor by the target faction to prevent the Infiltration. In combat your leader may be called traitor in place of the target leader.
        
        At any time you may look the the spice totals, Treachery Cards, and Battle Plans (step 3.2) of infiltrated factions. If an infiltrated faction wins the game you and that faction win together (instead of the faction's ally). Infiltration is ignored if the winning alliance controls 5+ strongholds.
        
        You may discard face down and redraw one face dancer from the deck during Mentat Phase. You may at any time commit that you will reshuffle a specific face dancer during Mentat Phase and it will be binding. Whenever the Infiltration ends redraw the face dancer card and kill your impersonating leader as well as the target leader face down.
        `,
      }),
      advantage({
        title: 'revival payment',
        body: dedent`
          Other factions pay for additional force and leader revival to you. For each faction reviving forces for free you gain 1 spice from the Spice Bank (*including you*). When the Tleilaxu Ghola Treachery Card is played, you gain 1 spice from the Spice Bank.
        `,
      }),
      advantage({
        title: 'increase force revival limit',
        body: dedent`
          You may increase the maximum forces revival limit of other factions to a total of 5 forces instead of the normal 3.
        `,
      }),
      advantage({
        title: 'leader revival',
        body: dedent`
          If a faction has fewer than 5 leaders in the Tleilaxu Tanks, you may offer to revive 1 leader for this faction (*face up of face down*) for a price. Circumventing the normal revival limits for leaders.
        `,
      }),
      advantage({
        title: 'zoal',
        body: dedent`
          You leader Zoal's strength in battle matches the strength of the opponent's leader (*before Treachery Cards effects are calculated*). Zoal always costs 3 spice to revive for you.
        `,
      }),
      advantage({
        title: 'ghola',

        body: dedent`
          When you have fewer then 5 leaders alive, you may revive dead leaders of other factions at half price. Leaders revived this way are permanently yours. You can have at most 5 leaders in your leader pool.
        `,
      }),
    ],
    alliance: [
      advantage({
        body: dedent`
          You may allow your ally to revive forces and leader at half cost (*rounded up*).
        `,
      }),
    ],
    fate: [],
    revivalText: '2 force.',
    startText: `20 forces in reserve (*off-planet*), Start with 5 spice.`,
  },
  faq: [],
};
