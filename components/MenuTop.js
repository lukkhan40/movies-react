import React from "react";
import { Menu } from "antd";
import Logo from "public/img/logo.svg";
import Link from "next/link";

export default function MenuTop() {
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px;" }}
      >
        <Menu.Item key="1">
          <Link href="/">
            <a>Home</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/new-movies">
            <a>Ultimos Lanzamientos</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/popular">
            <a>Populares</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/search">
            <a>Buscador</a>
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}
