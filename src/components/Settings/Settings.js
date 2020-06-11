import React from "react";
import styled from "styled-components";

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
`;
const Settings = ({ isOpen }) => (
  <SettingsArea isOpen={isOpen}>
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>Settings</div>
  </SettingsArea>
);

export default Settings;
