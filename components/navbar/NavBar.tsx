import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";

import Image from "next/image";

const NavBar = () => {
    return(
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: '#0A171F', paddingY: '0' }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            sx={{ mr: 2 }}
                        >
                            <Image src='/react.svg' height={30} width={30}/>
                            <h4 style={{ color: '#fff', marginLeft: '5px', fontSize: '20px' }}>
                                HermandoDev
                            </h4>
                        </IconButton>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Box>
                            <Button sx={{ color: 'white' }}><a href=''>Home</a></Button>
                            <Button sx={{ color: 'white' }}><a href='#tecnology'>Tecnologias</a></Button>
                            <Button sx={{ color: 'white' }}>Projetos</Button>
                            <Button sx={{ color: 'white' }}>Contato</Button>
                            </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;