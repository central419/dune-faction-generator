import FlipToBack from '@mui/icons-material/FlipToBack';
import FlipToFront from '@mui/icons-material/FlipToFront';
import Stack from '@mui/material/Stack';
import { Fragment } from 'react';
import { Wrapper } from '../../components/Wrapper';
import { size } from '../../shared/disc';
import { Faction } from '../../shared/schema';
import { LeaderToken } from '../disc/leader_token';
import { TroopToken } from '../disc/troop_token';
import {
  SheetBlock,
  ContentArea,
  MainArea,
  NonBreaking,
} from './components/blocks';
import { Spaced } from '../../blocks/Spaced';
import { Title } from '../../blocks/Title';
import { DisplayAdvantagesDetails } from './components/blocks';

export const DetailsSheet = ({
  assets,
  rules,
}: Pick<Faction, 'assets' | 'name' | 'rules'>) => {
  const advantages = rules.advantages.filter((a) => a?.karamaEffect);
  const allianceAdvantages = rules.alliance.filter((a) => a?.karamaEffect);

  return (
    <Fragment>
      <Title color={assets.color} style={{ marginBottom: '2vw' }}>
        Karama effects
      </Title>
      <MainArea>
        <Spaced>
          <ContentArea>
            <Spaced>
              <DisplayAdvantagesDetails
                advantages={advantages}
                header={
                  <Title size="small" color={assets.color}>
                    Advantage{advantages.length > 1 ? 's' : ''}
                  </Title>
                }
              />
              {allianceAdvantages.length > 0 && (
                <NonBreaking>
                  <DisplayAdvantagesDetails
                    advantages={allianceAdvantages}
                    header={
                      <Title size="small" color={assets.color}>
                        Alliance
                      </Title>
                    }
                  />
                </NonBreaking>
              )}
            </Spaced>
          </ContentArea>
        </Spaced>
      </MainArea>

      <Stack direction="column" spacing={'4vw'}>
        <Stack direction="column" spacing={'4vw'}>
          {assets.troops.map((troop, i) => (
            <Spaced key={i}>
              <Stack alignItems="center" direction="row" spacing={'2vw'}>
                <Wrapper isCircle={true} size={size} style={{ width: '7vw' }}>
                  <TroopToken
                    color={assets.color}
                    id={`${i}-front`}
                    pattern={assets.pattern}
                    {...troop.front}
                  />
                </Wrapper>
                {troop.back && (
                  <div>
                    <FlipToFront style={{ width: '4.5vw', height: '4.5vw' }} />
                  </div>
                )}
                <div style={{ flex: 1 }}>
                  <SheetBlock
                    body={troop.front.description}
                    margin={0}
                    title={troop.front.name}
                  />
                </div>
              </Stack>
              {troop.back ? (
                <Stack alignItems="center" direction="row" spacing={'2vw'}>
                  <Wrapper isCircle={true} size={size} style={{ width: '7vw' }}>
                    <TroopToken
                      color={assets.color}
                      id={`${i}-back`}
                      pattern={assets.pattern}
                      {...troop.back}
                    />
                  </Wrapper>
                  <div>
                    <FlipToBack style={{ width: '4.5vw', height: '4.5vw' }} />
                  </div>
                  {troop.back.description && (
                    <div style={{ flex: 1 }}>
                      <SheetBlock
                        body={troop.back.description}
                        margin={0}
                        title={troop.back.name}
                      />
                    </div>
                  )}
                </Stack>
              ) : null}
            </Spaced>
          ))}
        </Stack>

        <Stack direction="row" spacing={'2vw'}>
          {[...assets.leaders]
            .sort((a, b) => parseInt(a.strength, 10) - parseInt(b.strength, 10))
            .map((leader, index) => (
              <Wrapper
                isCircle={true}
                key={index}
                size={size}
                style={{ flex: 1, maxWidth: '25%' }}
              >
                <LeaderToken
                  color={assets.color}
                  logo={assets.logo}
                  pattern={assets.pattern}
                  {...leader}
                />
              </Wrapper>
            ))}
        </Stack>
      </Stack>
    </Fragment>
  );
};
