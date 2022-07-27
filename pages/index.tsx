import type { NextPage } from 'next';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Description from '../components/description/Description';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Description id='description'/>
      <Footer />
    </>
  )
}

export default Home;
