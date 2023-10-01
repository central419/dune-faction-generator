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

export const jamis = leader({
  image: 'jamis.png',
  name: 'Jamis',
  strength: '2',
});
export const mapes = leader({
  image: 'mapes.png',
  name: 'Shadout Mapes',
  strength: '3',
});
export const otheym = leader({
  image: 'otheym.png',
  name: 'Otheym',
  strength: '5',
});
export const chani = leader({
  image: 'chani.png',
  name: 'Chani',
  strength: '6',
});
export const stilgar = leader({
  image: 'stilgar.png',
  name: 'Stilgar',
  strength: '7',
});

export const normal = troop({
  front: troopSide({
    variant: 'FREMEN_TROOP',
    name: 'forces',
    description:
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
  back: troopSide({
    variant: 'FREMEN_TROOP',
    name: 'fedaykin',
    description:
      'Your 3 starred forces: Fedaykin are worth 2 normal forces in battle and in taking losses. They are treated as 1 force during revival. You can only revive 1 Fedaykin per turn.',
    modifiers: {
      star: 'l1',
    },
  }),
});

export const liet = leader({ name: 'Liet Kynes', image: '', strength: '10' });

export const sheet: Faction = {
  __typename: 'Faction',
  description: dedent`
    The Fremen, represented by the planetary ecologist Liet Kynes &mdash; commanding fierce hordes of natives, adept at life and travel on the planet, and dedicated to preventing any outside control while bringing about Dune&rsquo;s own natural regeneration.
  `,
  name: 'Fremen',
  assets: {
    logo: 'FREMEN_LOGO',
    color: '#DF9B42',
    hero: liet,
    leaders: [jamis, mapes, otheym, chani, stilgar],
    troops: [normal],
    pattern: pattern1,
    __typename: 'FactionAssets',
  },
  rules: {
    startText:
      '10 forces distributed between Sietch Tabr, False Wall South, and False Wall West. 10 in reserves. Start with 3 spice.',
    revivalText: '3 forces.',
    advantages: [
      advantage({ body: 'You are native to Dune and know its ways.' }),
      advantage({
        title: 'Rallying Shipment',
        body: 'You may ship for free to anywhere within two territories of the Great Flat. You may not ship normally.',
      }),
      advantage({
        title: 'Free Spice Dialing',
        body: dedent`Your forces do not require spice to count at their full strength.`,
      }),
      advantage({
        title: 'Native Movement',
        body: dedent`Your forces may move two territories instead of one.`,
      }),
      advantage({
        title: 'Worm Riding',
        body: dedent`
        Shai-Hulud will not devour your forces. Instead, after alliances are made those forces can move to any other territory. When worm riding forces/spice at the final destination are not eaten. If more than one Shai-Hulud appear during the Spice Blow phase you may choose where every worm after the second appears. Shai Huluds appearing on strongholds or rock territories will not eat forces, but your forces can ride them. If you play a thumper token the same phase a Shai Hulud card is flipped you choose where that Shai Hulud appears.`,
      }),
      advantage({
        title: 'Thumpers',
        body: dedent`You start the game with two thumper tokens. After a Spice Blow Card is flipped you may discard a token to summon a riding worm to any sand or polar territory where you have forces. Riding worms don't cause a nexus and don't eat troops. You can only play one thumper per turn.`,
      }),
      advantage({
        title: 'Storm Movement Knowledge',
        body: dedent`During Storm Phase randomly determine the distance the storm will move next turn by shuffling your deck of 6 Storm Cards. You know this information.`,
      }),
      advantage({
        title: 'Half Storm Losses',
        body: dedent`If your forces are caught in storm you may have only half of them killed (all fractions rounded up). You may ship and move into/through storm by taking half losses.`,
      }),
      advantage({
        title: 'Fedaykin',
        body: dedent`Your 3 starred forces: Fedaykin are worth 2 normal forces in battle and in taking losses. They are treated as 1 force during revival. You can only revive 1 Fedaykin per turn.`,
      }),
      advantage({
        title: 'battles',
        body: dedent`Your forces do not require spice to count at their full strength.`,
      }),
      advantage({
        title: 'Fantatical Tactics (AKA Teeth)',
        body: dedent`During battle (step 3.1) you may publicly show any number of weapon and/or defense Treachery Cards you are playing in the battle before Battle Plans are made. If you do those cards cannot be lost this battle unless your leader is called traitor or there is a lazgun-shield explosion.

        Harkonnen can only replace these with cards of the same type using Vladimir's Spite.`,
      }),
      advantage({
        title: 'For a Green Arrakis: Victory Condition',
        body: dedent`If no faction has won by the end of turn 10 you win. Your ally wins if your alliance controls at least 3 strongholds.`,
      }),
    ],
    alliance: [
      advantage({
        title: `Desert Power`,
        body: dedent`Whenever your ally spice dials they may place the spice into their Bribes instead of the Spice Bank. Your ally's forces are not devoured by Shai-Hulud (Forces are always devoured after alliances are made/broken).`,
      }),
    ],
    fate: [
      advantage({
        title: `Planetology`,
        body: `Play your fate card during Storm Phase to add or subtract 1 from the revealed Storm Card. You may repeat this every turn for the rest of the game.`,
      }),
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
