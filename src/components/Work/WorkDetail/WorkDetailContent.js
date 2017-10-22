import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import marked from 'marked';
import Paper from 'material-ui/Paper';

import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';
import Dialog, { DialogTitle } from 'material-ui/Dialog';


const styles = theme => ({

});

class WorkDetailContent extends Component{

    getMarkDownText(){
        const text = marked(this.props.work.content, {sanitize: true});
        return {__html: text};
    }

    render(){
        const { work, backButtonHandler } = this.props;

        return <Typography type='body2'>
                        <div dangerouslySetInnerHTML={this.getMarkDownText()} />
                    </Typography>
    }
}
export default withStyles(styles)(WorkDetailContent);