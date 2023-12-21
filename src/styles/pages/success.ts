import { styled } from '../index'


const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 1180,
  margin: '0 auto',

  height: 'calc(100vh - 120px - (100vh * 0.2))',

  fontFamily: 'Roboto',

  h1: {
    fontSize: 32,
    fontWeight: 'bold'
  },

  h3: {
    textAlign: 'center',
    maxWidth: 400,
    marginTop: '2rem',
    fontWeight: 'normal'
  },

  span: {
    fontWeight: 'bold'
  },

  button: {
    fontSize: 20,
    overflow: 'hidden',
    border: 'none',
    cursor: 'pointer',
    marginTop: 'auto',
    background: 'none',
    color: '$green500',

    '&:hover': {
      opacity: 0.6
    }
  }
})

const ProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px 0 16px',

  marginTop: 64,
})

export { ProductImage, SuccessContainer }