import React, { ReactElement } from "react";
import { BrowserRouter } from "react-router-dom";
import { createStyles, CssBaseline, makeStyles } from "@material-ui/core";
import Header from "./layout/Header";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

const App: React.FC = (): ReactElement => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    </div>
  );
};

export default App;
