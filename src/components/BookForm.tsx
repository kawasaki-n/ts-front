import React, { ReactElement, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save';

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        form: {
            '& > *': {
                margin: theme.spacing(1),
            },
        },
    }),
);

const BookForm: React.FC = (): ReactElement => {
    const classes = useStyles();
    const [values, setValues] = useState({
        name: '',
        author: '',
        url: '',
    });
    const history = useHistory();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValues({...values, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(values);
        fetch('http://localhost:8080/api/books/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values)
        })
        .then(res => res.json())
        .then((result) => {
            console.log(result.message);
            history.push('/bookList');
        })
        .catch(err => {
            console.log(err);
        });
    }

    return(
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField id="name" label="Name" value={values.name} onChange={handleChange} fullWidth />
            <TextField id="author" label="Author" value={values.author} onChange={handleChange} fullWidth />
            <TextField id="url" label="URL" value={values.url} onChange={handleChange} fullWidth />
            <Button type="submit" variant="contained" color="primary" startIcon={<SaveIcon />} fullWidth>Save</Button>
        </form>
    );
}

export default BookForm;