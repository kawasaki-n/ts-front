import React, { ReactElement, useState } from 'react';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setValues({...values, [e.target.id]: e.target.value});
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(values);
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