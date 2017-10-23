import React, {Component} from 'react';
import Grid from 'material-ui/Grid';

import Work from './Work';
import About from './About';
import Hero from './Hero';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import MoreAboutMe from './MoreAboutMe';

import Scroll from 'react-scroll';

import * as Colors from './Colors';
import {lightBlue, lime} from 'material-ui/colors';
import {createMuiTheme, MuiThemeProvider} from 'material-ui/styles';

const Element    = Scroll.Element;

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: lime,
    },
    status: {
        danger: 'orange',
    },
    typography: {
        //display3: '#757575'
    }
});

class Main extends Component{


    render(){
        return <MuiThemeProvider theme={theme}>
            <div>
            <Header/>
            <Grid spacing={0} container justify='center' alignItems="stretch">
                <Grid item xs={12}>
                    <Element name="hero" />
                    <Hero />
                </Grid>
                <Grid item xs={12}>
                    <Element name="about" />
                    <About />
                </Grid>
                <Grid item xs={12}>
                    <Element name="work" />
                    <Work />
                </Grid>
                <Grid item xs={12} sm={7} style={{backgroundColor: Colors.primary.base}}>
                    <MoreAboutMe/>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Element name="contact" />
                    <Contact />
                </Grid>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
            </div>
        </MuiThemeProvider>
    }
}

export default Main;