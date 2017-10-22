import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import classnames from 'classnames';
import IconButton from 'material-ui/IconButton';
import Collapse from 'material-ui/transitions/Collapse';

import Dialog, { DialogTitle } from 'material-ui/Dialog';

const styles = theme => ({
    card: {
        //maxWidth: 345,
        //margin: 30
    },
    media: {
        height: 200
    },
    chip: {
        marginRight: theme.spacing.unit / 2,
        marginBottom: theme.spacing.unit / 2,
    },
    row: {
        marginTop: theme.spacing.unit,
        display: 'flex',
        justifyContent: 'left',
        flexWrap: 'wrap',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});

class WorkCard extends Component{
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

    handleClick = ()  =>{
      const { work, handleCardClick } = this.props;
      handleCardClick(work);
    };

    renderTexts(){
        const { classes, work } = this.props;

        return work.tags.map((x,i)=>{
            return <span
                key={i}
                className={classes.chip}>#{x} </span>
        });
    }

    render(){
        const { classes, work } = this.props;

        return <Card className={classes.card} onClick={this.handleClick}>
            <CardMedia
                className={classes.media}
                image={process.env.PUBLIC_URL + `/img/screenshots/${work.name}.png`}
                title={work.name}
            />
            <CardContent>
                <Typography type="headline" component="h2">
                    {work.title}
                </Typography>

            </CardContent>
        </Card>
    }
}
export default withStyles(styles)(WorkCard);