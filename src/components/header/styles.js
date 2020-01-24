import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    [theme.breakpoints.only('xs')]: {
        marginRight: theme.spacing(0),
    },
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default useStyles;