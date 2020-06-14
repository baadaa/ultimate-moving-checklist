import React from "react";
import styled from "styled-components";
import colors from "../UIElements/colors";
import { ReactComponent as Check } from "../../img/yes.svg";

const SettingsArea = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  z-index: 999;
  transition: opacity 0.2s, transform 0.2s;
  border-top: 1px solid #ddd;
  opacity: ${props => (props.isOpen ? 1 : 0)};
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
`;
const Settings = ({
  isOpen,
  settingViewHandler,
  settingChangeHandler,
  residenceType,
  moveDate,
  hasPet,
  hasChild
}) => (
  <SettingsArea isOpen={isOpen}>
    <div className="wrapper">
      <form onSubmit={e => e.preventDefault()}>
        <div className="row">
          <span className="rowLabel">Move Date</span>
          <input
            className="dateInput"
            type="text"
            placeholder={new Date().toDateString()}
            value={moveDate}
            data-q="moveDate"
            onChange={settingChangeHandler}
          />
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
  </SettingsArea>
);

export default Settings;
