import styled from "styled-components"

export const ProfileContainer = styled.div<{ expended: boolean }>`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  margin-top: 25px;

  @media (max-width: 600px) {
    margin-top: 0;
    height: fit-content;
    z-index: 2;
    background: white;
    width: 60px;
    position: fixed;
    top: 1px;
    left: 8px;
    box-shadow: ${(props) =>
      props.expended ? "rgba(0, 0, 0, 0.16) 0px 1px 4px" : "none"};
  }
`

export const ProfileSummaryContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 0.7fr;
  align-items: center;
  cursor: pointer;
  padding: 10px 0px;

  h4 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    > h4,
    svg {
      display: none;
    }
  }
`

export const ProfileOptionsContainer = styled.div`
  padding: 0px 10px;
  padding-bottom: 10px;

  hr {
    margin: 5px 10px;
    border: 1px solid #f0f0f0;
  }

  @media (max-width: 1100px) {
    > h4,
    svg {
      display: none;
    }
  }
`

export const ProfileImage = styled.img`
  border: solid 1px #97ead2;
  border-radius: 50%;
  justify-self: center;
`

export const ProfileButton = styled.button`
  background: none;
  color: inherit;
  border: none;
  font: inherit;
  cursor: pointer;
  text-align: start;
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;

  > svg {
    display: none;
  }

  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  @media (max-width: 1100px) {
    > h5 {
      display: none;
    }

    > svg {
      display: block;
    }
  }
`
