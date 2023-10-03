import { Fragment, ReactNode, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { Index } from './components/Root';

import { DetailsSheet } from './objects/sheet/details';
import { AdvantagesSheet } from './objects/sheet/advantages';
import { Book } from './objects/book/book';
import { FaqSheet } from './objects/sheet/faq';

import { factions } from './presets/factions';
import { books } from './presets/books';

const contentMap: Record<string, (id: string) => ReactNode> = {
  '/': () => <Index />,
  '/sheet': (id) => (
    <Book
      background={false}
      pages={[
        <AdvantagesSheet {...factions[id].sheet} />,
        <DetailsSheet {...factions[id].sheet} />,
        ...(factions[id].sheet.faq.length > 0
          ? [<FaqSheet {...factions[id].sheet} />]
          : []),
      ]}
    />
  ),
  '/book': (id) => <Book {...books[id]} />,
};

const location = document.location.pathname;
const id = document.location.search.replace('?', '');

const [_, contentValue] = Object.entries(contentMap).find(([key, value]) =>
  key.startsWith('/' + location.replaceAll('/', ''))
);

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <Fragment>{contentValue(id || 'atreides')}</Fragment>
  </StrictMode>
);
