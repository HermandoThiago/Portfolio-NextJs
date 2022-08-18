import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IPropsModalFailed {
    open: boolean;
    close: () => void;
}

const ModalFailed = ({ open, close }: IPropsModalFailed) => {
    const [openModal, setOpenModal] = useState<boolean>(open);

    useEffect(() => {
        setOpenModal(open);
    }, [open]);

    return(
        <Dialog open={openModal} onClose={close}>
        <DialogTitle>Erro no envio</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Aconteceu um erro no envio dos seus dados, tente novamente.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Fechar</Button>
        </DialogActions>
      </Dialog>
    )
}

export default ModalFailed;
