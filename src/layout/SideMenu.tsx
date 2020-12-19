import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';

import {
    createStyles, Divider, Drawer, Hidden, List, ListItem, ListItemIcon, ListItemText, makeStyles,
    Theme, Toolbar, useTheme
} from '@material-ui/core';
import BookIcon from '@material-ui/icons/Book';

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      [theme.breakpoints.up("sm")]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    drawerPaper: {
      width: drawerWidth,
    },
  })
);

type SideMenuProps = {
  window?: () => Window;
  mobileOpen?: boolean;
  toggleFunc?: VoidFunction;
};

const SideMenu: React.FC<SideMenuProps> = (
  props: SideMenuProps
): ReactElement => {
  const { window, mobileOpen, toggleFunc } = props;
  const classes = useStyles();
  const theme = useTheme();

  const drawer = (
    <div>
      <Toolbar />
      <List>
        <ListItem button key="Books" component={Link} to={"/bookList"}>
          <ListItemIcon>
            <BookIcon />
          </ListItemIcon>
          <ListItemText primary="Books" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <nav className={classes.drawer} aria-label="menus">
      <Hidden smUp implementation="css">
        <Drawer
          container={container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={mobileOpen}
          onClose={toggleFunc}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
        >
          {drawer}
        </Drawer>
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
