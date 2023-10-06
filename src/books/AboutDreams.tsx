import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';
import { blue1 } from '../presets/colors';

export function AboutDreams() {
  return (
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
            abandoned as we came to understand (and definitely not like) what
            the game was becoming. The release of the FAQ in 2020 also changed a
            lot of things, in our opinion not for the better. We decided that to
            continue playing Dune we would have to revive Dreamrules, but where
            to begin.
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
              Overhaul Tleilaxu completely, we honestly didn&rsquo;t know where
              to begin.
            </li>
          </ul>
        </Text>
      </Spaced>
    </Fragment>
  );
}
