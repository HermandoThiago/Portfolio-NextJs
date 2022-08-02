import { Box } from "@mui/system";
import { AppBar, Toolbar, IconButton, Button } from "@mui/material";
import Image from "next/image";
import MenuIcon from '@mui/icons-material/Menu';
import DrawerMenu from "../drawerMenu/DrawerMenu";
import { useState } from 'react';

const NavBar = () => {

    const [open, setOpen] = useState<boolean>(false);

    const handleDrawer = () => setOpen(!open);

    return(
        <div>
            {open && (
                <DrawerMenu 
                    open={open} 
                    close={handleDrawer}/>
            )}
            <Box sx={{ flexGrow: 1 }}>
                <AppBar sx={{ backgroundColor: '#0A171F' }}>
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
                            <Button onClick={handleDrawer}>
                                <MenuIcon sx={{ color: '#fff' }} />
                            </Button>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    )
}

export default NavBar;