// TaskManager.js
import React, { Component } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskManager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { id: 1, text: 'Sample Task 1', completed: false },
        { id: 2, text: 'Sample Task 2', completed: true }
      ]
    };
  }

  addTask = (text) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      text,
      completed: false
    };
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, newTask]
    }));
  };

  toggleTaskCompletion = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    }));
  };

  deleteTask = (id) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter((task) => task.id !== id)
    }));
  };

  render() {
    return (
      <div className="task-manager">
        <TaskForm addTask={this.addTask} />
        <TaskList
          tasks={this.state.tasks}
          toggleTaskCompletion={this.toggleTaskCompletion}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

export default TaskManager;
