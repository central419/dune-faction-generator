import { Fragment } from 'react';
import { Title } from '../blocks/Title';
import { Text } from '../blocks/Text';
import { Spaced } from '../blocks/Spaced';

export const pages = [
  <Fragment>
    <Spaced>
      <Title color="#1B2C43">Welcome Rulesbook</Title>
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
    </Spaced>
  </Fragment>,
  <Fragment>
    <Spaced>
      <Title color="#1B2C43">Page 1</Title>
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
      <Text>
        <hr />
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
];