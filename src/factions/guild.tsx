import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  leader,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const eldrick = leader({ name: 'Elrich', image: '', strength: '10' });

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  description: '',
  name: 'Spacing Guild',
  assets: assets({
    logo: 'GUILD_LOGO',
    color: '#C74C26',
    hero: eldrick,
    leaders: [],
    troops: [],
    pattern: pattern1,
  }),
  rules: {
    startText: `5 forces in Tuek's Seitch, 15 in reserve (*off-planet*), Start with 5 spice.`,
    revivalText: '1 force.',

    advantages: [
      advantage({ body: 'You control all shipment unto and off Arrakis.' }),
      advantage({
        title: 'payment for shipment',
        body: 'When other factions ship forces from off-planet reserves, they pay you the spice to you instead of the spice bank.',
      }),
      advantage({
        title: '3 types of shipment',
        body: dedent`
          During your shipment, you can choose to do 1 of 3 types of shipment:
  
          - **Option 1**: Ship normally from off-planet reserves to any 1 territory on the board.
          - **Option 2**: Cross-ship from 1 territory to any 1 other territory on the board.
          - **Option 3**: Ship forces from 1 territory on the board back to your reserves.
        `,
      }),
      advantage({
        title: 'half price',
        body: dedent`
          You pay only half the normal fee (rounded up) when shipping your forces.
          
          When you ship to reserves the fee is 1 spice per 2 troops.
  
          Cross-shipping into strongholds costs 1 spice per 2 troops, Cross-shipping anywhere else costs 1 spice per 1 troop.
  
          You can not cross-ship into the Ixian HMS.`,
      }),
      advantage({
        title: 'special victory',
        body: 'If no other faction has won the game by then end of turn 10, you win the game.',
      }),
      advantage({
        title: 'ship and move when you wish',
        advanced: true,
        body: `You may take your shipment and move action out of the normal storm order. You decide when you interject to take your turn.`,
      }),
    ],
    alliance: [
      advantage({
        body: dedent`
          Your ally may use your "half price" ability as well as your "3 types of shipment" ability.
          
          If the Spacing Guild wins with their special victory condition, you win with them.`,
      }),
    ],
    karama: [
      advantage({
        body: `You can deny an other faction from shipping for 1 turn.`,
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
};
