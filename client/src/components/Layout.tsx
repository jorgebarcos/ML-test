import React, { ReactChild } from "react";
import Header from "./Header";

type Props = {
  children: ReactChild;
};

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main className="main">
        <div className="container main__container">{children}</div>
      </main>
    </div>
  );
};

export default Layout;
