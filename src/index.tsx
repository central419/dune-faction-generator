import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { DetailsSheet } from './objects/sheet/details';
import { AdvantagesSheet } from './objects/sheet/advantages';

import * as atreides from './factions/atreides';
import * as bg from './factions/bg';
import * as bt from './factions/bt';
import * as emperor from './factions/emperor';
import * as fremen from './factions/fremen';
import * as guild from './factions/guild';
import * as harkonnen from './factions/harkonnen';
import * as ixian from './factions/ixian';
import * as landsraad from './factions/landsraad';

import { pages as rulesbook } from './books/rulesbook';

import { Book } from './objects/book/book';

const root = createRoot(document.getElementById('app'));

const bookMap = {
  rulesbook,
};
const factionMap = {
  atreides,
  bg,
  bt,
  emperor,
  fremen,
  guild,
  harkonnen,
  ixian,
  landsraad,
};

const assetMap = {
  '/sheet': (id) => (
    <Book
      background={false}
      pages={[
        <AdvantagesSheet {...factionMap[id].sheet} />,
        <DetailsSheet {...factionMap[id].sheet} />,
      ]}
    />
  ),
};

const contentMap = {
  '/': () => <Index />,
  ...assetMap,
  '/book': (id) => <Book pages={bookMap[id]} />,
};

const keys = Object.keys(factionMap);

function Index() {
  return (
    <div>
      <h1>Factions</h1>
      <ul>
        {keys.map((k) => (
          <li>
            <a href={`sheet/?${k}`}>{k}</a>
          </li>
        ))}
      </ul>
      <h1>Books</h1>
      <ul>
        {Object.keys(bookMap).map((k) => (
          <li>
            <a href={`/book/?${k}`}>{k}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

const location = document.location.pathname;
const id = document.location.search.replace('?', '');

const [_, contentValue] = Object.entries(contentMap).find(([key, value]) =>
  key.startsWith('/' + location.replaceAll('/', ''))
);

root.render(<StrictMode>{contentValue(id || 'atreides')}</StrictMode>);
