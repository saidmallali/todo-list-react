import React from "react";
import { ReactComponent as Add } from "./icons/add.svg";
import uuid from "uuid/v4";
import "./TodoForm.scss";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evnt) {
    this.setState({
      [evnt.target.name]: evnt.target.value
    });
  }

  handleSubmit(evnt) {
    evnt.preventDefault();
    const todo = { ...this.state, finished: false, id: uuid() };
    this.setState({
      todo: ""
    });
    this.props.addTodo(todo);
  }

  render() {
    return (
      <div className="todoform">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="todo" onChange={this.handleChange} />
          <button>
            <Add
              className="icone-add"
              style={{ width: 27, height: 27, fill: "#ff3e33" }}
            />
          </button>
        </form>
      </div>
    );
  }
}

export default TodoForm;
