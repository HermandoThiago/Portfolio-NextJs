import {
    Box,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';

import Home from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AccountTree from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';

import { makeStyles } from '@material-ui/styles';

import { useEffect, useState } from 'react';

const menus = [
    { name: 'Home', icon: <Home sx={{ color: 'white' }} /> },
    { name: 'Tecnologias', icon: <AccountTree sx={{ color: 'white' }} /> },
    { name: 'Projetos', icon: <DescriptionIcon sx={{ color: 'white' }} /> },
    { name: 'Contato', icon: <SendIcon sx={{ color: 'white' }} /> }
]

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#0A171F',
    }
})

interface IDrawerMenu {
    open: boolean;
    close?: () => void;
}

const DrawerMenu = ({ open, close }: IDrawerMenu) => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(open);

    const classes = useStyles();

    useEffect(() => setOpenDrawer(open), [open]);

    const generateDrawerList = () => (
        <div>
            {menus.map(({ name, icon }, index) => (
                <ListItem button key={index} sx={{ width: '300px', marginBottom: '10px', color: '#fff' }}>
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText primary={name} />
                </ListItem>
            ))}
        </div>
    )

    return (
        <div>
            <Drawer
                classes={{ paper: classes.paper }} 
                open={openDrawer} 
                anchor='right'
                onClose={close}
            >
                <Box sx={{ height: '50px', width: '100%'  }}></Box>
                {generateDrawerList()}
            </Drawer>
        </div>
    )
}

export default DrawerMenu;
