import Link from 'next/link';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export interface IPropsCardProject {
    name: string;
    linkGit: string;
    image?: string;
    description: string;
}

const CardProject = ({ name, linkGit, image, description }: IPropsCardProject) => {
    return(
        <Card sx={{ maxWidth: 400, width: '33%', margin: '0 auto' }}>
            {/* <CardMedia
                component="img"
                height="140"
                image={image ? image : ''}
                alt="green iguana"
            /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {description}
                </Typography>
            </CardContent>
            <CardActions>
                    <Link href={linkGit} passHref>
                        <a href={linkGit} target="_blank" rel="noopener noreferrer">
                            <Button size="small" variant='contained'>
                                Acessar
                            </Button>
                        </a>
                    </Link>
            </CardActions>
        </Card>
    )
}

export default CardProject;