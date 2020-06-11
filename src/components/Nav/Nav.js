import React from "react";
import styled from "styled-components";
import colors from "../UIElements/colors";
import calendar from "../../img/calendar.svg";
import category from "../../img/category.svg";
import personal from "../../img/personal.svg";

const NavArea = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 50px;
  background: ${colors.lightBlue};
  ul {
    display: flex;
    margin: 0 auto;
    list-style: none;
    align-items: center;
    padding: 0 15px;
    max-width: 600px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
  li {
    flex: 1 1 33.333333333%;
    display: flex;
    align-items: center;
    color: #fff;
    font-weight: 400;
    font-size: 14px;
    opacity: 0.5;
    transition: opacity 0.2s;
    cursor: pointer;
    &.active,
    &:hover {
      opacity: 1;
    }
  }
  img {
    margin-right: 10px;
    pointer-events: none;
  }
  .calendar {
    width: 19px;
    height: 19px;
  }
  .category {
    width: 17px;
    height: 17px;
  }
  .personal {
    width: 21px;
    height: 19px;
  }

  @media screen and (max-width: 500px) {
    top: auto;
    bottom: 0;
    height: 70px;
    ul {
      align-items: flex-end;
    }
    li {
      flex-direction: column;
      font-size: 11px;
      font-weight: 800;
      justify-content: flex-end;
      margin-bottom: 8px;
    }
    img {
      margin-right: 0;
      margin-bottom: 5px;
    }
    .calendar {
      width: 30px;
      height: 30px;
    }
    .category {
      width: 25px;
      height: 25px;
    }
    .personal {
      width: 31px;
      height: 30px;
    }
  }
`;

const Nav = ({ currentSection, sectionChange }) => {
  return (
    <NavArea>
      <ul>
        <li
          data-section="weekly"
          className={currentSection === "weekly" ? "active" : null}
          onClick={sectionChange}
        >
          <img className="calendar" src={calendar} alt="" />
          Weekly view
        </li>
        <li
          data-section="category"
          className={currentSection === "category" ? "active" : null}
          onClick={sectionChange}
        >
          <img className="category" src={category} alt="" />
          Category view
        </li>
        <li
          data-section="personal"
          className={currentSection === "personal" ? "active" : null}
          onClick={sectionChange}
        >
          <img className="personal" src={personal} alt="" />
          Personal list
        </li>
      </ul>
    </NavArea>
  );
};

export default Nav;
