import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import {withStyles} from 'material-ui/styles';
import * as colors from './Colors';

import HelpOutlineIcon from 'material-ui-icons/HelpOutline';


const style = theme =>({
    root: {
        width: "100vw",
        backgroundColor: colors.primary.base,
        paddingTop: 50,
        paddingBottom: 80
    },
    text: {
        color: colors.text.icon
    },
    greenText: {
        color: colors.primary.accent
    },
    about:{

    },
    headerIcon: {
        width: 60,
        height: 60,
        marginBottom: -8
    },
    contentIcon:{
        color: colors.text.icon,
        width: 60,
        height: 60,
        marginBottom: -12
    }
});

const aboutMeText = `I am a self-taught law school graduate who is passionate about software development.
I found that I love making apps and I would love to be able to do it for a living.
So far, I've taught myself C# and Javascript mainly by making projects, big and small, with help of Pluralsight and countless StackOverflow answers.
Some of the projects are available below.`;

class About extends Component{
    render(){
        const {classes } = this.props;

        return <Grid container justify='center' className={classes.root} >
            <Grid item sm={6} xs={12} className={classes.about}>
                <Typography type="display3" className={classes.text} >
                    <HelpOutlineIcon className={classes.headerIcon}/>  About me
                </Typography>

                        <Typography type="body2" className={classes.text} >
                            {aboutMeText}
                        </Typography>

            </Grid>
            <Grid item sm={1} xs={12}>

            </Grid>
            <Grid item sm={4} xs={12}>
                <Typography type="display2" className={classes.greenText} >
                    C#
                </Typography>
                <Typography type="subheading" className={classes.text} >
                    .NET Core, Unity
                </Typography>
                <Typography type="display2" className={classes.greenText} >
                     Javascript
                </Typography>
                <Typography type="subheading" className={classes.text} >
                    React, Redux, Flux, NodeJS, Express, MongoDB, RethinkDB, Socket.io, Passport.js
                </Typography>
                <Typography type="display2" className={classes.greenText} >
                    Graphics
                </Typography>
                <Typography type="subheading" className={classes.text} >
                    Photoshop, Illustrator, Spine
                </Typography>
            </Grid>
        </Grid>
    }
}
export default withStyles(style)(About);