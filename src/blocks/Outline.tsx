import styled from '@emotion/styled';

const variation = {
  generic: {
    background: '#EFE0B3',
  },
  example: {
    color: 'white',
    background: '#A5955E',
  },
};

export const Outline = styled.div<{ variant: keyof typeof variation }>(
  {
    padding: '2vw',
  },
  ({ variant }) => variation[variant]
);
