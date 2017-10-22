import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import WorkDetailTitle from './WorkDetailImage';
import WorkDetailButtons from './WorkDetailButtons';
import WorkDetailTags from './WorkDetailTags';
import WorkDetailContent from './WorkDetailContent';

const styles = theme => ({
    paper : {
        padding: 10
    }
});

class WorkDetail extends Component{

    render(){
        const { work, handleBackButton , classes} = this.props;

        return             <Paper className={classes.paper}>

        <Grid container spacing={16}>

                <Grid item xs={12} sm={12} md={4}>
                    <Grid container spacing={8}>
                        <Grid item md={12} sm={6} xs={12}>
                                <WorkDetailTitle work={work} handleBackButton={handleBackButton}/>
                        </Grid>
                        <Grid item md={12} sm={6} xs={12}>
                            <Grid container alignItems='stretch'>
                                <Grid item xs={12}>
                                    <WorkDetailTags work={work} />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container alignItems='flex-end'>
                                        <Grid item>
                                            <WorkDetailButtons work={work} backButtonHandler={handleBackButton}/>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <WorkDetailContent work={work}/>
                </Grid>


        </Grid>
    </Paper>

    }
}
export default withStyles(styles)(WorkDetail);