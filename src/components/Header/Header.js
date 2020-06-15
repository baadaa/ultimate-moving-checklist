import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import { ReactComponent as HamburgerIcon } from "../../img/hamburger.svg";
import { ReactComponent as CloseMenuIcon } from "../../img/close-nav.svg";
import { ReactComponent as RedDotIcon } from "../../img/red-dot.svg";
import { ReactComponent as Bell } from "../../img/bell.svg";
import { ReactComponent as Ok } from "../../img/yes.svg";
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
    height: 35px;
    flex: 0;
    cursor: pointer;
    position: relative;
    overflow: visible;
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
  .dot {
    width: 15px;
    height: 15px;
    position: absolute;
    top: -2px;
    right: -7px;
    pointer-events: none;
  }
  .burger {
    width: 25px;
    height: 22px;
  }
  .close {
    width: 25px;
    height: 26px;
  }
`;
const Notice = styled.div`
  position: fixed;
  top: 86px;
  left: 0;
  right: 0;
  padding: 0 15px;
  transition: opacity 0.2s, transform 0.2s;
  opacity: ${props => (props.show ? 1 : 0)};
  pointer-events: ${props => (props.show ? "all" : "none")};
  transform: ${props => (props.show ? "translateY(0)" : "translateY(-20px)")};
  .notification {
    display: flex;
    box-sizing: border-box;
    max-width: 350px;
    margin-left: auto;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  }
  .icon {
    background: ${colors.green};
    align-self: stretch;
    border-radius: 10px 0 0 10px;
    display: flex;
    align-items: center;
    padding: 10px;
    svg {
      width: 20px;
      height: 20px;
    }
  }
  p {
    font-size: 12px;
    line-height: 1.5;
    margin: 15px;
  }
  button {
    flex-basis: 60px;
    margin-right: 15px;
    font-size: 12px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${colors.green};
    color: #fff;
    border-radius: 4px;
    padding: 8px 10px;
    svg {
      width: 10px;
      height: 8px;
      margin-right: 5px;
    }
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
  sectionChangeHandler,
  settingViewHandler,
  settingIsOpen,
  moveDateIsSet
}) => {
  const sectionLabel = settingIsOpen
    ? "Move Details"
    : getCurrentSection(currentSection);
  const [toastIsAckowledged, setToastIsAckowledged] = useState(false);

  const toastSeenRecently = () => {
    const lastSeen = JSON.parse(localStorage.getItem("updToastSeen"));
    const now = new Date().getTime();

    if (!lastSeen) {
      return false;
    }
    if (now > lastSeen.expiry) {
      localStorage.removeItem("updToastSeen");
      return false;
    }
    return true;
  };

  const toastIsSeen = () => {
    var now = new Date().getTime();
    var saveToken = {
      value: now,
      expiry: now + 259200000
    };
    localStorage.setItem("updToastSeen", JSON.stringify(saveToken));
    setToastIsAckowledged(true);
  };
  useEffect(() => {
    setToastIsAckowledged(toastSeenRecently() ? true : false);
  }, []);

  return (
    <>
      <HeaderArea>
        <div className="wrapper">
          <div className="menu">
            {settingIsOpen ? (
              <CloseMenuIcon
                className="close"
                onClick={settingViewHandler}
                alt=""
              />
            ) : (
              <HamburgerIcon
                className="burger"
                onClick={settingViewHandler}
                alt=""
              />
            )}
            {}
            {!moveDateIsSet ? <RedDotIcon className="dot" alt="" /> : null}
          </div>
          <div className="title">
            <h1>Moving Checklist</h1>
            <h2>{sectionLabel}</h2>
          </div>
          <button>Close</button>
        </div>
        <Notice show={!toastIsAckowledged}>
          <div
            style={{
              maxWidth: "570px",
              margin: "0 auto"
            }}
          >
            <div className="notification">
              <span className="icon">
                <Bell />
              </span>
              <p>
                Everything is automatically saved in your browser. Close the tab
                anytime, and come back to tackle more tasks.
              </p>
              <button onClick={toastIsSeen}>
                <Ok /> OK
              </button>
            </div>
          </div>
        </Notice>
      </HeaderArea>
      <Nav
        currentSection={currentSection}
        sectionChangeHandler={sectionChangeHandler}
      />
    </>
  );
};

export default Header;
