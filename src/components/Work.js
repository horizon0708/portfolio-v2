import React, {Component} from 'react';
import data from '../data/test.json';
import Typography from 'material-ui/Typography';
import InsertDriveFileIcon from 'material-ui-icons/InsertDriveFile';
// Components
import WorkTags from './Work/WorkTags';
import WorkPanels from './Work/WorkPanels';
import WorkDetail from './Work/WorkDetail/WorkDetail';
import * as Colors from './Colors'
// MaterialUI
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

const styles = theme =>({
    root: {
        paddingTop: 80,
        paddingBottom: 100
    },
    workTags : {
        marginTop: 50,
        marginBottom: 50
    },
    Work : {

    },
    content:{
        color: Colors.text.secondary,
    },
    header: {
        color: Colors.text.secondary,
    },
    headerIcon: {
        width: 60,
        height: 60,
        marginBottom: -8
    },
    tagStatusText: {
        color: Colors.text.secondary
    },
    tagLinkText:{
        color: Colors.text.divider,
        textDecoration: 'underline',
        '&:hover': {
            color: Colors.text.icon,
            background: Colors.text.divider
        }
    }
});

const worktext = `Personal projects ranging from simple codepens to Fullstack projects. 
You can use the filter below to filter by tags, 
and click on a project to find out more about the project.`;

class Work extends Component{
    constructor(){
        super();
        this.state = {
            tags: [],
            works: data,
            work: {},
            open: false
        };

        this.handleTagClick = this.handleTagClick.bind(this);
        this.handleCardClick = this.handleCardClick.bind(this);
        this.handleBackButton = this.handleBackButton.bind(this);
    }

    componentWillMount() {
        this.setState({
            tags: this.getTags()
        }, () => console.log(this.state));
    }

    handleCardClick(work){
        console.log(work);
        this.setState({
            work: work
        }, ()=>{
            this.setState({open: true});
        });
    }

    handleBackButton(){
        this.setState({ open: false });
    }

    handleTagClick(tagName){
        const oldTags = [...this.state.tags];
        const indexToUpdate = oldTags.findIndex(x => x.name === tagName);
        const updatedTag = {
            name: tagName,
            clicked: !oldTags[indexToUpdate].clicked
        };
        const updatedTags = [
            ...oldTags.slice(0, indexToUpdate),
            updatedTag,
            ...oldTags.slice(indexToUpdate + 1)
        ];
        this.setState({ tags: updatedTags }, ()=> this.filterWorks());
    }

    filterWorks() {
        const filterOpt = this.state.tags.filter(x => x.clicked === true).map(x => x.name);
        if (filterOpt.length > 0) {
            const filteredWorks = data.filter((work, i) => {
                return work.attributes.tags.some(r => filterOpt.indexOf(r) >= 0);
            });
            this.setState({ works: filteredWorks }, ()=> console.log(this.state.works));
        } else {
            this.setState({ works: data });
        }
    }

    renderNumber() {
        const { classes } = this.props;
        const filterOpt = this.state.tags.filter(x => x.clicked === true).map(x => x.name);
        if(this.state.open){
            return <Typography type="body2" color="inherit" className={classes.tagStatusText}>
                {`Showing ${this.state.work.title}. `} <a onClick={this.handleBackButton} className={classes.tagLinkText}>Click to go back to list.</a>
            </Typography>
        }

        if (filterOpt.length > 0) {
            const filterString = filterOpt.reduce((a, b, i, arr) => {
                return arr.length - 1 === i ? `${a} or ${b}` : `${a}, ${b}`;
            });
            return  <Typography type="body2" color="inherit" className={classes.tagStatusText}>
                {`Showing ${this.state.works.length} ${filterString} projects.`}
            </Typography>
        } else {
            return  <Typography type="body2" color="inherit" className={classes.tagStatusText}>
                {`Showing all ${this.state.works.length} projects.`}
            </Typography>;
        }
    }

    getTags() {
        const allTags = [...new Set(data.map(a => a.attributes.tags).reduce((a, b) => a.concat(b)))];
        return allTags.map(x => {
            return { name: x, clicked: false }
        });
    }

    render(){
        const{ classes } = this.props;
        const { tags, works, open, work }=  this.state;
      return  <Grid container justify='center' className={classes.root} >
          <Grid item sm={10} xs={12} className={classes.about}>
              <Typography type="display3" color="inherit" className={classes.header}>
                  <InsertDriveFileIcon className={classes.headerIcon}/> Works
              </Typography>
              <Typography type="body2" color="inherit" className={classes.content}>
                  {worktext}
              </Typography>


              <div className={classes.workTags}>
                  <WorkTags tags={tags} handleTagClick={this.handleTagClick} />
                  {this.renderNumber()}
              </div>

              {open ?
                  <div>
                      <WorkDetail work={work}  handleBackButton={this.handleBackButton}/>
                  </div>
              :
                  <WorkPanels works={works} handleCardClick={this.handleCardClick}/>
              }

          </Grid>
      </Grid>
    };
}

export default withStyles(styles)(Work);
