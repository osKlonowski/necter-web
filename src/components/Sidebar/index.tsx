import {
  CloseIcon,
  Icon,
  SidebarContainer,
  SidebarLink,
  SidebarMenu,
  SidebarRoute,
  SidebarWrapper,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({
  isOpen,
  toggleSidebar,
}: {
  isOpen: boolean;
  toggleSidebar: any;
}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggleSidebar}>
      <Icon onClick={toggleSidebar}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggleSidebar}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggleSidebar}>
            Use Case
          </SidebarLink>
          <SidebarLink to="services" onClick={toggleSidebar}>
            How it Works
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
      <SideBtnWrap>
        <SidebarRoute to="/download">Download</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
