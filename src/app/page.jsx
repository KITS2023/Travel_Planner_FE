"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Layout, Menu, Space } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import logo from "@/assets/images/logo.png";
import Loading from "./loading";
import styles from "@/styles/home.module.css";

const { Header, Content, Footer } = Layout;

const menuItems = [
  {
    key: "home",
    label: "Home",
  },
  {
    key: "service",
    label: "Service",
  },
  {
    key: "destination",
    label: "Destination",
  },
  {
    key: "about",
    label: "About",
  },
  {
    key: "contact",
    label: "Contact US",
  },
];

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     push('/login');
  //     return;
  //   }
  //   setIsLogin(true);
  // }, [push])

  // if (!isLogin) {
  //   Loading;
  // }

  return (
    <Layout>
      <Header className={`${styles.transparent} ${styles.header}`}>
        <Space>
          <Image
            src={logo}
            width={150}
            height={150}
            priority={false}
            alt="logo of travel planner"
          />
        </Space>
        <Space>
          <Menu
            className={`${styles.transparent} ${styles.menu}`}
            mode="horizontal"
            items={menuItems}
          />
          user
        </Space>
      </Header>
      <Content>abc</Content>
      <Footer style={{ textAlign: "center" }}>
        Travel Planner ©2023 Created by Group C
      </Footer>
    </Layout>
  );
}
