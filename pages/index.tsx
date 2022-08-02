import type { NextPage } from 'next';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Description from '../components/description/Description';
import Tecnology from '../components/tecnology/Tecnology';
import Contact from '../components/contact/Contact';
import Container from '../components/container/Container';
import DrawerMenu from '../components/drawerMenu/DrawerMenu';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Description id='description'/>
      <Tecnology id='tecnology'/>
      <Contact />
      <Footer />
      <Container />
    </>
  )
}

export default Home;
