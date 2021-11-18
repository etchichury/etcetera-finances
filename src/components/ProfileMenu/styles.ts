import styled from "styled-components";

export const ProfileContainer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  border-radius: 5px;
  margin-top: 25px;
`;

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
`;

export const ProfileOptionsContainer = styled.div`
  hr {
    margin: 5px 10px;
    border: 1px solid #f0f0f0;
  }
  padding: 0px 10px;
  padding-bottom: 10px;
`;

export const ProfileImage = styled.img`
  border: solid 1px #97ead2;
  border-radius: 50%;
  justify-self: center;
`;

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
  :hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }
`;
