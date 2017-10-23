import React, {Component} from 'react';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import WorkCard from './WorkCard';

const styles = {
    card: {
        maxWidth: 345,
        margin: 30
    },
    media: {
        height: 200,
    },
    fixedContainer: {
        height: 600
    },
    contentContainer: {
        height: 600,
        overflow: "auto"
    }
};

class WorkPanels extends Component{
    renderWorks(){
        const { works, handleCardClick  } = this.props;
        if(works){
            return works.map((x,i)=>{
                return <Grid item xs={12} sm={6} md={4} >
                    {<WorkCard
                        handleCardClick={handleCardClick}
                        key={i}
                        work={x}
                    />}
                </Grid>
            });
        }
        return null;
    }

    render(){
        const { classes } = this.props;
        return  <div className={classes.fixedContainer}>
            <Grid container spacing={24} className={classes.contentContainer}>
                { this.renderWorks()}
            </Grid>
            </div>



    }
}
export default withStyles(styles)(WorkPanels);