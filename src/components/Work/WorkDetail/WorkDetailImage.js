import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    image: {
        width: '100%',
    }
});

class WorkDetailImage extends Component {
    render() {
        const {work, classes} = this.props;

        return <div>
            <img className={classes.image}
                 src={process.env.PUBLIC_URL + `/img/screenshots/${work.attributes.name}.png`}/>
        </div>
    }
}

export default withStyles(styles)(WorkDetailImage);