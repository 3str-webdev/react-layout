import React from "react";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

interface LayoutProps {
  withFooter?: boolean;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ withFooter, children }) => {
  return (
    <div className="react-layout">
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
