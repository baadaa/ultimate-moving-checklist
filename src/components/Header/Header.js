import React from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import hamburger from "../../img/hamburger.svg";
import closeMenu from "../../img/close-nav.svg";
import colors from "../UIElements/colors";

const HeaderArea = styled.header`
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  h1,
  h2 {
    margin: 0;
    line-height: 1;
  }
  h1 {
    font-size: 10px;
    font-weight: 400;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 20px;
    font-weight: 200;
  }
  .wrapper {
    box-sizing: border-box;
    max-width: 600px;
    width: 100%;
    height: 100%;
    padding: 0 15px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  .menu {
    display: flex;
    align-items: center;
    margin-right: 25px;
    width: 35px;
    flex: 0;
    cursor: pointer;
  }
  .title {
    flex: 1;
  }
  button {
    font-size: 12px;
    background: white;
    padding: 5px 10px;
    border-radius: 20px;
    outline: none;
    color: ${colors.lightBlue};
    border: 1px solid ${colors.lightBlue};
  }
`;

const getCurrentSection = section => {
  switch (section) {
    case "weekly":
      return "By timeline";
    case "category":
      return "By category";
    case "personal":
      return "Personal Items";
    default:
      return "By timeline";
  }
};

const Header = ({
  currentSection,
  sectionChange,
  toggleSettings,
  settingIsOpen
}) => {
  const sectionLabel = settingIsOpen
    ? "Move Details"
    : getCurrentSection(currentSection);
  return (
    <>
      <HeaderArea>
        <div className="wrapper">
          <div className="menu">
            <img
              src={settingIsOpen ? closeMenu : hamburger}
              alt=""
              onClick={toggleSettings}
            />
          </div>
          <div className="title">
            <h1>Moving Checklist</h1>
            <h2>{sectionLabel}</h2>
          </div>
          <button>Close</button>
        </div>
      </HeaderArea>
      <Nav currentSection={currentSection} sectionChange={sectionChange} />
    </>
  );
};

export default Header;
