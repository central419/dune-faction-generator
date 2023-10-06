import { FieldsSelection, Observable } from '@genql/runtime';
import * as Enum from './enums';

export type Scalars = {
  Boolean: boolean;
  Date: any;
  ID: string;
  Int: number;
  Long: any;
  String: string;
  Time: any;
};

export type Decal = keyof typeof Enum.Decal

export interface Ending {
  method: Scalars['String'];
  timestamp: Scalars['Int'];
  turn: Scalars['Int'];
  __typename: 'Ending';
}

export interface FAQ {
  answer: Scalars['String'];
  question: Scalars['String'];
  __typename: 'FAQ';
}

export interface FAQPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (FAQ | undefined)[];
  __typename: 'FAQPage';
}

export interface Faction {
  assets: FactionAssets;
  description: Scalars['String'];
  name: Scalars['String'];
  rules: FactionRules;
  faq: FAQ[];
  __typename: 'Faction';
}

export interface FactionAdvantage {
  body: Scalars['String'];
  karamaEffect?: Scalars['String'];
  title?: Scalars['String'];
  __typename: 'FactionAdvantage';
}

export interface FactionAssets {
  color: Scalars['String'];
  hero: FactionLeader;
  leaders: FactionLeader[];
  logo: Logo;
  pattern: Pattern;
  troops: FactionTroop[];
  __typename: 'FactionAssets';
}

export interface FactionLeader {
  image: Scalars['String'];
  name: Scalars['String'];
  strength: Scalars['String'];
  __typename: 'FactionLeader';
}

export interface FactionPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (Faction | undefined)[];
  __typename: 'FactionPage';
}

export interface FactionRules {
  advantages: FactionAdvantage[];
  alliance: FactionAdvantage[];
  fate: FactionAdvantage[];
  revivalText: Scalars['String'];
  startText: Scalars['String'];
  __typename: 'FactionRules';
}

export interface FactionTroop {
  back?: FactionTroopSide;
  front: FactionTroopSide;
  __typename: 'FactionTroop';
}

export interface FactionTroopSide {
  description?: Scalars['String'];
  modifiers: FactionTroopSideModifiers;
  name?: Scalars['String'];
  variant: Troop;
  __typename: 'FactionTroopSide';
}

export interface FactionTroopSideModifiers {
  star: FactionTroopSideStar;
  stroked: Scalars['Boolean'];
  __typename: 'FactionTroopSideModifiers';
}

export type FactionTroopSideStar = 'l1' | 'none' | 'r1' | 'r2' | 'r3';

export type Logo = keyof typeof Enum.Logo

export interface Mutation {
  createFAQ: FAQ;
  createFaction: Faction;
  createPlay: Play;
  createPlayer: Player;
  createRenderable: Renderable;
  createRuleset: Ruleset;
  createUser: User;
  deleteFAQ?: FAQ;
  deleteFaction?: Faction;
  deletePlay?: Play;
  deletePlayer?: Player;
  deleteRenderable?: Renderable;
  deleteRuleset?: Ruleset;
  deleteUser?: User;
  partialUpdateFAQ?: FAQ;
  partialUpdateFaction?: Faction;
  partialUpdatePlay?: Play;
  partialUpdatePlayer?: Player;
  partialUpdateRenderable?: Renderable;
  partialUpdateRuleset?: Ruleset;
  partialUpdateUser?: User;
  updateFAQ?: FAQ;
  updateFaction?: Faction;
  updatePlay?: Play;
  updatePlayer?: Player;
  updateRenderable?: Renderable;
  updateRuleset?: Ruleset;
  updateUser?: User;
  __typename: 'Mutation';
}

export interface Pattern {
  azimuth: Scalars['Int'];
  elevation: Scalars['Int'];
  octaves: Scalars['Int'];
  seed: Scalars['Int'];
  surface: Scalars['Int'];
  __typename: 'Pattern';
}

export type Placeable = keyof typeof Enum.Placeable

export interface Play {
  ending: Ending;
  organizer: User;
  players: PlayerPage;
  ruleset: Ruleset;
  timestamp: Scalars['Int'];
  __typename: 'Play';
}

export interface PlayPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (Play | undefined)[];
  __typename: 'PlayPage';
}

export interface Player {
  faction: Faction;
  play?: Play;
  user: User;
  won: Scalars['Boolean'];
  __typename: 'Player';
}

export interface PlayerPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (Player | undefined)[];
  __typename: 'PlayerPage';
}

export interface Query {
  authenticate?: User;
  factions: FactionPage;
  faqs: FAQPage;
  findFAQByID?: FAQ;
  findFactionByID?: Faction;
  findPlayByID?: Play;
  findPlayerByID?: Player;
  findRenderableByID?: Renderable;
  findRulesetByID?: Ruleset;
  findUserByID?: User;
  plays: PlayPage;
  renderablesByType: RenderablePage;
  rulesets: RulesetPage;
  users: UserPage;
  __typename: 'Query';
}

export interface Renderable {
  data: Scalars['String'];
  owner: User;
  type: RenderableType;
  url: Scalars['String'];
  __typename: 'Renderable';
}

export interface RenderablePage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (Renderable | undefined)[];
  __typename: 'RenderablePage';
}

export type RenderableType =
  | 'AllianceCard'
  | 'BackCard'
  | 'FactionSheet'
  | 'FactionToken'
  | 'LeaderCard'
  | 'LeaderToken'
  | 'Shield'
  | 'TreacheryCard'
  | 'TroopToken';

export interface Ruleset {
  assets: Scalars['String'][];
  content: Scalars['String'][];
  creator: User;
  description: Scalars['String'];
  faqs: FAQPage;
  icon: Scalars['String'];
  name: Scalars['String'];
  __typename: 'Ruleset';
}

export interface RulesetPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (Ruleset | undefined)[];
  __typename: 'RulesetPage';
}

export type Troop = keyof typeof Enum.Troop

export interface User {
  avatar: Scalars['String'];
  discord: Scalars['String'];
  factions: FactionPage;
  name: Scalars['String'];
  organized: PlayPage;
  plays: PlayerPage;
  questions: FAQPage;
  renderables: RenderablePage;
  rulesets: RulesetPage;
  __typename: 'User';
}

export interface UserPage {
  after?: Scalars['String'];
  before?: Scalars['String'];
  data: (User | undefined)[];
  __typename: 'UserPage';
}

export interface EndingRequest {
  method?: boolean | number;
  timestamp?: boolean | number;
  turn?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface EndingInput {
  method: Scalars['String'];
  timestamp: Scalars['Int'];
  turn: Scalars['Int'];
}

export interface FAQRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  answer?: boolean | number;
  author?: UserRequest;
  question?: boolean | number;
  ruleset?: RulesetRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FAQAuthorRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface FAQInput {
  answer: Scalars['String'];
  author?: FAQAuthorRelation | null;
  question: Scalars['String'];
  ruleset?: FAQRulesetRelation | null;
}

export interface FAQPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: FAQRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FAQRulesetRelation {
  connect?: Scalars['ID'] | null;
  create?: RulesetInput | null;
}

export interface FactionRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  assets?: FactionAssetsRequest;
  creator?: UserRequest;
  description?: boolean | number;
  name?: boolean | number;
  rules?: FactionRulesRequest;
  ruleset?: RulesetRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionAdvantageRequest {
  advanced?: boolean | number;
  body?: boolean | number;
  karamaEffect?: boolean | number;
  title?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionAdvantageInput {
  advanced?: Scalars['Boolean'] | null;
  body: Scalars['String'];
  karamaEffect?: Scalars['String'] | null;
  title?: Scalars['String'] | null;
}

export interface FactionAssetsRequest {
  color?: boolean | number;
  hero?: FactionLeaderRequest;
  leaders?: FactionLeaderRequest;
  logo?: boolean | number;
  pattern?: PatternRequest;
  troops?: FactionTroopRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionAssetsInput {
  color: Scalars['String'];
  hero: FactionLeaderInput;
  leaders: FactionLeaderInput[];
  logo: Logo;
  pattern: PatternInput;
  troops: FactionTroopInput[];
}

export interface FactionCreatorRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface FactionInput {
  assets: FactionAssetsInput;
  creator?: FactionCreatorRelation | null;
  description: Scalars['String'];
  name: Scalars['String'];
  rules: FactionRulesInput;
  ruleset?: FactionRulesetRelation | null;
}

export interface FactionLeaderRequest {
  image?: boolean | number;
  name?: boolean | number;
  strength?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionLeaderInput {
  image: Scalars['String'];
  name: Scalars['String'];
  strength: Scalars['String'];
}

export interface FactionPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: FactionRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionRulesRequest {
  advantages?: FactionAdvantageRequest;
  alliance?: FactionAdvantageRequest;
  fate?: FactionAdvantageRequest;
  karama?: FactionAdvantageRequest;
  revivalText?: boolean | number;
  startText?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionRulesInput {
  advantages: FactionAdvantageInput[];
  alliance: FactionAdvantageInput[];
  fate: FactionAdvantageInput[];
  karama: FactionAdvantageInput[];
  revivalText: Scalars['String'];
  startText: Scalars['String'];
}

export interface FactionRulesetRelation {
  connect?: Scalars['ID'] | null;
  create?: RulesetInput | null;
}

export interface FactionTroopRequest {
  back?: FactionTroopSideRequest;
  front?: FactionTroopSideRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionTroopInput {
  back?: FactionTroopSideInput | null;
  front: FactionTroopSideInput;
}

export interface FactionTroopSideRequest {
  description?: boolean | number;
  modifiers?: FactionTroopSideModifiersRequest;
  name?: boolean | number;
  variant?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionTroopSideInput {
  description?: Scalars['String'] | null;
  modifiers: FactionTroopSideModifiersInput;
  name?: Scalars['String'] | null;
  variant: Troop;
}

export interface FactionTroopSideModifiersRequest {
  star?: boolean | number;
  stroked?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface FactionTroopSideModifiersInput {
  star: FactionTroopSideStar;
  stroked: Scalars['Boolean'];
}

export interface MutationRequest {
  createFAQ?: [{ data: FAQInput }, FAQRequest];
  createFaction?: [{ data: FactionInput }, FactionRequest];
  createPlay?: [{ data: PlayInput }, PlayRequest];
  createPlayer?: [{ data: PlayerInput }, PlayerRequest];
  createRenderable?: [{ data: RenderableInput }, RenderableRequest];
  createRuleset?: [{ data: RulesetInput }, RulesetRequest];
  createUser?: [{ data: UserInput }, UserRequest];
  deleteFAQ?: [{ id: Scalars['ID'] }, FAQRequest];
  deleteFaction?: [{ id: Scalars['ID'] }, FactionRequest];
  deletePlay?: [{ id: Scalars['ID'] }, PlayRequest];
  deletePlayer?: [{ id: Scalars['ID'] }, PlayerRequest];
  deleteRenderable?: [{ id: Scalars['ID'] }, RenderableRequest];
  deleteRuleset?: [{ id: Scalars['ID'] }, RulesetRequest];
  deleteUser?: [{ id: Scalars['ID'] }, UserRequest];
  partialUpdateFAQ?: [
    { data: PartialUpdateFAQInput; id: Scalars['ID'] },
    FAQRequest
  ];
  partialUpdateFaction?: [
    { data: PartialUpdateFactionInput; id: Scalars['ID'] },
    FactionRequest
  ];
  partialUpdatePlay?: [
    { data: PartialUpdatePlayInput; id: Scalars['ID'] },
    PlayRequest
  ];
  partialUpdatePlayer?: [
    { data: PartialUpdatePlayerInput; id: Scalars['ID'] },
    PlayerRequest
  ];
  partialUpdateRenderable?: [
    { data: PartialUpdateRenderableInput; id: Scalars['ID'] },
    RenderableRequest
  ];
  partialUpdateRuleset?: [
    { data: PartialUpdateRulesetInput; id: Scalars['ID'] },
    RulesetRequest
  ];
  partialUpdateUser?: [
    { data: PartialUpdateUserInput; id: Scalars['ID'] },
    UserRequest
  ];
  updateFAQ?: [{ data: FAQInput; id: Scalars['ID'] }, FAQRequest];
  updateFaction?: [{ data: FactionInput; id: Scalars['ID'] }, FactionRequest];
  updatePlay?: [{ data: PlayInput; id: Scalars['ID'] }, PlayRequest];
  updatePlayer?: [{ data: PlayerInput; id: Scalars['ID'] }, PlayerRequest];
  updateRenderable?: [
    { data: RenderableInput; id: Scalars['ID'] },
    RenderableRequest
  ];
  updateRuleset?: [{ data: RulesetInput; id: Scalars['ID'] }, RulesetRequest];
  updateUser?: [{ data: UserInput; id: Scalars['ID'] }, UserRequest];
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PartialUpdateEndingInput {
  method?: Scalars['String'] | null;
  timestamp?: Scalars['Int'] | null;
  turn?: Scalars['Int'] | null;
}

export interface PartialUpdateFAQInput {
  answer?: Scalars['String'] | null;
  author?: FAQAuthorRelation | null;
  question?: Scalars['String'] | null;
  ruleset?: FAQRulesetRelation | null;
}

export interface PartialUpdateFactionAdvantageInput {
  advanced?: Scalars['Boolean'] | null;
  body?: Scalars['String'] | null;
  karamaEffect?: Scalars['String'] | null;
  title?: Scalars['String'] | null;
}

export interface PartialUpdateFactionAssetsInput {
  color?: Scalars['String'] | null;
  hero?: PartialUpdateFactionLeaderInput | null;
  leaders?: PartialUpdateFactionLeaderInput[] | null;
  logo?: Logo | null;
  pattern?: PartialUpdatePatternInput | null;
  troops?: PartialUpdateFactionTroopInput[] | null;
}

export interface PartialUpdateFactionInput {
  assets?: PartialUpdateFactionAssetsInput | null;
  creator?: FactionCreatorRelation | null;
  description?: Scalars['String'] | null;
  name?: Scalars['String'] | null;
  rules?: PartialUpdateFactionRulesInput | null;
  ruleset?: FactionRulesetRelation | null;
}

export interface PartialUpdateFactionLeaderInput {
  image?: Scalars['String'] | null;
  name?: Scalars['String'] | null;
  strength?: Scalars['String'] | null;
}

export interface PartialUpdateFactionRulesInput {
  advantages?: PartialUpdateFactionAdvantageInput[] | null;
  alliance?: PartialUpdateFactionAdvantageInput[] | null;
  fate?: PartialUpdateFactionAdvantageInput[] | null;
  karama?: PartialUpdateFactionAdvantageInput[] | null;
  revivalText?: Scalars['String'] | null;
  startText?: Scalars['String'] | null;
}

export interface PartialUpdateFactionTroopInput {
  back?: PartialUpdateFactionTroopSideInput | null;
  front?: PartialUpdateFactionTroopSideInput | null;
}

export interface PartialUpdateFactionTroopSideInput {
  description?: Scalars['String'] | null;
  modifiers?: PartialUpdateFactionTroopSideModifiersInput | null;
  name?: Scalars['String'] | null;
  variant?: Troop | null;
}

export interface PartialUpdateFactionTroopSideModifiersInput {
  star?: FactionTroopSideStar | null;
  stroked?: Scalars['Boolean'] | null;
}

export interface PartialUpdatePatternInput {
  azimuth?: Scalars['Int'] | null;
  elevation?: Scalars['Int'] | null;
  octaves?: Scalars['Int'] | null;
  seed?: Scalars['Int'] | null;
  surface?: Scalars['Int'] | null;
}

export interface PartialUpdatePlayInput {
  ending?: PartialUpdateEndingInput | null;
  organizer?: PlayOrganizerRelation | null;
  players?: PlayPlayersRelation | null;
  ruleset?: PlayRulesetRelation | null;
  timestamp?: Scalars['Int'] | null;
}

export interface PartialUpdatePlayerInput {
  faction?: PlayerFactionRelation | null;
  play?: PlayerPlayRelation | null;
  user?: PlayerUserRelation | null;
  won?: Scalars['Boolean'] | null;
}

export interface PartialUpdateRenderableInput {
  data?: Scalars['String'] | null;
  owner?: RenderableOwnerRelation | null;
  type?: RenderableType | null;
  url?: Scalars['String'] | null;
}

export interface PartialUpdateRulesetInput {
  assets?: Scalars['String'][] | null;
  content?: Scalars['String'][] | null;
  creator?: RulesetCreatorRelation | null;
  description?: Scalars['String'] | null;
  faqs?: RulesetFaqsRelation | null;
  icon?: Scalars['String'] | null;
  name?: Scalars['String'] | null;
}

export interface PartialUpdateUserInput {
  avatar?: Scalars['String'] | null;
  discord?: Scalars['String'] | null;
  factions?: UserFactionsRelation | null;
  name?: Scalars['String'] | null;
  organized?: UserOrganizedRelation | null;
  plays?: UserPlaysRelation | null;
  questions?: UserQuestionsRelation | null;
  renderables?: UserRenderablesRelation | null;
  rulesets?: UserRulesetsRelation | null;
}

export interface PatternRequest {
  azimuth?: boolean | number;
  elevation?: boolean | number;
  octaves?: boolean | number;
  seed?: boolean | number;
  surface?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PatternInput {
  azimuth: Scalars['Int'];
  elevation: Scalars['Int'];
  octaves: Scalars['Int'];
  seed: Scalars['Int'];
  surface: Scalars['Int'];
}

export interface PlayRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  ending?: EndingRequest;
  organizer?: UserRequest;
  players?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        PlayerPageRequest
      ]
    | PlayerPageRequest;
  ruleset?: RulesetRequest;
  timestamp?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PlayInput {
  ending: EndingInput;
  organizer?: PlayOrganizerRelation | null;
  players?: PlayPlayersRelation | null;
  ruleset?: PlayRulesetRelation | null;
  timestamp: Scalars['Int'];
}

export interface PlayOrganizerRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface PlayPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: PlayRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PlayPlayersRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (PlayerInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface PlayRulesetRelation {
  connect?: Scalars['ID'] | null;
  create?: RulesetInput | null;
}

export interface PlayerRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  faction?: FactionRequest;
  play?: PlayRequest;
  user?: UserRequest;
  won?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PlayerFactionRelation {
  connect?: Scalars['ID'] | null;
  create?: FactionInput | null;
}

export interface PlayerInput {
  faction?: PlayerFactionRelation | null;
  play?: PlayerPlayRelation | null;
  user?: PlayerUserRelation | null;
  won: Scalars['Boolean'];
}

export interface PlayerPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: PlayerRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface PlayerPlayRelation {
  connect?: Scalars['ID'] | null;
  create?: PlayInput | null;
  disconnect?: Scalars['Boolean'] | null;
}

export interface PlayerUserRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface QueryRequest {
  authenticate?: [{ data: UserInput }, UserRequest];
  factions?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        FactionPageRequest
      ]
    | FactionPageRequest;
  faqs?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        FAQPageRequest
      ]
    | FAQPageRequest;
  findFAQByID?: [{ id: Scalars['ID'] }, FAQRequest];
  findFactionByID?: [{ id: Scalars['ID'] }, FactionRequest];
  findPlayByID?: [{ id: Scalars['ID'] }, PlayRequest];
  findPlayerByID?: [{ id: Scalars['ID'] }, PlayerRequest];
  findRenderableByID?: [{ id: Scalars['ID'] }, RenderableRequest];
  findRulesetByID?: [{ id: Scalars['ID'] }, RulesetRequest];
  findUserByID?: [{ id: Scalars['ID'] }, UserRequest];
  plays?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        PlayPageRequest
      ]
    | PlayPageRequest;
  renderablesByType?: [
    {
      _cursor?: Scalars['String'] | null;
      _size?: Scalars['Int'] | null;
      type: RenderableType;
    },
    RenderablePageRequest
  ];
  rulesets?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        RulesetPageRequest
      ]
    | RulesetPageRequest;
  users?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        UserPageRequest
      ]
    | UserPageRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface RenderableRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  data?: boolean | number;
  owner?: UserRequest;
  type?: boolean | number;
  url?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface RenderableInput {
  data: Scalars['String'];
  owner?: RenderableOwnerRelation | null;
  type: RenderableType;
  url: Scalars['String'];
}

export interface RenderableOwnerRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface RenderablePageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: RenderableRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface RulesetRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  assets?: boolean | number;
  content?: boolean | number;
  creator?: UserRequest;
  description?: boolean | number;
  faqs?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        FAQPageRequest
      ]
    | FAQPageRequest;
  icon?: boolean | number;
  name?: boolean | number;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface RulesetCreatorRelation {
  connect?: Scalars['ID'] | null;
  create?: UserInput | null;
}

export interface RulesetFaqsRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (FAQInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface RulesetInput {
  assets: Scalars['String'][];
  content: Scalars['String'][];
  creator?: RulesetCreatorRelation | null;
  description: Scalars['String'];
  faqs?: RulesetFaqsRelation | null;
  icon: Scalars['String'];
  name: Scalars['String'];
}

export interface RulesetPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: RulesetRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface UserRequest {
  _id?: boolean | number;
  _ts?: boolean | number;
  avatar?: boolean | number;
  discord?: boolean | number;
  factions?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        FactionPageRequest
      ]
    | FactionPageRequest;
  name?: boolean | number;
  organized?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        PlayPageRequest
      ]
    | PlayPageRequest;
  plays?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        PlayerPageRequest
      ]
    | PlayerPageRequest;
  questions?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        FAQPageRequest
      ]
    | FAQPageRequest;
  renderables?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        RenderablePageRequest
      ]
    | RenderablePageRequest;
  rulesets?:
    | [
        { _cursor?: Scalars['String'] | null; _size?: Scalars['Int'] | null },
        RulesetPageRequest
      ]
    | RulesetPageRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface UserFactionsRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (FactionInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface UserInput {
  avatar: Scalars['String'];
  discord: Scalars['String'];
  name: Scalars['String'];
}

export interface UserOrganizedRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (PlayInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface UserPageRequest {
  after?: boolean | number;
  before?: boolean | number;
  data?: UserRequest;
  __typename?: boolean | number;
  __scalar?: boolean | number;
}

export interface UserPlaysRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (PlayerInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface UserQuestionsRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (FAQInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface UserRenderablesRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (RenderableInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

export interface UserRulesetsRelation {
  connect?: (Scalars['ID'] | null)[] | null;
  create?: (RulesetInput | null)[] | null;
  disconnect?: (Scalars['ID'] | null)[] | null;
}

const Ending_possibleTypes: string[] = ['Ending'];
export const isEnding = (obj?: { __typename?: any } | null): obj is Ending => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isEnding"');
  return Ending_possibleTypes.includes(obj.__typename);
};

const FAQ_possibleTypes: string[] = ['FAQ'];
export const isFAQ = (obj?: { __typename?: any } | null): obj is FAQ => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFAQ"');
  return FAQ_possibleTypes.includes(obj.__typename);
};

const FAQPage_possibleTypes: string[] = ['FAQPage'];
export const isFAQPage = (
  obj?: { __typename?: any } | null
): obj is FAQPage => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFAQPage"');
  return FAQPage_possibleTypes.includes(obj.__typename);
};

const Faction_possibleTypes: string[] = ['Faction'];
export const isFaction = (
  obj?: { __typename?: any } | null
): obj is Faction => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isFaction"');
  return Faction_possibleTypes.includes(obj.__typename);
};

const FactionAdvantage_possibleTypes: string[] = ['FactionAdvantage'];
export const isFactionAdvantage = (
  obj?: { __typename?: any } | null
): obj is FactionAdvantage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionAdvantage"');
  return FactionAdvantage_possibleTypes.includes(obj.__typename);
};

const FactionAssets_possibleTypes: string[] = ['FactionAssets'];
export const isFactionAssets = (
  obj?: { __typename?: any } | null
): obj is FactionAssets => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionAssets"');
  return FactionAssets_possibleTypes.includes(obj.__typename);
};

const FactionLeader_possibleTypes: string[] = ['FactionLeader'];
export const isFactionLeader = (
  obj?: { __typename?: any } | null
): obj is FactionLeader => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionLeader"');
  return FactionLeader_possibleTypes.includes(obj.__typename);
};

const FactionPage_possibleTypes: string[] = ['FactionPage'];
export const isFactionPage = (
  obj?: { __typename?: any } | null
): obj is FactionPage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionPage"');
  return FactionPage_possibleTypes.includes(obj.__typename);
};

const FactionRules_possibleTypes: string[] = ['FactionRules'];
export const isFactionRules = (
  obj?: { __typename?: any } | null
): obj is FactionRules => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionRules"');
  return FactionRules_possibleTypes.includes(obj.__typename);
};

const FactionTroop_possibleTypes: string[] = ['FactionTroop'];
export const isFactionTroop = (
  obj?: { __typename?: any } | null
): obj is FactionTroop => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionTroop"');
  return FactionTroop_possibleTypes.includes(obj.__typename);
};

const FactionTroopSide_possibleTypes: string[] = ['FactionTroopSide'];
export const isFactionTroopSide = (
  obj?: { __typename?: any } | null
): obj is FactionTroopSide => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionTroopSide"');
  return FactionTroopSide_possibleTypes.includes(obj.__typename);
};

const FactionTroopSideModifiers_possibleTypes: string[] = [
  'FactionTroopSideModifiers',
];
export const isFactionTroopSideModifiers = (
  obj?: { __typename?: any } | null
): obj is FactionTroopSideModifiers => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isFactionTroopSideModifiers"');
  return FactionTroopSideModifiers_possibleTypes.includes(obj.__typename);
};

const Mutation_possibleTypes: string[] = ['Mutation'];
export const isMutation = (
  obj?: { __typename?: any } | null
): obj is Mutation => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isMutation"');
  return Mutation_possibleTypes.includes(obj.__typename);
};

const Pattern_possibleTypes: string[] = ['Pattern'];
export const isPattern = (
  obj?: { __typename?: any } | null
): obj is Pattern => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPattern"');
  return Pattern_possibleTypes.includes(obj.__typename);
};

const Play_possibleTypes: string[] = ['Play'];
export const isPlay = (obj?: { __typename?: any } | null): obj is Play => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPlay"');
  return Play_possibleTypes.includes(obj.__typename);
};

const PlayPage_possibleTypes: string[] = ['PlayPage'];
export const isPlayPage = (
  obj?: { __typename?: any } | null
): obj is PlayPage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlayPage"');
  return PlayPage_possibleTypes.includes(obj.__typename);
};

const Player_possibleTypes: string[] = ['Player'];
export const isPlayer = (obj?: { __typename?: any } | null): obj is Player => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isPlayer"');
  return Player_possibleTypes.includes(obj.__typename);
};

const PlayerPage_possibleTypes: string[] = ['PlayerPage'];
export const isPlayerPage = (
  obj?: { __typename?: any } | null
): obj is PlayerPage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isPlayerPage"');
  return PlayerPage_possibleTypes.includes(obj.__typename);
};

const Query_possibleTypes: string[] = ['Query'];
export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"');
  return Query_possibleTypes.includes(obj.__typename);
};

const Renderable_possibleTypes: string[] = ['Renderable'];
export const isRenderable = (
  obj?: { __typename?: any } | null
): obj is Renderable => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isRenderable"');
  return Renderable_possibleTypes.includes(obj.__typename);
};

const RenderablePage_possibleTypes: string[] = ['RenderablePage'];
export const isRenderablePage = (
  obj?: { __typename?: any } | null
): obj is RenderablePage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isRenderablePage"');
  return RenderablePage_possibleTypes.includes(obj.__typename);
};

const Ruleset_possibleTypes: string[] = ['Ruleset'];
export const isRuleset = (
  obj?: { __typename?: any } | null
): obj is Ruleset => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isRuleset"');
  return Ruleset_possibleTypes.includes(obj.__typename);
};

const RulesetPage_possibleTypes: string[] = ['RulesetPage'];
export const isRulesetPage = (
  obj?: { __typename?: any } | null
): obj is RulesetPage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isRulesetPage"');
  return RulesetPage_possibleTypes.includes(obj.__typename);
};

const User_possibleTypes: string[] = ['User'];
export const isUser = (obj?: { __typename?: any } | null): obj is User => {
  if (!obj?.__typename) throw new Error('__typename is missing in "isUser"');
  return User_possibleTypes.includes(obj.__typename);
};

const UserPage_possibleTypes: string[] = ['UserPage'];
export const isUserPage = (
  obj?: { __typename?: any } | null
): obj is UserPage => {
  if (!obj?.__typename)
    throw new Error('__typename is missing in "isUserPage"');
  return UserPage_possibleTypes.includes(obj.__typename);
};

export interface EndingPromiseChain {
  method: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  timestamp: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
  turn: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
}

export interface EndingObservableChain {
  method: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  timestamp: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
  turn: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
}

export interface FAQPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  answer: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  author: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  question: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  ruleset: RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Promise<FieldsSelection<Ruleset, R>>;
  };
}

export interface FAQObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  answer: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  author: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  question: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  ruleset: RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Observable<FieldsSelection<Ruleset, R>>;
  };
}

export interface FAQPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: (FieldsSelection<FAQ, R> | undefined)[]
    ) => Promise<(FieldsSelection<FAQ, R> | undefined)[]>;
  };
}

export interface FAQPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: (FieldsSelection<FAQ, R> | undefined)[]
    ) => Observable<(FieldsSelection<FAQ, R> | undefined)[]>;
  };
}

export interface FactionPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  assets: FactionAssetsPromiseChain & {
    get: <R extends FactionAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAssets, R>
    ) => Promise<FieldsSelection<FactionAssets, R>>;
  };
  creator: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  rules: FactionRulesPromiseChain & {
    get: <R extends FactionRulesRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionRules, R>
    ) => Promise<FieldsSelection<FactionRules, R>>;
  };
  ruleset: RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Promise<FieldsSelection<Ruleset, R>>;
  };
}

export interface FactionObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  assets: FactionAssetsObservableChain & {
    get: <R extends FactionAssetsRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAssets, R>
    ) => Observable<FieldsSelection<FactionAssets, R>>;
  };
  creator: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  rules: FactionRulesObservableChain & {
    get: <R extends FactionRulesRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionRules, R>
    ) => Observable<FieldsSelection<FactionRules, R>>;
  };
  ruleset: RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Observable<FieldsSelection<Ruleset, R>>;
  };
}

export interface FactionAdvantagePromiseChain {
  advanced: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean'] | undefined
    ) => Promise<Scalars['Boolean'] | undefined>;
  };
  body: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  karamaEffect: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  title: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
}

export interface FactionAdvantageObservableChain {
  advanced: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean'] | undefined
    ) => Observable<Scalars['Boolean'] | undefined>;
  };
  body: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  karamaEffect: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  title: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
}

export interface FactionAssetsPromiseChain {
  color: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  hero: FactionLeaderPromiseChain & {
    get: <R extends FactionLeaderRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionLeader, R>
    ) => Promise<FieldsSelection<FactionLeader, R>>;
  };
  leaders: {
    get: <R extends FactionLeaderRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionLeader, R>[]
    ) => Promise<FieldsSelection<FactionLeader, R>[]>;
  };
  logo: {
    get: (request?: boolean | number, defaultValue?: Logo) => Promise<Logo>;
  };
  pattern: PatternPromiseChain & {
    get: <R extends PatternRequest>(
      request: R,
      defaultValue?: FieldsSelection<Pattern, R>
    ) => Promise<FieldsSelection<Pattern, R>>;
  };
  troops: {
    get: <R extends FactionTroopRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroop, R>[]
    ) => Promise<FieldsSelection<FactionTroop, R>[]>;
  };
}

export interface FactionAssetsObservableChain {
  color: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  hero: FactionLeaderObservableChain & {
    get: <R extends FactionLeaderRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionLeader, R>
    ) => Observable<FieldsSelection<FactionLeader, R>>;
  };
  leaders: {
    get: <R extends FactionLeaderRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionLeader, R>[]
    ) => Observable<FieldsSelection<FactionLeader, R>[]>;
  };
  logo: {
    get: (request?: boolean | number, defaultValue?: Logo) => Observable<Logo>;
  };
  pattern: PatternObservableChain & {
    get: <R extends PatternRequest>(
      request: R,
      defaultValue?: FieldsSelection<Pattern, R>
    ) => Observable<FieldsSelection<Pattern, R>>;
  };
  troops: {
    get: <R extends FactionTroopRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroop, R>[]
    ) => Observable<FieldsSelection<FactionTroop, R>[]>;
  };
}

export interface FactionLeaderPromiseChain {
  image: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  strength: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
}

export interface FactionLeaderObservableChain {
  image: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  strength: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
}

export interface FactionPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Faction, R> | undefined)[]
    ) => Promise<(FieldsSelection<Faction, R> | undefined)[]>;
  };
}

export interface FactionPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Faction, R> | undefined)[]
    ) => Observable<(FieldsSelection<Faction, R> | undefined)[]>;
  };
}

export interface FactionRulesPromiseChain {
  advantages: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Promise<FieldsSelection<FactionAdvantage, R>[]>;
  };
  alliance: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Promise<FieldsSelection<FactionAdvantage, R>[]>;
  };
  fate: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Promise<FieldsSelection<FactionAdvantage, R>[]>;
  };
  karama: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Promise<FieldsSelection<FactionAdvantage, R>[]>;
  };
  revivalText: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  startText: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
}

export interface FactionRulesObservableChain {
  advantages: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Observable<FieldsSelection<FactionAdvantage, R>[]>;
  };
  alliance: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Observable<FieldsSelection<FactionAdvantage, R>[]>;
  };
  fate: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Observable<FieldsSelection<FactionAdvantage, R>[]>;
  };
  karama: {
    get: <R extends FactionAdvantageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionAdvantage, R>[]
    ) => Observable<FieldsSelection<FactionAdvantage, R>[]>;
  };
  revivalText: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  startText: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
}

export interface FactionTroopPromiseChain {
  back: FactionTroopSidePromiseChain & {
    get: <R extends FactionTroopSideRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSide, R> | undefined
    ) => Promise<FieldsSelection<FactionTroopSide, R> | undefined>;
  };
  front: FactionTroopSidePromiseChain & {
    get: <R extends FactionTroopSideRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSide, R>
    ) => Promise<FieldsSelection<FactionTroopSide, R>>;
  };
}

export interface FactionTroopObservableChain {
  back: FactionTroopSideObservableChain & {
    get: <R extends FactionTroopSideRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSide, R> | undefined
    ) => Observable<FieldsSelection<FactionTroopSide, R> | undefined>;
  };
  front: FactionTroopSideObservableChain & {
    get: <R extends FactionTroopSideRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSide, R>
    ) => Observable<FieldsSelection<FactionTroopSide, R>>;
  };
}

export interface FactionTroopSidePromiseChain {
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  modifiers: FactionTroopSideModifiersPromiseChain & {
    get: <R extends FactionTroopSideModifiersRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSideModifiers, R>
    ) => Promise<FieldsSelection<FactionTroopSideModifiers, R>>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  variant: {
    get: (request?: boolean | number, defaultValue?: Troop) => Promise<Troop>;
  };
}

export interface FactionTroopSideObservableChain {
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  modifiers: FactionTroopSideModifiersObservableChain & {
    get: <R extends FactionTroopSideModifiersRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionTroopSideModifiers, R>
    ) => Observable<FieldsSelection<FactionTroopSideModifiers, R>>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  variant: {
    get: (
      request?: boolean | number,
      defaultValue?: Troop
    ) => Observable<Troop>;
  };
}

export interface FactionTroopSideModifiersPromiseChain {
  star: {
    get: (
      request?: boolean | number,
      defaultValue?: FactionTroopSideStar
    ) => Promise<FactionTroopSideStar>;
  };
  stroked: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean']
    ) => Promise<Scalars['Boolean']>;
  };
}

export interface FactionTroopSideModifiersObservableChain {
  star: {
    get: (
      request?: boolean | number,
      defaultValue?: FactionTroopSideStar
    ) => Observable<FactionTroopSideStar>;
  };
  stroked: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean']
    ) => Observable<Scalars['Boolean']>;
  };
}

export interface MutationPromiseChain {
  createFAQ: (args: { data: FAQInput }) => FAQPromiseChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R>
    ) => Promise<FieldsSelection<FAQ, R>>;
  };
  createFaction: (args: { data: FactionInput }) => FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R>
    ) => Promise<FieldsSelection<Faction, R>>;
  };
  createPlay: (args: { data: PlayInput }) => PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R>
    ) => Promise<FieldsSelection<Play, R>>;
  };
  createPlayer: (args: { data: PlayerInput }) => PlayerPromiseChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R>
    ) => Promise<FieldsSelection<Player, R>>;
  };
  createRenderable: (args: {
    data: RenderableInput;
  }) => RenderablePromiseChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R>
    ) => Promise<FieldsSelection<Renderable, R>>;
  };
  createRuleset: (args: { data: RulesetInput }) => RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Promise<FieldsSelection<Ruleset, R>>;
  };
  createUser: (args: { data: UserInput }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  deleteFAQ: (args: { id: Scalars['ID'] }) => FAQPromiseChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Promise<FieldsSelection<FAQ, R> | undefined>;
  };
  deleteFaction: (args: { id: Scalars['ID'] }) => FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Promise<FieldsSelection<Faction, R> | undefined>;
  };
  deletePlay: (args: { id: Scalars['ID'] }) => PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Promise<FieldsSelection<Play, R> | undefined>;
  };
  deletePlayer: (args: { id: Scalars['ID'] }) => PlayerPromiseChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Promise<FieldsSelection<Player, R> | undefined>;
  };
  deleteRenderable: (args: { id: Scalars['ID'] }) => RenderablePromiseChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Promise<FieldsSelection<Renderable, R> | undefined>;
  };
  deleteRuleset: (args: { id: Scalars['ID'] }) => RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Promise<FieldsSelection<Ruleset, R> | undefined>;
  };
  deleteUser: (args: { id: Scalars['ID'] }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
  partialUpdateFAQ: (args: {
    data: PartialUpdateFAQInput;
    id: Scalars['ID'];
  }) => FAQPromiseChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Promise<FieldsSelection<FAQ, R> | undefined>;
  };
  partialUpdateFaction: (args: {
    data: PartialUpdateFactionInput;
    id: Scalars['ID'];
  }) => FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Promise<FieldsSelection<Faction, R> | undefined>;
  };
  partialUpdatePlay: (args: {
    data: PartialUpdatePlayInput;
    id: Scalars['ID'];
  }) => PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Promise<FieldsSelection<Play, R> | undefined>;
  };
  partialUpdatePlayer: (args: {
    data: PartialUpdatePlayerInput;
    id: Scalars['ID'];
  }) => PlayerPromiseChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Promise<FieldsSelection<Player, R> | undefined>;
  };
  partialUpdateRenderable: (args: {
    data: PartialUpdateRenderableInput;
    id: Scalars['ID'];
  }) => RenderablePromiseChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Promise<FieldsSelection<Renderable, R> | undefined>;
  };
  partialUpdateRuleset: (args: {
    data: PartialUpdateRulesetInput;
    id: Scalars['ID'];
  }) => RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Promise<FieldsSelection<Ruleset, R> | undefined>;
  };
  partialUpdateUser: (args: {
    data: PartialUpdateUserInput;
    id: Scalars['ID'];
  }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
  updateFAQ: (args: {
    data: FAQInput;
    id: Scalars['ID'];
  }) => FAQPromiseChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Promise<FieldsSelection<FAQ, R> | undefined>;
  };
  updateFaction: (args: {
    data: FactionInput;
    id: Scalars['ID'];
  }) => FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Promise<FieldsSelection<Faction, R> | undefined>;
  };
  updatePlay: (args: {
    data: PlayInput;
    id: Scalars['ID'];
  }) => PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Promise<FieldsSelection<Play, R> | undefined>;
  };
  updatePlayer: (args: {
    data: PlayerInput;
    id: Scalars['ID'];
  }) => PlayerPromiseChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Promise<FieldsSelection<Player, R> | undefined>;
  };
  updateRenderable: (args: {
    data: RenderableInput;
    id: Scalars['ID'];
  }) => RenderablePromiseChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Promise<FieldsSelection<Renderable, R> | undefined>;
  };
  updateRuleset: (args: {
    data: RulesetInput;
    id: Scalars['ID'];
  }) => RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Promise<FieldsSelection<Ruleset, R> | undefined>;
  };
  updateUser: (args: {
    data: UserInput;
    id: Scalars['ID'];
  }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
}

export interface MutationObservableChain {
  createFAQ: (args: { data: FAQInput }) => FAQObservableChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R>
    ) => Observable<FieldsSelection<FAQ, R>>;
  };
  createFaction: (args: { data: FactionInput }) => FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R>
    ) => Observable<FieldsSelection<Faction, R>>;
  };
  createPlay: (args: { data: PlayInput }) => PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R>
    ) => Observable<FieldsSelection<Play, R>>;
  };
  createPlayer: (args: { data: PlayerInput }) => PlayerObservableChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R>
    ) => Observable<FieldsSelection<Player, R>>;
  };
  createRenderable: (args: {
    data: RenderableInput;
  }) => RenderableObservableChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R>
    ) => Observable<FieldsSelection<Renderable, R>>;
  };
  createRuleset: (args: { data: RulesetInput }) => RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Observable<FieldsSelection<Ruleset, R>>;
  };
  createUser: (args: { data: UserInput }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  deleteFAQ: (args: { id: Scalars['ID'] }) => FAQObservableChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Observable<FieldsSelection<FAQ, R> | undefined>;
  };
  deleteFaction: (args: { id: Scalars['ID'] }) => FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Observable<FieldsSelection<Faction, R> | undefined>;
  };
  deletePlay: (args: { id: Scalars['ID'] }) => PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Observable<FieldsSelection<Play, R> | undefined>;
  };
  deletePlayer: (args: { id: Scalars['ID'] }) => PlayerObservableChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Observable<FieldsSelection<Player, R> | undefined>;
  };
  deleteRenderable: (args: {
    id: Scalars['ID'];
  }) => RenderableObservableChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Observable<FieldsSelection<Renderable, R> | undefined>;
  };
  deleteRuleset: (args: { id: Scalars['ID'] }) => RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Observable<FieldsSelection<Ruleset, R> | undefined>;
  };
  deleteUser: (args: { id: Scalars['ID'] }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
  partialUpdateFAQ: (args: {
    data: PartialUpdateFAQInput;
    id: Scalars['ID'];
  }) => FAQObservableChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Observable<FieldsSelection<FAQ, R> | undefined>;
  };
  partialUpdateFaction: (args: {
    data: PartialUpdateFactionInput;
    id: Scalars['ID'];
  }) => FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Observable<FieldsSelection<Faction, R> | undefined>;
  };
  partialUpdatePlay: (args: {
    data: PartialUpdatePlayInput;
    id: Scalars['ID'];
  }) => PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Observable<FieldsSelection<Play, R> | undefined>;
  };
  partialUpdatePlayer: (args: {
    data: PartialUpdatePlayerInput;
    id: Scalars['ID'];
  }) => PlayerObservableChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Observable<FieldsSelection<Player, R> | undefined>;
  };
  partialUpdateRenderable: (args: {
    data: PartialUpdateRenderableInput;
    id: Scalars['ID'];
  }) => RenderableObservableChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Observable<FieldsSelection<Renderable, R> | undefined>;
  };
  partialUpdateRuleset: (args: {
    data: PartialUpdateRulesetInput;
    id: Scalars['ID'];
  }) => RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Observable<FieldsSelection<Ruleset, R> | undefined>;
  };
  partialUpdateUser: (args: {
    data: PartialUpdateUserInput;
    id: Scalars['ID'];
  }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
  updateFAQ: (args: {
    data: FAQInput;
    id: Scalars['ID'];
  }) => FAQObservableChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Observable<FieldsSelection<FAQ, R> | undefined>;
  };
  updateFaction: (args: {
    data: FactionInput;
    id: Scalars['ID'];
  }) => FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Observable<FieldsSelection<Faction, R> | undefined>;
  };
  updatePlay: (args: {
    data: PlayInput;
    id: Scalars['ID'];
  }) => PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Observable<FieldsSelection<Play, R> | undefined>;
  };
  updatePlayer: (args: {
    data: PlayerInput;
    id: Scalars['ID'];
  }) => PlayerObservableChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Observable<FieldsSelection<Player, R> | undefined>;
  };
  updateRenderable: (args: {
    data: RenderableInput;
    id: Scalars['ID'];
  }) => RenderableObservableChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Observable<FieldsSelection<Renderable, R> | undefined>;
  };
  updateRuleset: (args: {
    data: RulesetInput;
    id: Scalars['ID'];
  }) => RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Observable<FieldsSelection<Ruleset, R> | undefined>;
  };
  updateUser: (args: {
    data: UserInput;
    id: Scalars['ID'];
  }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
}

export interface PatternPromiseChain {
  azimuth: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
  elevation: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
  octaves: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
  seed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
  surface: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
}

export interface PatternObservableChain {
  azimuth: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
  elevation: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
  octaves: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
  seed: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
  surface: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
}

export interface PlayPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  ending: EndingPromiseChain & {
    get: <R extends EndingRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ending, R>
    ) => Promise<FieldsSelection<Ending, R>>;
  };
  organizer: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  players: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayerPagePromiseChain & {
    get: <R extends PlayerPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayerPage, R>
    ) => Promise<FieldsSelection<PlayerPage, R>>;
  }) &
    (PlayerPagePromiseChain & {
      get: <R extends PlayerPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayerPage, R>
      ) => Promise<FieldsSelection<PlayerPage, R>>;
    });
  ruleset: RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Promise<FieldsSelection<Ruleset, R>>;
  };
  timestamp: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Promise<Scalars['Int']>;
  };
}

export interface PlayObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  ending: EndingObservableChain & {
    get: <R extends EndingRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ending, R>
    ) => Observable<FieldsSelection<Ending, R>>;
  };
  organizer: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  players: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayerPageObservableChain & {
    get: <R extends PlayerPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayerPage, R>
    ) => Observable<FieldsSelection<PlayerPage, R>>;
  }) &
    (PlayerPageObservableChain & {
      get: <R extends PlayerPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayerPage, R>
      ) => Observable<FieldsSelection<PlayerPage, R>>;
    });
  ruleset: RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R>
    ) => Observable<FieldsSelection<Ruleset, R>>;
  };
  timestamp: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Int']
    ) => Observable<Scalars['Int']>;
  };
}

export interface PlayPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Play, R> | undefined)[]
    ) => Promise<(FieldsSelection<Play, R> | undefined)[]>;
  };
}

export interface PlayPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Play, R> | undefined)[]
    ) => Observable<(FieldsSelection<Play, R> | undefined)[]>;
  };
}

export interface PlayerPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  faction: FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R>
    ) => Promise<FieldsSelection<Faction, R>>;
  };
  play: PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Promise<FieldsSelection<Play, R> | undefined>;
  };
  user: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  won: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean']
    ) => Promise<Scalars['Boolean']>;
  };
}

export interface PlayerObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  faction: FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R>
    ) => Observable<FieldsSelection<Faction, R>>;
  };
  play: PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Observable<FieldsSelection<Play, R> | undefined>;
  };
  user: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  won: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Boolean']
    ) => Observable<Scalars['Boolean']>;
  };
}

export interface PlayerPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Player, R> | undefined)[]
    ) => Promise<(FieldsSelection<Player, R> | undefined)[]>;
  };
}

export interface PlayerPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Player, R> | undefined)[]
    ) => Observable<(FieldsSelection<Player, R> | undefined)[]>;
  };
}

export interface QueryPromiseChain {
  authenticate: (args: { data: UserInput }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
  factions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FactionPagePromiseChain & {
    get: <R extends FactionPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionPage, R>
    ) => Promise<FieldsSelection<FactionPage, R>>;
  }) &
    (FactionPagePromiseChain & {
      get: <R extends FactionPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FactionPage, R>
      ) => Promise<FieldsSelection<FactionPage, R>>;
    });
  faqs: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPagePromiseChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Promise<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPagePromiseChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Promise<FieldsSelection<FAQPage, R>>;
    });
  findFAQByID: (args: { id: Scalars['ID'] }) => FAQPromiseChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Promise<FieldsSelection<FAQ, R> | undefined>;
  };
  findFactionByID: (args: { id: Scalars['ID'] }) => FactionPromiseChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Promise<FieldsSelection<Faction, R> | undefined>;
  };
  findPlayByID: (args: { id: Scalars['ID'] }) => PlayPromiseChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Promise<FieldsSelection<Play, R> | undefined>;
  };
  findPlayerByID: (args: { id: Scalars['ID'] }) => PlayerPromiseChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Promise<FieldsSelection<Player, R> | undefined>;
  };
  findRenderableByID: (args: {
    id: Scalars['ID'];
  }) => RenderablePromiseChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Promise<FieldsSelection<Renderable, R> | undefined>;
  };
  findRulesetByID: (args: { id: Scalars['ID'] }) => RulesetPromiseChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Promise<FieldsSelection<Ruleset, R> | undefined>;
  };
  findUserByID: (args: { id: Scalars['ID'] }) => UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Promise<FieldsSelection<User, R> | undefined>;
  };
  plays: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayPagePromiseChain & {
    get: <R extends PlayPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayPage, R>
    ) => Promise<FieldsSelection<PlayPage, R>>;
  }) &
    (PlayPagePromiseChain & {
      get: <R extends PlayPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayPage, R>
      ) => Promise<FieldsSelection<PlayPage, R>>;
    });
  renderablesByType: (args: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
    type: RenderableType;
  }) => RenderablePagePromiseChain & {
    get: <R extends RenderablePageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RenderablePage, R>
    ) => Promise<FieldsSelection<RenderablePage, R>>;
  };
  rulesets: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RulesetPagePromiseChain & {
    get: <R extends RulesetPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RulesetPage, R>
    ) => Promise<FieldsSelection<RulesetPage, R>>;
  }) &
    (RulesetPagePromiseChain & {
      get: <R extends RulesetPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RulesetPage, R>
      ) => Promise<FieldsSelection<RulesetPage, R>>;
    });
  users: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => UserPagePromiseChain & {
    get: <R extends UserPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<UserPage, R>
    ) => Promise<FieldsSelection<UserPage, R>>;
  }) &
    (UserPagePromiseChain & {
      get: <R extends UserPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<UserPage, R>
      ) => Promise<FieldsSelection<UserPage, R>>;
    });
}

export interface QueryObservableChain {
  authenticate: (args: { data: UserInput }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
  factions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FactionPageObservableChain & {
    get: <R extends FactionPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionPage, R>
    ) => Observable<FieldsSelection<FactionPage, R>>;
  }) &
    (FactionPageObservableChain & {
      get: <R extends FactionPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FactionPage, R>
      ) => Observable<FieldsSelection<FactionPage, R>>;
    });
  faqs: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPageObservableChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Observable<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPageObservableChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Observable<FieldsSelection<FAQPage, R>>;
    });
  findFAQByID: (args: { id: Scalars['ID'] }) => FAQObservableChain & {
    get: <R extends FAQRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQ, R> | undefined
    ) => Observable<FieldsSelection<FAQ, R> | undefined>;
  };
  findFactionByID: (args: { id: Scalars['ID'] }) => FactionObservableChain & {
    get: <R extends FactionRequest>(
      request: R,
      defaultValue?: FieldsSelection<Faction, R> | undefined
    ) => Observable<FieldsSelection<Faction, R> | undefined>;
  };
  findPlayByID: (args: { id: Scalars['ID'] }) => PlayObservableChain & {
    get: <R extends PlayRequest>(
      request: R,
      defaultValue?: FieldsSelection<Play, R> | undefined
    ) => Observable<FieldsSelection<Play, R> | undefined>;
  };
  findPlayerByID: (args: { id: Scalars['ID'] }) => PlayerObservableChain & {
    get: <R extends PlayerRequest>(
      request: R,
      defaultValue?: FieldsSelection<Player, R> | undefined
    ) => Observable<FieldsSelection<Player, R> | undefined>;
  };
  findRenderableByID: (args: {
    id: Scalars['ID'];
  }) => RenderableObservableChain & {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: FieldsSelection<Renderable, R> | undefined
    ) => Observable<FieldsSelection<Renderable, R> | undefined>;
  };
  findRulesetByID: (args: { id: Scalars['ID'] }) => RulesetObservableChain & {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: FieldsSelection<Ruleset, R> | undefined
    ) => Observable<FieldsSelection<Ruleset, R> | undefined>;
  };
  findUserByID: (args: { id: Scalars['ID'] }) => UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R> | undefined
    ) => Observable<FieldsSelection<User, R> | undefined>;
  };
  plays: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayPageObservableChain & {
    get: <R extends PlayPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayPage, R>
    ) => Observable<FieldsSelection<PlayPage, R>>;
  }) &
    (PlayPageObservableChain & {
      get: <R extends PlayPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayPage, R>
      ) => Observable<FieldsSelection<PlayPage, R>>;
    });
  renderablesByType: (args: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
    type: RenderableType;
  }) => RenderablePageObservableChain & {
    get: <R extends RenderablePageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RenderablePage, R>
    ) => Observable<FieldsSelection<RenderablePage, R>>;
  };
  rulesets: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RulesetPageObservableChain & {
    get: <R extends RulesetPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RulesetPage, R>
    ) => Observable<FieldsSelection<RulesetPage, R>>;
  }) &
    (RulesetPageObservableChain & {
      get: <R extends RulesetPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RulesetPage, R>
      ) => Observable<FieldsSelection<RulesetPage, R>>;
    });
  users: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => UserPageObservableChain & {
    get: <R extends UserPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<UserPage, R>
    ) => Observable<FieldsSelection<UserPage, R>>;
  }) &
    (UserPageObservableChain & {
      get: <R extends UserPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<UserPage, R>
      ) => Observable<FieldsSelection<UserPage, R>>;
    });
}

export interface RenderablePromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  data: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  owner: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: RenderableType
    ) => Promise<RenderableType>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
}

export interface RenderableObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  data: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  owner: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  type: {
    get: (
      request?: boolean | number,
      defaultValue?: RenderableType
    ) => Observable<RenderableType>;
  };
  url: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
}

export interface RenderablePagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Renderable, R> | undefined)[]
    ) => Promise<(FieldsSelection<Renderable, R> | undefined)[]>;
  };
}

export interface RenderablePageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends RenderableRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Renderable, R> | undefined)[]
    ) => Observable<(FieldsSelection<Renderable, R> | undefined)[]>;
  };
}

export interface RulesetPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  assets: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'][]
    ) => Promise<Scalars['String'][]>;
  };
  content: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'][]
    ) => Promise<Scalars['String'][]>;
  };
  creator: UserPromiseChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Promise<FieldsSelection<User, R>>;
  };
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  faqs: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPagePromiseChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Promise<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPagePromiseChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Promise<FieldsSelection<FAQPage, R>>;
    });
  icon: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
}

export interface RulesetObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  assets: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'][]
    ) => Observable<Scalars['String'][]>;
  };
  content: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'][]
    ) => Observable<Scalars['String'][]>;
  };
  creator: UserObservableChain & {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: FieldsSelection<User, R>
    ) => Observable<FieldsSelection<User, R>>;
  };
  description: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  faqs: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPageObservableChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Observable<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPageObservableChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Observable<FieldsSelection<FAQPage, R>>;
    });
  icon: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
}

export interface RulesetPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Ruleset, R> | undefined)[]
    ) => Promise<(FieldsSelection<Ruleset, R> | undefined)[]>;
  };
}

export interface RulesetPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends RulesetRequest>(
      request: R,
      defaultValue?: (FieldsSelection<Ruleset, R> | undefined)[]
    ) => Observable<(FieldsSelection<Ruleset, R> | undefined)[]>;
  };
}

export interface UserPromiseChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Promise<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Promise<Scalars['Long']>;
  };
  avatar: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  discord: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  factions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FactionPagePromiseChain & {
    get: <R extends FactionPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionPage, R>
    ) => Promise<FieldsSelection<FactionPage, R>>;
  }) &
    (FactionPagePromiseChain & {
      get: <R extends FactionPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FactionPage, R>
      ) => Promise<FieldsSelection<FactionPage, R>>;
    });
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Promise<Scalars['String']>;
  };
  organized: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayPagePromiseChain & {
    get: <R extends PlayPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayPage, R>
    ) => Promise<FieldsSelection<PlayPage, R>>;
  }) &
    (PlayPagePromiseChain & {
      get: <R extends PlayPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayPage, R>
      ) => Promise<FieldsSelection<PlayPage, R>>;
    });
  plays: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayerPagePromiseChain & {
    get: <R extends PlayerPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayerPage, R>
    ) => Promise<FieldsSelection<PlayerPage, R>>;
  }) &
    (PlayerPagePromiseChain & {
      get: <R extends PlayerPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayerPage, R>
      ) => Promise<FieldsSelection<PlayerPage, R>>;
    });
  questions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPagePromiseChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Promise<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPagePromiseChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Promise<FieldsSelection<FAQPage, R>>;
    });
  renderables: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RenderablePagePromiseChain & {
    get: <R extends RenderablePageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RenderablePage, R>
    ) => Promise<FieldsSelection<RenderablePage, R>>;
  }) &
    (RenderablePagePromiseChain & {
      get: <R extends RenderablePageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RenderablePage, R>
      ) => Promise<FieldsSelection<RenderablePage, R>>;
    });
  rulesets: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RulesetPagePromiseChain & {
    get: <R extends RulesetPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RulesetPage, R>
    ) => Promise<FieldsSelection<RulesetPage, R>>;
  }) &
    (RulesetPagePromiseChain & {
      get: <R extends RulesetPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RulesetPage, R>
      ) => Promise<FieldsSelection<RulesetPage, R>>;
    });
}

export interface UserObservableChain {
  _id: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['ID']
    ) => Observable<Scalars['ID']>;
  };
  _ts: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['Long']
    ) => Observable<Scalars['Long']>;
  };
  avatar: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  discord: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  factions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FactionPageObservableChain & {
    get: <R extends FactionPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FactionPage, R>
    ) => Observable<FieldsSelection<FactionPage, R>>;
  }) &
    (FactionPageObservableChain & {
      get: <R extends FactionPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FactionPage, R>
      ) => Observable<FieldsSelection<FactionPage, R>>;
    });
  name: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String']
    ) => Observable<Scalars['String']>;
  };
  organized: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayPageObservableChain & {
    get: <R extends PlayPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayPage, R>
    ) => Observable<FieldsSelection<PlayPage, R>>;
  }) &
    (PlayPageObservableChain & {
      get: <R extends PlayPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayPage, R>
      ) => Observable<FieldsSelection<PlayPage, R>>;
    });
  plays: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => PlayerPageObservableChain & {
    get: <R extends PlayerPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<PlayerPage, R>
    ) => Observable<FieldsSelection<PlayerPage, R>>;
  }) &
    (PlayerPageObservableChain & {
      get: <R extends PlayerPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<PlayerPage, R>
      ) => Observable<FieldsSelection<PlayerPage, R>>;
    });
  questions: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => FAQPageObservableChain & {
    get: <R extends FAQPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<FAQPage, R>
    ) => Observable<FieldsSelection<FAQPage, R>>;
  }) &
    (FAQPageObservableChain & {
      get: <R extends FAQPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<FAQPage, R>
      ) => Observable<FieldsSelection<FAQPage, R>>;
    });
  renderables: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RenderablePageObservableChain & {
    get: <R extends RenderablePageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RenderablePage, R>
    ) => Observable<FieldsSelection<RenderablePage, R>>;
  }) &
    (RenderablePageObservableChain & {
      get: <R extends RenderablePageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RenderablePage, R>
      ) => Observable<FieldsSelection<RenderablePage, R>>;
    });
  rulesets: ((args?: {
    _cursor?: Scalars['String'] | null;
    _size?: Scalars['Int'] | null;
  }) => RulesetPageObservableChain & {
    get: <R extends RulesetPageRequest>(
      request: R,
      defaultValue?: FieldsSelection<RulesetPage, R>
    ) => Observable<FieldsSelection<RulesetPage, R>>;
  }) &
    (RulesetPageObservableChain & {
      get: <R extends RulesetPageRequest>(
        request: R,
        defaultValue?: FieldsSelection<RulesetPage, R>
      ) => Observable<FieldsSelection<RulesetPage, R>>;
    });
}

export interface UserPagePromiseChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Promise<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (FieldsSelection<User, R> | undefined)[]
    ) => Promise<(FieldsSelection<User, R> | undefined)[]>;
  };
}

export interface UserPageObservableChain {
  after: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  before: {
    get: (
      request?: boolean | number,
      defaultValue?: Scalars['String'] | undefined
    ) => Observable<Scalars['String'] | undefined>;
  };
  data: {
    get: <R extends UserRequest>(
      request: R,
      defaultValue?: (FieldsSelection<User, R> | undefined)[]
    ) => Observable<(FieldsSelection<User, R> | undefined)[]>;
  };
}
