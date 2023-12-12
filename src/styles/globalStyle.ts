import { globalCss } from '@stitches/react';

const globalStyles = globalCss({
  '*': {
    margin: 0, padding: 0
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    '-webkit-font-smoothing': 'antialiased'
  },

  'body input textarea button': {
    fontFamily: 'Roboto',
    fontWeight: 400
  }
})

export default globalStyles