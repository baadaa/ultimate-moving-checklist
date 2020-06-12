import React from "react";
import styled from "styled-components";
import colors from "../UIElements/colors";
import { ReactComponent as EmptyList } from "../../img/empty-list.svg";

const TodoAreaContainer = styled.div`
  width: 100%;
  background: #ebf1f5;
  flex: 1;
  padding-bottom: 100px;
  .emptyList {
    display: flex;
    flex-direction: column;
    align-items: center;
    svg {
      width: 250px;
      height: 250px;
      margin-bottom: 14px;
      margin-top: 40px;
    }
    font-size: 16px;
    font-weight: 800;
    color: ${colors.blue};
  }
  .wrapper {
    max-width: 600px;
    margin: 0 auto;
    box-sizing: border-box;
    padding: 0 15px;
    width: 100%;
  }
  .viewContext {
    display: flex;
    height: ${props => (props.currentSection === "personal" ? "0" : "40px")};
    overflow: hidden;
    align-items: center;
    font-size: 14px;
    font-weight: 800;
    transition: background-color 0.2s, height 0.2s, color 0.2s;
    color: ${props =>
      props.currentSection === "personal" ? "transparent" : "#fff"};
    background-color: ${props =>
      props.currentSection === "weekly" ? colors.navy : colors.blue};
  }
  .toggler {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    padding-bottom: 15px;
    .toggleDone {
      display: flex;
      align-items: center;
      font-size: 10px;
      color: #999;
      font-weight: 400;
    }
    label {
      display: flex;
      user-select: none;
      align-items: center;
      cursor: pointer;
    }
    .toggleIndicator {
      box-sizing: border-box;
      flex-basis: 31px;
      width: 31px;
      height: 20px;
      background: #fff;
      box-shadow: 0 1px 6px rgba(0, 0, 0, 0.3);
      border-radius: 30px;
      margin-right: 8px;
      display: flex;
      align-items: center;
    }
    .toggleDot {
      background: #c1c1c1;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      border-radius: 30px;
      margin: 0 4px;
      transition: transform 0.2s, background 0.2s;
    }
    input[type="checkbox"] {
      opacity: 0;
      position: fixed;
      width: 0;
      &:checked + label {
        .toggleDot {
          background: ${colors.lightBlue};
          transform: translateX(9px);
        }
      }
    }
    button {
      display: flex;
      align-items: center;
      border: none;
      outline: none;
      background: ${colors.lightBlue};
      color: #fff;
      padding: 7px 14px;
      font-size: 12px;
      font-weight: 400;
      border-radius: 20px;
      svg {
        margin-right: 5px;
      }
    }
  }
  .todos {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-between;
    li {
      flex-basis: 49%;
      width: 49%;
      box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
      background: #fff;
      border-radius: 10px;
      padding: 15px;
      font-size: 14px;
      line-height: 1.5;
      box-sizing: border-box;
      margin-bottom: 15px;
      transition: color 0.2s, transform 0.2s, background 0.2s, box-shadow 0.2s,
        text-decoration 0.2s;
      &:hover {
        transform: scale(1.02) translateY(-1px);
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
      }
      &.done {
        background: #e4e4e4;
        box-shadow: none;
        color: #888;
        text-decoration: line-through;
      }
      @media screen and (max-width: 450px) {
        flex-basis: 100%;
      }
    }
    label {
      display: flex;
      cursor: pointer;
      height: 100%;
      user-select: none;
      .circle {
        border-radius: 15px;
        width: 15px;
        flex: 0 0 15px;
        height: 15px;
        margin-top: 3px;
        margin-right: 7px;
        box-sizing: border-box;
        border: 1px solid ${colors.lightBlue};
        background-color: #fff;
      }
    }
    input[type="checkbox"] {
      opacity: 0;
      position: fixed;
      width: 0;
      &:checked + label {
        .circle {
          background-color: ${colors.lightBlue};
          background-image: url("data:image/svg+xml,%3Csvg width='9' height='8' xmlns='http://www.w3.org/2000/svg'%3E%3Cg transform='translate(-341 -348)' fill='none' fill-rule='evenodd'%3E%3Cpath fill='%23EBF1F5' d='M0 70h1200v627H0z'/%3E%3Crect fill='%23E4E4E4' x='317' y='326' width='278' height='95' rx='10'/%3E%3Crect stroke='%2339B3CA' fill='%2339B3CA' x='337.5' y='344.5' width='16' height='16' rx='8'/%3E%3Cpath d='M344.4 355.8c.5.3 1 .2 1.4-.2l4-6c.8-1.2-1-2.2-1.7-1.1l-3.4 5-2.2-1.6a.9.9 0 00-1.4.4 1 1 0 00.4 1.4l3 2.1z' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");
          background-size: 9px;
          background-position: center;
          background-repeat: no-repeat;
          border-color: #39b3ca;
          overflow: visible;
        }
      }
    }
  }
`;

const TodoArea = ({
  currentSection,
  todos,
  todoCompleteHandler,
  completedTaskIsHidden,
  completedTaskVisibilityHandler
}) => {
  const getTodoList = todos => {
    const List = todos.map((todo, i) => {
      if (todo.done && completedTaskIsHidden) return null;
      return (
        <li className={todo.done ? "done" : null} key={i}>
          <input
            type="checkbox"
            checked={todo.done}
            name={"todo" + i}
            id={"todo" + i}
            onChange={() => todoCompleteHandler(i)}
          />
          <label htmlFor={"todo" + i}>
            <span className="circle"></span>
            {todo.content}
          </label>
        </li>
      );
    });
    if (List.every(item => item === null))
      return (
        <span className="emptyList">
          <EmptyList />
          No items on this list
        </span>
      );
    return <ul className="todos">{List}</ul>;
  };

  return (
    <TodoAreaContainer currentSection={currentSection}>
      <div className="viewContext">
        <div className="wrapper">8 weeks before move</div>
      </div>
      <div className="wrapper toggler">
        <div className="toggleDone">
          <input
            type="checkbox"
            checked={completedTaskIsHidden}
            name="toggleButton"
            id="toggleButton"
            onChange={completedTaskVisibilityHandler}
          />
          <label htmlFor="toggleButton">
            <span className="toggleIndicator">
              <span className="toggleDot"></span>
            </span>
            Hide completed
          </label>
        </div>
        <button>
          <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M0 6h13v2H0z" />
              <path d="M7.5.5v13h-2V.5z" />
            </g>
          </svg>
          Add new
        </button>
      </div>
      <div className="wrapper">{getTodoList(todos)}</div>
    </TodoAreaContainer>
  );
};

export default TodoArea;
