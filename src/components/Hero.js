import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import * as Color from './Colors';
import * as Colors from './Colors';
import background from '../data/harbour.jpg';
import Grid from 'material-ui/Grid';

const style = theme => ({
    root: {
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        width: '100vw',
        height: '85vh'
    },
    headerContainer:{
        color: Color.text.icon,
        marginTop: '35vh',
        display: 'inline-block',
        backgroundColor: Colors.primary.accent,
        padding: 5,

    },
    header:{
        color: Color.text.icon,
    },
    subHeader:{
        color: Color.text.icon,
    },
    text:{
        color: Colors.text.icon,
    },
    text2:{
        color: Colors.text.icon,
        fontWeight: 'normal',
    }

});

class Hero extends Component{

    render(){
        const { classes } = this.props;
        return <Grid container className={classes.root}  justify="center">
                <Grid item xs={10} sm={10}>
                    <div className={classes.headerContainer}>
                        <Typography type="display3" color="inherit" className={classes.header}>
                            <span className={classes.text}>James Kim</span>
                        </Typography>
                        <Typography type="display1" color="inherit" className={classes.header} style={{marginTop: -6}}>
                            <span className={classes.text2}>Junior React/.NET Developer</span>
                        </Typography>
                    </div>
                </Grid>
            </Grid>
    }
}

export default withStyles(style)(Hero);