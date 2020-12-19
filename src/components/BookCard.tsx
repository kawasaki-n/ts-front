import React, { ReactElement } from 'react';

import {
    Button, Card, CardActions, CardContent, createStyles, IconButton, makeStyles, Typography
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

type BookCardProps = {
    id: number;
    title: string;
    author: string;
    url: string;
    fetchBookFunction: VoidFunction;
}

const useSytles = makeStyles(() =>
    createStyles({
        card: {
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
        },
        cardContent: {
            flexGrow: 1,
        },
    })
);

const BookCard: React.FC<BookCardProps> = (props: BookCardProps): ReactElement => {
    const classes = useSytles();
    const handleDelete = (id: number) => {
        fetch("http://localhost:8080/api/books/delete/"+id, {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.message);
            props.fetchBookFunction();
        })
        .catch(err => {
            console.log(err);
        })
    }

    return(
        <Card className={classes.card}>
            <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h4">
                    {props.title}
                </Typography>
                <Typography gutterBottom variant="subtitle1">
                    {props.author}
                </Typography>
            </CardContent>
            <CardActions>
                <Button href={props.url} size="small" color="primary" target="_blank" rel="noopener">
                    Link
                </Button>
                <IconButton onClick={ () => handleDelete(props.id)} aria-label="delete">
                    <DeleteIcon />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default BookCard;