import Link from "next/link";
import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-content: flex-end;
`;

const NavigationLinks = styled(Link)`
  margin: 24px 12px 0 12px;
`;
const Navbar = (): JSX.Element => {
  return (
    <Container>
      <NavigationLinks href="/blogs">Blogs</NavigationLinks>
      <NavigationLinks href="/">About</NavigationLinks>
      <NavigationLinks href="/now">Now</NavigationLinks>
    </Container>
  );
};

export default Navbar;
