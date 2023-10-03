import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { NonBreaking, Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';
import { Outline } from '../blocks/Outline';
import { Definitions } from '../blocks/Definitions';
import { Wrapper } from '../components/Wrapper';
import { FactionToken } from '../objects/disc/faction_token';
import { size as cardSize } from '../shared/card';
import { size as discSize } from '../shared/disc';

import { TroopToken } from '../objects/disc/troop_token';
import { Cover } from '../objects/book/cover';

import coverA from '../asset/cover/cover-a.svg';
import coverB from '../asset/cover/cover-b.svg';
import coverC from '../asset/cover/cover-c.svg';
import coverD from '../asset/cover/cover-d.svg';

import mappy from '../asset/cover/map.svg';

import { blue1, blue2, tint0, tint1 } from '../presets/colors';
import { Ball } from './blocks/Ball';
import { WithBottom, SideBySide } from './blocks/Layouts';
import styled from '@emotion/styled';
import { MarkdownContent } from '../components/MarkdownContent';

import { factions } from '../presets/factions';
import { TreacheryCard } from '../objects/card/treachery';
import dedent from 'ts-dedent';

export const ratio = Math.sqrt(2);

export const cover = <Cover background={coverB} offset={80} />;

const FactionSynopsisBlock = styled.div<{ flip?: boolean }>(
  {
    display: 'flex',
    background: tint0,
    height: '18vw',
  },
  ({ flip = true }) =>
    flip
      ? {
          padding: '2vw 9vw 2vw 2vw',
          marginRight: '-4vw',
          borderRadius: '10vw 0 0 10vw',
        }
      : {
          padding: '2vw 2vw 2vw 9vw',
          marginLeft: '-4vw',
          borderRadius: '0 10vw 10vw 0',
        }
);

const mapSize = { width: 487.06, height: 487.06 };
export const pages = [
  <Fragment>
    <WithBottom>
      <Spaced>
        <Title color={blue1}>Welcome to dune</Title>
        <Text columns={2}>
          <NonBreaking>
            <h1>Table of contents:</h1>
            <ol>
              <li>About & Credits</li>
              <li>Introduction</li>
              <li>The board</li>
              <li>Cards</li>
              <li>Tech Tokens</li>
              <li>Factons</li>
              <li>...</li>
              <li>...</li>
              <li>...</li>
              <li>FAQ</li>
              <li>The origin</li>
            </ol>
          </NonBreaking>
          <NonBreaking>
            <h1>About dreamrules</h1>
            <p>
              This document consists of the full rules for the Dream Rules
              variant of Gale Force Nine&rsquo;s reprint of Dune and their
              Ixians and Tleilaxu expansion.
            </p>
            <p>Dream Rules Dune is a game best played with Six players.</p>
            <p>
              The ruleset has been engineered to not only increase player
              engagement and agency but also remove as many random elements and
              heighten the skill ceiling.
            </p>
            <p>
              More information about design goals etc, can be found on the last
              page of this rulebook.
            </p>
          </NonBreaking>
        </Text>
      </Spaced>
      <Spaced>
        <Outline variant="generic" center>
          <Text>
            <h1>Credits</h1>
            <Definitions>
              <dt>
                <div>Designers:</div>
                <div>
                  <em>(in alphabetical order)</em>
                </div>
              </dt>
              <dd>
                <ul>
                  <li>Awpteamoose</li>
                  <li>central419</li>
                  <li>DeeDeeMegaDooDoo</li>
                  <li>DragonJade</li>
                  <li>IhasPineCone</li>
                  <li>Quinn</li>
                  <li>Ridwan</li>
                </ul>
              </dd>
              <dt>Play testers:</dt>
              <dd>
                <SideBySide>
                  <div>
                    <ul>
                      <li>please</li>
                      <li>let us</li>
                      <li>add</li>
                      <li>all the</li>
                      <li>playtesters</li>
                      <li>here...</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>...</li>
                      <li>...</li>
                      <li>...</li>
                      <li>...</li>
                      <li>...</li>
                      <li>...</li>
                    </ul>
                  </div>
                </SideBySide>
              </dd>
            </Definitions>
          </Text>
        </Outline>
      </Spaced>
    </WithBottom>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1}>Introduction</Title>
      <Text>
        <NonBreaking>
          <h1>Object of the game</h1>
          <p>
            Each faction has a set of unique economic, military, strategic, or
            treacherous advantages.
            <br />
            The object of the game is to use these advantages to gain control of
            Dune. The winners are the first players to control 3 Victory Points,
            or 4 in an Alliance with one other player, during the Mentat Pause
            phase.
          </p>
          <p>
            A faction has special advantages detailed on their faction sheets
            that may contradict the rules. A faction&rsquo;s particular
            advantages always have precedence over the rules.
          </p>
        </NonBreaking>
      </Text>
      <Title color={blue1} size="medium">
        The board
      </Title>
      <Text>
        <NonBreaking>
          <p>
            Printed on the board is a map of the planet Dune. The map contains
            six types of territories.
          </p>
        </NonBreaking>
        <Definitions>
          <dt>Sand</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball style={{ color: '#000', backgroundColor: '#F6D979' }} />
              <div>Yellow</div>
            </SideBySide>
          </dd>
          <dt>Imperial Basin</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#000', backgroundColor: '#F6D979' }}
                borderA="dashed"
              />
              <div>Yellow with dashed border</div>
            </SideBySide>
          </dd>
          <dt>Rock</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#000', backgroundColor: '#A67A3E' }}
                borderA="solid"
              />
              <div>Light brown with solid border</div>
            </SideBySide>
          </dd>
          <dt>Shieldwall</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#000', backgroundColor: '#A67A3E' }}
                borderA="solid"
              />
              <div>Light brown with solid border</div>
            </SideBySide>
          </dd>
          <dt>Polar Sink</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#000', backgroundColor: '#ffffff' }}
                borderA="solid"
              />
              <div>White</div>
            </SideBySide>
          </dd>
          <dt>City stronghold</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#F7BA7A', backgroundColor: '#F7BA7A' }}
                borderA="dashed"
                borderB="#67371C"
              />
              <div>Dark Brown, with dashed border</div>
            </SideBySide>
          </dd>
          <dt>Seitch stronghold</dt>
          <dd>
            <SideBySide gap={1}>
              <Ball
                style={{ color: '#F7BA7A' }}
                borderA="solid"
                borderB="#67371C"
              />
              <div>Dark Brown, with solid border</div>
            </SideBySide>
          </dd>
        </Definitions>
      </Text>
      <div style={{ position: 'relative', width: '100%' }}>
        <div style={{ position: 'absolute', width: '100%' }}>
          <Wrapper
            isCircle={true}
            size={mapSize}
            style={{ flex: 1, maxWidth: '100%' }}
          >
            <svg
              {...mapSize}
              viewBox="0 0 487.06 487.06"
              xmlSpace="preserve"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <use xlinkHref={mappy + '#root'}></use>
            </svg>
          </Wrapper>
        </div>
      </div>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text columns={2}>
        <NonBreaking>
          <h1>Sectors</h1>
          <p>
            The map is also divided by longitude lines into 18 sectors which
            extend from the edge of the Polar Sink to the horizon.
          </p>
          <p>Sectors are important in 3 ways:</p>
          <ol>
            <li>When the storm moves, it moves from sector to sector.</li>
            <li>
              Territories that are under storm cannot be entered or moved
              through. When a territory is partually under storm, these parts
              act as separate territories.
            </li>
            <li>
              Spice can only be collected within the appropriate sector of a
              territory.
            </li>
          </ol>
        </NonBreaking>

        <Wrapper
          isCircle={true}
          size={mapSize}
          style={{ flex: 1, maxWidth: '100%' }}
        >
          <svg
            {...mapSize}
            viewBox="0 0 487.06 487.06"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <use xlinkHref={mappy + '#root'}></use>
            <use
              xlinkHref={mappy + '#sectors'}
              fill="none"
              stroke="black"
              clip-rule="evenodd"
              display="inline"
              opacity="1"
              fill-rule="nonzero"
              stroke-width="7px"
            />
            <use
              xlinkHref={mappy + '#sectors'}
              fill="none"
              stroke="white"
              clip-rule="evenodd"
              display="inline"
              opacity="1"
              fill-rule="nonzero"
              stroke-width="4px"
            />
          </svg>
        </Wrapper>
      </Text>
      <Text>
        <hr />
      </Text>
      <Text columns={2}>
        <Wrapper
          isCircle={true}
          size={mapSize}
          style={{ flex: 1, maxWidth: '100%' }}
        >
          <svg
            {...mapSize}
            viewBox="0 0 487.06 487.06"
            xmlSpace="preserve"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <use xlinkHref={mappy + '#root'}></use>
          </svg>
        </Wrapper>
        <NonBreaking>
          <h1>Spice locations</h1>
          <p>
            There are a total of 20 locations on the board where spice can spawn
            and be collected.
          </p>
          <ul>
            <li>15 "spice blows" ranging from 6 to 12 spice.</li>
            <li>5 "spice mines" ranging from 3 to 5 spice.</li>
          </ul>
          <p>
            <em>
              TODO: the map on the left should show the locations of the
              spice-blows and spice-mines, clearly.
            </em>
          </p>
        </NonBreaking>
      </Text>
      <Text>
        <hr />
      </Text>
      <Text columns={2}>
        <NonBreaking>
          <h1>Polar sink territory</h1>
          <p>
            A unique territory on dune is the polar sink. This territory is safe
            from everything
          </p>
        </NonBreaking>
        <NonBreaking>
          <ul>
            <li>Safe from storm.</li>
            <li>Safe from Shai-Halud.</li>
            <li>
              Safe from combat.
              <br />
              There are never battles here.
              <br />
              There is no occupancy limit for this territory.
            </li>
          </ul>
        </NonBreaking>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>
        <h1>Strongholds</h1>
      </Text>
      <Text columns={2}>
        <p>There are 5 strongholds clearly marked on the board:</p>
        <Definitions>
          <dt>Arrakeen</dt>
          <dd>
            <p>The home-base of house Atreides.</p>
            <p>
              If you have forces here, you have access to "ornithopers"{' '}
              <em>(explained further on page N)</em>.
            </p>
            <p>
              If you have forces here at the collection phase, you gain 2 spice
              from the spice bank.
            </p>
          </dd>
          <dt>Carthag</dt>
          <dd>
            <p>The home-base of house Harkonnen.</p>
            <p>
              If you have forces here, you have access to "ornithopers"{' '}
              <em>(explained further on page N)</em>.
            </p>
            <p>
              If you have forces here at the collection phase, you gain 2 spice
              from the spice bank.
            </p>
          </dd>
          <dt>Seitch Tabr</dt>
          <dd>
            <p>The home-base of the Fremen.</p>
          </dd>
          <dt>Habanya Seitch</dt>
          <dd>
            <p>
              This stronghold has no special uses, but is the hardest one to
              reach.
            </p>
          </dd>
          <dt>Tuek's Seitch</dt>
          <dd>
            <p>The home-base of the Spacing Guild</p>
            <p>
              If you have forces here at the collection phase, you gain 1 spice
              from the spice bank.
            </p>
          </dd>
        </Definitions>

        <p>
          After 4 Shai-Halud cards have been revealed, the 6th stronghold opens
          up:
        </p>
        <p>
          The Shieldwall territory will be a stronghold for victory purposes
          only. This means that:
        </p>
        <ul>
          <li>It still costs 2 spice per troop to ship to it.</li>
          <li>There is no occupation limit.</li>
          <li>It can still be blown up by Family Atomics.</li>
        </ul>
        <p>
          When the Shieldwall territory is partially under storm, only the
          larger part (upper left) counts as the stronghold.
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1}>Cards</Title>
      <Text>
        <p>
          The game is played with multiple card decks.
          <br />
          These decks and their contents are outlined here:
        </p>
        <Definitions>
          <dt>Storm deck</dt>
          <dd>
            <p>
              6 cards numbered 1 through 6
              <br />
              This deck is only used if the Fremen are in play.
            </p>
          </dd>
          <dt>Spice deck</dt>
          <dd>
            <p>
              15 spice-blow cards.
              <br />
              5 spice-mine cards.
              <br />
              5 Shai-Halud cards.
              <br />
            </p>
          </dd>
          <dt>Fate deck</dt>
          <dd>
            <p>
              6 Cards, each one mimicks a specific worthless Treachery Card.
            </p>
          </dd>
          <dt>Alliance deck</dt>
          <dd>
            <p>
              1 card per faction, each detailing a specific faction's aliance
              ability.
              <br />
              use these to remind who is allied tho whom, and what the faction
              alliance ability is.
            </p>
          </dd>
          <dt>Treachery deck</dt>
          <dd>
            <p>
              45 cards.
              <br />
              <em>These cards are explained in detail below.</em>
            </p>
          </dd>
        </Definitions>
      </Text>
      <Title color={blue1} size="medium">
        Treachery cards
      </Title>
      <Text columns={2}>
        <Wrapper size={cardSize}
            style={{ flex: 1, maxWidth: '100%' }}>
              <TreacheryCard head='GREEN' title={["Baliset", 1]} content={[dedent`
                Play as part of your Battle Plan, in place of a weapon, defense, or both.
                This card has no value in play, and you can discard it only by playing it in your Battle Plan.
              `, 1]} decals={[{id: 'BALISET'}]} icon='WORTHLESS_ASTERIX' sub={["Worthless Card", 1]} release={undefined} recolor={[]}  />
            </Wrapper>
        <ul>
          <li>6x Worthless Cards, unique</li>
          <li>5x Poison Weapon Cards, unique</li>
          <li>5x Projectile Weapon Cards, unique</li>
          <li>5x Snooper Cards, generic</li>
          <li>5x Shield Cards, generic</li>
          <li>3x Cheap Hero, 2 male 1 female</li>
          <li>2x Karama Cards, generic</li>
          <li>2x Truthtrance Cards, generic</li>
          <li>2x Mercenaries, generic</li>
          <li>1x Hajr</li>
          <li>1x Weather Control</li>
          <li>1x Tleilaxu Ghola</li>
          <li>1x Family Atomics</li>
          <li>1x Lasgun</li>
          <li>1x Weirding Way</li>
          <li>1x Chemistry</li>
          <li>1x Orange Catholic Bible</li>
          <li>1x Break Conditioning</li>
          <li>1x Supplies!</li>
        </ul>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1} size="medium">
        Tech tokens
      </Title>
      <Text columns={3}>
        <p>Tech tokens start in a general supply at the start of the game.</p>
        <p>
          If you win in combat against another faction, and that faction has a
          Tech Token; you choose which one to take if they have multiple.
        </p>
        <p>
          When They do not have a tech token, but there is 1 available in the
          supply, take 1 random tech token from the supply.
        </p>
        <p>
          Once Tech Tokens are controlled, they are kept in front of shields,
          for public view.
        </p>
        <p>
          Controlling 3 Tech Tokens counts as a Stronghold for winning the game
          (e.g., if you have forces in Arrakeen and Carthag, and 3 Tech Tokens,
          you win the game).
        </p>
        <p>
          Allies do not share control of Tech Tokens. To qualify as a
          stronghold, a single player must control 3 Tech Tokens.
        </p>
        <p>
          The fourth tech token: the Spice Mine tech token is described on house
          Atreides&rsquo;s faction sheet and is not distributed with the others.
        </p>
        <p>
          Each Tech Token that you control has a potential income from the Spice
          Bank. Any spice gained from Tech Tokens is placed on the Tech Token
          and then collected at the end of the current phase.
        </p>
      </Text>
      <Text>
        <Definitions>
          <dt>AXLOTL TANKS</dt>
          <dd>
            <p>
              If at least one player, including you, takes free revival, you
              collect 1 spice for every Tech Token you control. However, if only
              the Tleilaxu player takes free revival, you do not collect spice.
            </p>
          </dd>
          <dt>HIGHLINERS</dt>
          <dd>
            <p>
              If at least one player, including you, ships forces from
              off-planet, you collect 1 spice for every Tech Token you control.
              However, if only the Spacing Guild ships forces from off-planet,
              you do not collect spice.
            </p>
          </dd>
          <dt>SPICE PRODUCTION</dt>
          <dd>
            <p>
              If at least one player, including you, takes CHOAM Charity, you
              collect 1 spice for every Tech Token you control. However, if only
              the Bene Gesserit take CHOAM Charity, you do not collect spice.
            </p>
          </dd>
          <dt>SPICE MINING</dt>
          <dd>
            <p>
              If at least one troop belonging to any player, including you,
              returns to their reserves after getting evacuated from a spice
              mine, you collect 1 spice for every Tech Token you control.
            </p>
          </dd>
        </Definitions>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1} size="medium">
        Miscelanous rules
      </Title>
      <Text columns={2}>
        <NonBreaking>
          <h1>Written Records and Discard Piles</h1>
          <p>
            No faction other than House Atreides may keep any written notes of
            any kind.
          </p>
          <p>
            Both the treachery discard pile and spice blow discard piles are
            public information and may be searched at any time by any faction.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h1>Fighting Under Storm</h1>
          <p>
            Battles may happen under the storm, the Fremen may ship and move
            under the Storm.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h1>Leader Revival</h1>
          <p>
            When a faction has one available leader at the revival phase, they
            may begin the process of reviving leaders by paying their leader's
            strength in spice.
          </p>
        </NonBreaking>
      </Text>
      <Text>
        <hr />
      </Text>
      <Text>
        <p>
          <em>
            TODO: These can likely be removed, considering they really should
            come up in the phases explanation!
          </em>
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1}>Factions</Title>
      <Text>
        <p>Each set is composed of the following:</p>
        <Definitions>
          <dt>A Faction Sheet</dt>
          <dd>
            <p>Describing each Faction’s Advantages.</p>
            <p>Reference for their troops & leader strengths.</p>
            <p>Reference for their karama effects & FAQ.</p>
          </dd>
          <dt>Leader discs</dt>
          <dd>
            <p>Each disc shows a leader and their fighting strength.</p>
          </dd>
          <dt>Leader traitor cards</dt>
          <dd>
            <p>
              Every leader disc should have a traitor card representing the
              leader disc.
            </p>
          </dd>
          <dt>Troop tokens</dt>
          <dd>
            <p>A total of 20 tokens.</p>
            <p>Troops tokens can be multi-sided.</p>
            <p>Some factions have multiple types of troop tokens.</p>
          </dd>
          <dt>Starting spice</dt>
          <dd>
            <p>
              This should match the starting spice specified on the faction
              sheet.
            </p>
          </dd>
          <dt>Faction specific items</dt>
          <dd>
            <p>
              Some factions will have unique items, such as a Kwisatz Haderach
              token for house Atreides.
            </p>
          </dd>
        </Definitions>
        <p>
          All components of each player set have the same colour for easy
          identification.
        </p>
      </Text>
      <div style={{ display: 'flex', gap: '1vw' }}>
        {Object.entries(factions).map(([k, v]) => (
          <Fragment key={k}>
            <Wrapper
              key={k}
              isCircle={true}
              size={discSize}
              style={{ flex: 1, maxWidth: '100%' }}
            >
              <FactionToken
                color={v.sheet.assets.color}
                logo={v.sheet.assets.logo}
                pattern={v.sheet.assets.pattern}
              />
            </Wrapper>
          </Fragment>
        ))}
      </div>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1} size="medium">
        Factions in the game
      </Title>
      <Text>
        <p>You will play as one of these factions:</p>
      </Text>
      {Object.values(factions)
        .slice(0, 5)
        .map((item) => (
          <FactionSynopsisBlock>
            <SideBySide>
              <Wrapper
                isCircle={true}
                size={discSize}
                style={{ flex: 'none', width: '14vw', height: '14vw' }}
              >
                <FactionToken
                  color={item.sheet.assets.color}
                  logo={item.sheet.assets.logo}
                  pattern={item.sheet.assets.pattern}
                />
              </Wrapper>
              <Text>
                <MarkdownContent>{item.sheet.description}</MarkdownContent>
              </Text>
            </SideBySide>
          </FactionSynopsisBlock>
        ))}
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>Continued list of factions.</Text>
      {Object.values(factions)
        .slice(5, 10)
        .map((item) => (
          <FactionSynopsisBlock>
            <SideBySide>
              <Wrapper
                isCircle={true}
                size={discSize}
                style={{ flex: 'none', width: '14vw', height: '14vw' }}
              >
                <FactionToken
                  color={item.sheet.assets.color}
                  logo={item.sheet.assets.logo}
                  pattern={item.sheet.assets.pattern}
                />
              </Wrapper>
              <Text>
                <MarkdownContent>{item.sheet.description}</MarkdownContent>
              </Text>
            </SideBySide>
          </FactionSynopsisBlock>
        ))}
      <Text>
        <em>There's room for more factions!</em>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1}>Phases</Title>
      <Text columns={2}>
        <NonBreaking>
          <p>DUNE is played in turns to a maximum limit of 10 turns.</p>
          <p>
            Each turn is composed of nine specific phases that must be completed
            in the exact sequence presented below.
          </p>
        </NonBreaking>
        <Outline variant="example">
          Note: All factions have special advantages that may contradict these
          rules.
          <br />A faction’s particular advantages always have precedence.
        </Outline>
      </Text>
      <Title color={blue2} size="medium">
        Phase 1: Storm
      </Title>
      <Text columns={2}>
        <p>
          The Storm Marker is moved around the map. The faction whose Player
          Marker the storm next approaches will be the First Player for this
          turn.
        </p>
        <p>
          In all subsequent Storm Phases, the two players who last used the
          Battle Wheels will independently dial a whole number from 0 to 3,
          simultaneously reveal their numbers, add them together, and then
          advance the Storm Marker from its current position counterclockwise
          around the map for the sum total of sectors.
        </p>
        <p>When both players dial 0, the storm moves 1.</p>
        <h1>Damage</h1>
        <p>
          Any forces in a sector of sand territory (except the Imperial Basin)
          over which the storm passes or stops are killed. Place these forces in
          the Tleilaxu Tanks. Forces that are not on a sand territory are
          protected from the storm. In addition any spice in a sector over which
          a storm passes or stops is removed to the Spice Bank.
        </p>
        <h1>Obstruction</h1>
        <p>Forces may not move into, out of, or through a sector in storm.</p>
        <Outline variant="generic">
          <h1>First Turn</h1>
          <p>
            The first time the storm is moved, the Storm Marker is placed at a
            random location along the map edge using either a D20 dice
            (recommended) or using the following procedure:
          </p>
          <ol>
            <li>
              The two players whose player circles are nearest on either side of
              the Storm Start Sector will secretly dial a number from 0 to 20 on
              the battle wheels.
            </li>
            <li>The two numbers are simultaneously revealed</li>
            <li>
              move Storm Marker from the Storm Start sector counterclockwise
              around the map for the sum total of the 2 number.
            </li>
          </ol>
        </Outline>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="medium">
        Phase 2: Spice blow
      </Title>
      <Text columns={2}>
        <ol>
          <li>Reveal both card card A & B, simultaneously</li>
          <li>Place spice / Shai-Halud tokens in the territory.</li>
          <li>Draw & place extra a Spice Card(s) on any Shai-Halud card.</li>
          <li>
            Fremen may re-direct (if multiple) and ride the spawned Shai-Halud
            tokens.
          </li>
          <li>
            Set any 3rd Shai-Halud cards aside, shuffle them back into the deck
            at the end of the phase.
          </li>
        </ol>
        <Outline variant="generic">
          <h1>First Turn</h1>
          <p>
            Any Shai-Halud cards that are drawn on turn 1, are set aside
            instead.
          </p>
          <p>
            They take no effect and are shuffled back into the Spice Deck at the
            end of the phase.
          </p>
        </Outline>
      </Text>
      <Text>
        <p>
          The Spice Deck never re-shuffles. By the end of turn 10, the complete
          Spice Deck is used.
        </p>
      </Text>
      <Title color={blue2} size="medium">
        Phase 3: CHOAM charity
      </Title>
      <Text>
        <p>
          Any player with 0 or 1 spice can collect spice from the spice bank to
          bring their total to 2 by calling out “CHOAM Charity.”.
        </p>
        <p>
          Players are allowed to bribe each other during the CHOAM Charity
          phase, to be able to use the charity.
        </p>
      </Text>
      <Title color={blue2} size="medium">
        Phase 4: Bidding
      </Title>
      <Text columns={2}>
        <h1>Declaration</h1>
        <p>
          Each faction must publicly reveal the number of Treachery Cards in
          their hands. A player can never have more than four cards in their
          hand at any one time. A player cannot bid for Treachery Cards if they
          are at their hand limits.
        </p>
        <h1>Dealer</h1>
        <p>
          Count the number of factions not at their hand limits, and for each of
          them set aside one card from the top of the Treachery deck. If the
          Treachery deck has fewer cards than players who can bid, the cards
          remaining in the deck are set aside. The discard pile is then shuffled
          together and cards equal to the difference are drawn and placed
          separately to the first pile. The first pile will be auctioned off
          first, and the second pile second.
        </p>
        <h1>Auction</h1>
        <p>
          The first card in the stack is now auctioned for spice.
          <li>
            The first player in Storm Order will open bidding on the first card.
            If that player already has 4 Treachery Cards the next player who
            does not have 4 Treachery Cards opens bidding.
          </li>
          <li>
            They may bid one or more spice or pass. Bidding then proceeds to the
            next player in Storm Order who may raise the bid or pass until all
            other players pass in a row. The top-bidding player then pays the
            number of spice they bid to the Emperor, or the Spice Bank if the
            Emperor is not in the game, and takes the card into their hand.
          </li>
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text columns={2}>
        <h1>Bid Limit</h1>
        <p>
          No player may bid more spice than they have, except with permission
          from their ally if any, or the Emperor. If a faction wins the bidding,
          but cannot pay for the card due to not having enough spice, the bid is
          considered illegal and the bidding on the card in question is
          restarted with the same starting bidder, however the player who made
          the illegal bid is unable to bid on that Treachery Card.
        </p>
        <h1>Next Starting Bidder</h1>
        <p>
          In subsequent bidding during this phase, the First Player who can bid,
          to the right of the player who opened the bid for the previous card,
          begins the bidding for the next card. In this way every player who can
          bid gets a chance to open the bidding for a Treachery Card.
        </p>
        <h1>End of Bidding</h1>
        <p>
          Bidding for Treachery Cards continues until all cards available for
          bid have been auctioned off or a card is not bid on by anyone. If a
          card is passed by everyone, all remaining cards are returned to the
          top of the Treachery Deck in the order they were dealt and the bidding
          round is over.
        </p>
        <h1>Transparency</h1>
        <p>
          The number (not the type) of Treachery Cards each player holds must
          always be open to the other players during the bidding round. Nobody
          is allowed to hide the number of cards they hold at this time. If a
          player has a full hand, they must pass on all cards up for bid.
        </p>
        <Outline variant="generic">
          <h1>Bidding Etiquette</h1>
          <p>
            While these are not strict rules, we suggest they are complied with
            to keep the bidding round as short as possible
          </p>
          <p>
            A pause should be taken before the use of faction powers like Ixian
            Deck Splitting or Atreides Prescience where they announce to the
            table that they are about to use them thus giving players a fair
            chance to use karama cards, or faction powers.
          </p>
          <p>
            We suggest 30 seconds to a minute should be spent before the bidding
            of each card to allow the factions to make deals on card knowledge,
            subsidies and bidding strategy. In general, when a player is asking
            for subsidy from their ally or the Emperor, we recommend asking for
            an amount of Spice and accepting a yes or no answer to keep the
            round moving. This will also allow allies to share their plans on
            who should buy what and how much spice they can share between them.
            Complex deals should be saved for this time period.
          </p>
          <p>
            Once bidding starts on a card, each players bid should take no more
            than 10 seconds. Simple deals can take part in this time however the
            game should not be paused to allow a complex deal to take place.
          </p>
          <p>
            When it is a players turn to bid they should have priority in making
            simple deals. This means that other players should be quiet and
            interfere minimally when they make deals during their 10 seconds.
          </p>
          <p>
            We suggest that players frequently flouting these conventions be
            warned, with a potential limit being imposed that they may only
            state their bid and nothing else once bidding has started.
          </p>
        </Outline>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="medium">
        Phase 5: Revival
      </Title>
      <Text>
        <p>
          All revivals happen in Storm Order for purposes of the Bene Tleilaxu’s
          Revival Income, and the Bene Tleilaxu always revive their forces and
          leaders last.
        </p>
        <h1>Force Revival</h1>
        <p>
          All players may now revive up to 3 Troops from the Tleilaxu Tanks.
        </p>
        <Definitions>
          <dt>Free</dt>
          <dd>
            <p>
              A certain number of forces are revived for free as stated on the
              player sheet.
            </p>
          </dd>
          <dt>By Spice</dt>
          <dd>
            <p>
              Any additional forces that may be revived must be done at a cost
              of 2 spice per force, or more if indicated on faction sheet. All
              spice expended for force revival is placed in the Spice Bank.
            </p>
          </dd>
          <dt>Limit</dt>
          <dd>
            <p>
              A player can never revive more than 3 forces per turn, unless a
              Tleilaxu Ghola Card is played to revive troops.
            </p>
          </dd>
          <dt>To Reserves</dt>
          <dd>
            <p>Revived forces must be placed in the player’s reserve.</p>
          </dd>
        </Definitions>

        <h1>Leader Revival</h1>
        <p>
          Once a player has only, or has had only 1 available leader, they may
          revive one leader per turn until all of their leaders have been
          revived.
        </p>
        <Definitions>
          <dt>Revival Cost</dt>
          <dd>
            <p>
              To revive a leader, a player must pay that leader’s strength in
              spice to the Bene Tleilaxu, or the Spice Bank if the Bene Tleilaxu
              is not in the game.
            </p>
          </dd>
          <dt>Revived Leader Status</dt>
          <dd>
            <p>
              A revived leader can be played normally and is still subject to
              being a traitor.
            </p>
          </dd>
          <dt>Dead Again</dt>
          <dd>
            <p>
              If a revived leader is killed again, place it face down in the
              Tleilaxu Tanks. This leader cannot be revived again until all of
              the player’s other revivable leaders have been revived, killed,
              and sent to the Tleilaxu Tanks again.
            </p>
          </dd>
        </Definitions>
        <p></p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2}>Mentat Pause</Title>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2}>FAQ</Title>
      <Text columns={2} size={1.5}>
        <NonBreaking>
          <h2>
            When multiple players have the game-winning number of strongholds
            during the mentat-phase; Who wins?
          </h2>
          <p>
            The normal strongholds on the board: Arrakeen, Carthag, Tabr Seitch,
            Habanya Sietch, Tuek's Seitch; are of higher value than others
          </p>
          <p>
            If there is still a tie, the Shieldwall stronghold is of higher
            value than Tech Tokens.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            Can a Ghola card let a player revive more than one Sardaukar or
            Fedaykin per turn?
          </h2>
          <p>No, This revival limit of fedeykin cannot be circomvented.</p>
          <p>
            The saudaukar revival limit can only be broken by Emperor's fate
            ability, not by the Tleilaxy Ghola Treachery card.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>How does paying for your ally’s treachery cards work?</h2>
          <p>
            In the Bidding phase, a player may pay for part or all of the cost
            of a treachery card purchased by an ally.
          </p>
          <p>
            The player gives this spice directly to the Emperor (or the bank if
            the Emperor is not in the game).
          </p>
          <p>
            The emperor can not pay for his ally's cards; but instead share his
            spice with his ally freely. The ally pays for the card like normal,
            to the Emperor.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>How does paying for your ally’s shipment work?</h2>
          <p>
            During shipment a player may pay for part or all of the cost of an
            ally’s shipment.
          </p>
          <p>
            The player gives this spice directly to the Guild (or the bank if
            the Guild is not in the game).
          </p>
          <p>
            If the player giving the spice is the Spacing Guild, then the spice
            is still given to the Spacing Guild.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When a battle is won by revelation of a Traitor, can the winner
            discard Treachery cards used in their Battle Plan?
          </h2>
          <p>
            Yes, you can discard Treachery Cards you played, including Cheap
            Hero.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>Can non-allies have secret communications?</h2>
          <p>
            Yes, You can perform secret communications with anyone that agrees
            to it.
          </p>
          <p>
            The fact the 2 players are in secret communications should be public
            knowledge.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When moving with ornithopters, can you pass THROUGH a space
            containing your ally’s forces without ending your move there?
          </h2>
          <p>
            Yes, you are allowed to move over your ally's troops, but you cannot
            end your move in the same location as where your ally has troops.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When you call traitor, can the leader you played in that battle be
            used elsewhere on the board, that turn?
          </h2>
          <p>
            No. The leader you committed will stay in the territory of that
            battle, until the collection phase.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When you played a leader against Harkonnen and lost the fight, is
            the leader you played in that battle subject to the random leader
            stealing ability?
          </h2>
          <p>TODO: Who knows this, for real?</p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When Harkonnen plays a captured leader in a combat and it survives,
            does it return to you instantly, or is it committed to the
            battlefield, and then at Collection phase you collect it instead of
            Harkonnen?
          </h2>
          <p>TODO: Who knows this, for real?</p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            Can the Bene Gesserit flip from advisors to fighters in a territory
            with an ally?
          </h2>
          <p>No.</p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When using the Voice, do the Bene Gesserit have to specify using any
            special cards?
          </h2>
          <p>
            If the card says "Special", then the Bene Gesserit have to voice it
            by name.
          </p>
          <p>They cannot voice you to play (or not play) a Cheap Hero.</p>
          <p>
            They cannot voice you to play a Treachery Card that cannot go into a
            battle plan.
          </p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            Can a player ship cross-planet if either the origin territory or
            destination territory are in the Storm?
          </h2>
          <p>No.</p>
        </NonBreaking>
        <NonBreaking>
          <h2>
            When Harkonnens steal a leader with their advanced ability, can they
            take a look at which leader they stole before they kill them or not?
          </h2>
          <p>Yes.</p>
        </NonBreaking>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>
        <Title color={blue1}>Dreamrules 2.0</Title>
        <h1>The Origin!</h1>
      </Text>
      <Text>
        <p>
          Dreamrules 2.0 is the brainchild of about 6-8 Dune players each of
          whom has hundreds of hours of game time under their belt.
        </p>
        <p>
          The original Dreamrules was for the base game and it was a rather
          simple mesh of GF9 rules and the World Boardgame Championship rules
          where we mixed aspects we liked from both and tried to limit what we
          consider broken mechanics. It was fun, but still had a few ‘flaws’
          from the original Dune and the faction changes we made were not
          balanced.
        </p>
        <p>
          After the Ixian & Tleilaxu expansion that version of Dreamrules was
          abandoned as we came to understand (and definitely not like) what the
          game was becoming. The release of the FAQ in 2020 also changed a lot
          of things, in our opinion not for the better. We decided that to
          continue playing Dune we would have to revive Dreamrules, but where to
          begin.
        </p>
        <h1>The Design Goals were as follows:</h1>
        <ul>
          <li>
            Remove broken/unfun mechanics (Harkonnen Special Karama, Guild
            Timeout Victory, certain Treachery cards)
          </li>
          <li>
            Introduce aspects of WBC rules we enjoyed, Emperor subbing, Bene
            Gesserit flipping
          </li>
          <li>
            Keep aspects of the expansion we liked, Tech Tokens, certain
            Treachery Cards
          </li>
          <li>Balance factions, especially the Fremen</li>
          <li>Reduce the likelihood of Early Nexus&rsquo;s</li>
          <li>Make 10 turn games less likely</li>
          <li>Make skirmishes outside strongholds more necessary and fun</li>
          <li>
            Treachery Deck balance, remove broken cards, but keep it Dune like
            in power dynamics and excitement about certain cards
          </li>
        </ul>
        <h1>Then as secondary goals:</h1>
        <ul>
          <li>Balance Ixians</li>
          <li>
            Overhaul Tleilaxu completely, we honestly didn&rsquo;t know where to
            begin.
          </li>
        </ul>
      </Text>
    </Spaced>
  </Fragment>,
];
