import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import * as Colors from './Colors';
import { withStyles } from 'material-ui/styles';

const style = theme =>({
    root: {
        backgroundColor:  "#424242",
        paddingTop:100,
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