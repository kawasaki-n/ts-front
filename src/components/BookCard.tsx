import { Button, Card, CardActions, CardContent, CardMedia, createStyles, makeStyles, Theme, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";

type BookCardProps = {
    title: string;
    author: string;
    url: string;
}

const useSytles = makeStyles((theme: Theme) =>
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
            <CardMedia />
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