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

export const bashar = leader({
  image: 'bashar.png',
  name: 'Bashar',
  strength: '2',
});
export const burseg = leader({
  image: 'burseg.png',
  name: 'Burseg',
  strength: '3',
});
export const caid = leader({
  image: 'caid.png',
  name: 'Caid',
  strength: '3',
});
export const aramsham = leader({
  image: 'aramsham.png',
  name: 'Captain Aramsham',
  strength: '5',
});
export const hasimir = leader({
  image: 'hasimir.png',
  name: 'Hasimir Fenring',
  strength: '6',
});

export const normal = troop({
  front: troopSide({
    variant: 'EMPEROR_TROOP',
    name: 'forces',
    description:
      'Normal Troops, of strength 0.5, which can be spiced to a strength of 1',
  }),
  back: troopSide({
    variant: 'EMPEROR_TROOP',
    name: 'sardaukar',
    description: '',
    modifiers: {
      star: 'l1',
    },
  }),
});

export const shadam = leader({
  name: 'Shaddam IV',
  image: 'shaddam',
  strength: '',
});
export const sheet: Faction = {
  __typename: 'Faction',
  description: dedent`
    The Emperor, his majesty the Padishah Emperor Shaddam IV of house Corrino — keen and efficient, yet easily lulled into complacency by his own trappings of power.
  `,
  name: 'Emperor',
  assets: assets({
    logo: 'EMPEROR_LOGO',
    color: '#9D2117',
    hero: shadam,
    leaders: [bashar, burseg, caid, aramsham, hasimir],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText:
      '20 Troop tokens in reserve (*off-planet*), Start with 10 Spice.',
    revivalText: '1 Troop token.',

    advantages: [
      advantage({
        body: 'You have access to great wealth.',
      }),
      advantage({
        title: 'Bidding Payments',
        body: 'When another faction pays for a Treachery Card they pay the Spice to you.',
      }),
      advantage({
        title: `Shaddam's Favor (AKA Subsidy)`,
        body: dedent`When another non-ally faction buys a Treachery Card you may place any amount of Spice in front of your Player Shield to discount the bidding payment by that amount. Factions may bid more than their Spice reserves if you make a deal to use this ability if the bid is successful. You collect all Spice placed in front of your Player Shield this way at the end of the Bidding phase.`,
      }),
      advantage({
        title: 'Sardaukar',
        body: 'Your five starred Troop tokens are double battle strength. Only one Sardaukar can be revived per turn. Sardaukar are considered normal Troop tokens against Fremen.',
      }),
    ],
    alliance: [
      advantage({
        title: `Golden Lion Throne`,
        body: dedent`You may share your great wealth with you ally at any time. You can pay to revive 3 additional troop Troop tokens for your ally, during the Revival phase.`,
      }),
    ],
    fate: [
      advantage({
        title: `Prison Planet`,
        body: `Play your fate card at any time to revive up to 5 of any troops and any leader for their normal cost (including for other players). There are no limits for starred troops or leaders. (Cannot be played during battle step 3).`,
      }),
    ],
    __typename: 'FactionRules',
  },
  faq: [],
};
