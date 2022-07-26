import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import { ChangeEvent, useState } from "react";
import Container from "../container/Container";
import ModalSuccess from "../modalSuccess/ModalSuccess";
import ModalFailed from "../modalFailed/ModalFailed";

const useStyles = makeStyles({
    input: {
        color: '#fff',
        'input::placeholder': {
            color: '#fff'
        } 
    }
});

interface IStyleTextField {
    [key: string]: string;
}

interface IContact {
    id: string;
}

interface IEmail {
    name: string;
    phone: string;
    subject: string;
    description: string;
    email: string;
}

const Contact = (props: IContact) => {

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [openSuccess, setOpenSuccess] = useState<boolean>(false);
    const [openFailed, setOpenFailed] = useState<boolean>(false);

    const handleChangeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setName(e.target.value);
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setPhone(e.target.value);
    const handleChangeSubject = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setSubject(e.target.value);
    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setDescription(e.target.value);
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setEmail(e.target.value);

    const handleClose = () => setOpenSuccess(false);
    const handleCloseFailed = () => setOpenFailed(false);

    const sendEmail = (): void => {

        const data: IEmail = {
            name: name,
            phone: phone,
            subject: subject,
            description: description,
            email: email
        }

        fetch("https://formsubmit.co/ajax/hermandodev@gmail.com", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(() => setOpenSuccess(true))
            .catch(() => setOpenFailed(true));
    }

    const classes: any = useStyles();

    const styleTextField: IStyleTextField = { marginTop: '10px', padding: '5px 0' };
    const styleBoxForm = { maxWidth: "500px", padding: "100px 20px 50px 20px", margin: "0 auto", textAlign: "center" }
    return(
        <Container id={props.id}>
            <ModalSuccess open={openSuccess} close={handleClose}/>
            <ModalFailed open={openFailed} close={handleCloseFailed}/>
            <Box component={'div'} sx={styleBoxForm}> 
                <h1>Contato</h1>
                <form>
                    <TextField 
                        id='name' 
                        label='Nome completo' 
                        variant="standard"
                        fullWidth
                        value={name}
                        onChange={(e) => handleChangeName(e)}
                        inputProps={{ className: classes.input }}
                        sx={styleTextField}
                    />
                        <TextField 
                            id='tel' 
                            label='Telefone' 
                            variant="standard"
                            fullWidth
                            value={phone}
                            onChange={(e) => handleChangePhone(e)}
                            inputProps={{ className: classes.input }}
                            sx={styleTextField}
                        />
                    <TextField 
                            id='email' 
                            label='E-mail' 
                            variant="standard"
                            fullWidth
                            type='email'
                            value={email}
                            onChange={(e) => handleChangeEmail(e)}
                            inputProps={{ className: classes.input }}
                            sx={styleTextField}
                        />
                    <TextField 
                        id='assunto' 
                        label='Assunto' 
                        variant="standard"
                        fullWidth
                        value={subject}
                        onChange={(e) => handleChangeSubject(e)}
                        inputProps={{ className: classes.input }}
                        sx={styleTextField}
                    />
                    <TextField 
                        id='descricao' 
                        label='Descrição' 
                        variant="standard"
                        fullWidth
                        rows={4}
                        multiline
                        value={description}
                        onChange={(e) => handleChangeDescription(e)}
                        inputProps={{ className: classes.input }}
                        sx={styleTextField}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{ marginTop: '10px' }}
                        onClick={sendEmail}
                    >
                        Enviar
                    </Button>
                </form>
            </Box>
        </Container>
    )    
}

export default Contact;
