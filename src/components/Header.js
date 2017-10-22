import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import * as Colors from './Colors';
import Headroom from 'react-headroom';

import Scroll from 'react-scroll';
import {scroller} from 'react-scroll';
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;


const styles = theme => ({
    root: {
        width: '100vw',
    },
    flex: {
        flex: 1,
        color: "#FFFFFF"
    },
    menuButton: {
        marginLeft: 6,
        marginRight: 20,
    },
    barColor: {
        backgroundColor: Colors.primary.base,
        borderBottom: "solid 8px" +  Colors.primary.accent
    },
    gutters: {
        paddingLeft: 0,
        paddingRight: 0,
    }
});

class Header extends React.Component{

    render(){
        const { classes } = this.props;
        return (
            <Headroom>
            <div className={classes.root}>
                <AppBar position="static" className={classes.barColor} >
                    <Toolbar className={classes.gutter}>
                        <Link to="hero" smooth={true} offset={50} duration={500} >
                            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu" style={{"color": "#FFFFFF"}}>
                                <Typography type="title" color="inherit" className={classes.flex}>
                                    James's Portfolio
                                </Typography>
                            </IconButton>
                        </Link>


                        <Typography type="title" color="inherit" className={classes.flex}>

                        </Typography>
                        <Link to="about" smooth={true} offset={50} duration={500} >
                            <Button color="inherit" style={{"color": "#FFFFFF"}}>About</Button>
                        </Link>
                        <Link to="work" smooth={true} offset={50} duration={500} >
                            <Button color="inherit" style={{"color": "#FFFFFF"}}>Work</Button>

                        </Link>
                        <Link to="contact" smooth={true} offset={50} duration={500} >
                            <Button color="inherit" style={{"color": "#FFFFFF"}}>Contact</Button>

                        </Link>


                    </Toolbar>
                </AppBar>

            </div>
            </Headroom>
        );
    }
}


Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);