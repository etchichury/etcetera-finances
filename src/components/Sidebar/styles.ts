import { NavLink } from "react-router-dom"
import styled from "styled-components"

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 350px;
  padding: 0px 12px;
  box-shadow: 5px 0 3px -2px #f0f0f0;
  transition: min-width 0.5s ease-in-out;

  > nav {
    display: flex;
    flex-direction: column;
  }
  > hr {
    margin: 20px 0px;
    border: 1px solid #f0f0f0;
  }

  @media (max-width: 600px) {
    flex-direction: row;
    position: fixed;
    top: 0;
    width: 100vw;
    height: 70px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 8px;
    background-color: white;
    z-index: 1;
    justify-content: center;
    align-items: center;

    > nav {
      flex-direction: row;
      align-items: center;
    }
  }

  @media (max-width: 1100px) {
    min-width: 90px;
    h1,
    h5 {
      display: none;
    }
  }
`

export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  margin-top: 12px;

  @media (max-width: 600px) {
    display: none;
  }
`

export const SectionLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  transition: box-shadow 0.25s, background-color 0.5s;

  svg {
    margin-right: 5px;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  &.active {
    background-color: #97ead2;
    border-radius: 5px;
  }

  @media (max-width: 600px) {
    height: 60px;
    margin-bottom: 0;
  }

  @media (max-width: 1100px) {
    justify-content: center;
    > svg {
      margin-right: 0;
    }
  }
`

export const Footer = styled.div`
  display: flex;
  bottom: 0;
  margin-top: auto;
  align-self: center;
  width: fit-content;
`

export const ProjectHyperlink = styled.a`
  display: flex;
  flex-direction: row;
  color: inherit;
  text-decoration: none;
  margin-bottom: 12px;

  > svg {
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    display: none;
  }
`
