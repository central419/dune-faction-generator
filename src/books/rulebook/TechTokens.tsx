import { Fragment } from 'react';
import { Title } from '../../blocks/Title';
import { Text } from '../../blocks/Text';
import { Spaced } from '../../blocks/Spaced';
import { Definitions } from '../../blocks/Definitions';
import * as colors from '../../presets/colors';

export function TechTokens() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1} size="medium">
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
            Controlling 3 Tech Tokens counts as a Stronghold for winning the
            game (e.g., if you have forces in Arrakeen and Carthag, and 3 Tech
            Tokens, you win the game).
          </p>
          <p>
            Allies do not share control of Tech Tokens. To qualify as a
            stronghold, a single player must control 3 Tech Tokens.
          </p>
          <p>
            The fourth tech token: the Spice Mine tech token is described on
            house Atreides's faction sheet and is not distributed with the
            others.
          </p>
          <p>
            Each Tech Token that you control has a potential income from the
            Spice Bank. Any spice gained from Tech Tokens is placed on the Tech
            Token and then collected at the end of the current phase.
          </p>
        </Text>
        <Text>
          <Definitions>
            <dt>AXOLOTL TANKS</dt>
            <dd>
              <p>
                If at least one player, including you, takes free revival, you
                collect 1 spice for every Tech Token you control. However, if
                only the Tleilaxu player takes free revival, you do not collect
                spice.
              </p>
            </dd>
            <dt>HIGHLINERS</dt>
            <dd>
              <p>
                If at least one player, including you, ships forces from
                off-planet, you collect 1 spice for every Tech Token you
                control. However, if only the Spacing Guild ships forces from
                off-planet, you do not collect spice.
              </p>
            </dd>
            <dt>SPICE PRODUCTION</dt>
            <dd>
              <p>
                If at least one player, including you, takes CHOAM Charity, you
                collect 1 spice for every Tech Token you control. However, if
                only the Bene Gesserit take CHOAM Charity, you do not collect
                spice.
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
    </Fragment>
  );
}
