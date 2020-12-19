import React, { ReactElement, useEffect, useState } from 'react';

import { Container, createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

import BookAddIcon from './BookAddIcon';
import BookCard from './BookCard';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        bookCard: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
        },
    })
);

type Book = {
    id: number;
    name: string;
    author: string;
    url: string;
}

const BookList: React.FC = (): ReactElement => {
    const classes = useStyles();
    const [books, setBooks] = useState<Book[]>([]);
    const fetchBooks = () => {
        fetch("http://localhost:8080/api/books/all")
        .then(res => res.json())
        .then((res) => {
            setBooks(res.books);
        })
        .catch(err => console.log(err));
    }
    useEffect(() => {
        fetchBooks();
    }, [setBooks]);
    return(
        <div>
            <Container className={classes.bookCard} maxWidth="md">
                <Grid container spacing={4}>
                    {books.map((book: Book, i: number) => (
                        <Grid item key={i} xs={12} sm={6} md={4} lg={3}>
                            <BookCard id={book.id} title={book.name} author={book.author} url={book.url} fetchBookFunction={fetchBooks} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <BookAddIcon />
        </div>
    );
}

export default BookList;