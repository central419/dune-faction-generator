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

export const yeuh = leader({
  image: 'dryeuh.png',
  name: 'Dr Yueh Wellington',
  strength: '1',
});
export const duncan = leader({
  image: 'duncan.png',
  name: 'Duncan Idaho',
  strength: '2',
});
export const gurney = leader({
  image: 'gurney.png',
  name: 'Gurney Hallack',
  strength: '4',
});
export const thufir = leader({
  image: 'thufir.png',
  name: 'Thufir Hawat',
  strength: '5',
});
export const jessica = leader({
  image: 'jessica.png',
  name: 'Lady Jessica',
  strength: '5',
});
export const paul = leader({
  image: 'paul.png',
  name: 'Paul Atreides',
  strength: '10',
});

export const normal = troop({
  front: troopSide({
    variant: 'ATREIDES_TROOP',
    name: 'forces',
    description:
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  name: 'House Atreides',
  description: '',
  assets: assets({
    logo: 'ATREIDES_LOGO',
    color: '#444515',
    pattern: pattern1,
    hero: paul,
    leaders: [yeuh, duncan, gurney, thufir, jessica],
    troops: [normal],
  }),
  rules: {
    startText:
      '10 forces in Arrakeen and 10 in reserve (*off planet*). Start with 10 spice.',
    revivalText: '2 forces.',
    advantages: [
      advantage({ body: 'You have limited prescience.' }),
      advantage({
        title: 'bidding',
        body: 'During each bidding round you may look at the Treachery Card that is up for purchase.',
        karamaEffect: `You may not look at the next card up for purchase.`,
      }),
      advantage({
        title: 'notes',
        body: 'You may keep written notes about Treachery Cards',
      }),
      advantage({
        title: 'spice prescience',
        body: 'Each turn, from the movement phase onwards, you may look at the next Spice Card',
        karamaEffect: `You are not allowed to look at the next spice prescience card. (this lasts until the card is revealed during the spice-blow phase)`,
      }),
      advantage({
        title: 'battle prescience',
        body: 'You may force your opponent to reveal 1 part of their battle-plan to you before you commit your battle plan.',
        karamaEffect: `Your battle prescience question can be ignored, your opponent is no longer required to do as was answered. Must be played before Battle Plans are revealed.`,
      }),
      advantage({
        title: 'kwisatz haderach',
        advanced: true,
        body: dedent`
          After having lost 7 forces during battles you may start using your Kwisatz Haderach token in all future battles.You can use this token to accompany exactly 1 leader per turn. The token adds a strength of +2 to your battle-plan if the leader it accompanies survives the battle.
          
          A leader accompanied by the Kwisatz Haderach token cannot be called traitor.
          
          The Kwisatz Haderach token returns to you (*at the end of the Combat phase*) even if the leader it accompanied was killed, except when a lasgun/shield occurred in the territory the Kwisatz Haderach was played.
          If the Kwisatz Haderach token is killed this way, it can be revived as a leader.`,
        karamaEffect: `You may not use the Kwisatz Haderach token in 1 of your battles. Must be done before the Battle Plans are revealed`,
      }),
    ],
    alliance: [
      advantage({
        body: 'You may assist your ally by forcing their opponent to show 1 element of their battle-plan, see the "battle prescience"-advantage.',
      }),
    ],
    karama: [
      advantage({
        body: 'You may force your opponent to reveal their entire battle-plan to you.',
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
};
