import { Fragment } from 'react';
import { Faction } from '../../shared/schema';
import { ContentArea, MainArea, NonBreaking } from './components/blocks';
import { Spaced } from '../../blocks/Spaced';
import { Title } from '../../blocks/Title';
import { MarkdownContent } from '../../components/MarkdownContent';
import { Text } from '../../blocks/Text';
import styled from '@emotion/styled';

export const AdvantageName = styled.strong({
  textTransform: 'uppercase',
});

export const FaqSheet = ({ assets, faq }: Pick<Faction, 'assets' | 'faq'>) => {
  return (
    <Fragment>
      <Title color={assets.color} style={{ marginBottom: '2vw' }}>
        Questions & Answers
      </Title>
      <MainArea>
        <Spaced>
          <ContentArea>
            <Spaced>
              {faq.map((a, i) => (
                <Text key={i}>
                  <div>
                    <AdvantageName>{a.question}</AdvantageName>
                    <div>
                      <MarkdownContent>{a.answer}</MarkdownContent>
                    </div>
                  </div>
                </Text>
              ))}
            </Spaced>
          </ContentArea>
        </Spaced>
      </MainArea>
    </Fragment>
  );
};
