import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

import * as Colors from '../../Colors';


const styles = theme => ({
    chip: {
        color: Colors.text.icon,
        marginRight: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit / 2,
    },
    row: {
        marginTop: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
    },
});

class WorkDetailTags extends Component{
    renderChips(){
        const { classes, work } = this.props;

        return work.tags.map((x,i)=>{
            return <Chip
                key={i}
                label={x}
                className={classes.chip}
            />
        });
    }
    render(){
        const { classes, work } = this.props;

        return <div> <Typography type="display1">
            {work.title}
        </Typography>
        <div className={classes.row}>
            {this.renderChips()}
        </div>
        </div>

    }
}
export default withStyles(styles)(WorkDetailTags);