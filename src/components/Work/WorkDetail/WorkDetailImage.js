import React, { Component } from 'react';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';

const styles = theme => ({
    image : {
        width: '100%',
    }
});

class WorkDetailImage extends Component{

    handleClick = () =>{
        this.props.handleBackButton();
    };

    render(){
        const { work, classes } = this.props;

        return <div>
            <img className={classes.image} src={process.env.PUBLIC_URL + `/img/screenshots/${work.name}.png`} />

        </div>


    }
}
export default withStyles(styles)(WorkDetailImage);