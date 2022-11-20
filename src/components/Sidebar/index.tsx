import { Github } from "@styled-icons/bootstrap"
import { WalletAlt } from "@styled-icons/boxicons-solid"
import { AttachMoney } from "@styled-icons/material-rounded"
import { ClipboardBulletListLtr } from "@styled-icons/fluentui-system-filled"
import {
  Footer,
  MainContainer,
  ProjectHyperlink,
  SectionLink,
  TitleSection,
} from "./styles"
import ProfileMenu from "src/components/ProfileMenu"

const Sidebar = () => {
  return (
    <MainContainer>
      <TitleSection>
        <WalletAlt size={40} />
        <h1>tcetera</h1>
      </TitleSection>
      <ProfileMenu
        userName='João Soares'
        userImg='https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk'
      />
      <hr />
      <nav>
        <SectionLink to='expenses'>
          <AttachMoney size={36} />
          <h5>Expenses</h5>
        </SectionLink>
        <SectionLink to='budget'>
          <ClipboardBulletListLtr size={36} />
          <h5>Budget</h5>
        </SectionLink>
      </nav>
      <Footer>
        <ProjectHyperlink
          href='https://github.com/etchichury/etcetera-finances'
          target='_blank'
          rel='noreferrer'
        >
          <Github size={32} />
          <h5>By Etchichury</h5>
        </ProjectHyperlink>
      </Footer>
    </MainContainer>
  )
}

export default Sidebar
