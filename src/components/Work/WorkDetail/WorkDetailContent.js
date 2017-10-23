import React, {Component} from 'react';

import {withStyles} from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import marked from 'marked';

const styles = theme => ({});

class WorkDetailContent extends Component {

    getMarkDownText() {
        const text = marked(this.props.work.body, {sanitize: true});
        return {__html: text};
    }

    render() {
        return <Typography type='body2'>
            <div dangerouslySetInnerHTML={this.getMarkDownText()}/>
        </Typography>
    }
}

export default withStyles(styles)(WorkDetailContent);