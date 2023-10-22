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
  image: 'representative.png',
  name: 'Representative',
  strength: '1',
});
export const administrator = leader({
  image: 'administrator.png',
  name: 'administrator',
  strength: '2',
});
export const commisioner = leader({
  image: 'commisioner.png',
  name: 'commissioner',
  strength: '4',
});
export const earl = leader({
  image: 'earl.png',
  name: 'Earl Viacante',
  strength: '4',
});
export const moat = leader({
  image: 'moat.png',
  name: 'lord moat',
  strength: '6',
});
export const council = leader({
  image: '',
  name: 'High Council',
  strength: '10',
});

export const sheet: Faction = {
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
        body: 'You resolve disputes between the great houses.',
      }),
      advantage({
        body: 'Your 5 peacekeepers are special Troop tokens which can be shipped and used in battle like normal troops, but they also have an additional ability:\n\nPeacekeepers can ignore strongholds limitations. (your normal Troop tokens can not).\n\nIf you have any peacekeeper Troop tokens in a territory where another faction or factions have Troops tokens; At the moment just before battle, you can offer to "keep the peace". The battling factions do not have to accept this offer.\n\nIf both parties accept (Landsraad itself can be one of the parties) you must choose 1 of the parties and move **their** Troop tokens to a neighboring territory of your choice.\n\nWhen you move a parties\'s Troop tokens you may additionally choose to move **your** Troop tokens to a neighbouring territory of your choice. This can be the same territory or the a different one.',
        karamaEffect: '',
        title: 'Peace keepers',
      }),
      advantage({
        body: 'In your battles, if any peacekeeper Troop tokens are present, you are not required to play a leader in this battle.\n\nYou can play Treachery Cards even when not committing a leader in battle.',
        karamaEffect:
          'Force the Landsraad to play a leader if they are able to.\n\nPrevent the Landsraad from playing Treachery cards if they are not able to play a leader.',
        title: 'Kanly',
      }),
      advantage({
        body: 'You choose the order in which battles are resolved.',
        karamaEffect:
          'Battle order is as normal, the Landsraad has no influence on it at all.',
        title: 'Master of strategy',
      }),
      advantage({
        body: "When a faction doesn't play any Treachery cards in a battle, collect 1 Spice from the Spice bank.",
        karamaEffect:
          'The Landsraad collects no Spice when a faction does not play any Treachery cards in a battle.',
        title: 'Peace Tax',
      }),
      advantage({
        body: "For factions to form an alliance, they must request this alliance through you.\nThey tell you who they'd like to offer an alliance, and the amount of the Spice reward.\n\nYou can choose 1 of these options:\n\n- **Reject**, Landsraad must pay the requester the Spice reward.\n  Requester can not offer the same alliance again this turn.\n- **Proceed**, give the alliance offer to the faction it's meant for. \n  - If the offer is accepted, the Spice reward is collect by the Landsraad.\n  - If the player declines, the requester pays 1 Spice to the Landsraad.\n- **Enforce**, the Landsraad creates an alliance with themselves and the requester.",
        karamaEffect: '',
        title: 'Alliance arbitrage',
      }),
    ],
    alliance: [
      advantage({
        body: 'Your ally is not required to play a leader in battle. They do not have to announce they are not playing a leader. They can not play Treachery cards if they play no leader.',
        karamaEffect: `This ability is tied to the Kanly ability. If the Kanly ability is karama'd, so is this alliance ability.`,
        title: '',
      }),
    ],
    fate: [
      advantage({
        body: '**At then end of bidding phase**, set aside all your Treachery and Traitor cards. Take 4 Treachery cards (of your choice) from either the discard pile or draw pile; take 1 (random) traitor card from either the Traitor deck or Traitor discard deck. After discard your card set aside.\n\nDuring this process you may not keep notes, you may not communicate with anyone about what you see, no deals can be made.',
        title: '',
      }),
    ],
    revivalText: '1 normal Troop token, 1 peace keeper.',
    startText:
      '5 normal Troop tokens in Polar Sink and 10 normal Troop tokens + 5 peacekeepers in reserve (*off planet*). Start with 5 Spice.',
  },
  faq: [],
};
