import React, { ReactElement, useState } from "react";
import {
  AppBar,
  createStyles,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import SideMenu from "./SideMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      // [theme.breakpoints.up("sm")]: {
      //   width: `calc(100% - ${drawerWidth}px)`,
      //   marginLeft: drawerWidth,
      // },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

const Header: React.FC = (): ReactElement => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <div>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap>
            Header
          </Typography>
        </Toolbar>
      </AppBar>
      <SideMenu mobileOpen={mobileOpen} toggleFunc={handleDrawerToggle} />
    </div>
  );
};

export default Header;
