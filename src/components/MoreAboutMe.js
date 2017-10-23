import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';

import AccountCircleIcon from 'material-ui-icons/AccountCircle';
import GTranslateIcon from 'material-ui-icons/Translate';
import CodeIcon from 'material-ui-icons/Code';

import * as Colors from './Colors';


import {withStyles} from 'material-ui/styles';

const style = theme =>({
    root: {
        backgroundColor: Colors.primary.base,
        paddingTop: 50,
    },
    content:{
        color: Colors.text.icon,
        marginTop: 0,
        marginBottom: 50
    },
    header: {
        color: Colors.text.icon,
    },
    headerIcon: {
        width: 60,
        height: 60,
        marginBottom: -8
    },
    contentIcon:{
        marginBottom: '-0.5em',
        marginRight: 20
    },
    linkOverride:{
        textDecoration: 'none',
        color: Colors.text.icon
    },
    details:{
        marginBottom: 10,
    },
    iconTd:{
        verticalAlign: 'top',
        textAlign: 'left'
    }
});

class MoreAboutMe extends Component{
    render(){
        const {classes } = this.props;

        return <Grid container justify='center' className={classes.root} alignItems="stretch" >
            <Grid item sm={10} xs={12}>
                <Typography type="display3" color="inherit" className={classes.header}>
                    <AccountCircleIcon className={classes.headerIcon} /> More About Me
                </Typography>
                <Grid container spacing={40} className={classes.content}>


                    <Grid item sm={12} xs={12} >
                        <table >
                            <tr>
                                <td className={classes.iconTd}>
                                    <CodeIcon className={classes.contentIcon}/>
                                </td>
                                <td>
                                    <Typography className={classes.details} type="body1" color="inherit">
                                        {moreAboutMeText2}
                                    </Typography>
                                </td>
                            </tr>

                            <tr>
                                <td className={classes.iconTd}>
                                    <GTranslateIcon className={classes.contentIcon} />
                                </td>
                                <td>
                                    <Typography className={classes.details} type="body1" color="inherit">
                                        {moreAboutMeText1}
                                    </Typography>
                                </td>
                            </tr>
                            <tr>
                                <td className={classes.iconTd}>
                                    <i className={"fa fa-gamepad "+classes.contentIcon} aria-hidden="true" />
                                </td>
                                <td>
                                    <Typography className={classes.details} type="body1" color="inherit">
                                        {moreAboutMeText3}
                                    </Typography>
                                </td>
                            </tr>
                        </table>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    }
}
const moreAboutMeText1 = `I am tri-lingual! I was born in Korea and I can speak Japanese because one of my majors is in Japanese.`;

const moreAboutMeText2 = `I have been always interested in programming, but thought I would have to be a comp-sci major to learn it.
I started programming when the research for a law school paper I was writing had so many repetitive tasks that I looked into learning Python for some basic text parsing.`;

const moreAboutMeText3 =  `I have always been a fan of playing and watching video games. Recently, I am more interested in making them.`;

export default withStyles(style)(MoreAboutMe);