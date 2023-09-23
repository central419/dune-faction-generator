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

const rombert = leader({ name: 'Prince Rombert', image: '', strength: '10' });

export const sheet: Faction = {
  __typename: 'Faction',
  description: '',
  name: 'Ixian',
  assets: assets({
    logo: 'IX_LOGO',
    color: '#B9A452',
    hero: rombert,
    leaders: [],
    troops: [],
    pattern: pattern1,
  }),
  rules: {
    startText: `6 forces (*3 cyborgs, 3 suboids*) in the HMS, 13 forces (*4 cyborgs, 11 suboids*) in reserve (*off-planet*), Start with 5 spice.`,
    revivalText:
      '1 force. (*no limit on amount of cyborgs you can revive per turn*)',
    advantages: [
      advantage({ body: 'You are skilled in technology and production.' }),
      advantage({
        title: 'start of game',
        body: `Before initial Treachery Cards are dealt, draw 1 Treachery Card for each faction in the game. Choose your starting Treachery Card, shuffle the remaining cards, and deal to the other players.`,
      }),
      advantage({
        title: 'bidding',
        body: 'At the start of the bidding phase, count how many players can bid. Draw this many Treachery Cards + 1. Choose 1 Treachery Card to place either on the top or the bottom of the Treachery Deck. Then remaining cards are shuffled and placed face-down for the bidding rounds.',
      }),
      advantage({
        title: 'cyborgs',
        body: 'Your 7 starred forces: Cyborgs are worth 2 normal forces in battle and in taking losses. Cyborgs can collect 3 spice per force. Cyborgs can move 2 territories. Cyborgs cost 3 spice to revive.',
      }),
      advantage({
        title: 'suboids',
        body: dedent`
          Your 13 non-starred forces: Suboids are worth 0.5 normal forces in battle and in taking losses. Suboids can move 2 territories if accompanied by a Cyborg.

          Suboids can be used to prevent sending Cyborgs to the Tleilaxu Tanks. After battle losses are calculated, surviving Suboid forces in that territory can be exchanged for Cyborgs forces you lost in that battle.`,
      }),
      advantage({
        title: 'hidden mobile stronghold',
        body: dedent`
          After initial storm placement at the start of the game, you place your Hidden Mobile Stronghold (HMS) in any territory not under storm, (*except for strongholds*). This stronghold counts towards the game win and is protected from storm and Shai-Halud.
          
          From turn 2 onwards before the storm movement is dialed/revealed - as long as Ixian forces are in the HMS - you may move the HMS up to 3 (*non-stronghold*) territories.
          
          When the HMS enters a territory with spice, each Ixian force inside the HMS collects 2 spice from the territory.
          
          No faction, other then Ixian may ship forces directly into the HMS. Other factions move use their move action to move into the HMS.`,
      }),
      advantage({
        title: 'technology',
        advanced: true,
        body: `Once, during the bidding round, before bidding begins on a card and before Atreides gets to look at the card, you may take the Treachery Card about to be bid on, replacing it with one from your hand.`,
      }),
      advantage({
        title: 'suboid strength',
        advanced: true,
        body: `Suboids are always considered half strength for dialing. You can’t increase the effectiveness of Suboids in battle by spending Spice.`,
      }),
    ],
    alliance: [
      advantage({
        body: `After your ally purchased a Treachery Card during bidding, they may immediately discard their purchased card and draw a card from the top of the Treachery Deck.`,
      }),
    ],
    fate: [],
    __typename: 'FactionRules',
  },
  faq: [],
};
