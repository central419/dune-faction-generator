import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { NonBreaking, Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';
import { Outline } from '../blocks/Outline';
import { Definitions } from '../blocks/Definitions';
import { Wrapper } from '../components/Wrapper';
import { FactionToken } from '../objects/disc/faction_token';
import { size } from '../shared/disc';

import * as emperor from '../factions/emperor';
import * as guild from '../factions/guild';
import * as fremen from '../factions/fremen';
import * as atreides from '../factions/atreides';
import * as ixian from '../factions/ixian';
import * as bg from '../factions/bg';
import * as bt from '../factions/bt';
import * as harkonnen from '../factions/harkonnen';
import { TroopToken } from '../objects/disc/troop_token';
import { Cover } from '../objects/book/cover';

import coverA from '../asset/cover/cover-a.svg';
import coverB from '../asset/cover/cover-b.svg';
import coverC from '../asset/cover/cover-c.svg';
import coverD from '../asset/cover/cover-d.svg';

import mappy from '../asset/cover/map.svg';

import { blue1 } from '../presets/colors';
import { Ball } from './blocks/Ball';
import { WithBottom, SideBySide } from './blocks/Layouts';

const factions = [emperor, guild, fremen, ixian, atreides, bg, bt, harkonnen];

export const ratio = Math.sqrt(2);

export const cover = <Cover background={coverB} offset={80} />;

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
              <li>Credits</li>
              <li>Introduction</li>
              <li>Page 1</li>
              <li>Page 2</li>
              <li>Page 3</li>
              <li>Page 4</li>
              <li>Page 5</li>
              <li>Page 6</li>
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
      <Text>
        <NonBreaking>
          <h1>The board</h1>
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
            <p>This stronghold has no special uses, but is the hardest one to reach.</p>
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
          When the Shieldwall territory is partially under storm, only the larger
          part (upper left) counts as the stronghold.
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>
        <table>
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>c</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>22</td>
            </tr>
            <tr>
              <td>31</td>
              <td>32</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>

        <Outline variant="example">
          <Text>
            <h1>Hi</h1>
            <p>Hello</p>
          </Text>
        </Outline>
        <Outline variant="generic">
          <Text>
            <h1>Hi</h1>
            <p>Hello</p>
          </Text>
        </Outline>
        <Text>
          <Definitions>
            <dt>Beast of Bodmin</dt>
            <dd>A large feline inhabiting Bodmin Moor.</dd>

            <dt>Morgawr</dt>
            <dd>A sea serpent.</dd>

            <dt>Owlman</dt>
            <dd>
              <p>A giant owl-like creature.</p>
              <p>A giant owl-like creature.</p>
              <p>A giant owl-like creature.</p>
            </dd>
          </Definitions>
        </Text>

        {Object.values(factions)
          .map((f) => ({ sheet: f.sheet, tokens: f.sheet.assets.troops }))
          .map(({ sheet, tokens: v }, i) => (
            <Fragment key={i}>
              {v.map((ii, iii) => (
                <Fragment key={iii}>
                  {ii.front && (
                    <Fragment>
                      <Wrapper
                        isCircle={true}
                        size={size}
                        style={{ flex: 1, maxWidth: '6vw' }}
                      >
                        <TroopToken
                          color={sheet.assets.color}
                          variant={ii.front.variant}
                          pattern={sheet.assets.pattern}
                          modifiers={ii.front.modifiers}
                        />
                      </Wrapper>
                    </Fragment>
                  )}
                  {ii.back && (
                    <Fragment>
                      <Wrapper
                        isCircle={true}
                        size={size}
                        style={{ flex: 1, maxWidth: '6vw' }}
                      >
                        <TroopToken
                          color={sheet.assets.color}
                          variant={ii.back.variant}
                          pattern={sheet.assets.pattern}
                          modifiers={ii.back.modifiers}
                        />
                      </Wrapper>
                    </Fragment>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ))}

        <div style={{ display: 'flex', gap: '1vw' }}>
          {Object.entries(factions).map(([k, v]) => (
            <Fragment key={k}>
              <Wrapper
                key={k}
                isCircle={true}
                size={size}
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
          <br />
          <br />
          The original Dreamrules was for the base game and it was a rather
          simple mesh of GF9 rules and the World Boardgame Championship rules
          where we mixed aspects we liked from both and tried to limit what we
          consider broken mechanics. It was fun, but still had a few ‘flaws’
          from the original Dune and the faction changes we made were not
          balanced.
          <br />
          <br />
          After the Ixian & Tleilaxu expansion that version of Dreamrules was
          abandoned as we came to understand (and definitely not like) what the
          game was becoming. The release of the FAQ in 2020 also changed a lot
          of things, in our opinion not for the better. We decided that to
          continue playing Dune we would have to revive Dreamrules, but where to
          begin.
          <br />
          <br />
          The Design Goals were as follows:
          <br />
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
            <li>Reduce the likelihood of Early Nexus’s</li>
            <li>Make 10 turn games less likely</li>
            <li>Make skirmishes outside strongholds more necessary and fun</li>
            <li>
              Treachery Deck balance, remove broken cards, but keep it Dune like
              in power dynamics and excitement about certain cards
            </li>
          </ul>
          <br />
          Then as secondary goals:
          <br />
          <ul>
            <li>Balance Ixians</li>
            <li>
              Overhaul Tleilaxu completely, we honestly didn’t know where to
              begin
            </li>
          </ul>
        </p>
      </Text>
    </Spaced>
  </Fragment>,
];
