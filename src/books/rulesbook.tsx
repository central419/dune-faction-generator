import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';
import { Outline } from '../blocks/Outline';
import { Definitions } from '../blocks/Definitions';
import { Wrapper } from '../components/Wrapper';
import { FactionToken } from '../objects/disc/faction_token';
import { size } from '../shared/disc';

import * as emperor from '../factions/emperor';
import * as guild from '../factions/guild';
import * as fremen from '../factions/fremen';
import * as atreides from '../factions/atreides';
import * as ixian from '../factions/ixian';
import * as bg from '../factions/bg';
import * as bt from '../factions/bt';
import * as harkonnen from '../factions/harkonnen';
import { TroopToken } from '../objects/disc/troop_token';
import { Cover } from '../objects/book/cover';

import coverA from '../asset/cover/cover-a.svg';
import coverB from '../asset/cover/cover-b.svg';
import coverC from '../asset/cover/cover-c.svg';
import coverD from '../asset/cover/cover-d.svg';
import { blue1 } from '../presets/colors';

const factions = [emperor, guild, fremen, ixian, atreides, bg, bt, harkonnen];

export const ratio = Math.sqrt(2);

export const cover = <Cover background={coverB} offset={80} />;

export const pages = [
  <Fragment>
    <Spaced>
      <Title color={blue1}>Welcome Rulesbook</Title>
      <Text columns={2}>
        <h1>Table of contents:</h1>
        <ol>
          <li>First item</li>
          <li>Second item</li>
        </ol>
        <p>
          Fusce nec nisi venenatis dui volutpat congue nec nec metus. Quisque
          felis metus, lacinia ut est vel, eleifend commodo felis. Nam eu orci
          tempus, bibendum urna sed, sagittis nunc. Vestibulum sed lacus ac
          justo congue rhoncus quis at arcu.
        </p>
      </Text>
      <Outline variant="example">
        <Text>
          <h1>Hi</h1>
          <p>Hello</p>
        </Text>
      </Outline>
      <Outline variant="generic">
        <Text>
          <h1>Hi</h1>
          <p>Hello</p>
        </Text>
      </Outline>
      <Text>
        <Definitions>
          <dt>Beast of Bodmin</dt>
          <dd>A large feline inhabiting Bodmin Moor.</dd>

          <dt>Morgawr</dt>
          <dd>A sea serpent.</dd>

          <dt>Owlman</dt>
          <dd>
            <p>A giant owl-like creature.</p>
            <p>A giant owl-like creature.</p>
            <p>A giant owl-like creature.</p>
          </dd>
        </Definitions>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color={blue1}>Page 1</Title>
      <Text columns={3}>
        <p>
          <strong>Vivamus egestas efficitur porta</strong>. Fusce vulputate
          risus nec elit dictum congue. Sed ultrices, nibh ut pharetra molestie,
          ex mauris commodo massa, eget suscipit lorem enim eu felis. Mauris
          auctor feugiat purus, sed rutrum odio maximus et.
        </p>
        <hr />
        <p>
          Fusce nec nisi venenatis dui volutpat congue nec nec metus. Quisque
          felis metus, lacinia ut est vel, eleifend commodo felis. Nam eu orci
          tempus, bibendum urna sed, sagittis nunc. Vestibulum sed lacus ac
          justo congue rhoncus quis at arcu.
        </p>
        <img
          src="https://cdn.vox-cdn.com/thumbor/f_OIlY3ZAfE2SfKD0cWnJRI6m-c=/0x0:2040x1360/1820x1213/filters:focal(916x674:1242x1000)/cdn.vox-cdn.com/uploads/chorus_image/image/64985739/Dune_charlie_cropped.0.jpg"
          alt=""
        />
        <p>
          Morbi efficitur accumsan tincidunt. Maecenas efficitur, ligula at
          aliquet tempus, risus tortor condimentum dolor, bibendum eleifend erat
          felis vel dolor. Suspendisse vehicula lacus non lacinia rhoncus.
          Praesent orci mauris, consequat fringilla dapibus vitae, lacinia ac
          orci.
        </p>
        <p>
          Integer ipsum massa, dapibus non congue a, ultricies eu orci. Maecenas
          ullamcorper tellus magna. Nunc a metus tellus. Pellentesque vitae
          lacinia magna, eget posuere risus. Sed id metus pharetra, rhoncus
          turpis vel, volutpat diam. Donec tristique est in ipsum cursus, sit
          amet viverra urna bibendum. Integer at risus lobortis, faucibus nisi
          vitae, fermentum ante. Donec pellentesque fermentum eros, id ornare
          nisl feugiat quis. In hac habitasse platea dictumst. Ut sodales quis
          felis et tempus. Nullam tempor odio diam, non suscipit sapien finibus
          quis. Sed sed egestas mi, at sagittis metus. Curabitur tempus leo eget
          mollis porta. Integer efficitur et nisi et semper. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Morbi rutrum, dui vel interdum imperdiet, quam nulla condimentum
          justo, a maximus nibh magna sed quam. Mauris lacus ipsum, venenatis ut
          elementum et, blandit sed augue. Maecenas convallis turpis in
          scelerisque porttitor.
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Text>
        <h1>Title</h1>
      </Text>
      <Text columns={2}>
        <p>
          Integer ipsum massa, dapibus non congue a, ultricies eu orci. Maecenas
          ullamcorper tellus magna. Nunc a metus tellus. Pellentesque vitae
          lacinia magna, eget posuere risus. Sed id metus pharetra, rhoncus
          turpis vel, volutpat diam. Donec tristique est in ipsum cursus, sit
          amet viverra urna bibendum. Integer at risus lobortis, faucibus nisi
          vitae, fermentum ante. Donec pellentesque fermentum eros, id ornare
          nisl feugiat quis. In hac habitasse platea dictumst. Ut sodales quis
          felis et tempus. Nullam tempor odio diam, non suscipit sapien finibus
          quis. Sed sed egestas mi, at sagittis metus. Curabitur tempus leo eget
          mollis porta. Integer efficitur et nisi et semper. Orci varius natoque
          penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <p>
          Morbi rutrum, dui vel interdum imperdiet, quam nulla condimentum
          justo, a maximus nibh magna sed quam. Mauris lacus ipsum, venenatis ut
          elementum et, blandit sed augue. Maecenas convallis turpis in
          scelerisque porttitor. Orci varius natoque penatibus et magnis dis
          parturient montes, nascetur ridiculus mus. In hac habitasse platea
          dictumst. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris et justo quis elit dapibus faucibus. Sed dapibus lacus nec diam
          malesuada convallis. Mauris aliquet, quam ac iaculis aliquet, nunc
          mauris egestas leo, at rutrum neque urna sit amet velit. Donec
          lacinia, est ac luctus luctus, arcu enim vestibulum arcu, vitae
          ultrices nibh neque ut nulla. Orci varius natoque penatibus et magnis
          dis parturient montes, nascetur ridiculus mus. Vestibulum id est sed
          lorem lobortis ullamcorper vel ac ex. Etiam sodales lorem suscipit,
          iaculis erat pulvinar, vulputate metus. Nunc pharetra, nunc a porta
          lobortis, tortor metus hendrerit elit, non varius turpis urna at
          metus.
        </p>
      </Text>
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <div style={{ display: 'flex', gap: '1vw' }}>
        {Object.entries(factions).map(([k, v]) => (
          <Fragment key={k}>
            <Wrapper
              key={k}
              isCircle={true}
              size={size}
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
      <Text>
        <table>
          <thead>
            <tr>
              <th>a</th>
              <th>b</th>
              <th>c</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
            </tr>
            <tr>
              <td>21</td>
              <td>22</td>
              <td>22</td>
            </tr>
            <tr>
              <td>31</td>
              <td>32</td>
              <td>33</td>
            </tr>
          </tbody>
        </table>
        {Object.values(factions)
          .map((f) => ({ sheet: f.sheet, tokens: f.sheet.assets.troops }))
          .map(({ sheet, tokens: v }, i) => (
            <Fragment key={i}>
              {v.map((ii, iii) => (
                <Fragment key={iii}>
                  {ii.front && (
                    <Fragment>
                      <Wrapper
                        isCircle={true}
                        size={size}
                        style={{ flex: 1, maxWidth: '6vw' }}
                      >
                        <TroopToken
                          color={sheet.assets.color}
                          variant={ii.front.variant}
                          pattern={sheet.assets.pattern}
                          modifiers={ii.front.modifiers}
                        />
                      </Wrapper>
                    </Fragment>
                  )}
                  {ii.back && (
                    <Fragment>
                      <Wrapper
                        isCircle={true}
                        size={size}
                        style={{ flex: 1, maxWidth: '6vw' }}
                      >
                        <TroopToken
                          color={sheet.assets.color}
                          variant={ii.back.variant}
                          pattern={sheet.assets.pattern}
                          modifiers={ii.back.modifiers}
                        />
                      </Wrapper>
                    </Fragment>
                  )}
                </Fragment>
              ))}
            </Fragment>
          ))}
      </Text>
    </Spaced>
  </Fragment>,
];
