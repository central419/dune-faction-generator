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
            size={size}
            style={{ flex: 1, maxWidth: '100%' }}
          >
            <svg {...size}>
              <use xlinkHref={mappy + '#root'} {...size}></use>
            </svg>
          </Wrapper>
        </div>
      </div>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>
        <h1>Title</h1>
      </Text>
      <Text columns={2}>
        <p>
          Integer ipsum massa, dapibus non congue a, ultricies eu orci. Maecenas
          ullamcorper tellus magna. Nunc a metus tellus. Pellentesque vitae
          lacinia magna, eget posuere risus. Sed id metus pharetra, rhoncus
          turpis vel, volutpat diam. Donec tristique est in ipsum cursus, sit
          amet viverra urna bibendum. Integer at risus lobortis, faucibus nisi
          vitae, fermentum ante. Donec pellentesque fermentum eros, id ornare
          nisl feugiat quis. In hac habitasse platea dictumst. Ut sodales quis
          felis et tempus. Nullam tempor odio diam, non suscipit sapien finibus
          quis. Sed sed egestas mi, at sagittis metus. Curabitur tempus leo eget
          mollis porta. Integer efficitur et nisi et semper. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Morbi rutrum, dui vel interdum imperdiet, quam nulla condimentum
          justo, a maximus nibh magna sed quam. Mauris lacus ipsum, venenatis ut
          elementum et, blandit sed augue. Maecenas convallis turpis in
          scelerisque porttitor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. In hac habitasse platea
          dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris et justo quis elit dapibus faucibus. Sed dapibus lacus nec diam
          malesuada convallis. Mauris aliquet, quam ac iaculis aliquet, nunc
          mauris egestas leo, at rutrum neque urna sit amet velit. Donec
          lacinia, est ac luctus luctus, arcu enim vestibulum arcu, vitae
          ultrices nibh neque ut nulla. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Vestibulum id est sed
          lorem lobortis ullamcorper vel ac ex. Etiam sodales lorem suscipit,
          iaculis erat pulvinar, vulputate metus. Nunc pharetra, nunc a porta
          lobortis, tortor metus hendrerit elit, non varius turpis urna at
          metus.
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
