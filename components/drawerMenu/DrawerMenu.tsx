import {
    Box,
    Drawer,
    ListItem,
    ListItemIcon,
    ListItemText
} from '@mui/material';
import { Link } from 'react-scroll';
import Home from '@mui/icons-material/Home';
import SendIcon from '@mui/icons-material/Send';
import AccountTree from '@mui/icons-material/AccountTree';
import DescriptionIcon from '@mui/icons-material/Description';

import { makeStyles } from '@material-ui/styles';

import { useEffect, useState } from 'react';

const menus = [
    { name: 'Home', icon: <Home sx={{ color: 'white' }} />, scroll: 'description' },
    { name: 'Tecnologias', icon: <AccountTree sx={{ color: 'white' }} />, scroll: 'tecnology' },
    { name: 'Projetos', icon: <DescriptionIcon sx={{ color: 'white' }} />, scroll: 'Projetos' },
    { name: 'Contato', icon: <SendIcon sx={{ color: 'white' }} />, scroll: 'contact' }
]

const useStyles = makeStyles({
    paper: {
        backgroundColor: '#0A171F',
    }
})

interface IDrawerMenu {
    open: boolean;
    close: () => void;
}

const DrawerMenu = ({ open, close }: IDrawerMenu) => {

    const [openDrawer, setOpenDrawer] = useState<boolean>(open);

    const classes = useStyles();

    useEffect(() => setOpenDrawer(open), [open]);

    const generateDrawerList = () => (
        <div>
            {menus.map(({ name, icon, scroll }, index) => (
                    <Link activeClass='active' key={index} to={scroll} spy={true} smooth={true} offset={20} duration={750} onClick={close}>
                        <ListItem button sx={{ width: '300px', marginBottom: '10px', color: '#fff' }} >
                                <ListItemIcon>{icon}</ListItemIcon>
                                <ListItemText primary={name}/>
                        </ListItem>
                    </Link>
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
