import { ComponentProps } from 'react';
import { TreacheryCard } from './treachery';
import { Front } from './blocks/Front';
import { TraitorCard } from './traitor';
import { factions } from '../../presets/factions';
import { AllianceCard } from './alliance';
import { BackCard } from './back';

export default {
  component: Front,
  args: {},
};

export const Treachery: {
  args: ComponentProps<typeof TreacheryCard>;
  render: typeof TreacheryCard;
} = {
  args: {
    head: 'BROWN',
    release: 'HOMEBREW',
    icon: 'SPECIAL_HAND',
    title: ['Thing', 1],
    content: ['Thing', 1],
    sub: ['Thing', 1],
    recolor: [],
    decals: [
      {
        id: 'BREAK_CONDITIONING',
      },
    ],
  },
  render: (args) => <TreacheryCard {...args} />,
};

export const Traitor: {
  args: ComponentProps<typeof TraitorCard>;
  render: typeof TraitorCard;
} = {
  args: {
    release: 'HOMEBREW',
    title: ['Thing', 1],
    sub: ['Thing', 1],
    decals: [],
    leader: {
      ...factions.harkonnen.beast,
      color: factions.harkonnen.sheet.assets.color,
      logo: factions.harkonnen.sheet.assets.logo,
    },
  },
  render: (args) => <TraitorCard {...args} />,
};

export const Alliance: {
  args: ComponentProps<typeof AllianceCard>;
  render: typeof AllianceCard;
} = {
  args: {
    release: 'HOMEBREW',
    title: ['Thing', 1],
    decals: [
      {
        id: 'BREAK_CONDITIONING',
        fade: true,
      },
      {
        id: 'HARKONNEN_TROOP',
        fade: false,
        offset: [140, 70],
      },
    ],
    side: {
      color: factions.harkonnen.sheet.assets.color,
      logo: factions.harkonnen.sheet.assets.logo,
    },
    content: ['Thing', 1],
  },
  render: (args) => <AllianceCard {...args} />,
};

export const Back: {
  args: ComponentProps<typeof BackCard>;
  render: typeof BackCard;
} = {
  args: {
    base: 'OCEAN',
    title: 'Nexus',
    shield: 'MOONS',
  },
  render: (args) => <BackCard {...args} />,
};
