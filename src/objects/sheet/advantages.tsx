import { FactionToken } from '../disc/faction_token';

import { SheetAdvantages } from './components/blocks';
import {
  AdvantageName,
  ContentArea,
  HeadArea,
  LogoArea,
  MainArea,
} from './components/blocks';
import { MarkdownContent } from '../../components/MarkdownContent';
import { Faction } from '../../shared/schema';
import { ComponentProps, FC, Fragment } from 'react';
import { Title } from '../../blocks/Title';
import { Size } from '../../shared/types';
import styled from '@emotion/styled';
import { Spaced } from '../../blocks/Spaced';

export const Svg = styled.svg<{ isCircle?: boolean }>(
  {
    display: 'block',
    overflow: 'hidden',
    boxShadow: '3px 3px 20px rgba(0,0,0,0.4)',
  },
  ({ isCircle }) => ({ borderRadius: isCircle ? '50%' : 8 })
);

const size = { width: 900, height: 900 };

export const Wrapper: FC<
  ComponentProps<typeof Svg> & { size: Size; isCircle?: boolean }
> = ({ size, children, isCircle, ...rest }) => (
  <Svg
    {...rest}
    isCircle={isCircle}
    viewBox={`0 0 ${size.width} ${size.height}`}
    xmlns="http://www.w3.org/2000/svg"
  >
    <foreignObject x="0" y="0" {...size}>
      {children}
    </foreignObject>
  </Svg>
);

export const AdvantagesSheet = ({
  name,
  assets,
  rules,
}: Pick<Faction, 'assets' | 'name' | 'rules'>) => {
  return (
    <Fragment>
      <Spaced>
        <Title color={assets.color}>{name}</Title>
        <LogoArea>
          <Wrapper
            isCircle={true}
            size={size}
            style={{ flex: 1, maxWidth: '100%' }}
          >
            <FactionToken
              color={assets.color}
              logo={assets.logo}
              pattern={assets.pattern}
            />
          </Wrapper>
        </LogoArea>
        <HeadArea size={2}>
          <div>
            <div>
              <AdvantageName>AT START</AdvantageName>
              <MarkdownContent forceInline>: {rules.startText}</MarkdownContent>
            </div>
            <div>
              <AdvantageName>FREE REVIVAL</AdvantageName>
              <MarkdownContent forceInline>
                : {rules.revivalText}
              </MarkdownContent>
            </div>
          </div>
        </HeadArea>
        <MainArea>
          <ContentArea>
            <Spaced>
              <SheetAdvantages
                advantages={rules.advantages.filter((a) => !a?.advanced)}
                header={
                  <Title color={assets.color} size="small">
                    Advantage{rules.advantages.length > 1 ? 's' : ''}
                  </Title>
                }
              />
              <SheetAdvantages
                advantages={rules.advantages.filter((a) => a?.advanced)}
                header={
                  <Title color={assets.color} size="small">
                    Advanced advantage
                    {rules.advantages.filter((a) => a?.advanced).length > 1
                      ? 's'
                      : ''}
                  </Title>
                }
              />
              {rules.alliance.length > 0 && (
                <SheetAdvantages
                  advantages={rules.alliance}
                  header={
                    <Title color={assets.color} size="small">
                      Alliance
                    </Title>
                  }
                />
              )}
              {rules.karama.length > 0 && (
                <SheetAdvantages
                  advantages={rules.karama}
                  header={
                    <Title color={assets.color} size="small">
                      Advanced karama
                    </Title>
                  }
                />
              )}
              {rules.fate.length > 0 && (
                <SheetAdvantages
                  advantages={rules.fate}
                  header={
                    <Title color={assets.color} size="small">
                      Fate
                    </Title>
                  }
                />
              )}
            </Spaced>
          </ContentArea>
        </MainArea>
      </Spaced>
    </Fragment>
  );
};
