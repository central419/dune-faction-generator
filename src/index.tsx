import AutoStoriesIcon from '@mui/icons-material/AutoStories';
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
import CssBaseline from '@mui/material/CssBaseline';
import { Book } from './objects/book/book';
import { FaqSheet } from './objects/sheet/faq';
import { Wrapper } from './components/Wrapper';
import { size } from './shared/disc';
import { FactionToken } from './objects/disc/faction_token';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import { Title } from './blocks/Title';

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
        ...(factionMap[id].sheet.faq.length > 0
          ? [<FaqSheet {...factionMap[id].sheet} />]
          : []),
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

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function Index() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          justifyContent: 'center',
          justifyItems: 'center',
          alignItems: 'center',
          alignContent: 'center',
        }}
      >
        <Title color="#000000">Factions</Title>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.900' }}>
          <List>
            {keys.map((k) => (
              <ListItem disablePadding key={k}>
                <ListItemButton component="a" href={`sheet/?${k}`}>
                  <ListItemIcon>
                    <Wrapper
                      isCircle={true}
                      size={size}
                      style={{ display: 'inline-flex', maxWidth: '28px' }}
                    >
                      <FactionToken
                        color={factionMap[k].sheet.assets.color}
                        logo={factionMap[k].sheet.assets.logo}
                        pattern={factionMap[k].sheet.assets.pattern}
                      />
                    </Wrapper>
                  </ListItemIcon>
                  <ListItemText primary={k} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Title color="#000000">Books</Title>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.900' }}>
          <List>
            {Object.keys(bookMap).map((k) => (
              <ListItem disablePadding key={k}>
                <ListItemButton component="a" href={`book/?${k}`}>
                  <ListItemIcon>
                    <AutoStoriesIcon />
                  </ListItemIcon>
                  <ListItemText primary={k} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

const location = document.location.pathname;
const id = document.location.search.replace('?', '');

const [_, contentValue] = Object.entries(contentMap).find(([key, value]) =>
  key.startsWith('/' + location.replaceAll('/', ''))
);

root.render(<StrictMode>{contentValue(id || 'atreides')}</StrictMode>);
