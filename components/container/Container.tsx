import { StyledContainer } from './style';
import { Box } from '@mui/material';

interface IContaner{
    children?: React.ReactNode,
    color?: string;
    id?: string;
}

const Container = ({ children, color, id }: IContaner) => {
    return( 
        <Box sx={{ backgroundColor: color, width: '100%'}} component={'div'} id={id}>
            <StyledContainer color={color}>
                {children}
            </StyledContainer>
        </Box>
    )
};

export default Container;
