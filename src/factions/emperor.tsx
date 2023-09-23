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

export const shadam = leader({ name: 'Shadam IV', image: '', strength: '10' });
export const sheet: Faction = {
  __typename: 'Faction',
  description: '',
  name: 'Emperor',
  assets: assets({
    logo: 'EMPEROR_LOGO',
    color: '#9D2117',
    hero: shadam,
    leaders: [],
    troops: [],
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
        advanced: true,
        body: `Your 5 starred troops: Sardaukar, are worth 2 normal troops in battle and in taking losses.  They are treated as 1 force during revival. You can only revive 1 Sardaukar per turn.`,
      }),
    ],
    alliance: [
      advantage({
        body: `You may share your great wealth with you ally at any time. You can pay to revive 3 additional troop forces for your ally, during the Revival phase.`,
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
  faq: [],
};
