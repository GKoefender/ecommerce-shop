import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$gray400',
  borderRadius: '9999px',
  fontSize: '13px',
  border: '0',
})

const Home = () => {
  return (
    <div>
      <Button>
        testeee
      </Button>
    </div>
  )
}

export default Home