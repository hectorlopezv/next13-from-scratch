import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function aboutLayout({ children }: Props) {
  return (
    <>
      <nav> About NavBar</nav>
      <main>{children}</main>
    </>
  );
}
