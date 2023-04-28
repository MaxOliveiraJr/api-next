import { ReactElement } from "react";
import style from "./Layout.module.css";
import { Navbar } from "../Navbar";

type Props = {
  children: ReactElement;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={style.container}>
      <header className={style.header}>Meu Projeto</header>
      <Navbar></Navbar>
      <main>{children}</main>
      <footer className={style.footer}>Todos os direitos reservados</footer>
    </div>
  );
};

export default Layout;
