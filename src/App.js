import React from "react";
import Header from "./components/Header/Header";
import TodoArea from "./components/TodoArea/TodoArea";
import Settings from "./components/Settings/Settings";
import todos from "./data/masterTodos";

class App extends React.Component {
  state = {
    currentSection: "weekly",
    currentWeek: -8,
    currentCategory: "Category 1",
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
  todoCompleteHandler = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, done: !todo.done };
    });
    this.setState({ todos });
  };
  weekChangeHandler = direction => {
    const weeks = [-8, -6, -4, -2, -1, 0, 1];
    if (direction === "-" && this.state.currentWeek !== -8) {
      const currentIndex = weeks.indexOf(this.state.currentWeek);
      const newIndex = currentIndex - 1;
      this.setState({ currentWeek: weeks[newIndex] });
    }
    if (direction === "+" && this.state.currentWeek !== 1) {
      const currentIndex = weeks.indexOf(this.state.currentWeek);
      const newIndex = currentIndex + 1;
      this.setState({ currentWeek: weeks[newIndex] });
    }
  };
  categoryChangeHandler = target => {
    this.setState({ currentCategory: target });
  };
  completedTaskVisibilityHandler = () => {
    const currentVisibility = this.state.completedTaskIsHidden;
    this.setState({ completedTaskIsHidden: !currentVisibility });
  };
  categoryList = [
    "Category 1",
    "Category 2",
    "Category 3",
    "Category 4",
    "Category 5",
    "Category 6"
  ];
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
        currentWeek={this.state.currentWeek}
        currentCategory={this.state.currentCategory}
        categoryList={this.categoryList}
        todos={this.state.todos}
        todoCompleteHandler={this.todoCompleteHandler}
        weekChangeHandler={this.weekChangeHandler}
        categoryChangeHandler={this.categoryChangeHandler}
        completedTaskIsHidden={this.state.completedTaskIsHidden}
        completedTaskVisibilityHandler={this.completedTaskVisibilityHandler}
      />
      <Settings isOpen={this.state.settingIsOpen} />
    </>
  );
}

export default App;
