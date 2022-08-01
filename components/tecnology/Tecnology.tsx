import { Grid, Box, Typography } from "@mui/material";
import CardTecnology from '../CardTecnology/CardTecnology';
import Container from '../container/Container';

interface ITecnologyProps {
    id: string;
}

const arraySvg = [
    '/react.svg', '/sass.svg', '/css3.svg', 
    '/html.svg', '/bootstrap.svg', '/material.svg',
    '/tailwind.svg', '/javascript.svg', '/typescript.svg',
    '/next.svg', '/python.svg', '/figma.svg'
];

const Tecnology = (props: ITecnologyProps) => {

    const boxStyles = { justifyContent: 'center', marginTop: '20px', marginX: 'auto', overflowX: 'hidden' };

    return(
        <Container>
            <Box
                textAlign='center'
                display='flex'
                alignItems='center'
                flexDirection='column'
                position='relative'
                sx={boxStyles}
            >
                <Typography
                    fontWeight='bold'
                    fontSize='13rem' 
                    sx={{ 
                        position: 'absolute',
                        zIndex: 5,
                        opacity: 0.05, 
                        userSelect: 'none'
                    }}
                >
                    Tecnologias
                </Typography>
                <Box zIndex={10}>
                <Typography fontSize='2rem' fontWeight='bold'>Tecnologias</Typography>
                </Box>
                <Box zIndex={10}>
                <Grid container spacing={1} sx={{ paddingY: '20px' }}>
                {arraySvg.map((svg: string, i: number) => (
                    <Grid item key={i} xs={6} md={3}>
                        <CardTecnology svg={svg}/>
                    </Grid>
                ))}  
                </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Tecnology;