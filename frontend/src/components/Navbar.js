import React, {Fragment} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logOut} from '../actions/auth'
import Alert from './Alert';
import PropTypes from 'prop-types';
import logo from '../assets/image.png'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import AccountCircle from '@material-ui/icons/PersonOutline';
import AccountCircleRounded from '@material-ui/icons/PersonRounded';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {useStyles} from '../componentstyles/stylesheet'
import Button from '@material-ui/core/Button'


function Navbar({auth: {isAuthenticated, loading}, logOut}) {
    
    const authLinks = (
        <a className="navbar__top__auth__link" onClick={logOut} href="#!">
            Logout
        </a>
    );
    const handleHover = ()=> {

    }
    const classes = useStyles()
    const guestLinks = (
        <Fragment>
            <Button variant="contained" className="navbar__top__auth__link" onMouseOver={handleHover('bottom-start', 'white')} onMouseLeave={handleHover('bottom-start')} aria-label="show Home tag" >
                <AccountCircleRounded style = {{color: 'grey', backgroundColor: '#efefef',fontSize: 25, borderRadius: '50%'}}/> 
                <Typography className={classes.title} noWrap>
                <span>&nbsp;Sign In <ArrowDropDownIcon color ="inherit" fontSize="large" style={{display: 'inline'}}/></span>
                </Typography> 
            </Button>
        </Fragment>
    )

    return (
        <Fragment>
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
