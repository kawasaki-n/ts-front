import React, { ReactElement } from 'react';

import {
    Button, Card, CardActions, CardContent, createStyles, makeStyles, Typography
} from '@material-ui/core';

type BookCardProps = {
    title: string;
    author: string;
    url: string;
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
                <Button href={props.url} size="small" color="primary">
                    Link
                </Button>
            </CardActions>
        </Card>
    );
}

export default BookCard;