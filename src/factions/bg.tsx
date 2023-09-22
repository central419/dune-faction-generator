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

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  name: 'Bene Gesserit',
  description: '',
  assets: {
    logo: 'BG_LOGO',
    color: '#1D327B',
    hero: leader({ name: 'Mother Mohiam', image: '', strength: '10' }),
    leaders: [],
    troops: [],
    pattern: pattern1,
    __typename: 'FactionAssets',
  },
  rules: {
    startText: `1 force in the Polar Sink, 19 in reserve (*off-planet*), Start with 5 spice.`,
    revivalText: '1 force.',

    advantages: [
      advantage({
        body: 'You adept in the ways of mind control.',
      }),
      advantage({
        title: 'prediction',
        body: 'At the start of the game you secretly predict 1 faction win to win on a specific turn. If this Faction wins on the by you chosen turn you win the game instead. You cannot predict the Fremen or Spacing Guild special victory conditions.',
      }),
      advantage({
        title: 'spiritual advisors',
        body: `Whenever any other faction ships forces from off-planet reserves, you may place 1 of your forces in the polar sink for free.`,
      }),
      advantage({
        title: 'voice',
        body: dedent`
          In your battles, you may Voice your opponent they must play, or can not play a Treachery Card of a type you specify.
          
          You name a Treachery Card type such as "*projectile-weapon*", "*poison-defence*".
          
          You can also name these exact cards: "*lasgun*", "*artillery*", "*cheap hero*", "*worthless*".
          
          Your opponent must comply with your command, if they can. If they can not comply, they do not have to tell you.
        `,
      }),

      advantage({
        title: 'start of the game',
        advanced: true,
        body: `Instead of placing your 1 starting force in the polar sink, you may place an advisor in any territory as you choose. This is done after the fremen initial placement.`,
      }),
      advantage({
        title: 'charity',
        advanced: true,
        body: `You may claim CHOAM charity of 2 spice regardless of how much spice you already have.`,
      }),
      advantage({
        title: 'karama',
        advanced: true,
        body: `You may use a worthless Treachery Card as if it is a Karama card.`,
      }),
      advantage({
        title: 'advisors',
        advanced: true,
        body: `Your forces have 2 sides: a (*normal*) fighter side, and an advisor side. Advisors co-exist with other faction's (*not allied to Bene Gesserit*) forces in a territory. Advisors cannot fight in battles, cannot collect spice, and do not excerpt control for purposes of gaining ornithopters or victory purposes. Advisors are susceptible to storm, family atomics, Shai-Halud and lasgun/shield explosions.`,
      }),
      advantage({
        title: 'flipping',
        advanced: true,
        body: dedent`
            At the start of the shipment and movement phase, you can choose flip advisors to fighters, with 2 exceptions: Advisors under storm and Advisors sharing a territory with any forces of your ally cannot flip to fighters.
            
            When you ship into an unoccupied territory, you must ship as fighters.
            
            If you move advisors into an unoccupied territory, you must flip to them fighters. If you move advisors into an occupied territory, you may keep them as advisors or flip to fighters.
            
            When another faction intrudes into a territory you have fighters, you may flip these fighters to advisors.
          `,
      }),
    ],
    alliance: [
      advantage({
        body: `You may choose to use your "voice" ability in your ally's battles against your ally's opponent.`,
      }),
    ],
    karama: [],
    fate: [],
    __typename: 'FactionRules',
  },
  faq:[],

};
