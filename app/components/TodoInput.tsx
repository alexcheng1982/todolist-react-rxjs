import * as React from 'react';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import * as CSSModules from 'react-css-modules';
import * as style from './input.scss';

interface IProps {
  add: (title: string) => void;
}

interface IState {
  title: string;
}

class TodoInput extends React.Component<IProps, IState> {
  constructor() {
    super();
    this.state = {
      title: ''
    };
  }

  add() {
    if (this.state.title != '') {
      this.props.add(this.state.title);
      this.setState({
        title: ''
      });
    }
  }

  handleTitleChange(event: any) {
    this.setState({
      title: event.target.value,
    });
  }
  
  render() {
    return (
      <div className={style.container}>
        <TextField className={style.input} hintText="What to do?" fullWidth={true} value={this.state.title} onChange={this.handleTitleChange.bind(this)}/>
        <FlatButton label="Add" primary={true} onClick={this.add.bind(this)} />
      </div>
    );
  }
};

export default CSSModules(TodoInput, style);
