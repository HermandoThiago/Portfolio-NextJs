import { Box, Typography } from "@mui/material";
import Container from "../container/Container";

const Footer = () => {
    return(
        <Container color="#0A171F">
            <Box sx={{ textAlign: 'center', width: '100%', padding: '20px 0', backgroundColor: '#0A171F' }}>
                <Typography fontSize={15} fontStyle='italic' color='#fff'>copyright &copy; Hermando Thiago </Typography>
            </Box>
        </Container>
    )
}

export default Footer;
