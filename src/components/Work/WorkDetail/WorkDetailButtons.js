import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import {withStyles} from 'material-ui/styles';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import OpenInBrowser from 'material-ui-icons/OpenInBrowser';

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
        width: '100%',
    },
});

class WorkDetailButtons extends Component{

    handleClick = () => {
        const { backButtonHandler } = this.props;
        backButtonHandler();
    };

    renderGitHubButton(){
        const { work, classes } = this.props;
        if(work.attributes.links.github){
            return <Grid item xs={4} sm={4}>
                <Button raised className={classes.git} href={work.attributes.links.github}>
                    <span className={classes.buttonIcon}>
                                                <i className={"fa fa-github"} aria-hidden="true" />

                    </span>
                    Source
                </Button>
            </Grid>
        }
        return null;
    }

    renderLinkButton(){
        const { work, classes } = this.props;
        if(work.attributes.links.link){
            return <Grid item xs={4} sm={4}>
                <Button color='primary' raised className={classes.button} href={work.attributes.links.link}>
                    <span className={classes.buttonIcon}>
                                            <i className="fa fa-external-link" aria-hidden="true"/>

                    </span>
                    Link
                </Button>
            </Grid>
        }
        return null;
    }

    render(){
        const { classes } = this.props;

        return <Grid container spacing={8} style={{width:'100%'}}>
            {this.renderLinkButton()}
            {this.renderGitHubButton()}

            <Grid item xs={4} sm={4}>
                    <Button raised className={classes.button} onClick={this.handleClick}>
                        Back
                    </Button>
            </Grid>
        </Grid>

    }
}
export default withStyles(styles)(WorkDetailButtons);