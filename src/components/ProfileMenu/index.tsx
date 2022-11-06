import { ChevronCompactDown, ChevronCompactUp } from "@styled-icons/bootstrap"
import { useState } from "react"
import {
  ProfileContainer,
  ProfileSummaryContainer,
  ProfileImage,
  ProfileOptionsContainer,
  ProfileButton,
} from "./styles"

const ProfileMenu = ({
  userName,
  userImg,
}: {
  userName: string
  userImg: string
}) => {
  const [showMore, setshowMore] = useState(false)

  return (
    <ProfileContainer>
      <ProfileSummaryContainer onClick={() => setshowMore(!showMore)}>
        <ProfileImage src={userImg} alt='user' width={45} height={45} />
        <h4>{userName}</h4>
        {showMore ? (
          <ChevronCompactUp size={28} />
        ) : (
          <ChevronCompactDown size={28} />
        )}
      </ProfileSummaryContainer>
      {showMore ? (
        <ProfileOptionsContainer>
          <hr />
          <ProfileButton>Logout</ProfileButton>
          <ProfileButton>Settings [Coming soon]</ProfileButton>
        </ProfileOptionsContainer>
      ) : null}
    </ProfileContainer>
  )
}

export default ProfileMenu
