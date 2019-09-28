import React from "react";
import { ReactComponent as Text } from "./icons/text.svg";
import { ReactComponent as Cancel } from "./icons/cancel.svg";
import { ReactComponent as Checked } from "./icons/checked.svg";
import "./TodoItem.scss";

class TodoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      isEditing: false,
      newTodo: ""
    };

    this.handleEdite = this.handleEdite.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleEdite() {
    // this.props.editTodo();
    this.setState({
      isEditing: true,
      newTodo: this.props.todoitem
    });
  }

  handleUpdate(evnt) {
    evnt.preventDefault();
    let todo = {
      todo: this.state.newTodo,
      id: this.props.id,
      finished: false
    };
    this.setState(
      {
        isEditing: false
      },
      () => this.props.editTodo(todo, this.props.id)
    );
  }

  handleRemove() {
    this.props.deletTodo(this.props.id);
  }

  handleChange(evnt) {
    console.log(evnt.target.value);
    this.setState({
      [evnt.target.name]: evnt.target.value
    });
  }

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div className="todoitem">
          <form onSubmit={this.handleUpdate}>
            <input
              value={this.state.newTodo}
              name="newTodo"
              type="text"
              onChange={this.handleChange}
            />
            <button className="icone-edit">
              <Checked style={{ width: 20, height: 20, fill: "#50C8EF" }} />
            </button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="todoitem">
          <p>{this.props.todoitem}</p>
          <div className="icons">
            <div className="icone-edit" onClick={this.handleEdite}>
              <Text style={{ width: 20, height: 20, fill: "#50C8EF" }} />
            </div>
            <div className="icone-remove" onClick={this.handleRemove}>
              <Cancel style={{ width: 20, height: 20, fill: "#50C8EF" }} />
            </div>
          </div>
        </div>
      );
    }

    return result;
  }
}

export default TodoItem;
