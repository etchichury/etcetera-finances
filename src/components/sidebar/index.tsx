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

const Sidebar = () => {
  return (
    <MainContainer>
      <TitleSection>
        <WalletAlt size={40} />
        <h1>tcetera</h1>
      </TitleSection>
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
