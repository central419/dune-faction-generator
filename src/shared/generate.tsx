import { pattern1 } from '../presets/patterns';
import {
  FAQ,
  FactionAdvantage,
  FactionAssets,
  FactionLeader,
  FactionTroop,
  FactionTroopSide,
} from './schema';

export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export const advantage = (
  advantage: DeepPartial<Omit<FactionAdvantage, '__typename'>>
): FactionAdvantage => ({
  advanced: false,
  body: '',
  karamaEffect: '',
  title: '',
  ...advantage,
  __typename: 'FactionAdvantage',
});

export const leader = (
  props: DeepPartial<Omit<FactionLeader, '__typename'>>
): FactionLeader => ({
  name: '',
  strength: '0',
  ...props,
  image: props.image.startsWith('http')
    ? props.image
    : `https://dune-app.vercel.app/images/leader/${props.image}`,
  __typename: 'FactionLeader',
});

export const assets = (
  props: Partial<Omit<FactionAssets, '__typename'>>
): FactionAssets => ({
  logo: 'ATREIDES_LOGO',
  color: '#444515',
  pattern: pattern1,
  hero: leader({
    name: '',
    strength: '',
    image: '',
  }),
  leaders: [],
  troops: [],
  ...props,
  __typename: 'FactionAssets',
});

export const faq = (props: Partial<Omit<FAQ, '__typename'>>): FAQ => ({
  answer: '',
  question: '',
  ...props,
  __typename: 'FAQ',
})

export const troopSide = (
  props: DeepPartial<Omit<FactionTroopSide, '__typename'>>
): FactionTroopSide => ({
  __typename: 'FactionTroopSide',
  name: 'forces',
  description:
    'normal forces, of strength 0.5, which can be spiced to a strength of 1',
  variant: 'ATREIDES_TROOP',

  ...props,
  modifiers: {
    __typename: 'FactionTroopSideModifiers',
    star: 'none',
    stroked: false,
    ...props.modifiers,
  },
});
export const troop = (
  props: DeepPartial<Omit<FactionTroop, '__typename'>>
): FactionTroop => {
  const result: FactionTroop = {
    front: troopSide(props.front),
    __typename: 'FactionTroop',
  };

  if (props.back) {
    result.back = troopSide(props.back);
  }
  return result;
};
