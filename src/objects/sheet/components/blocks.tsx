import { FC, ReactNode } from 'react';
import { FactionAdvantage } from '../../../shared/schema';
import { MarkdownContent } from '../../../components/MarkdownContent';
import { Spaced } from '../../../blocks/Spaced';
import styled from '@emotion/styled';
import { Text } from '../../../blocks/Text';

const size = 2;

export const SheetAdvantages: FC<{
  advantages: FactionAdvantage[];
  header: ReactNode;
}> = ({ advantages, header }) => {
  const [head, ...rest] = advantages;

  return advantages.length > 0 ? (
    <Spaced>
      <NonBreaking>
        <Spaced>
          {header}
          <Text key="head" size={size}>
            {head.title ? (
              <div>
                <AdvantageName>
                  {head.title}
                  {head.karamaEffect ? '*' : ''}
                </AdvantageName>
                <div>
                  <MarkdownContent>: {head.body}</MarkdownContent>
                </div>
              </div>
            ) : (
              <MarkdownContent value={head.body} />
            )}
          </Text>
        </Spaced>
      </NonBreaking>

      {rest.map((a, i) => (
        <SheetBlock
          asterisk={!!a.karamaEffect}
          body={a.body}
          key={i}
          title={a.title}
        />
      ))}
    </Spaced>
  ) : null;
};

export function SheetBlock({
  title,
  body,
  asterisk,
}: {
  title?: string;
  body?: string;
  asterisk?: boolean;
  margin?: number;
}) {
  return (
    <Text size={size}>
      {title ? (
        <div>
          <AdvantageName>
            {title}
            {asterisk ? '*' : ''}
          </AdvantageName>
          {body && (
            <div>
              <MarkdownContent>: {body}</MarkdownContent>
            </div>
          )}
        </div>
      ) : (
        <MarkdownContent value={body} />
      )}
    </Text>
  );
}

export const ContentArea = styled.div({
  overflow: 'hidden',
  columns: '2',
  gap: '4vw',
  flex: 1,
});

export const LogoArea = styled.div({
  left: '2vw',
  top: '2vw',
  width: '12vw',
  height: '12vw',
  overflow: 'hidden',
  position: 'absolute',
  borderRadius: '50%',
  border: '0.5vw solid #f3edc2',
  boxShadow:
    '0.4vw 0.4vw 1vw 0  rgba(0,0,0,0.7), inset 0 0 20px 0  rgba(0,0,0,0.7)',
  background: 'red',
  boxSizing: 'border-box',
  marginTop: 0,

  '& > *': {
    transform: 'scale(1.2)',
    transformOrigin: 'center',
  },
});

export const HeadArea = styled(Text)({
  marginLeft: '11vw',
});

export const NonBreaking = styled.div({
  breakInside: 'avoid-column',
});

export const AdvantageName = styled.strong({
  float: 'left',
  textTransform: 'uppercase',
});

export const MainArea = styled.div({
  overflow: 'hidden',
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
});

export const DisplayAdvantagesDetails: FC<{
  advantages: FactionAdvantage[];
  header: ReactNode;
}> = ({ advantages, header }) => {
  const [head, ...rest] = advantages;

  return advantages.length > 0 ? (
    <Spaced>
      <NonBreaking>
        <Spaced>
          {header}
          <Text key="head" size={size}>
            {head.title ? (
              <div>
                <AdvantageName>{head.title}</AdvantageName>
                <div>
                  <MarkdownContent>: {head.karamaEffect}</MarkdownContent>
                </div>
              </div>
            ) : (
              <MarkdownContent value={head.karamaEffect} />
            )}
          </Text>
        </Spaced>
      </NonBreaking>

      {rest.map((a, i) => (
        <Text key={i} size={size}>
          {a.title ? (
            <div>
              <AdvantageName>{a.title}</AdvantageName>
              <div>
                <MarkdownContent>: {a.karamaEffect}</MarkdownContent>
              </div>
            </div>
          ) : (
            <MarkdownContent value={a.karamaEffect} />
          )}
        </Text>
      ))}
    </Spaced>
  ) : null;
};
