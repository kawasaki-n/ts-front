import { createStyles, makeStyles, Theme, Toolbar } from "@material-ui/core";
import React, { ReactElement } from "react";
import { Route, Switch } from "react-router-dom";
import BookList from "../components/BookList";

const useStyles = makeStyles((theme: Theme) => 
    createStyles({
        main: {
            flexGrow: 1,
            padding: theme.spacing(3),
        }
}));

const Main: React.FC = (): ReactElement => {
    const classes = useStyles();
    return(
        <main className={classes.main}>
            <Toolbar />
            <Switch>
                <Route path="/bookList" exact component={BookList} />
            </Switch>
        </main>
    );
}

export default Main;