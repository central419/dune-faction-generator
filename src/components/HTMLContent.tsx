import styled from '@emotion/styled';

export const HTMLContent = styled.div({
  'h1,h2,h3,h4,h5,h6,p,img,hr,ul,ol,li': {
    marginTop: 0,
    paddingTop: 0,
    marginBottom: 0,
    paddingBottom: 0,

    '& + *': {
      marginTop: '0.45em',
    },
  },
  h1: {
    fontFamily: 'C_Copperplate_Gothic',
    fontSize: `35px`,
  },
  'h2,h3,h4,h5,h6': {
    fontFamily: 'C_Trebuchet',
  },
  hr: {
    margin: 0,
    padding: 0,
    borderTop: '0 none',
    borderLeft: '0 none',
    borderRight: '0 none',
    height: 0,
    borderBottom: '1px solid silver',
  },
});
