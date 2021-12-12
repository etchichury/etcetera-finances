import { Github } from "@styled-icons/bootstrap";
import { WalletAlt } from "@styled-icons/boxicons-solid";
import { AttachMoney } from "@styled-icons/material-rounded";
import { ClipboardBulletListLtr } from "@styled-icons/fluentui-system-filled";
import {
  Footer,
  MainContainer,
  ProjectHyperlink,
  SectionLink,
  TitleSection,
} from "./styles";
import ProfileMenu from "../ProfileMenu";

const Sidebar = () => {
  return (
    <MainContainer>
      <TitleSection>
        <WalletAlt size={40} />
        <h1>Etcetera</h1>
      </TitleSection>
      <ProfileMenu
        userName="João Soares"
        userImg="https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk"
      />
      <hr />
      <nav>
        <SectionLink to="expenses">
          <AttachMoney size={28} />
          Expenses
        </SectionLink>
        <SectionLink to="budget">
          <ClipboardBulletListLtr size={28} />
          Budget Planning
        </SectionLink>
      </nav>
      <Footer>
        <ProjectHyperlink
          href="https://github.com/etchichury/etcetera-finances"
          target="_blank"
          rel="noreferrer"
        >
          <Github size={26} />
          By Etchichury
        </ProjectHyperlink>
      </Footer>
    </MainContainer>
  );
};

export default Sidebar;
