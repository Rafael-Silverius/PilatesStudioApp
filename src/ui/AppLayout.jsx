import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Header from "./Header";
import Footer from "./Footer";

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 0rem 4.8rem 4rem;
  flex: auto;
`;

const StyledAppLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export default function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </StyledAppLayout>
  );
}
