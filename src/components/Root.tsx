import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import CssBaseline from '@mui/material/CssBaseline';
import { Wrapper } from './Wrapper';
import { size } from '../shared/disc';
import { FactionToken } from '../objects/disc/faction_token';
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
import { Title } from '../blocks/Title';
import { factions } from '../presets/factions';
import { books } from '../presets/books';

const keys = Object.keys(factions);

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export function Index() {
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
        <Title color="#121212">Factions</Title>
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
                        color={factions[k].sheet.assets.color}
                        logo={factions[k].sheet.assets.logo}
                        pattern={factions[k].sheet.assets.pattern}
                      />
                    </Wrapper>
                  </ListItemIcon>
                  <ListItemText primary={k} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
        <Title color="#121212">Books</Title>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'grey.900' }}>
          <List>
            {Object.keys(books).map((k) => (
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
