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
import Divider from '@material-ui/core/Divider';
import PhoneIcon from '@material-ui/icons/Phone'
import FacebookIcon from '@material-ui/icons/Facebook'
import GoogleIcon from '../assets/images/googleicon.svg'


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
          <div className="my-6">
              <TextField className="text-2xl w-full"
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
                        fontSize: '.8em',
                        color: "#000000",
                        fontWeight: "bold"
                    }
                }
                }
                InputProps = {{
                    style: {
                        fontSize: '.8em',
                        outlineColor: "green"
                    },
                    color: "secondary"
                }
                }
            />
          </div>
        
        <div className="my-6">
            <TextField className="text-2xl w-full"
              id="outlined-password-input"
              label="Password"
              type="password"
              required
              autoComplete="current-password"
              variant="outlined"
              InputLabelProps = {{
                style: {
                    fontSize: '.8em',
                    color: "#000000",
                    fontWeight: "bold"
                }
            }
            }
            InputProps = {{
                style: {
                    fontSize: '.8em',
                    borderColor: "green"
                },
                color: "secondary"
            }
            }
            />
        </div>
        <div className="form__enhancements flex flex-row justify-between">
            <div>
                <input type="checkbox" name='remember'
                    checked={true}
                    className="listingform__checkbox"/>
                <label htmlFor="open_house" className="text-xl mb-6 text-gray-900 self-center">
                    Remember me
                </label>
            </div>
            <div>
                <Link className="text-xl focus:text-blue-500">
                    Forgot Password ?
                </Link>
            </div>
        </div>
        <div className="flex flex-row">
            <Divider className="flex-grow self-center"/>
            <div className="px-2">or</div>
            <Divider className="flex-grow self-center"/>
        </div>
        <div className="flex flex-row justify-center">
            <div>
                <Button variant="outlined" className="listingform__button listingform__button--primary" >
                        <PhoneIcon style = {{color: '#333', fontSize: 25}}/> 
                        <Typography noWrap style = {{color: '#000'}}>Phone Number</Typography> 
                </Button>
            </div>
            <div>
                <Button variant="outlined" className="listingform__button listingform__button--primary" >
                        <img  src={GoogleIcon} class="w-10 inline mr-4"/> 
                        <Typography noWrap style = {{color: '#000'}}>Google</Typography> 
                </Button>
            </div>
            <div>
                <Button variant="outlined" className="listingform__button listingform__button--primary" >
                        <FacebookIcon style = {{color: '#000', fontSize: 25}}/> 
                        <Typography noWrap style = {{color: '#fff'}}>Facebook</Typography> 
                </Button>
            </div>
        </div>
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
