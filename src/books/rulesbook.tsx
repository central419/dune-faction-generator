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
import { Fan } from '../components/Fan';
import {
  baliset,
  chaumas,
  cheaphero,
  cheapheroine,
  chemistry,
  ernok,
  familyatomics,
  karama,
  lasgun,
  maulapistol,
  mercenaries,
  phrinepen,
  shield,
  snooper,
  supplies,
  supshield,
  trishula,
  truthtrance,
  weathercontrol,
  weirdingway,
} from '../presets/treachery_cards';

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
              clipRule="evenodd"
              display="inline"
              opacity="1"
              fillRule="nonzero"
              strokeWidth="7px"
            />
            <use
              xlinkHref={mappy + '#sectors'}
              fill="none"
              stroke="white"
              clipRule="evenodd"
              display="inline"
              opacity="1"
              fillRule="nonzero"
              strokeWidth="4px"
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
          <dt>
            Storm deck
            <br />6 cards
          </dt>
          <dd>
            <p>
              6 cards numbered 1 through 6
              <br />
              This deck is only used if the Fremen are in play.
            </p>
          </dd>
          <dt>
            Spice deck
            <br />
            25 cards
          </dt>
          <dd>
            <p>
              15 spice-blow cards.
              <br />
              5 spice-mine cards.
              <br />
              5 Shai-Halud cards.
              <br />
              Tells where Spice Blows will create treasure troves of spice
              waiting to be harvested, and when the giant sandworms known as
              Shai-Hulud will turn up.
            </p>
          </dd>
          <dt>
            Fate deck
            <br />6 cards
          </dt>
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
          <dt>
            Treachery deck
            <br />
            45 cards
          </dt>
          <dd>
            <p>
              Provides weapons, defenses, tricks and tools to outmaneuver
              opponents and win battles.
              <br />
              <em>These cards are explained in detail below.</em>
            </p>
          </dd>
        </Definitions>
      </Text>
      <Title color={blue1} size="medium">
        Treachery cards
      </Title>
      <Text>
        <p>Here's an overview of all of the card in the Treachery Deck:</p>
      </Text>
      <Text columns={3} size={1.8}>
        <div style={{ padding: '1vw 4vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
          </Fan>
        </div>
        <ul>
          <li>6x Worthless Cards, unique</li>
          <li>5x Poison Weapon Cards, unique</li>
          <li>5x Projectile Weapon Cards, unique</li>
          <li>5x Snooper Cards, generic</li>
          <li>5x Shield Cards, generic</li>
          <li>1x Lasgun</li>
          <li>1x Weirding Way</li>
          <li>1x Chemistry</li>
        </ul>
        <ul>
          <li>3x Cheap Hero, 2 male 1 female</li>
          <li>2x Karama Cards, generic</li>
          <li>2x Truthtrance Cards, generic</li>
          <li>2x Mercenaries, generic</li>
          <li>1x Hajr</li>
          <li>1x Weather Control</li>
          <li>1x Tleilaxu Ghola</li>
          <li>1x Family Atomics</li>
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
        Treachery cards detailed
      </Title>
      <SideBySide>
        <div style={{ padding: '2vw 6vw', width: '20vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {baliset}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Worthless cards</h1>
          <p>Worthless cards can be used/discarded in one of 2 ways:</p>
          <ol>
            <li>Discarding them by playing them in a battle plan.</li>
            <li>
              Discarding them by playing your fate ability, when you have the
              matching fate card.
            </li>
          </ol>
          <blockquote>
            <p>I love this card!</p>
            <p style={{ float: 'right' }}>~ IhasPinecone</p>
          </blockquote>
        </Text>
      </SideBySide>
      <Title color={blue2} size="small">
        Weapons
      </Title>
      <SideBySide>
        <div style={{ padding: '2vw 6vw', width: '20vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {maulapistol}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {maulapistol}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {maulapistol}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {maulapistol}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {maulapistol}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Projectile Weapons</h1>
          <p>
            There are 5 standard projectile weapons in the Treachery deck:{' '}
            <br />
            Stunner, Slip Tip, Maula Pistol, Crysknife & Hunter seeker.
          </p>
          <p>
            Playing this card in your battle plan will kill the opponent's
            leader unless they have a projectile defense in their battle plan.
          </p>
          <p>
            These cards can be voiced as "<em>projectile weapon</em>"
          </p>
          <blockquote>
            <p>Fremen might want this one..</p>
            <p style={{ float: 'right' }}>~ DeeDeeMegaDooDoo</p>
          </blockquote>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ padding: '2vw 6vw', width: '20vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chaumas}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chaumas}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chaumas}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chaumas}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chaumas}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Poison Weapons</h1>
          <p>
            There are 5 standard poison weapons in the Treachery deck: <br />
            Gom Jabbar, Chaumas, Chaumurky, Basilia weapon & Elleca drug.
          </p>
          <p>
            Playing this card in your battle plan will kill the opponent's
            leader unless they have a poison defense in their battle plan.
          </p>
          <p>
            These cards can be voiced as "<em>poison weapon</em>"
          </p>
          <blockquote>
            <p>That's a good card!</p>
            <p style={{ float: 'right' }}>~ Awpteamoose</p>
          </blockquote>
        </Text>
      </SideBySide>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Unique combat cards
      </Title>

      <SideBySide>
        <div style={{ width: '24vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {weirdingway}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Weirding way</h1>
          <p>
            Playing this card in your battle plan without a second weapon will
            kill the opponent's leader unless they have a projectile defense in
            their battle plan.
          </p>
          <p>
            Playing this card in your battle plan with a second weapon protect
            your leader from a projectile weapon.
            <br />
            It will not protect your leader from a lasgun.
          </p>
          <p>
            Playing this with a lasgun does not cause a lasgun-shield explosion.
          </p>
          <p>
            This card can be voiced as "<em>weirding way</em>".
          </p>
        </Text>
      </SideBySide>

      <SideBySide>
        <div style={{ width: '24vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {lasgun}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Lasgun</h1>
          <p>
            Playing this card in your battle plan will kill the opponent's
            leader.
          </p>
          <p>
            If your battleplan also contains a shield, or your opponent's battle
            plan contains a shield, a lasgun-shield explosion occurs.
            <br />
            All tokens in the territory, including spice, troops, leaders are
            destroyed/killed.
          </p>
          <p>
            This card can be voiced as "<em>lasgun</em>".
          </p>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ width: '24vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {chemistry}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Chemistry</h1>
          <p>
            Playing this card in your battle plan with a second defense will
            kill the opponent's leader unless they have a poison defense in
            their battle plan.
          </p>
          <p>
            Playing this card in your battle plan without a second defense
            protects your leader from a poison weapon.
          </p>
          <p>
            This card can be voiced as "<em>chemistry</em>".
          </p>
        </Text>
      </SideBySide>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Defenses
      </Title>
      <SideBySide>
        <div style={{ padding: '2vw 6vw', width: '20vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {shield}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {shield}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {shield}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {shield}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {shield}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Projectile Defenses</h1>
          <p>
            There are 5 standard projectile defenses called "Shield" in the
            Treachery deck.
          </p>
          <p>
            Playing this card in your battle plan will defend your leader from
            projectile weapons in your opponent's battle plan.
          </p>
          <p>
            When this card is ever played in combination with a "Lasgun" a
            lasgun shield explosion occurs.
            <br />
            It does not matter if the Lasgun is in your battleplan or in your
            opponent's.
          </p>
          <p>
            These cards can be voiced as "<em>projectile defense</em>" or "
            <em>shield</em>"
          </p>
          <blockquote>
            <p>You must play a shield!</p>
            <p style={{ float: 'right' }}>~ central419</p>
          </blockquote>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ padding: '2vw 6vw', width: '20vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {snooper}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {snooper}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {snooper}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {snooper}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {snooper}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Poison Defense</h1>
          <p>
            There are 5 standard poison defenses called "Snooper" in the
            Treachery deck.
          </p>
          <p>
            Playing this card in your battle plan will defend your leader from
            poison weapons in your opponent's battle plan.
          </p>
          <p>
            These cards can be voiced as "<em>poison defense</em>" or "
            <em>snooper</em>"
          </p>
          <blockquote>
            <p>He has a second snooper?!</p>
            <p style={{ float: 'right' }}>~ laurens</p>
          </blockquote>
        </Text>
      </SideBySide>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Karama card
      </Title>
      <SideBySide>
        <div style={{ padding: '1vw 2vw', width: '24vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {karama}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {karama}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }} size={1.7}>
          <h1>Karama</h1>
          <p>There are 2 karama cards in the Treachery Deck.</p>
          <Outline variant="generic">
            <p>You can play this card in 1 of 3 ways:</p>
            <ol>
              <li>
                During any phase of the game, you can play this card to
                cancel/block any <strong>other</strong> faction's ability listed
                on their faction sheet.
              </li>
              <li>
                During bidding phase, make an infinite bid for a card, take the
                card without paying.
              </li>
              <li>
                During <strong>your</strong> shipment and movement turn, your
                shipment cost is reduced to half of normal. Your payment for
                this shipment goes to the Spice Bank.
              </li>
            </ol>
          </Outline>
        </Text>
      </SideBySide>
      <Text columns={2} size={1.7}>
        <NonBreaking>
          <h1>Full Phase</h1>
          <p>
            Playing a karama to block another faction's advantage will cancel
            this advantage for a full phase.
          </p>
        </NonBreaking>
        <NonBreaking>
          <Text>
            <Outline variant="example">
              <p>
                When you play a karama to stop the Atreides bidding presience
                advantage, the Atreides can't look at <strong>any</strong> cards
                that bidding phase.
              </p>
            </Outline>
          </Text>
        </NonBreaking>
      </Text>
      <Text>
        <hr />
      </Text>
      <Text size={1.7}>
        <h1>Karama effects</h1>
        <p>
          On each player's faction sheet each advantage that can be karama'd is
          denoted by a "*"-token.
          <br />
          On the second page of their faction sheet is described in detail what
          happens when this ability is blocked/cancelled.
        </p>
        <p>
          Certain advantages have a narrow time-window when you can play the
          karama to block them. This is also decribed on the second page.
        </p>
        <p>
          <strong>EXAMPLES:</strong>
        </p>
      </Text>
      <Text columns={2}>
        <Outline variant="example">
          <p>
            When playing a karama to stop the Spacing Guild from using their
            storm order advantage during ship and move, you must do so before
            the Spacing Guild was supposed to take their turn.
          </p>
        </Outline>
        <Outline variant="example">
          <p>
            When playing a karama to stop the Bene Gesserit from using their
            voice advantage against you, you can listen to what their voice is,
            but must play the karama before proceeding with further
            actions/revealing.
          </p>
        </Outline>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Truth Trance cards
      </Title>
      <SideBySide>
        <div style={{ padding: '1vw 2vw', width: '24vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {truthtrance}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {truthtrance}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }} size={1.7}>
          <h1>Truth Trance</h1>
          <p>There are 2 truth trance cards in the Treachery Deck.</p>
          <p>You can play a Truth Trance card at any time.</p>
          <Outline variant="generic">
            <p>
              Publicly ask one other player a single yes/no question about the
              game that must be answered publicly.
            </p>
            <p>The game pauses until an answer is given.</p>
            <p>The player must answer "yes" or "no" truthfully.</p>
          </Outline>
        </Text>
      </SideBySide>
      <Text columns={2} size={1.7}>
        <h1>The game pauses</h1>
        <p>When a truth trance card is played, no game actions can happen:</p>
        <ul>
          <li>No binding deals can be made during this time.</li>
          <li>No cards can be played, including other truthtrance cards.</li>
        </ul>
        <h1>Binding future actions</h1>
        <p>
          You can be asked about future actions you will perform.
          <br />
          You must commit to an answer and then you are not allowed to make game
          actions that would make your answer not true.
        </p>
        <p>
          To be clear: you will be locked into future actions via the answer you
          give.
        </p>
        <h1>What questions are allowed?</h1>
        <p>
          Some player discretions is needed, it's possible for extreme toxic
          play to happen with either deliberately unclear questions, or
          questions that are effectively a card-blanc "you must do exactly the
          thing i decide you must do".
        </p>
        <ul>
          <li>Absolutely, no questions about future truth-trace questions.</li>
          <li>
            No confusing questions, if you need to explain the question, it's
            not clear enough.
          </li>
          <li>No questions about undecidable future events.</li>
        </ul>
        <p>
          If you asked your question and it turns out to be toxic, you must
          discard your Truth Trance card, you do not get to ask another
          question.
        </p>
      </Text>
      <Text columns={2} size={1.7}>
        <NonBreaking>
          <Text>
            <h1>Bad examples</h1>
            <Outline variant="example">Will you win both battles?</Outline>
            <Outline variant="example">
              Is Hasimir Fenring anyone's Traitor?
            </Outline>
          </Text>
        </NonBreaking>
        <NonBreaking>
          <Text>
            <h1>Good examples</h1>
            <Outline variant="example">
              Do you have Stilgar as a traitor?
            </Outline>
            <Outline variant="example">
              Will you play a projectile weapon, weirding way as a weapon or a
              lasgun in the next battle?
            </Outline>
            <Outline variant="example">
              Will you have more than 4 forces in Arrakeen by the end of your
              shipment & movement turn?
            </Outline>
          </Text>
        </NonBreaking>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Special cards
      </Title>
      <SideBySide>
        <div style={{ padding: '1vw 4vw', width: '22vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {cheaphero}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {cheaphero}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {cheapheroine}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Cheap hero</h1>
          <p>
            There are 3 Cheap Hero cards in the Treachery deck, 2 are called
            "Cheap Hero", 1 is called "Cheap Heroine".
            <br />
            Play this card in your battleplan <strong>instead of</strong> a
            leader.
            <br />
            <em>
              Guild can play it along with a leader disc after having activated
              their fate.
            </em>
          </p>
          <p>
            The leader's strength is 0.
            <br />
            The Cheap Hero cannot be called traitor.
          </p>
          <p>
            A Cheap Hero card is always discarded after use. Unless you won with
            Traitor, in that case you can chose to keep or discard.
          </p>
          <p>
            It's not allowed to voice Cheap Hero, neither positive, nor
            positive.
          </p>
          <blockquote>
            <p>I love cheap heroine!</p>
            <p style={{ float: 'right' }}>~ awpteamoose</p>
          </blockquote>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ width: '17vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {weathercontrol}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Weather Control</h1>
          <p>There's a single Weather Control card in the Treachery deck.</p>
          <p>
            You can play this card during the storm phase only, after the storm
            calculation is complete, but before the storm is moved.
          </p>
          <p>You can move the storm up to 10 sectors forwards.</p>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ width: '17vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {familyatomics}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Family Atomics</h1>
          <p>There's a single Family card in the Treachery deck.</p>
          <p>
            You can play this card during the storm phase only, after the storm
            calculation is complete (and after Weather Control is played), but
            before the storm is moved.
          </p>
          <p>
            You can only play this card if you have at least 1 troop in an
            territory adjecent or on the Shieldwall territory.
            <br />
            If the storm is in the way, you cannot use Family Atomics.
          </p>
          <p>After playing this card it is removed from the game.</p>
          <blockquote>
            <p>KA-BOOOM!</p>
            <p style={{ float: 'right' }}>~ IhasPinecone</p>
          </blockquote>
        </Text>
      </SideBySide>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue2} size="small">
        Special cards
      </Title>
      <SideBySide>
        <div style={{ padding: '1vw 4vw', width: '22vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {mercenaries}
            </Wrapper>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {mercenaries}
            </Wrapper>
          </Fan>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Mercenaries</h1>
          <p>
            There are 2 Mercenaries cards in the Treachery deck.
            <br />
            You can play this card in the battle plan, in addition to playing a
            weapon and a defense.
          </p>
          <p>
            When this card is in your battle plan, it adds 1 battle strength to
            your battle plan.
            <br />
            In addition you also become the aggressor in combat, and thus win
            ties.
            <br />
            If both players play Mercenaries, then storm order decides the
            aggressor.
          </p>
          <p>
            When asked for dial as Atreides combat prescience, you must answer
            the number of your Battlewheel and must also disclose if you are
            playing Mercenaries.
          </p>
          <p>This card can be voiced as "Mercenaries".</p>
        </Text>
      </SideBySide>
      <SideBySide>
        <div style={{ padding: '1vw 4vw', width: '22vw' }}>
          <Fan size={cardSize} spacing={-3}>
            <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
              {supplies}
            </Wrapper>
          </Fan>
          <div style={{ padding: '0 6vw', width: '14vw', marginTop: '-4vw', marginLeft: '-2vw' }}>
            <Fan size={cardSize} spacing={-3}>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {ernok}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {trishula}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {phrinepen}
              </Wrapper>
              <Wrapper size={cardSize} style={{ flex: 1, maxWidth: '100%' }}>
                {supshield}
              </Wrapper>
            </Fan>
          </div>
        </div>
        <Text style={{ flex: 1 }}>
          <h1>Supplies!</h1>
          <p>
            There's 1 Supplies! card in the Treachery deck.
          </p>
          <p>
            You can play this card at any time, within the following contraint:
            <br />
            You cannot play this between the time-window of Voice and battle plan reveal.
            <br />
            Effectively this means you are allowed to play it at start of combat, before any combat advantages are used.
          </p>
          <p>
            When you play the Supplies! card, you discard it and take the 4 Supplies! Treachery cards from the supply, into your hand.<br/>These special Treachery cards to not count towards your hand limit.
          </p>
          <p>
            The Supply! Treachery cards cannot be spited by Harkonnen.
          </p>
          <p>
            The Supply! Treachery cards can be voiced, like regular Treachery cards.
          </p>
          <blockquote>
            <p>Are you supplies!-ed?</p>
            <p style={{ float: 'right' }}>~ DragonJade</p>
          </blockquote>
        </Text>
      </SideBySide>
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
        .map((item, i) => (
          <FactionSynopsisBlock key={i}>
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
        .map((item, i) => (
          <FactionSynopsisBlock key={i}>
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
