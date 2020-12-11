import {
  createStyles,
  Divider,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Theme,
} from "@material-ui/core";
import React, { ReactElement } from "react";
import BookIcon from "@material-ui/icons/Book";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

const SideMenu: React.FC = (): ReactElement => {
  const classes = useStyles();

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>
        <ListItem button key="Books">
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="menus">
      <Hidden smUp implementation="css">
        <Drawer></Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper,
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default SideMenu;
