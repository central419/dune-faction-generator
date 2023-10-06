import { Fragment } from 'react';
import { Title } from '../../blocks/Title';
import { Text } from '../../blocks/Text';
import { Spaced } from '../../blocks/Spaced';
import { Definitions } from '../../blocks/Definitions';
import { Wrapper } from '../../components/Wrapper';
import { FactionToken } from '../../objects/disc/faction_token';
import { size as discSize } from '../../shared/disc';
import * as colors from '../../presets/colors';
import { SideBySide } from '../blocks/Layouts';
import { MarkdownContent } from '../../components/MarkdownContent';
import { factions } from '../../presets/factions';
import { FactionSynopsisBlock } from '../blocks/FactionSynopsisBlock';

export function Factions1() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Factions</Title>
        <Text>
          <p>Each set is composed of the following:</p>
          <Definitions>
            <dt>A Faction token</dt>
            <dd>
              <p>
                This token is placed on the storm track around the board, to
                indicate where this player is seated.
              </p>
              <p>
                On the backside of the token is a "pass"-icon, indicating this
                faction is no longer able/willing take actions this phase.
              </p>
            </dd>
            <dt>A Faction Sheet</dt>
            <dd>
              <p>Describing each Faction's Advantages.</p>
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
            All components of each player set have the same color for easy
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
    </Fragment>
  );
}

export function Factions2() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="medium">
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
    </Fragment>
  );
}

export function Factions3() {
  return (
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
    </Fragment>
  );
}
