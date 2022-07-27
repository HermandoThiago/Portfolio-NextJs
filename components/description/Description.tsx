import { Box, Typography } from "@mui/material";
import { StyledTextBackground } from './style';

interface IDescriptionProps {
    id: string;
}

const Description = (props: IDescriptionProps) => {
    return(
        <Box 
            marginTop='100px'
            width='100%' 
            height='500px' 
            display='flex' 
            alignItems='center'
            textAlign='center'
            position='relative'
            id={props.id}
            sx={{ justifyContent: 'center', overflowY: 'hidden' }}
        >
            <StyledTextBackground variant='front'>
                Front
            </StyledTextBackground>
            <StyledTextBackground>
                End
            </StyledTextBackground>

            <Box sx={{ zIndex: 10 }}>
                <Typography fontSize='70px' fontWeight='bold'>
                    Hermando Thiago
                </Typography>
                <Typography fontSize='30px' style={{ fontWeight: 'lighter', color: 'lightgray' }}>
                    Desenvolvedor Front-End
                </Typography>
            </Box>
        </Box>
    )
}

export default Description;
