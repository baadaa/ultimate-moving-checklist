import React from "react";
import Header from "./components/Header/Header";
import TodoArea from "./components/TodoArea/TodoArea";
import Settings from "./components/Settings/Settings";
import todos from "./data/masterTodos";

class App extends React.Component {
  state = {
    currentSection: "weekly",
    currentWeek: -8,
    settingIsOpen: false,
    completedTaskIsHidden: false,
    moveDate: "",
    todos: []
  };
  componentDidMount() {
    // eslint-disable-next-line
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS
    this.setState({ todos });
  }
  sectionChangeHandler = e => {
    const targetSection = e.target.dataset.section;
    this.setState({ currentSection: targetSection });
  };
  settingViewHandler = () => {
    const currentlyOpen = this.state.settingIsOpen;
    this.setState({ settingIsOpen: !currentlyOpen });
  };
  todoCompleteHandler = i => {
    const todos = this.state.todos;
    todos[i].done = !todos[i].done;
    this.setState({ todos });
  };
  completedTaskVisibilityHandler = () => {
    const currentVisibility = this.state.completedTaskIsHidden;
    this.setState({ completedTaskIsHidden: !currentVisibility });
  };
  render = () => (
    <>
      <Header
        currentSection={this.state.currentSection}
        sectionChangeHandler={this.sectionChangeHandler}
        settingViewHandler={this.settingViewHandler}
        settingIsOpen={this.state.settingIsOpen}
        moveDateIsSet={this.state.moveDate}
      />
      <TodoArea
        currentSection={this.state.currentSection}
        todos={this.state.todos}
        todoCompleteHandler={this.todoCompleteHandler}
        completedTaskIsHidden={this.state.completedTaskIsHidden}
        completedTaskVisibilityHandler={this.completedTaskVisibilityHandler}
      />
      <Settings isOpen={this.state.settingIsOpen} />
    </>
  );
}

export default App;
