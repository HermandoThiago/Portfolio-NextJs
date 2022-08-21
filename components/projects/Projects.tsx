import CardProject from "../cardProject/CardProject";
import Container from '../container/Container';
import { Box } from "@mui/material";
import { data as listCards } from '../../data/projects';

interface IPropsProjects {
    id: string;
}

const Projects = ({ id }: IPropsProjects) => {

    const cardStyle = { 
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
     }

    return(
        <Container id={id}>
            <Box
                width='100%'
                sx={{ paddingTop: '100px' }}
            >
                <div>
                    <h1 style={{ textAlign: 'center' }}>Projetos</h1>
                </div>
                <Box sx={cardStyle}>
                    {listCards.map(({name, linkGit, description, image}, index) => (
                        <CardProject
                            key={index} 
                            name={name}
                            linkGit={linkGit}
                            description={description}
                            image={image}
                        />
                    ))}
                </Box>
            </Box>
        </Container>
    )
}

export default Projects;