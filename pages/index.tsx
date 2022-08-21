import type { NextPage } from 'next';
import NavBar from '../components/navbar/NavBar';
import Footer from '../components/footer/Footer';
import Description from '../components/description/Description';
import Tecnology from '../components/tecnology/Tecnology';
import Contact from '../components/contact/Contact';
import Projects from '../components/projects/Projects';

const Home: NextPage = () => {
  return (
    <>
      <NavBar />
      <Description id='description'/>
      <Tecnology id='tecnology'/>
      <Projects id='Projetos'/>
      <Contact id='contact'/>
      <Footer />
    </>
  )
}

export default Home;
