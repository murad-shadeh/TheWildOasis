import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;
const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  /* the first takes the size of the content itself and the rest occupying the rest of the page */
  grid-template-rows: auto 1fr;
  height: 100vh;
`;
const AppLayout = () => {
  return (
    <StyledAppLayout>
      <Header />
      <Sidebar />
      <Main>
        {/* we use the outlet component to display the child routes in the applayout */}
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
