import React, {Component} from 'react';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import PhoneIcon from 'material-ui-icons/Phone';
import * as Colors from './Colors';
import ContactForm from './Contact/ContactForm';
import ChatBubbleOutlineIcon from 'material-ui-icons/ChatBubbleOutline';
import MailOutlineIcon from 'material-ui-icons/MailOutline';
import {withStyles} from 'material-ui/styles';

const style = theme =>({
    root: {
        backgroundColor: Colors.primary.accent,
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
    contactDetail:{
        marginBottom: 20,
    }
});

class Contact extends Component{
    render(){
        const {classes } = this.props;

        return <Grid container justify='center' className={classes.root} >
            <Grid item sm={10} xs={12}>
                <Typography type="display3" color="inherit" className={classes.header}>
                    <ChatBubbleOutlineIcon className={classes.headerIcon} /> Get In Contact
                </Typography>
                <Grid container spacing={40} className={classes.content}>


                    <Grid item sm={12} xs={12} >
                        <div >
                            <Typography type="subheading" color="inherit">

                            </Typography>
                            <Typography className={classes.contactDetail} type="subheading" color="inherit">
                                <MailOutlineIcon className={classes.contentIcon} />           <a className={classes.linkOverride} href="mailto:james.kim.nz92@gmail.com?Subject=Hi!"> james.kim.nz92@gmail.com </a>
                            </Typography>
                            <Typography className={classes.contactDetail} type="subheading" color="inherit">
                                <PhoneIcon className={classes.contentIcon}/> 022 190 2213
                            </Typography>
                        </div>

                    </Grid>

                    <Grid item sm={12} xs={10}>
                        <ContactForm/>
                    </Grid>
                </Grid>


            </Grid>
        </Grid>
    }
}

export default withStyles(style)(Contact);