import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../actions/auth'
import Alert from './Alert';
import PropTypes from 'prop-types';
import logo from '../assets/images/image.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircle from '@material-ui/icons/PersonOutline';
import AccountCircleRounded from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../componentstyles/stylesheet'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';


function Navbar({auth: {isAuthenticated, loading}, logOut}) {
    
    const authLinks = (
        <a className="navbar__top__auth__link" onClick={logOut} href="#!">
            Logout
        </a>
    );
    const handleHover = ()=> {

    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const classes = useStyles()
    const guestLinks = (
        <Fragment>
            <Button variant="contained" className="navbar__top__auth__link" onMouseOver={handleHover('bottom-start', 'white')} onMouseLeave={handleHover('bottom-start')}
            onClick={handleClickOpen} aria-label="show Home tag" >
                <AccountCircleRounded style = {{color: 'grey', backgroundColor: '#efefef',fontSize: 25, borderRadius: '50%'}}/> 
                <Typography className={classes.title} noWrap>
                <span>&nbsp;Sign In <ArrowDropDownIcon color ="inherit" fontSize="large" style={{display: 'inline'}}/></span>
                </Typography> 
            </Button>
        </Fragment>
    )

    const modal = (
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title" className="w-full text-xl" >
          <div class="flex flex-row justify-between" >
            <CloseIcon onClick={handleClose} style={{cursor: "pointer"}} className="w-1/3"/>
              <Typography variant="h5" className="w-2/3 flex-grow text-center">Sign In</Typography>
          </div>
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText>
          <TextField className="text-3xl w-full"
            InputLabelProps = {{
                style: {
                    fontSize: '.7em',
                    fontWeight: 'bold'
                }
            }
            }
            InputProps = {{
                style: {
                    fontSize: '.6em',
                }
            }
            }
          id="outlined-password-input"
          label="Email Address" 
          type="email"
          required
          variant="outlined"
            InputLabelProps = {{
                style: {
                    fontSize: '.7em'
                }
            }
            }
            InputProps = {{
                style: {
                    fontSize: '.6em',
                }
            }
            }
        />
        <div className="space-y-10 my-10"></div>
        <TextField className="text-3xl w-full"
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    )

    return (
        <Fragment>
            {modal}
            <nav>
                <div className='navbar__top'>
                    <div className="navbar__top__logo">
                        <Link className="navbar__top__logo__link" to="/">
                            <img src={logo} alt="" width="300px"/>
                        </Link>
                    </div>
                    <div className="navbar__top__auth">
                        {!loading && (
                            <Fragment>
                                {isAuthenticated ? authLinks: guestLinks}
                            </Fragment>
                        )}
                    </div>
                </div>
                <div className="navbar__bottom">
                    <li className="navbar__bottom__item">
                        <NavLink className="navbar__bottom__item__link" exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className="navbar__bottom__item__link" exact to='/listings'>
                            Listings
                        </NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className="navbar__bottom__item__link" exact to='/about'>
                            About
                        </NavLink>
                    </li>
                    <li className="navbar__bottom__item">
                        <NavLink className="navbar__bottom__item__link" exact to='/contact'>
                            Contact
                        </NavLink>
                    </li>
                </div>
            </nav>
            <Alert />
        </Fragment>
    )
}
Navbar.propTypes = {
    logOut: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})



export default connect(mapStateToProps, {logOut})(Navbar)
