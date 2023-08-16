"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Space, Typography, Button } from "antd";
import {
  HomeOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  UserOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import {AiOutlineArrowRight} from "react-icons/ai"
import logo from "@/assets/images/logo.png";
import styles from "@/styles/menu.module.css";

const { Title, Text } = Typography;

const Menu = (props) => {
  const { children } = props;

  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);

  const showDrawer = () => {
    setOpenDrawer(true);
  };

  const onCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleMenuItemClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <>
      {/* <div>{children}</div> */}
      <div className={styles.menuContainer}>
        <div className={styles.logo}>
          <Image
            src={logo}
            width={150}
            height={150}
            priority={false}
            alt="logo of travel planner"
          />
        </div>
        <nav>
          <div className={styles.menuIcon} onClick={showDrawer}>
            <i className="fa fa-bars"></i>
          </div>
          <div className={styles.menu}>
            <ul className={`${styles.menuItems}`}>
              <li
                className={`${styles.menuItem} ${
                  activeMenuItem === "Home" ? styles.active : ""
                }`}
                onClick={() => handleMenuItemClick("Home")}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${styles.menuItem} ${
                  activeMenuItem === "Service" ? styles.active : ""
                }`}
                onClick={() => handleMenuItemClick("Service")}
              >
                <Link href="/service">Service</Link>
              </li>
              <li
                className={`${styles.menuItem} ${
                  activeMenuItem === "Destination" ? styles.active : ""
                }`}
                onClick={() => handleMenuItemClick("Destination")}
              >
                <Link href="/destination">Destination</Link>
              </li>
              <li
                className={`${styles.menuItem} ${
                  activeMenuItem === "About" ? styles.active : ""
                }`}
                onClick={() => handleMenuItemClick("About")}
              >
                <Link href="/about">About</Link>
              </li>
              <li
                className={`${styles.menuItem} ${
                  activeMenuItem === "Contact" ? styles.active : ""
                }`}
                onClick={() => handleMenuItemClick("Contact")}
              >
                <Link href="contact">Contact US</Link>
              </li>
            </ul>
            <Drawer
              title="Menu"
              placement="right"
              onClose={onCloseDrawer}
              open={openDrawer}
            >
              <Space direction="vertical" className="drawer">
                <Link className={styles.link} href="/">
                  <HomeOutlined className={styles.iconLink} />
                  Home
                </Link>
                <Link className={styles.link} href="/service">
                  <CustomerServiceOutlined className={styles.iconLink} />{" "}
                  Service
                </Link>
                <Link className={styles.link} href="/destination">
                  <ShopOutlined className={styles.iconLink} /> Destination
                </Link>
                <Link className={styles.link} href="/about">
                  <InfoOutlined className={styles.iconLink} />
                  About
                </Link>
                <Link className={styles.link} href="contact">
                  <UserOutlined className={styles.iconLink} />
                  Contact US
                </Link>
              </Space>
            </Drawer>
          </div>
        </nav>
      </div>
      <div className="bg-cover bg-[url('./../assets/images/bg-img.jpeg')] h-[500px] flex flex-col items-center justify-center text-center font-sans">
        <p className="text-slate-100 p-5 font-bold text-5xl">
          Enjoy Every Second
          <br />
          Of Your Life
        </p>
        <Button type="primary" className={styles.btnBgHead}>
          Get Your Tour Template <AiOutlineArrowRight />
        </Button>
      </div>
    </>
  );
};

export default Menu;
