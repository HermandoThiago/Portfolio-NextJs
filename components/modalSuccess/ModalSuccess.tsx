import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface IPropsModalSuccess {
    open: boolean;
    close: () => void;
}

const ModalSuccess = ({ open, close }: IPropsModalSuccess) => {
    
    const [openModal, setOpenModal] = useState<boolean>(open);

    useEffect(() => {
        setOpenModal(open);
    }, [open]);

    return(
        <Dialog open={openModal} onClose={close}>
        <DialogTitle>Muito obrigado por entrar em contato!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Seus dados foram enviados com sucesso, em pouco tempo retornarei a sua mensagem.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Fechar</Button>
        </DialogActions>
      </Dialog>
    )
}

export default ModalSuccess;