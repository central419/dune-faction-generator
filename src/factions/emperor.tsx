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
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
  back: troopSide({
    variant: 'EMPEROR_TROOP',
    name: 'sardaukar',
    description: '',
    modifiers: {},
  }),
});

export const shadam = leader({ name: 'Shadam IV', image: '', strength: '10' });
export const sheet: Faction = {
  __typename: 'Faction',
  description: '',
  name: 'Emperor',
  assets: assets({
    logo: 'EMPEROR_LOGO',
    color: '#9D2117',
    hero: shadam,
    leaders: [bashar,burseg,caid,aramsham,hasimir],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText: '20 forces in reserve (*off-planet*), Start with 10 spice.',
    revivalText: '1 force.',

    advantages: [
      advantage({
        body: 'You have access to great wealth.',
      }),
      advantage({
        title: 'bidding',
        body: 'Whenever any other faction pays spice for a Treachery Card, they pay to you instead of the spice bank. You may not discount the price for Treachery Cards.',
      }),
      advantage({
        title: 'sardaukar',

        body: dedent`Your 5 starred troops: Sardaukar, are worth 2 normal troops in battle and in taking losses.  They are treated as 1 force during revival. You can only revive 1 Sardaukar per turn.`,
      }),
    ],
    alliance: [
      advantage({
        body: dedent`You may share your great wealth with you ally at any time. You can pay to revive 3 additional troop forces for your ally, during the Revival phase.`,
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
  faq: [],
};
