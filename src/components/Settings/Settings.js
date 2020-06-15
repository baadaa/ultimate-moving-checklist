import React from "react";
import styled from "styled-components";
import Flatpickr from "react-flatpickr";
import "flatpickr/dist/themes/material_green.css";
import colors from "../UIElements/colors";
import { ReactComponent as Check } from "../../img/yes.svg";

const SettingsArea = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  padding-left: 15px;
  padding-right: 15px;
  z-index: 999;
  transition: opacity 0.2s, transform 0.2s;
  border-top: 1px solid #ddd;
  opacity: ${props => (props.isOpen ? 1 : 0)};
  font-family: inherit;
  transform: ${props =>
    props.isOpen ? "translateX(0)" : "translateX(-100vw)"};
  .wrapper {
    max-width: 350px;
    margin: 0 auto;
    padding: 25px 15px;
    box-sizing: border-box;
  }
  .row {
    display: flex;
    align-items: center;
  }
  .row + .row {
    margin-top: 12px;
  }
  .rowLabel {
    font-size: 12px;
    width: 50px;
    flex-basis: 50px;
    margin-right: 10px;
    text-align: right;
    line-height: 1.3;
  }
  input[type="checkbox"],
  input[type="radio"] {
    margin-right: 10px;
  }
  .dateInputContainer {
    position: relative;
    flex: 1;
    padding: 15px 25px;
    background: #eee;
    border-radius: 10px;
    border: none;
    input {
      box-sizing: border-box;
      width: 100%;
      flex: 1;
      border: none;
      background: transparent;
    }
  }
  .dateInput,
  .inputContainer {
    font-size: 14px;
    display: flex;
    align-items: center;
    padding: 15px 25px;
    background: #eee;
    flex: 1;
    border-radius: 10px;
    border: none;
    outline: none;
    span {
      display: flex;
      flex: 1 1 50%;
      align-items: center;
    }
  }
  form button {
    margin-left: 40px;
    background: ${colors.green};
    color: #fff;
    font-size: 14px;
    display: flex;
    justify-content: center;
    font-weight: 400;
    align-items: center;
    width: calc(100% - 60px);
    box-sizing: border-box;
    padding: 15px 20px;
    border-radius: 30px;
    outline: none;
    border: none;
    margin: 15px 0 0 auto;
    svg {
      margin-right: 8px;
    }
  }
  .foot {
    border-radius: 10px;
    background: ${colors.navy};
    color: #fff;
    padding: 27px;
    margin-top: 25px;
    h6 {
      font-size: 16px;
      font-weight: 400;
      margin: 0;
    }
    p {
      font-weight: 200;
      font-size: 14px;
      line-height: 1.5;
      margin: 15px 0 20px;
      span {
        text-decoration: underline;
      }
    }
    .buttons {
      display: flex;
      justify-content: space-between;
    }
    button {
      flex-basis: 48%;
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 40px;
      padding: 15px;
      border: none;
      font-weight: 400;
      outline: none;
    }
    .bookmark {
      background: #fff;
      color: ${colors.lightBlue};
    }
    .signup {
      background: ${colors.lightBlue};
      color: #fff;
    }
  }
`;
const Settings = ({
  isOpen,
  settingViewHandler,
  settingChangeHandler,
  residenceType,
  moveDate,
  hasPet,
  hasChild
}) => {
  const flatpickrOptions = {
    minDate: "today",
    dateFormat: "M d, Y"
  };
  const bookmark = () => {
    // NOTE:
    // Placeholder solution only — taken from https://stackoverflow.com/questions/10033215/how-do-i-add-an-add-to-favorites-button-or-link-on-my-website

    if (window.sidebar && window.sidebar.addPanel) {
      // Mozilla Firefox Bookmark
      window.sidebar.addPanel(document.title, window.location.href, "");
    } else if (window.external && "AddFavorite" in window.external) {
      // IE Favorite
      window.external.AddFavorite(window.location.href, document.title);
    } else if (window.opera && window.print) {
      // Opera Hotlist
      this.title = document.title;
      return true;
    } else {
      // webkit - safari/chrome
      alert(
        "Press " +
          (navigator.userAgent.toLowerCase().indexOf("mac") !== -1
            ? "Command/Cmd"
            : "CTRL") +
          " + D to bookmark this page."
      );
    }
  };
  const signup = () => {
    console.log("link to signup page");
  };

  return (
    <SettingsArea isOpen={isOpen}>
      <div className="wrapper">
        <form onSubmit={e => e.preventDefault()}>
          <div className="row">
            <span className="rowLabel">Move Date</span>
            <div className="dateInputContainer">
              <Flatpickr
                value={moveDate}
                options={flatpickrOptions}
                placeholder="Enter date..."
                onChange={date => settingChangeHandler(null, date)}
              />
            </div>
          </div>
          <div className="row">
            <span className="rowLabel">Moving into</span>
            <div className="inputContainer">
              <span>
                <input
                  type="radio"
                  id="house"
                  name="residenceType"
                  value="house"
                  data-q="residenceType"
                  checked={residenceType === "house"}
                  onChange={settingChangeHandler}
                />
                <label htmlFor="house">House</label>
              </span>
              <span>
                <input
                  type="radio"
                  id="apartment"
                  name="residenceType"
                  value="apartment"
                  data-q="residenceType"
                  checked={residenceType === "apartment"}
                  onChange={settingChangeHandler}
                />
                <label htmlFor="apartment">Apartment</label>
              </span>
            </div>
          </div>
          <div className="row">
            <span className="rowLabel">Moving with</span>
            <div className="inputContainer">
              <span>
                <input
                  type="checkbox"
                  id="hasPet"
                  name="hasPet"
                  data-q="hasPet"
                  checked={hasPet}
                  onChange={settingChangeHandler}
                />
                <label htmlFor="pet">Pet(s)</label>
              </span>
              <span>
                <input
                  type="checkbox"
                  id="hasChild"
                  name="hasChild"
                  data-q="hasChild"
                  checked={hasChild}
                  onChange={settingChangeHandler}
                />
                <label htmlFor="child">Child(ren)</label>
              </span>
            </div>
          </div>
          <button onClick={settingViewHandler}>
            <Check /> Save and close
          </button>
        </form>
      </div>
      <div className="wrapper foot">
        <h6>Enjoying the checkist?</h6>
        <p>
          Don't forget to <span onClick={bookmark}>bookmark this page</span>,
          and <span onClick={signup}>sign&nbsp;up for Updater app</span> for
          more features
        </p>
        <div className="buttons">
          <button className="bookmark" onClick={bookmark}>
            Bookmark
          </button>
          <button className="signup" onClick={signup}>
            Sign Up
          </button>
        </div>
      </div>
    </SettingsArea>
  );
};

export default Settings;
