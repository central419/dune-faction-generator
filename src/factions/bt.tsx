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
export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  description: '',
  name: 'Bene Tleilaxu',
  assets: assets({
    color: '#4F1683',
    hero: masters,
    leaders: [blin,zoal,wykk,zaaf,hidar],
    logo: 'BT_LOGO',
    pattern: pattern1,
    troops: [normal],
  }),
  rules: {
    __typename: 'FactionRules',
    advantages: [
      advantage({
        advanced: false,
        body: 'You have superior genetic engineering technology.',
      }),
      advantage({
        title: 'face dancers',
        body: dedent`
          At the start of the game you are not dealt 4 traitor cards. After other factions have chosen their traitor, shuffle the traitor deck and take 3 cards. These are your initial face dancers.  When another faction wins a battle, you may reveal the leader they committed in the battle to be a face dancer. Then the following occurs:
          
          1. The battle still counts as a win for the player (*they keep Treachery Cards, gain spice from dead leaders, gain Tech-tokens*).
          2. If the leader that was revealed to be a face dancer wasn't killed during the battle, it is send to the Tleilaxu Tanks, but no spice is collected
          3. The winner of the battle's force tokens in the territory are returned to that factions's reserve.
          4. The Bene Tleilaxu may place forces in the territory equal to to the number that were send to the Tleilaxu Tanks in step 3.
          5. The revealed Traitor Card is place in public.

          Once a face dancer is revealed it cannot be used again. When all 3 face dancers are revealed, all 3 are reshuffled into the Traitor Deck, and you draw 3 new.

          Each mentat phase you put 1 unrevealed face dancer back into the Traitor Deck, shuffle it and draw 1 new Traitor Card.
      `,
      }),
      advantage({
        title: 'tleilaxu revival',
        body: 'You have no revival limits, you may revive any amount of leaders or forces during the Revival phase. You pay half price to the Spice Bank.',
      }),
      advantage({
        title: 'revival payment',
        body: 'Other factions pay for additional force and leader revival to you. For each faction reviving forces for free you gain 1 spice from the Spice Bank (*including you*). When the Tleilaxu Ghola Treachery Card is played, you gain 1 spice from the Spice Bank.',
      }),
      advantage({
        title: 'increase force revival limit',
        body: 'You may increase the maximum forces revival limit of other factions to a total of 5 forces instead of the normal 3.',
      }),
      advantage({
        title: 'leader revival',
        body: 'If a faction has fewer than 5 leaders in the Tleilaxu Tanks, you may offer to revive 1 leader for this faction (*face up of face down*) for a price. Circumventing the normal revival limits for leaders.',
      }),
      advantage({
        title: 'zoal',
        body: `You leader Zoal's strength in battle matches the strength of the opponent's leader (*before Treachery Cards effects are calculated*). Zoal always costs 3 spice to revive for you.`,
      }),
      advantage({
        title: 'ghola',
        advanced: true,
        body: `When you have fewer then 5 leaders alive, you may revive dead leaders of other factions at half price. Leaders revived this way are permanently yours. You can have at most 5 leaders in your leader pool.`,
      }),
    ],
    alliance: [
      advantage({
        body: `You may allow your ally to revive forces and leader at half cost (*rounded up*).`,
      }),
    ],
    fate: [],
    karama: [
      advantage({
        body: 'You can deny an other faction from reviving any forces or leaders for 1 turn.',
      }),
    ],
    revivalText: '2 force.',
    startText: `20 forces in reserve (*off-planet*), Start with 5 spice.`,
  },
  faq:[],

};
