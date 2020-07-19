import { fade, makeStyles} from '@material-ui/core/styles';

const drawerWidth = 240;
export const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color:  'black',
    fontSize: '2em',
    textTransform: "Capitalize"

  },
  aside: {
    backgroundColor: '#232F3E',
  }, 
  navTabs: {
    borderRadius: '50%',
    padding: 5, 
    },
  menuTabs: {
     borderRadius: '1%', 
     fontFamily: 'Lora',
     padding: 0, 
     margin: 0,
    },
  paper: {
    background: '#FFFFFF',
    margin:  theme.spacing(1),
    padding: '1px auto',
  },
  search: {
    position: 'relative',
    backgroundColor: fade('rgba(0,0,0,0.3)', 0.95),
    '&:hover': {
      backgroundColor: fade('rgba(0,0,0,0.3)', 0.25),
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    borderRadius: theme.shape.borderRadius + 5,
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
    cursor: 'pointer',
    height: '100%',
    backgroundColor: 'orange',
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '30vw',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up(1100)]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up(1100)]: {
      display: 'none',
    },
  },

  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0, 
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#232F3E',
    color: 'white',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
