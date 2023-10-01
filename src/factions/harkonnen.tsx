import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  leader,
  faq,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const uman = leader({
  image: 'uman.png',
  name: 'Umman Kudu',
  strength: '1',
});
export const nafud = leader({
  image: 'nafud.png',
  name: 'Captain Iakin Nefud',
  strength: '2',
});
export const piter = leader({
  image: 'piter.png',
  name: 'Piter De Vries',
  strength: '3',
});
export const beast = leader({
  image: 'beast.png',
  name: 'Beast Rabban',
  strength: '4',
});
export const feyd = leader({
  image: 'feyd.png',
  name: 'Feyd-Rautha',
  strength: '6',
});

export const normal = troop({
  front: troopSide({
    variant: 'HARKONNEN_TROOP',
    name: 'forces',
    description:
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const baron = leader({
  name: 'Baron Vladamir',
  image: '',
  strength: '10',
});

export const sheet: Faction = {
  __typename: 'Faction',
  description: '',
  name: 'House Harkonnen',
  assets: assets({
    logo: 'HARKONNEN_LOGO',
    color: '#10100B',
    hero: baron,
    leaders: [uman, nafud, piter, beast, feyd],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText:
      '10 forces in Carthag and 10 in reserve (*off planet*). Start with 10 spice.',
    revivalText: '2 forces.',
    advantages: [
      advantage({ body: 'You excel in treachery.' }),
      advantage({
        title: 'Extra Traitors',
        body: `During setup you keep all 4 Traitor Cards. If you draw 2 (or more) of your own leaders, or draw 3 (or more) of the same faction's leaders, you may call mulligan to cause a redraw of all traitor cards.`,
      }),
      advantage({
        title: 'Extra Treachery Cards',
        body: dedent`
          Your hand limit for Treachery Cards is 8 instead of the normal 4. 
          
          At the start of the game, you a dealt 2 starting cards instead of 1.
          
          When you buy a Treachery Card during bidding, you draw an extra Treachery Card from the top of the Treachery deck if your hand-limit allows it.
        `,
      }),
      advantage({
        title: 'Captured Leaders',
        body: dedent`Whenever you win a battle (step 4.7) you may randomly select 1 of the loser's leaders. Leaders already used in battles elsewhere this turn are exempt. Secretly look at the leader and either put it face down in the Tleilaxu Tanks for 2 spice or keep them. You may use a kept leader once in battle after which they are returned if alive. If you own no Harkonnen leaders all captured leaders are returned.`,
      }),
      advantage({
        title: `Vladimir's Spite`,
        body: `If a leader you use in battle is killed you may remove the opponent's Treachery Cards by swapping cards between players, such as giving your opponent the worthless card you played in return for their defense. (step 4.5) The cards are then discarded or returned to the winning faction appropriately. Winning players cannot immediately discard cards you give them this way.

        Dead Cheap Heroes do not trigger Spite. Battles resolved with a traitor or Break Conditioning do not trigger Spite. Cheap Hero cards and Supplies! cards cannot be swapped.`,
      }),
    ],
    alliance: [
      advantage({
        title: `We Have a Traitor in Their Midst`,
        body: dedent`Traitor cards that you hold may be used against your ally's opponent, if you so choose.`,
      }),
    ],
    fate: [
      advantage({
        title: `Blackmail`,
        body: dedent`Play your fate card during combat (step 2.3) to force you or your ally's opponent to reveal their entire battle plan early.
        `,
      }),
    ],
    __typename: 'FactionRules',
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
