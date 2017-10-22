import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Typography from 'material-ui/Typography';

import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import * as Colors from '../../Colors';
const styles = theme => ({
    buttonIcon : {
        marginRight: 10,
    },
    button: {
        color: Colors.text.icon,
        width: '100%'
    },
    git: {
        backgroundColor: Colors.primary.accent,
        color: Colors.text.icon,
        width: '100%'
    }
});

class WorkDetailButtons extends Component{

    handleClick = () => {
        const { backButtonHandler } = this.props;
        backButtonHandler();
    };

    render(){
        const { classes } = this.props;

        return <Grid container spacing={8}>
            <Grid item xs={4}>
                <Button color='primary' raised className={classes.button}>
                    <span className={classes.buttonIcon}>
                        <i className={"fa fa-github"} aria-hidden="true" />
                    </span>
                    Link
                </Button>
            </Grid>
            <Grid item xs={4}>
                <Button raised className={classes.git}>
                    <span className={classes.buttonIcon}>
                        <i className={"fa fa-github"} aria-hidden="true" />
                    </span>
                    Source
                </Button>
            </Grid>

            <Grid item xs={4} sm={6}>
                <Button onClick={this.handleClick}>

                    <KeyboardArrowLeft
                    />
                    Back

                </Button>
            </Grid>
        </Grid>

    }
}
export default withStyles(styles)(WorkDetailButtons);