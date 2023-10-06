import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { NonBreaking, Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';
import { blue2 } from '../presets/colors';

export function Faq() {
  return (
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
              The normal strongholds on the board: Arrakeen, Carthag, Tabr
              Seitch, Habanya Sietch, Tuek's Seitch; are of higher value than
              others
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
              The player gives this spice directly to the Emperor (or the bank
              if the Emperor is not in the game).
            </p>
            <p>
              The emperor can not pay for his ally's cards; but instead share
              his spice with his ally freely. The ally pays for the card like
              normal, to the Emperor.
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
              If the player giving the spice is the Spacing Guild, then the
              spice is still given to the Spacing Guild.
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
              The fact the 2 players are in secret communications should be
              public knowledge.
            </p>
          </NonBreaking>
          <NonBreaking>
            <h2>
              When moving with ornithopters, can you pass THROUGH a space
              containing your ally’s forces without ending your move there?
            </h2>
            <p>
              Yes, you are allowed to move over your ally's troops, but you
              cannot end your move in the same location as where your ally has
              troops.
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
              When Harkonnen plays a captured leader in a combat and it
              survives, does it return to you instantly, or is it committed to
              the battlefield, and then at Collection phase you collect it
              instead of Harkonnen?
            </h2>
            <p>TODO: Who knows this, for real?</p>
          </NonBreaking>
          <NonBreaking>
            <h2>
              Can the Bene Gesserit flip from advisors to fighters in a
              territory with an ally?
            </h2>
            <p>No.</p>
          </NonBreaking>
          <NonBreaking>
            <h2>
              When using the Voice, do the Bene Gesserit have to specify using
              any special cards?
            </h2>
            <p>
              If the card says "Special", then the Bene Gesserit have to voice
              it by name.
            </p>
            <p>They cannot voice you to play (or not play) a Cheap Hero.</p>
            <p>
              They cannot voice you to play a Treachery Card that cannot go into
              a battle plan.
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
              When Harkonnens steal a leader with their advanced ability, can
              they take a look at which leader they stole before they kill them
              or not?
            </h2>
            <p>Yes.</p>
          </NonBreaking>
        </Text>
      </Spaced>
    </Fragment>
  );
}
