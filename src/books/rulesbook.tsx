import { Cover } from '../objects/book/cover';

import coverA from '../asset/cover/cover-a.svg';
import coverB from '../asset/cover/cover-b.svg';
import coverC from '../asset/cover/cover-c.svg';
import coverD from '../asset/cover/cover-d.svg';

import { tint1 } from '../presets/colors';

import { AboutDreams } from './rulebook/AboutDreams';
import { Faq } from './rulebook/Faq';
import {
  Phases,
  PhasesSpice,
  PhasesBidding,
  PhasesRevival,
  PhasesMentat,
} from './rulebook/Phases';
import { Setup, SetupLayout, Setup2, Setup3, Setup4 } from './rulebook/Setup';
import { Factions, Faction2, Faction3 } from './rulebook/Factions';
import { TechTokens } from './rulebook/TechTokens';
import {
  Cards,
  TreacheryCards,
  CombatCards,
  DefenseCards,
  KaramaCard,
  TruthTranceCard,
  SpecialCards,
  SpecialCards2,
} from './rulebook/Cards';
import { Welcome, Intro, Sectors, Strongholds } from './rulebook/Welcome';
import { MiscRules } from './rulebook/MiscRules';

export const ratio = Math.sqrt(2);

export const cover = <Cover background={coverB} offset={80} />;

export const mapSize = { width: 487.06, height: 487.06 };
export const pages = [
  <Welcome />,
  <Intro />,
  <Sectors />,
  <Strongholds />,
  <Cards />,
  <TreacheryCards />,
  <CombatCards />,
  <DefenseCards />,
  <KaramaCard />,
  <TruthTranceCard />,
  <SpecialCards />,
  <SpecialCards2 />,
  <TechTokens />,
  <MiscRules />,
  <Factions />,
  <Faction2 />,
  <Faction3 />,
  <Setup />,
  <SetupLayout />,
  <Setup2 />,
  <Setup3 />,
  <Setup4 />,
  <Phases />,
  <PhasesSpice />,
  <PhasesBidding />,
  <PhasesRevival />,
  <PhasesMentat />,
  <Faq />,
  <AboutDreams />,
];
