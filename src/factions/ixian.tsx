import { dedent } from 'ts-dedent';
import {
  advantage,
  assets,
  leader,
  faq,
  troop,
  troopSide,
} from '../shared/generate';
import { pattern1 } from '../presets/patterns';
import { Faction } from '../shared/schema';

export const cammar = leader({
  image: 'cammar.png',
  name: 'Cammar Pilru',
  strength: '1',
});
export const kailea = leader({
  image: 'kailea.png',
  name: 'Kailea Vernius',
  strength: '2',
});
export const dominic = leader({
  image: 'dominic.png',
  name: 'Dominic Vernius',
  strength: '3',
});
export const tessia = leader({
  image: 'tessia.png',
  name: 'Tessia Vernius',
  strength: '5',
});
export const ctair = leader({
  image: 'ctair.png',
  name: 'CTair Pilru',
  strength: '5',
});

export const normal = troop({
  front: troopSide({
    variant: 'IX_TROOP',
    name: 'suboid',
    description:
      'Suboid forces, of strength 0.5, cannot be spice dialed.',
  }),
  back: troopSide({
    variant: 'IX_TROOP',
    name: 'cyborg',
    description: ``,
    modifiers: {
      star: 'l1',
    },
  }),
});

const rombert = leader({ name: 'Prince Rombert', image: '', strength: '10' });

export const sheet: Faction = {
  __typename: 'Faction',
  description: '',
  name: 'Ixian',
  assets: assets({
    logo: 'IX_LOGO',
    color: '#B9A452',
    hero: rombert,
    leaders: [cammar,kailea,dominic,tessia,ctair],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText: `6 forces (*3 Cyborgs, 3 Suboids*) in the HMS, 14 forces (*6 Cyborgs, 8 Suboids*) in reserve (*off-planet*), Start with 10 spice.`,
    revivalText:
      '1 force, either Suboid or Cyborg.',
    advantages: [
      advantage({ body: 'You are skilled in technology and production.' }),
      advantage({
        title: 'Initial Treachery Knowledge',
        body: dedent`You look at the initial Treachery Cards in setup before they are dealt.`,
      }),
      advantage({
        title: 'General Bidding Knowledge',
        body: 'At the beginning of the Bidding phase you may look at the batch of Treachery Cards going up for bid. Then, you may split them into 2 piles, choosing which pile goes up for bid first.',
      }),
      advantage({
        title: 'Technology',
        body: 'Before the first bid is placed on a card you may replace it with a card from your hand once per phase. If you split the bidding cards into piles the Atreides may see the card you get.',
      }),
      advantage({
        title: 'Augmented Troops',
        body: dedent`Your 9 Cyborgs are double combat strength, can move 2 territories, collect 3 spice each, and cost 3 spice to revive. Cyborgs are immune to karama.

        Your 11 Suboids can move 2 territories if accompanied by a Cyborg, cost 1 spice to revive, and are always considered half strength because they cannot be spice dialed.
        
        If you dial Cyborgs in a battle undialed Suboids can die in their place when calculating battle losses (step 4.4). You get 2 uses out of every suboid because if this happens the dialed Cyborgs flip to Patched Cyborgs. Patched Cyborgs can be dialed once for free, then they flip back.`,
      }),
      advantage({
        title: 'Hidden Mobile Surveyor',
        body: dedent`During setup place the HMS in any non-stronghold territory. It is considered a territory within that territory. No other factions can enter the HMS. You may ship to it like a stronghold (although the HMS is not a stronghold), and move into/out of it like a normal territory.
        Troops in the HMS are safe from the Storm and Shai-Hulud.
        
        During Mentat phase you may move the HMS up to 3 non-stronghold territories. Troops can be picked up/dropped off along the way. (The HMS cannot pick up spice)`,
      }),
    ],
    alliance: [
      advantage({
        title: 'Shared Treachery Cards',
        body: dedent`Once, during the bidding round, before bidding begins on a card and before Atreides gets to look at the card, you may take the Treachery Card about to be bid on, replacing it with one from your hand.`,
      }),
    ],
    fate: [
      advantage ({
        title: `Defect`,
        body: `Play your fate card to nullify the effects of a special Treachery Card once it is played. The card is returned to the original faction and may not be used for the rest of the turn. To stop a special weapon/defense/mercenaries it must be played before battle plans are made. (Cannot be played during combat step 3)`,
      })
    ],
    __typename: 'FactionRules',
  },
  faq: [
    faq({
      question: dedent`
        lalala?
      `,
      answer: dedent`
        lala la
      `,
    }),
    faq({
      question: dedent`
        TBD
      `,
      answer: dedent`
        TBD
      `,
    }),
  ],
};