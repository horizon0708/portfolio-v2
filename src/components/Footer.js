import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import * as Colors from './Colors';
import { withStyles } from 'material-ui/styles';
import Scroll from 'react-scroll';
import Button from 'material-ui/Button';

const Link       = Scroll.Link;

const style = theme =>({
    root: {
        backgroundColor:  "#424242",
        paddingTop:20,
        paddingBottom: 20
    },
    text: {
        textAlign: 'center',
        color: Colors.text.icon
    }
});

class Footer extends Component{
    render(){
        const {classes } = this.props;

        return <Grid container justify='center' className={classes.root} >
            <Grid item sm={10} xs={12}>
                <div style={{textAlign: 'center', paddingBottom: 80}}>
                    <Link to="about" smooth={true} offset={50} duration={500} >
                        <Button color="inherit" style={{"color": "#FFFFFF"}}>About</Button>
                    </Link>
                    <Link to="work" smooth={true} offset={50} duration={500} >
                        <Button color="inherit" style={{"color": "#FFFFFF"}}>Work</Button>

                    </Link>
                    <Link to="contact" smooth={true} offset={50} duration={500} >
                        <Button color="inherit" style={{"color": "#FFFFFF"}}>Contact</Button>
                    </Link>
                </div>



                <Typography type="body1" color="inherit" className={classes.text}>
                    {'Made with React, Material-UI, and love <3'}
                </Typography>
                <Typography type="body1" color="inherit" className={classes.text}>
                    {'Copyright 2017 James Kim. All Rights Reserved.'}
                </Typography>
            </Grid>
        </Grid>
    }
}

export default withStyles(style)(Footer);