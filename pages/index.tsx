import type { NextPage } from 'next'
import NavBar from '../components/navbar/NavBar'
import Footer from '../components/footer/Footer'

const Home: NextPage = () => {
  return (
    <>
      <NavBar id='navbar' />
      <Footer />
    </>
  )
}

export default Home
