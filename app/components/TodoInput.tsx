import * as React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

interface IProps {
  add: (title: string) => void;
}

interface IState {
  title: string;
}

export default class TodoInput extends React.Component<IProps, IState> {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  add() {
    this.props.add(this.state.title);
    this.setState({
      title: ''
    });
  }

  handleTitleChange(event: any) {
    this.setState({
      title: event.target.value,
    });
  }
  
  render() {
    return (
      <Toolbar>
        <ToolbarGroup firstChild={true} lastChild={true}>
          <TextField hintText="What to do?" fullWidth={true} value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
          <RaisedButton label="Add" primary={true} onClick={this.add.bind(this)} />
        </ToolbarGroup>
      </Toolbar>
    );
  }
};