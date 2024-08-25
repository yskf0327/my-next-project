import React from "react";
// import styles from "./page.module.css";
import Sheet from "@/app/_components/Sheet";
import Hero from "@/app/_components/Hero";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  // return (
  //   <>
  //     <div className={styles.container}>{children}</div>
  //   </>
  // );
  return (
    <>
      <Hero title="members" sub="メンバー"></Hero>
      <Sheet>{children}</Sheet>;
    </>
  );
}
