import React from "react";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { Header } from "./Header";
import styled from "styled-components";

const AppStyles = styled.main`
  max-width: 540px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { siteName, description } = useSiteMetadata();
  return (
    <AppStyles>
      <Header siteTitle={siteName} siteDescription={description} />
      {children}
    </AppStyles>
  );
};
