import {
  advantage,
  assets,
  leader,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const representative = leader({
  image: '/images/leader/representative.png',
  name: 'Representative',
  strength: '1',
});
export const administrator = leader({
  image: '/images/leader/administrator.png',
  name: 'administrator',
  strength: '2',
});
export const commisioner = leader({
  image: '/images/leader/commisioner.png',
  name: 'commisioner',
  strength: '4',
});
export const earl = leader({
  image: '/images/leader/earl.png',
  name: 'Earl Viacante',
  strength: '4',
});
export const moat = leader({
  image: '/images/leader/moat.png',
  name: 'lord moat',
  strength: '6',
});
export const council = leader({
  image: '',
  name: 'High Council',
  strength: '10',
});

export const sheet: Omit<Faction, '_id' | '_ts' | 'creator' | 'ruleset'> = {
  __typename: 'Faction',
  name: 'Landsraad',
  description: '',
  assets: assets({
    color: '#6f164d',
    logo: 'LANDSRAAD_LOGO',
    hero: council,
    leaders: [representative, administrator, commisioner, earl, moat],
    pattern: pattern1,
    troops: [
      troop({
        front: troopSide({
          description: '',
          modifiers: {
            __typename: 'FactionTroopSideModifiers',
            star: 'none',
            stroked: false,
          },
          name: 'Force',
          variant: 'LANDSRAAD_TROOP',
        }),
      }),
      troop({
        front: troopSide({
          description: '',
          modifiers: {
            __typename: 'FactionTroopSideModifiers',
            star: 'r1',
            stroked: false,
          },
          name: 'Peace keeper',
          variant: 'LANDSRAAD_TROOP',
        }),
      }),
    ],
  }),
  rules: {
    __typename: 'FactionRules',
    advantages: [
      advantage({
        advanced: false,
        body: 'You resolve disputes between the great houses.',
      }),
      advantage({
        advanced: false,
        body: 'Your 5 peacekeepers are special forces which can be shipped and used in combat like normal troops, but they also have an additional ability:\n\nPeacekeepers can ignore strongholds limitations. (your normal forces can not).\n\nIf you have any peacekeeper forces in a territory where another faction or factions have forces; At the moment just before battle, you can offer to "keep the peace". The combatting factions do not have to accept this offer.\n\nIf both combatants accept (Landsraad itself can be one of the combatants) you must choose 1 of the combatants and move **their** forces to a neighbouring territory of your choice.\n\nWhen you move a combatant\'s forces you may additionally choose to move **your** forces to a neighbouring territory of your choice. This can be the same territory or the a different one.',
        karamaEffect: '',
        title: 'Peace keepers',
      }),
      advantage({
        advanced: false,
        body: 'In your battles, if any peacekeeper forces are present, you are not required to play a leader in this battle.\n\nYou can play Treachery Cards even when not committing a leader in combat.',
        karamaEffect:
          'Force the Landsraad to play a leader if they are able to.\n\nPrevent the Landsraad from playing Treachery cards if they are not able to play a leader.',
        title: 'Kanly',
      }),
      advantage({
        advanced: false,
        body: 'You choose the order in which battles are resolved.',
        karamaEffect:
          'Combat order is as normal, the Landsraad has no influence on it at all.',
        title: 'Master of strategy',
      }),
      advantage({
        advanced: false,
        body: "When a faction doesn't play any Treachery cards in a battle, collect 1 spice from the Spice bank.",
        karamaEffect:
          'The Landsraad collects no spice when a faction does not play any Treachery cards in a battle.',
        title: 'Peace Tax',
      }),
      advantage({
        advanced: false,
        body: "For factions to form an alliance, they must request this alliance through you.\nThey tell you who they'd like to offer an alliance, and the amount of the spice reward.\n\nYou can choose 1 of these options:\n\n- **Reject**, Landsraad must pay the requester the spice reward.\n  Requester can not offer the same alliance again this turn.\n- **Proceed**, give the alliance offer to the faction it's meant for. \n  - If the offer is accepted, the spice reward is collect by the Landsraad.\n  - If the player declines, the requester pays 1 spice to the Landsraad.\n- **Enforce**, the Landsraad creates an alliance with themselves and the requester.",
        karamaEffect: '',
        title: 'Alliance arbitrage',
      }),
    ],
    alliance: [
      advantage({
        advanced: false,
        body: 'Your ally is not required to play a leader in battle. They do not have to announce they are not playing a leader. They can not play Treachery cards if they play no leader.',
        karamaEffect:
          'This ability is tied to the Kanly ability. If the Kanly ability is karamad, so is this alliance ability.',
        title: '',
      }),
    ],
    fate: [
      advantage({
        advanced: false,
        body: '**At then end of bidding phase**, set aside all your Treachery and Traitor cards. Take 4 Treachery cards (of your choice) from either the discard pile or draw pile; take 1 (random) traitor card from either the Traitor deck or Traitor discard deck. After discard your card set aside.\n\nDuring this process you may not keep notes, you may not communicate with anyone about what you see, no deals can be made.',
        title: '',
      }),
    ],
    karama: [],
    revivalText: '1 normal force, 1 peace keeper.',
    startText:
      '5 normal forces in Polar Sink and 10 normal forces + 5 peacekeepers in reserve (*off planet*). Start with 5 spice.',
  },
  faq:[],

};
