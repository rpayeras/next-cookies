import React, { FC } from "react";
import Head from "next/head";
interface Props {
  children: JSX.Element;
}
export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Head></Head>
      <nav></nav>
      <main style={{ padding: "20px" }}>{children}</main>
    </>
  );
};
