import { Box, Typography } from "@mui/material";
import { StyledTextBackground } from './style';
import Container from '../container/Container';

interface IDescriptionProps {
    id: string;
}

const Description = (props: IDescriptionProps) => {
    return(
        <Container>
            <Box 
                marginTop='100px'
                width='100%' 
                height='600px'
                display='flex' 
                alignItems='center'
                textAlign='center'
                position='relative'
                id={props.id}
                sx={{ justifyContent: 'center', overflow: 'hidden' }}
            >
                <StyledTextBackground variant='front'>Front</StyledTextBackground>
                <StyledTextBackground variant='back'>End</StyledTextBackground>
                <Box sx={{ zIndex: 10 }}>
                    <Typography fontSize='70px' fontWeight='bold'>
                        Hermando Thiago
                    </Typography>
                    <Typography fontSize='30px' style={{ fontWeight: 'lighter', color: 'lightgray' }}>
                        Desenvolvedor Front-End
                    </Typography>
                </Box>
            </Box>
        </Container>
    )
}

export default Description;
