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

export const liet = leader({ name: 'Liet Kynes', image: '', strength: '10' });

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  description: '',
  name: 'Fremen',
  assets: {
    logo: 'FREMEN_LOGO',
    color: '#DF9B42',
    hero: liet,
    leaders: [],
    troops: [],
    pattern: pattern1,
    __typename: 'FactionAssets',
  },
  rules: {
    startText:
      '10 forces distributed as you like on these territories: Seitch Tabr, False Wall South, False wall West; and 10 forces in reserve (on planet). Start with 3 spice.',
    revivalText: '3 forces.',
    advantages: [
      advantage({ body: 'You are native to Dune and know its ways.' }),
      advantage({
        title: 'shipment',
        body: 'During your shipment, you may bring any of your forces from your reserve onto any territory within 2 spaces away from the Great Flat for free (subject to storm and occupancy rules).',
      }),
      advantage({
        title: 'movement',
        body: `During your movement you may move any 1 stack of 2 territories instead of 1.`,
      }),
      advantage({
        title: 'shai-halud',
        body: `If a Shai-Halud appear in a territory where you have forces, your forces are not devoured. Instead place a Shai-Halud token there. After the nexus is complete, you may move this token and your force-tokens to any sand-bordering territory on Arrakis (subject to storm and occupancy rules).`,
      }),
      advantage({
        title: 'special victory',
        body: dedent`
          If no-one else has won the game by the end of turn 10 and 1 of the following 2 conditions occur:
          
          - **Option 1**: The Spacing Guild is not one of the factions in play.
          - **Option 2**: You or no-one occupies Seitch Tabr and Habanya Seitch, in addition, none of the great houses occupy Tuek's Seitch
        `,
      }),
      advantage({
        title: 'storm rule',
        advanced: true,
        body: `Instead of battle-wheel-dialing to move the storm, you control a Storm Deck. You always know how far the storm will move, by looking at the top of this deck at any time. After storm is moved, place the card back and shuffle this deck. The initial storm placement is still randomly done with battle-wheel-dialing`,
      }),
      advantage({
        title: 'shai-halud',
        advanced: true,
        body: `During the Spice Blow phase whenever a second, or more, Shai-Halud cards are revealed you must decide where they spawn.`,
      }),
      advantage({
        title: 'storm losses',
        advanced: true,
        body: `If your forces are caught in a storm, only half your force tokens are send to the Tleilaxu Tanks (rounded up). You may bring forces into the storm at half loss.`,
      }),
      advantage({
        title: 'fedaykin',
        advanced: true,
        body: `Your 3 starred forces: Fedaykin are worth 2 normal forces in battle and in taking losses. They are treated as 1 force during revival. You can only revive 1 Fedaykin per turn.`,
      }),
      advantage({
        title: 'battles',
        advanced: true,
        body: `Your forces do not require spice to count at their full strength.`,
      }),
    ],
    alliance: [
      advantage({
        body: `You may decide to protect your ally's troop forces from being devoured by a Shai-Halud. You may allow your ally to revive 3 forces for free. If you win with your special victory condition, you ally wins with you.`,
      }),
    ],
    karama: [
      advantage({
        body: 'During the Spice Blow phase you may spawn a Shai-Halud on any sand territory.',
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
};
