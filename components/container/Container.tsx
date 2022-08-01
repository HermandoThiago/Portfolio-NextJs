import { StyledContainer } from './style';
import { Box } from '@mui/material';

interface IContaner{
    children?: React.ReactNode,
    color?: string;
}

const Container = ({ children, color }: IContaner) => {
    return( 
        <Box sx={{ backgroundColor: color, width: '100%'}} >
            <StyledContainer color={color}>
                {children}
            </StyledContainer>
        </Box>
    )
};

export default Container;
