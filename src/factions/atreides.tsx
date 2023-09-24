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

export const yeuh = leader({
  image: 'dryeuh.png',
  name: 'Dr Yueh Wellington',
  strength: '1',
});
export const duncan = leader({
  image: 'duncan.png',
  name: 'Duncan Idaho',
  strength: '2',
});
export const gurney = leader({
  image: 'gurney.png',
  name: 'Gurney Hallack',
  strength: '4',
});
export const thufir = leader({
  image: 'thufir.png',
  name: 'Thufir Hawat',
  strength: '5',
});
export const jessica = leader({
  image: 'jessica.png',
  name: 'Lady Jessica',
  strength: '5',
});
export const paul = leader({
  image: 'paul.png',
  name: 'Paul Atreides',
  strength: '10',
});

export const normal = troop({
  front: troopSide({
    variant: 'ATREIDES_TROOP',
    name: 'forces',
    description:
      'Normal forces, of strength 0.5, which can be spiced to a strength of 1',
  }),
});

export const sheet: Faction = {
  __typename: 'Faction',
  name: 'House Atreides',
  description: '',
  assets: assets({
    logo: 'ATREIDES_LOGO',
    color: '#444515',
    pattern: pattern1,
    hero: paul,
    leaders: [yeuh, duncan, gurney, thufir, jessica],
    troops: [normal],
  }),
  rules: {
    __typename: 'FactionRules',
    startText:
      '10 forces in Arrakeen and 10 in reserves (*off planet*). Start with 10 spice.',
    revivalText: '2 forces.',
    advantages: [
      advantage({ body: 'You have limited prescience.' }),
      advantage({
        title: 'bidding prescience',
        body: dedent`
          During each bidding round you may look at each Treachery Card as it comes up for bid. You may keep records about cards. Larum ipsum dolor sit amet.
        `,
        karamaEffect: dedent`
          You may not look at the cards up for bid.
        `,
      }),
      advantage({
        title: 'spice prescience',
        body: dedent`
          During/After Ship & Move phase you may look at the next card for spice blow A and B.
        `,
        karamaEffect: dedent`
          You are not allowed to look at the spice prescience cards. (this lasts until the card is revealed during the spice-blow phase)
        `,
      }),
      advantage({
        title: 'battle prescience',
        body: dedent`
          During combat (step 2.2) you may force your opponent to reveal one part of their battle-plan early. (Weapon, Defense, Leader, or Dial + whether Mercenaries is being played).
        `,
        karamaEffect: dedent`
          Your battle prescience question can be ignored, your opponent is no longer required to do as was answered. Must be played before Battle Plans are revealed.
        `,
      }),
      advantage({
        title: 'kwisatz haderach',
        body: dedent`
          Once you have lost 7 or more total forces in battles you gain a token that can be played alongside leaders in battles in one territory per turn to add +2 strength to those leaders and they cannot be called traitor.
          The token can only be lost in a lazgun-shield explosion, and can be revived like a normal leader.
        `,
        karamaEffect: dedent`
          You may not use the Kwisatz Haderach token in 1 of your battles. Must be done before the Battle Plans are revealed
        `,
      }),
      advantage({
        title: `Leto's Tithe`,
        body: dedent`
          During Spice Collection phase take 2 spice from the Spice Bank if you control one stronghold. Take 3 instead if you control at least two strongholds. You permanently lose this advantage once you gain the Kwisatz Haderach token.`,
        karamaEffect: dedent`
          TBD
        `,
      }),
    ],
    alliance: [
      advantage({
        title: `Shared Prescience`,
        body: 'You may allow your ally to use Battle Prescience in their battles.',
      }),
    ],
    fate: [
      advantage({
        title: 'Arrakis Fiefdom',
        body: dedent`
          Play your fate card at any time before Ship & Move Phase to obtain the Carryall Tech Token, which you cannot lose. The token triggers when a spice mine sends troops to reserves. You may also spawn a 3 spice mine on any sand territory that doesn't have a Spice Blow marker.
        `,
      }),
    ],
  },
  faq: [
    faq({
      question: dedent`
        Is ridwan nice?
      `,
      answer: dedent`
        Sometimes.
      `,
    }),
    faq({
      question: dedent`
        This is a really long question, with loads of ifs and elses and all sorts of sub question relly difficult to answer, luckily there's this answer given here.
      `,
      answer: dedent`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet venenatis condimentum. Nunc laoreet, diam eget cursus pretium, lacus orci sollicitudin eros, sit amet vulputate sapien lacus quis lorem. Proin pharetra sit amet tellus at tristique. Nulla facilisi. Suspendisse eget sapien eget turpis luctus tempor non quis ipsum. Phasellus gravida egestas ullamcorper. Integer sit amet magna neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a enim at risus ultricies interdum et hendrerit leo.
      `,
    }),
    faq({
      question: dedent`
        This is a really long question, with loads of ifs and elses and all sorts of sub question relly difficult to answer, luckily there's this answer given here.
      `,
      answer: dedent`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras imperdiet venenatis condimentum. Nunc laoreet, diam eget cursus pretium, lacus orci sollicitudin eros, sit amet vulputate sapien lacus quis lorem. Proin pharetra sit amet tellus at tristique. Nulla facilisi. Suspendisse eget sapien eget turpis luctus tempor non quis ipsum. Phasellus gravida egestas ullamcorper. Integer sit amet magna neque. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Morbi a enim at risus ultricies interdum et hendrerit leo.
      `,
    }),
  ],
};
