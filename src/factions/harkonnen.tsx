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

export const baron = leader({
  name: 'Baron Vladamir',
  image: '',
  strength: '10',
});

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  description: '',
  name: 'House Harkonnen',
  assets: assets({
    logo: 'HARKONNEN_LOGO',
    color: '#10100B',
    hero: baron,
    leaders: [],
    troops: [],
    pattern: pattern1,
  }),
  rules: {
    startText:
      '10 forces in Carthag and 10 in reserve (*off planet*). Start with 10 spice.',
    revivalText: '2 forces.',
    advantages: [
      advantage({ body: 'You excel in treachery.' }),
      advantage({
        title: 'traitors',
        body: 'At the start of the game when you draw 4 traitor cards you keep all 4.',
      }),
      advantage({
        title: 'treachery',
        body: dedent`
          You hand limit for Treachery Cards is 8 instead of the normal 4. 
          
          At the start of the game, you a dealt 2 starting cards instead of 1.
          
          When you buy a Treachery Card during bidding, you draw an extra Treachery Card from the top of the Treachery deck if your hand-limit allows it.
        `,
      }),
      advantage({
        title: 'captured leaders',
        advanced: true,
        body: dedent`
          Every time you win a battle, you randomly select a leader from your opponent that is available for them to play in future battles (*this included the leader they played in the battle you just won, unless it was killed*). You then choose to take 1 (or none) of the following actions:
          
          - **Option 1**: You kill the leader and gain 2 spice from the spice bank. Leaders killed this way are placed face-down in the Tleilaxu Tanks.
          - **Option 2**: You steal the leader, and just use this leader exactly once in 1 of your future battles.
    
          Stolen leader are returned to their original faction after you have committed them in a battle-plan and they lived; or when all harkonnen leaders are dead.
        `,
      }),
    ],
    alliance: [
      advantage({
        body: `Traitor cards that you hold may be used against your ally's opponent, if you so choose.`,
      }),
    ],
    karama: [
      advantage({
        body: 'During the bidding phase you may target 1 other player, you take their all Treachery Cards, and add them to your own (*ignoring you hand-limit*). You then must return the same number of Treachery Cards back to them as they gave you.',
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
};
