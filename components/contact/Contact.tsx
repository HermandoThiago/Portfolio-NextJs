import { Box, TextField, Button } from "@mui/material";
import { makeStyles } from '@material-ui/styles';
import InputMask from "react-input-mask";

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

const Contact = () => {

    const classes: any = useStyles();

    const styleTextField: IStyleTextField = {
        marginTop: '10px',
        padding: '5px 0',
    }

    return(
        <Box component={'div'} maxWidth='500px' padding='30px 0' margin='0 auto' textAlign='center'>
            
            <h1>Contato</h1>
            <form>
                <TextField 
                    id='name' 
                    label='Nome completo' 
                    variant="standard"
                    fullWidth
                    inputProps={{ className: classes.input }}
                    sx={styleTextField}
                    />
                    <InputMask mask="(99) 99999-9999">
                        {() => (
                        <TextField 
                            id='tel' 
                            label='Telefone' 
                            variant="standard"
                            fullWidth
                            inputProps={{ className: classes.input }}
                            sx={styleTextField}
                        />
                        )}
                    </InputMask>
                <TextField 
                    id='assunto' 
                    label='Assunto' 
                    variant="standard"
                    fullWidth
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
                    inputProps={{ className: classes.input }}
                    sx={styleTextField}
                />
                <Button
                    fullWidth
                    variant="contained"
                    sx={{
                        marginTop: '10px',
                        fontSize: '1.1rem'
                    }}
                >
                    Enviar
                </Button>
            </form>
        </Box>
    )    
}

export default Contact;
