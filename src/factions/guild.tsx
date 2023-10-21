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

export const guildrep = leader({
  image: 'guildrep.png',
  name: 'Guild Rep',
  strength: '1',
});
export const soosoosook = leader({
  image: 'soosoosook.png',
  name: 'Soo-Soo Sook',
  strength: '2',
});
export const esmar = leader({
  image: 'esmar.png',
  name: 'Esmar Tuek',
  strength: '3',
});
export const bewt = leader({
  image: 'bewt.png',
  name: 'Master Bewt',
  strength: '3',
});
export const staban = leader({
  image: 'staban.png',
  name: 'Staban Tuek',
  strength: '5',
});

export const normal = troop({
  front: troopSide({
    variant: 'GUILD_TROOP',
    name: 'forces',
    description:
      'Normal Troops, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const eldrick = leader({ name: 'Edric', image: '', strength: '' });

export const sheet: Faction = {
  __typename: 'Faction',
  description: dedent`
    The Spacing Guild, represented by steersman Edric (in league with smuggler bands) — monopolist of transport, yet addicted to ever increasing Spice flows.
  `,
  name: 'Spacing Guild',
  assets: assets({
    logo: 'GUILD_LOGO',
    color: '#C74C26',
    hero: eldrick,
    leaders: [guildrep, soosoosook, esmar, bewt, staban],
    troops: [normal],
    pattern: pattern1,
  }),
  rules: {
    startText: `5 Troop tokens in Tuek's Seitch, 15 in reserve (*off-planet*), Start with 5 Spice.`,
    revivalText: '1 force.',

    advantages: [
      advantage({ body: 'You control all shipment unto and off Arrakis.' }),
      advantage({
        title: 'Shipping Payments',
        body: 'When other factions pay to ship they pay the Spice to you.',
      }),
      advantage({
        title: dedent`Discount Shipping`,
        body: `You pay only half the normal fee (rounded up) when shipping your Troops.
          
        When you ship to reserves the fee is 1 Spice per 2 troops.

        Cross-shipping into strongholds costs 1 Spice per 2 troops, Cross-shipping anywhere else costs 1 Spice per 1 troop`,
      }),
      advantage({
        title: 'Three Types of Shipment',
        body: dedent`
          During your shipment, you can choose to do 1 of 3 types of shipment:
  
          - **Option 1**: Ship normally from off-planet reserves to any 1 territory on the board.
          - **Option 2**: Cross-ship from 1 territory to any 1 other territory on the board.
          - **Option 3**: Ship Troop tokens from 1 territory on the board back to your reserves.
        `,
        karamaEffect: dedent`
          You can only ship normally`,
      }),
      advantage({
        title: 'Three Types of Interjection',
        body: dedent`Once at any point during Ship & Move phase choose one to affect turn order:

        - Go first, last, or between any other factions.
        - Swap your position with another faction.  (cannot be done after your normal spot in turn order)
        - Force another player to go now, and you take their place in turn order. (cannot be done after your normal spot in turn order)`,
      }),
      advantage({
        title: 'Retreat',
        body: `Once battle plans are revealed (step 4.3) you may decide to retreat. If you retreat your opponent wins the battle as if by traitor.

        Your units may be shipped back to reserves at stronghold shipping rates. Your Treachery Cards can be saved by paying Spice for each equal to your leader's strength. If your leader would've been killed in battle they die. Spice you use to Spice dial and retreat is paid to the Spice bank. You cannot retreat if the battle is resolved with a Traitor or Break Conditioning.`,
      }),
    ],
    alliance: [
      advantage({
        title: `Shared Shipping Advantage`,
        body: dedent`Your ally may use Discount Shipping. You may allow your ally to ship using Three Types of Shipment (including Fremen). You may also reveal Spice from your hidden area to pay for an ally's shipment. (You don't lose the spice)`,
      }),
    ],
    fate: [
      advantage({
        title: `Battle Training`,
        body: `Play your fate card at any time before Ship & Move phase to permanently gain the ability to play two leaders per battle. (Including cheap heroes) Either leader can be called traitor. If you retreat the lowest leader is used for saving Treachery Cards. Leaders survive/die as one.`,
      }),
    ],
    __typename: 'FactionRules',
  },
  faq: [],
};
