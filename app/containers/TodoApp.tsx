import * as React from "react";
import Todo from "../components/Todo";

class TodoApp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Todo/>
      </div>
    );
  }
}

export default TodoApp;