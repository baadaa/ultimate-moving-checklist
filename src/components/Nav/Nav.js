import React from "react";
import styled from "styled-components";
import colors from "../UIElements/colors";
import { ReactComponent as CalendarIcon } from "../../img/calendar.svg";
import { ReactComponent as CategoryIcon } from "../../img/category.svg";
import { ReactComponent as PersonalIcon } from "../../img/personal.svg";

const NavArea = styled.nav`
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  height: 50px;
  z-index: 990;
  background: ${colors.lightBlue};
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
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
    height: 100%;
    &.active,
    &:hover {
      opacity: 1;
    }
  }
  svg {
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
    box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.3);

    ul {
      align-items: flex-end;
    }
    li {
      flex-direction: column;
      font-size: 11px;
      font-weight: 800;
      justify-content: flex-end;
      padding-bottom: 8px;
      box-sizing: border-box;
    }
    svg {
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

const Nav = ({ currentSection, sectionChangeHandler }) => {
  return (
    <NavArea>
      <ul>
        <li
          data-section="weekly"
          className={currentSection === "weekly" ? "active" : null}
          onClick={sectionChangeHandler}
        >
          <CalendarIcon className="calendar" alt="" />
          Weekly view
        </li>
        <li
          data-section="category"
          className={currentSection === "category" ? "active" : null}
          onClick={sectionChangeHandler}
        >
          <CategoryIcon className="category" alt="" />
          Category view
        </li>
        <li
          data-section="personal"
          className={currentSection === "personal" ? "active" : null}
          onClick={sectionChangeHandler}
        >
          <PersonalIcon className="personal" alt="" />
          Personal list
        </li>
      </ul>
    </NavArea>
  );
};

export default Nav;
