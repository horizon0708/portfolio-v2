import React, { Component } from 'react';
import data from '../../data/mockData.json';

import marked from 'marked';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Dialog, { DialogTitle } from 'material-ui/Dialog';

class WorkDialog extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            title: "",
            content: "",
            tags: [],
            images: []
        }
    }
    componentWillMount() {
        //const project = data.filter(x=> x.name === this.props.projectName);
        const project = this.props.work;
        if (project){
            this.setState({
                name: project.name,
                title: project.title,
                content: project.content,
                tags: project.tags,
                images: project.images
            });
        }
    }

    getMarkDownText(){
        const text = marked(this.state.content, {sanitize: true});
        return {__html: text};
    }

    render(){
        const { title, images } = this.state;
        const { classes, ...other } = this.props;

        return(
            <Dialog {...other}>
                <div>
                    <h1>{title}</h1>
                    <div dangerouslySetInnerHTML={this.getMarkDownText()} />
                </div>
            </Dialog>
        );
    }
}
export default WorkDialog;