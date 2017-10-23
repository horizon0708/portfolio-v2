import React, {Component} from 'react';

import Card, {CardContent, CardMedia} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';

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

        return work.attributes.tags.map((x,i)=>{
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
                image={process.env.PUBLIC_URL + `/img/screenshots/${work.attributes.name}.png`}
                title={work.attributes.name}
            />
            <CardContent>
                <Typography type="headline" component="h2">
                    {work.attributes.title}
                </Typography>

            </CardContent>
        </Card>
    }
}
export default withStyles(styles)(WorkCard);