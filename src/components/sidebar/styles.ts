import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 100%;
  padding: 0px 12px;
  box-shadow: 5px 0 3px -2px #f0f0f0;
  > nav {
    display: flex;
    flex-direction: column;
  }
  > hr {
    margin: 15px 0px;
    border: 1px solid #f0f0f0;
  }
`;

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 12px;
`;

export const SectionLink = styled(NavLink)`
  text-decoration: none;
  font-size: 18px;
  color: inherit;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
  &.active {
    background-color: #97ead2;
    border-radius: 5px;
  }
`;

export const Footer = styled.div`
  display: flex;
  bottom: 0;
  margin-top: auto;
  align-self: center;
  width: fit-content;
`;

export const ProjectHyperlink = styled.a`
  color: inherit;
  text-decoration: none;
  margin-bottom: 12px;
  > svg {
    margin-right: 10px;
  }
`;
