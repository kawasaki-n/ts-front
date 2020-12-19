import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import { createStyles, Fab, makeStyles, Theme } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        fab:{
           position: 'fixed',
           bottom: theme.spacing(5),
           right: theme.spacing(5),
           zIndex: theme.zIndex.appBar - 1,
        },
    })
);
const BookAddIcon: React.FC = (): ReactElement => {
    const classes = useStyles();
    return(
        <div>
            <Fab className={classes.fab} component={Link} to="/bookForm" color="secondary" aria-label="add">
                <AddIcon />
            </Fab>
        </div>
    );
}

export default BookAddIcon;