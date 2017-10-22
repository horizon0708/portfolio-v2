import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import * as Colors from '../Colors';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: "100&",
    },
    menu: {
        width: 200,
    },
    submitButton:{
        color: Colors.text.secondary,
        marginRight: -25
    }
});

class ContactForm extends Component{
    constructor(){
        super();
        this.state = {
            email: '',
            emailValidation: false
        }
    }

    handleChange = name => event => {
        console.log( event.target.value);
        this.setState({
            [name]: event.target.value,
        },() =>{
            this.getValidationState();
            console.log(this.state.emailValidation);
        });
    };

    getValidationState() {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (this.state.email.length === 0) return this.setState({emailValidation: false});
        if (re.test(this.state.email)) return this.setState({emailValidation: false});
        return this.setState({emailValidation: true});
    }

    render(){
        const { classes } = this.props;
        return <form method="POST" action="http://formspree.io/james.kim.nz92@gmail.com">
            <TextField
                fullWidth={true}
                required
                id="email"
                onChange={this.handleChange("email")}
                label="email"
                className={classes.textField}
                margin="normal"
                error={this.state.emailValidation}
            />

            <TextField
                fullWidth={true}

                required
                multiline
                id="message"
                label="message"
                className={classes.textField}
                margin="normal" />

            <div style={{textAlign: "right", marginTop: 50}}>
                <Button
                    type="submit"
                    color="primary"
                    className={classes.submitButton}>
                    Submit
                </Button>
            </div>

        </form>
    }
}

export default withStyles(styles)(ContactForm);