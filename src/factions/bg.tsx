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

export const alia = leader({
  image: 'alia.png',
  name: 'Alia',
  strength: '5',
});
export const irulan = leader({
  image: 'irulan.png',
  name: 'Princess Irulan',
  strength: '5',
});
export const ladyfenring = leader({
  image: 'ladyfenring.png',
  name: 'Lady Fenring',
  strength: '5',
});
export const ramallo = leader({
  image: 'ramallo.png',
  name: 'Mother Ramallo',
  strength: '5',
});
export const wanna = leader({
  image: 'wanna.png',
  name: 'Wanna Yueh',
  strength: '5',
});

export const normal = troop({
  front: troopSide({
    variant: 'BG_TROOP',
    name: 'forces',
    description:
      'Normal Troops, of strength 0.5, which can be spiced to a strength of 1',
  }),
  back: troopSide({
    variant: 'BG_TROOP',
    name: 'advisors',
    description: 'Spiritual advisors which have no effect on the territory.',
    modifiers: {
      stroked: true,
    },
  }),
});

export const sheet: Faction = {
  __typename: 'Faction',
  name: 'Bene Gesserit',
  description: dedent`
    The Bene Gesserit Sisterhood, represented by Reverend Mother Gaius Helen Mohiam — ancient and inscrutable, carefully trained in psychological control and a genius at achieving her ends through the efforts of others.
  `,
  assets: {
    logo: 'BG_LOGO',
    color: '#1D327B',
    hero: leader({ name: 'Mother Mohiam', image: '', strength: '10' }),
    leaders: [alia, irulan, ladyfenring, ramallo, wanna],
    troops: [normal],
    pattern: pattern1,
    __typename: 'FactionAssets',
  },
  rules: {
    startText: `1 Troop tokens in the polar sink, 1 Troop tokens in an unoccupied territory or the polar sink, 18 Troop tokens in reserves. Start with 5 Spice.`,
    revivalText: '1 Troop token.',

    advantages: [
      advantage({
        body: 'You are adept at the ways of mind control.',
      }),
      advantage({
        title: `Charity`,
        body: 'You always receive CHOAM charity.',
        karamaEffect: dedent`
          TBD
        `,
      }),
      advantage({
        title: `Worthless Karama`,
        body: 'You may use worthless cards as Karamas. (Play to either stop the use of a faction advantage, ship Troop tokens at half price and the Spice going to the Spice Bank, or purchase a Treachery Card without paying for it)',
        karamaEffect: dedent`
          You cannot play worthless cards as karamas.
        `,
      }),
      advantage({
        title: 'prediction',
        body: dedent`
          During setup secretly choose a turn number and a faction. If that faction wins the game on that turn you win instead. (Fremen Special Victory condition does not count).
        `,
      }),
      advantage({
        title: 'the voice',
        body: dedent`
          During battle (step 2.1) you may Troop tokens your opponent to play/not play a Treachery Card in their Battle Plan. (Projectile Weapon, Poison Defense, Worthless Card, Mercenaries, etc) Cheap Heroes may not be voiced. Special battle cards like the Lasgun and Weirding Way are immune unless voiced by name. If you force the use of a card the opponent does not have they may silently ignore the voice.
        `,
        karamaEffect: dedent`
          You cannot use the voice in any fights during this battle phase.
        `,
      }),
      advantage({
        title: 'spiritual advisors',
        body: dedent`
          Your Troop tokens have two sides: fighters and advisors. Fighters act like normal Troops. Advisors may be moved but otherwise have no effect on the game. Advisors may coexist with allied Troop tokens. The state of your troops is tracked on a per territory basis. (Ex. If advisors move to a territory with fighters they become fighters. If Troop tokens move to a territory with no other BG Troop tokens you choose what they become.) You may ship Troop tokens as fighters or advisors.

          At the beginning of Ship & Move phase you may flip any advisors to fighters, they automatically become fighters if no other factions are present. This is the only way a territory with advisors can switch to fighters.
          
          If a faction moves into a territory where you have fighters you may flip those fighters to advisors if that faction wasn't already in that territory. (Fighters can't become advisors when a faction reinforces a territory.)
          
          When a faction ships from off planet you may put an advisor at their destination (if you have no fighters there) or a fighter in the polar sink.
        `,
        karamaEffect: dedent`
          TBD
        `,
      }),
    ],
    alliance: [
      advantage({
        title: `shared voice`,
        body: dedent`
          You may choose to use your "voice" ability in your ally's battles against your ally's opponent.
        `,
      }),
    ],
    fate: [
      advantage({
        title: 'Political Marriages',
        body: dedent`
          Play your fate during battle (step 2.1) to use The Voice on one side in any battles where you have advisors this turn. This Voice cannot stopped with a karama.
        `,
      }),
    ],
    __typename: 'FactionRules',
  },
  faq: [],
};
