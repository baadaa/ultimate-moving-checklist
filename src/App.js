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
    residenceType: null,
    hasPet: true,
    hasChild: true,
    todos: []
  };
  componentDidMount() {
    // eslint-disable-next-line
    (function(l){var i,s={touchend:function(){}};for(i in s)l.addEventListener(i,s)})(document); // sticky hover fix in iOS
    if (window.localStorage.getItem("updTestListData")) {
      const savedState = JSON.parse(
        window.localStorage.getItem("updTestListData")
      );
      this.setState({ ...savedState });
    } else {
      this.setState({ todos }, () => this.setLocalStorage());
    }
  }
  setLocalStorage = () => {
    const allExceptSettingState = { ...this.state, settingIsOpen: false };
    window.localStorage.setItem(
      "updTestListData",
      JSON.stringify(allExceptSettingState)
    );
  };
  sectionChangeHandler = (e, option) => {
    const targetSection = option ? option : e.target.dataset.section;
    this.setState({ currentSection: targetSection });
  };
  settingViewHandler = () => {
    const currentlyOpen = this.state.settingIsOpen;
    const moveDate =
      this.state.moveDate.length === 0 ? "" : this.state.moveDate; // To catch edge-case where Flatpickr date is manually removed
    this.setState({ settingIsOpen: !currentlyOpen, moveDate });
  };
  settingChangeHandler = (e, date) => {
    if (date) {
      this.setState({ moveDate: date }, () => this.setLocalStorage());
      return;
    }
    const setting = e.target.dataset.q;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({ [setting]: value }, () => this.setLocalStorage());
  };
  todoCompleteHandler = id => {
    const todos = this.state.todos.map(todo => {
      if (todo.id !== id) {
        return todo;
      }
      return { ...todo, done: !todo.done };
    });
    this.setState({ todos }, () => this.setLocalStorage());
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
    this.setState({ completedTaskIsHidden: !currentVisibility }, () =>
      this.setLocalStorage()
    );
  };
  saveNewTodo = newItem => {
    const todos = this.state.todos;
    todos.push(newItem);
    this.setState({ todos }, () => this.setLocalStorage());
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
        sectionChangeHandler={this.sectionChangeHandler}
        categoryChangeHandler={this.categoryChangeHandler}
        completedTaskIsHidden={this.state.completedTaskIsHidden}
        completedTaskVisibilityHandler={this.completedTaskVisibilityHandler}
        saveNewTodo={this.saveNewTodo}
        hasChild={this.state.hasChild}
        hasPet={this.state.hasPet}
      />
      <Settings
        isOpen={this.state.settingIsOpen}
        settingViewHandler={this.settingViewHandler}
        moveDate={this.state.moveDate}
        residenceType={this.state.residenceType}
        hasPet={this.state.hasPet}
        hasChild={this.state.hasChild}
        settingChangeHandler={this.settingChangeHandler}
      />
    </>
  );
}

export default App;
