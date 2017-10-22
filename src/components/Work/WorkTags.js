/// Displays Tags

import React, { Component } from 'react';
import data from '../../data/mockData.json';
import PropTypes from 'prop-types';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Chip from 'material-ui/Chip';
import grey from 'material-ui/colors/grey';

//  Components
import Tag from './Tag';

const styles = theme => ({
    root: {
        margin: 4,
    },
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    });

class WorkTags extends Component{
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(tagName){
        this.props.handleTagClick(tagName);
    }

    renderList(){
        const { tags, classes } = this.props;
        return tags.map((x,i) => {
            return <Tag
                key={i}
                clicked={x.clicked}
                text={x.name}
                handler={()=>this.handleClick(x.name)}
                classes={{
                    root: classes.root,
                }}
            />
        });
    }

    render(){
        return <div>{this.renderList()}</div>

    }
}

WorkTags.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WorkTags);