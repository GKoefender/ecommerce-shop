import { styled } from '../index'


const ProductContainer = styled('main', {
  display: 'flex',
  maxWidth: 1180,
  margin: '0 auto',

  height: 'calc(100vh - 120px - (100vh * 0.2))'
})

const ProductImage = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 16px 0 16px',

})

const ProductResume = styled('div', {
  marginLeft: 72,

  display: 'flex',
  flexDirection: 'column',
  fontFamily: 'Roboto',
  justifyContent: 'space-between',

  div: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',

    strong: {
      // TODO verificar variaveis do fontsize
      fontSize: '32px',
      fontWeight: 'bold'
    },

    span: {
      fontSize: '32px',
      marginTop: '16px',
      color: '$green300'
    },

    text: {
      marginTop: 40,
      fontSize: 18,
      color: '$gray300'
    }
  },

  button: {
    background: '$green300',
    color: '$white',
    padding: '20px 0 20px 0',

    fontSize: 18,
    fontWeight: 'bold',

  }
})

export { ProductContainer, ProductImage, ProductResume }