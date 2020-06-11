import React from "react";
import Header from "./components/Header/Header";
import TodoArea from "./components/TodoArea/TodoArea";
import Settings from "./components/Settings/Settings";
class App extends React.Component {
  state = {
    currentSection: "weekly",
    settingIsOpen: false
  };

  sectionChange = e => {
    const targetSection = e.target.dataset.section;
    this.setState({ currentSection: targetSection });
  };
  toggleSettings = () => {
    const currentlyOpen = this.state.settingIsOpen;
    this.setState({ settingIsOpen: !currentlyOpen });
  };
  render = () => (
    <>
      <Header
        currentSection={this.state.currentSection}
        sectionChange={this.sectionChange}
        toggleSettings={this.toggleSettings}
        settingIsOpen={this.state.settingIsOpen}
      />
      <TodoArea />
      <Settings isOpen={this.state.settingIsOpen} />
    </>
  );
}

export default App;
