import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
//import InputMask from "react-input-mask";
import { ChangeEvent, useState } from "react";
import Container from "../container/Container";

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

interface IReturnSendEmail {
    message: string;
    success: string;
}

const Contact = (props: IContact) => {

    const [name, setName] = useState<string>("");
    const [phone, setPhone] = useState<string>("");
    const [subject, setSubject] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [email, setEmail] = useState<string>("");

    const handleChangeName = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setName(e.target.value);
    const handleChangePhone = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setPhone(e.target.value);
    const handleChangeSubject = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setSubject(e.target.value);
    const handleChangeDescription = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setDescription(e.target.value);
    const handleChangeEmail = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => setEmail(e.target.value);

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
            .then(data => console.log(data))
            .catch(error => console.log(error));
    }

    const classes: any = useStyles();

    const styleTextField: IStyleTextField = { marginTop: '10px', padding: '5px 0' };

    return(
        <Container id={props.id}>
            <Box component={'div'} maxWidth='500px' padding='100px 0 50px 0' margin='0 auto' textAlign='center'> 
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
