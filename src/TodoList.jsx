import React from "react";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import "./TodoList.scss";

class TodoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: []
    };

    this.addTodo = this.addTodo.bind(this);
    this.updetedEditTodo = this.updetedEditTodo.bind(this);
    this.deletTodo = this.deletTodo.bind(this);
  }

  updetedEditTodo(todo, id) {
    let index = this.state.todos.findIndex(elem => elem.id === id);
    const updateTodo = [...this.state.todos];
    updateTodo[index] = todo;
    this.setState({
      todos: updateTodo
    });
    // this.setState({
    //   todos: this.state.todos.splice(index, 1, todo)
    // });
  }

  //   _updateStyle (props) {
  //     const { typeElements } = this.state;
  //     const updatedHeaders = [...typeElements.headers];
  //     updatedHeaders[props.index] = props;
  //     this.setState({
  //       ...this.state,
  //       typeElements: {
  //         ...typeElements,
  //         headers: updatedHeaders
  //       }
  //     ));
  //   }

  addTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    });
  }

  deletTodo(id) {
    this.setState({
      todos: this.state.todos.filter(todo => todo.id !== id)
    });
  }

  render() {
    return (
      <div className="todolist">
        <h1>todo list</h1>
        {this.state.todos.map(todo => {
          return (
            <TodoItem
              key={todo.id}
              id={todo.id}
              todoitem={todo.todo}
              editTodo={this.updetedEditTodo}
              deletTodo={this.deletTodo}
            />
          );
        })}

        <TodoForm addTodo={this.addTodo} />
      </div>
    );
  }
}

export default TodoList;
