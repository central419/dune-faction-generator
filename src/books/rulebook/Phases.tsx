import { Fragment } from 'react';
import { Title } from '../../blocks/Title';
import { NonBreaking, Text } from '../../blocks/Text';
import { Spaced } from '../../blocks/Spaced';
import { Outline } from '../../blocks/Outline';
import { Definitions } from '../../blocks/Definitions';
import * as colors from '../../presets/colors';

export function Phases_Intro() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue1}>Phases</Title>
        <Text columns={2}>
          <NonBreaking>
            <p>DUNE is played in turns to a maximum limit of 10 turns.</p>
            <p>
              Each turn is composed of nine specific phases that must be
              completed in the exact sequence presented below.
            </p>
          </NonBreaking>
          <Outline variant="example">
            Note: All factions have special advantages that may contradict these
            rules.
            <br />A faction's particular advantages always have precedence.
          </Outline>
        </Text>
        <Title color={colors.blue2} size="medium">
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
            over which the storm passes or stops are killed. Place these forces
            in the Tleilaxu Tanks. Forces that are not on a sand territory are
            protected from the storm. In addition any spice in a sector over
            which a storm passes or stops is removed to the Spice Bank.
          </p>
          <h1>Obstruction</h1>
          <p>Forces may not move into, out of, or through a sector in storm.</p>
          <Outline variant="generic">
            <h1>First Turn</h1>
            <p>
              The first time the storm is moved, the Storm Marker is placed at a
              random location along the map edge using either a D18 dice
              (recommended) or using the following procedure:
            </p>
            <ol>
              <li>
                The two players whose player circles are nearest on either side
                of the Storm Start Sector will secretly dial a number from 0 to
                20 on the battle wheels.
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
    </Fragment>
  );
}
export function Phases_Spice() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
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
              Set any 3rd Shai-Halud cards aside, shuffle them back into the
              deck at the end of the phase.
            </li>
          </ol>
          <Outline variant="generic">
            <h1>First Turn</h1>
            <p>
              Any Shai-Halud cards that are drawn on turn 1, are set aside
              instead.
            </p>
            <p>
              They take no effect and are shuffled back into the Spice Deck at
              the end of the phase.
            </p>
          </Outline>
        </Text>
        <Text>
          <p>
            The Spice Deck never re-shuffles. By the end of turn 10, the
            complete Spice Deck is used.
          </p>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 3: CHOAM charity
        </Title>
        <Text>
          <p>
            Any player with 0 or 1 spice can collect spice from the spice bank
            to bring their total to 2 by calling out “CHOAM Charity.”.
          </p>
          <p>
            Players are allowed to bribe each other during the CHOAM Charity
            phase, to be able to use the charity.
          </p>
        </Text>
        <Title color={colors.blue2} size="medium">
          Phase 4: Bidding
        </Title>
        <Text columns={2}>
          <h1>Declaration</h1>
          <p>
            Each faction must publicly reveal the number of Treachery Cards in
            their hands. A player can never have more than four cards in their
            hand at any one time. A player cannot bid for Treachery Cards if
            they are at their hand limits.
          </p>
          <h1>Dealer</h1>
          <p>
            Count the number of factions not at their hand limits, and for each
            of them set aside one card from the top of the Treachery deck. If
            the Treachery deck has fewer cards than players who can bid, the
            cards remaining in the deck are set aside. The discard pile is then
            shuffled together and cards equal to the difference are drawn and
            placed separately to the first pile. The first pile will be
            auctioned off first, and the second pile second.
          </p>
          <h1>Auction</h1>
          <p>
            The first card in the stack is now auctioned for spice.
            <li>
              The first player in Storm Order will open bidding on the first
              card. If that player already has 4 Treachery Cards the next player
              who does not have 4 Treachery Cards opens bidding.
            </li>
            <li>
              They may bid one or more spice or pass. Bidding then proceeds to
              the next player in Storm Order who may raise the bid or pass until
              all other players pass in a row. The top-bidding player then pays
              the number of spice they bid to the Emperor, or the Spice Bank if
              the Emperor is not in the game, and takes the card into their
              hand.
            </li>
          </p>
        </Text>
      </Spaced>
    </Fragment>
  );
}
export function Phases_Bidding() {
  return (
    <Fragment>
      <Spaced>
        <Text columns={2}>
          <h1>Bid Limit</h1>
          <p>
            No player may bid more spice than they have, except with permission
            from their ally if any, or the Emperor. If a faction wins the
            bidding, but cannot pay for the card due to not having enough spice,
            the bid is considered illegal and the bidding on the card in
            question is restarted with the same starting bidder, however the
            player who made the illegal bid is unable to bid on that Treachery
            Card.
          </p>
          <h1>Next Starting Bidder</h1>
          <p>
            In subsequent bidding during this phase, the First Player who can
            bid, to the right of the player who opened the bid for the previous
            card, begins the bidding for the next card. In this way every player
            who can bid gets a chance to open the bidding for a Treachery Card.
          </p>
          <h1>End of Bidding</h1>
          <p>
            Bidding for Treachery Cards continues until all cards available for
            bid have been auctioned off or a card is not bid on by anyone. If a
            card is passed by everyone, all remaining cards are returned to the
            top of the Treachery Deck in the order they were dealt and the
            bidding round is over.
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
              While these are not strict rules, we suggest they are complied
              with to keep the bidding round as short as possible
            </p>
            <p>
              A pause should be taken before the use of faction powers like
              Ixian Deck Splitting or Atreides Prescience where they announce to
              the table that they are about to use them thus giving players a
              fair chance to use karama cards, or faction powers.
            </p>
            <p>
              We suggest 30 seconds to a minute should be spent before the
              bidding of each card to allow the factions to make deals on card
              knowledge, subsidies and bidding strategy. In general, when a
              player is asking for subsidy from their ally or the Emperor, we
              recommend asking for an amount of Spice and accepting a yes or no
              answer to keep the round moving. This will also allow allies to
              share their plans on who should buy what and how much spice they
              can share between them. Complex deals should be saved for this
              time period.
            </p>
            <p>
              Once bidding starts on a card, each players bid should take no
              more than 10 seconds. Simple deals can take part in this time
              however the game should not be paused to allow a complex deal to
              take place.
            </p>
            <p>
              When it is a players turn to bid they should have priority in
              making simple deals. This means that other players should be quiet
              and interfere minimally when they make deals during their 10
              seconds.
            </p>
            <p>
              We suggest that players frequently flouting these conventions be
              warned, with a potential limit being imposed that they may only
              state their bid and nothing else once bidding has started.
            </p>
          </Outline>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Phases_Revival() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2} size="medium">
          Phase 5: Revival
        </Title>
        <Text>
          <p>
            All revivals happen in Storm Order for purposes of the Bene
            Tleilaxu's Revival Income, and the Bene Tleilaxu always revive their
            forces and leaders last.
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
              <p>Revived forces must be placed in the player's reserve.</p>
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
                To revive a leader, a player must pay that leader's strength in
                spice to the Bene Tleilaxu, or the Spice Bank if the Bene
                Tleilaxu is not in the game.
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
                the player's other revivable leaders have been revived, killed,
                and sent to the Tleilaxu Tanks again.
              </p>
            </dd>
          </Definitions>
          <p></p>
        </Text>
      </Spaced>
    </Fragment>
  );
}

export function Phases_Mentat() {
  return (
    <Fragment>
      <Spaced>
        <Title color={colors.blue2}>Mentat Pause</Title>
      </Spaced>
    </Fragment>
  );
}
