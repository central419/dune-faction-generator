import { Cover } from '../objects/book/cover';

import coverA from '../asset/cover/cover-a.svg';
import coverB from '../asset/cover/cover-b.svg';
import coverC from '../asset/cover/cover-c.svg';
import coverD from '../asset/cover/cover-d.svg';
import coverE from '../asset/cover/cover-e.svg';

import { Faq_1 } from './rulebook/Faq';
import {
  Phases_Intro,
  Phases_Spice,
  Phases_Bidding,
  Phases_Revival,
  Phases_Mentat,
  Phases_Nexus,
  Phases_Fate,
  Phases_Battle,
  Phases_Movement,
  Phases_Storm,
  Phases_BattleOrder,
  Phases_BattleResolve,
} from './rulebook/Phases';
import { Setup_1, Setup_2, Setup_3, Setup_4, Setup_5 } from './rulebook/Setup';
import { Factions1, Factions2, Factions3 } from './rulebook/Factions';
import { TechTokens } from './rulebook/TechTokens';
import {
  Cards_Intro,
  TreacheryCards1,
  TreacheryCards2,
  TreacheryCards3,
  KaramaCard,
  TruthTranceCard,
  TreacheryCards4,
  TreacheryCards5,
} from './rulebook/Cards';
import { About_Welcome, About_Dreams } from './rulebook/About';
import { Intro, Sectors, Strongholds } from './rulebook/Introduction';
import { MiscRules } from './rulebook/MiscRules';
import { Deals } from './rulebook/Deals';

export const ratio = Math.sqrt(2);
export const cover = <Cover background={coverE} offset={80} />;
export const pages = [
  <About_Welcome />,
  <Intro />,
  <Sectors />,
  <Strongholds />,
  <Cards_Intro />,
  <TreacheryCards1 />,
  <TreacheryCards2 />,
  <TreacheryCards3 />,
  <KaramaCard />,
  <TruthTranceCard />,
  <TreacheryCards4 />,
  <TreacheryCards5 />,
  <TechTokens />,
  <MiscRules />,
  <Factions1 />,
  <Factions2 />,
  <Factions3 />,
  <Setup_1 />,
  <Setup_2 />,
  <Setup_3 />,
  <Setup_4 />,
  <Setup_5 />,
  <Phases_Intro />,
  <Phases_Nexus />,
  <Phases_Fate />,
  <Phases_Bidding />,
  <Phases_Revival />,
  <Phases_Spice />,
  <Phases_Movement />,
  <Phases_Battle />,
  <Phases_BattleResolve />,
  <Phases_BattleOrder />,
  <Phases_Mentat />,
  <Phases_Storm />,
  <Deals />,
  <Faq_1 />,
  <About_Dreams />,
];
