import { Box, Typography } from "@mui/material";

const Footer = () => {
    return(
        <Box sx={{ textAlign: 'center', position: 'absolute', bottom: 0, width: '100%', padding: '20px 0', backgroundColor: '#0A171F' }}>
            <Typography fontSize={15} fontStyle={'italic'} color='#fff'>coyright &copy; Hermando Thiago </Typography>
        </Box>
    )
}

export default Footer;
