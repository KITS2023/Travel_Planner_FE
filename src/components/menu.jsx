"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Drawer, Space, Button, Avatar, Popover } from "antd";
import {
  HomeOutlined,
  CustomerServiceOutlined,
  ShopOutlined,
  UserOutlined,
  InfoOutlined,
} from "@ant-design/icons";
import { AiFillGithub } from "react-icons/ai";
import { BiLogoFacebookCircle, BiLogoGmail } from "react-icons/bi";
import logo from "@/assets/images/logo.png";
import styles from "@/styles/menu.module.css";

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

  const handleEmailButtonClick = () => {
    const emailAddress = "tranvietlong2k@gmail.com";
    const subject = "Hi " + emailAddress;
    const body = "I wanted to say impressive your website!";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const contentUser = (
    <Space direction="vertical" className="px-5">
      <Link href="/login">Login</Link>
      <Link href="/register">Register</Link>
    </Space>
  );

  return (
    <>
      <main className="bg-cover bg-[url('./../assets/images/bg-gradient.jpeg')]">
        <div className={styles.menuContainer}>
          <div className={styles.logo}>
            <Link href="/">
              <Image
                src={logo}
                width={150}
                height={150}
                style={{ width: "auto", height: "auto" }}
                priority={false}
                alt="logo of travel planner"
              />
            </Link>
          </div>

          <nav className={styles.navigation}>
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
                  <Link href="/" replace>
                    Home
                  </Link>
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
                    activeMenuItem === "activity" ? styles.active : ""
                  }`}
                  onClick={() => handleMenuItemClick("activity")}
                >
                  <Link href="/activity" replace>
                    Activity
                  </Link>
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
              <Popover content={contentUser} title="User A">
                <Avatar icon={<UserOutlined />} />
              </Popover>
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
                  <Link className={styles.link} href="/destination">
                    <ShopOutlined className={styles.iconLink} /> Destination
                  </Link>
                  <Link className={styles.link} href="/activity">
                    <CustomerServiceOutlined className={styles.iconLink} />{" "}
                    Activity
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

        <section>{children}</section>
      </main>
      <footer className="px-[30px] bg-purple-50">
        <div className="mb:block sm:block mb:m-auto sm:m-auto lg:grid lg:grid-cols-3">
          <div className="flex justify-center p-5">
            <Image
              src={logo}
              width={150}
              height={150}
              priority={false}
              style={{ width: "auto", height: "auto" }}
              alt="logo of travel planner"
            />
          </div>
          <div></div>
          <div></div>
        </div>
        <div className="mb:hidden sm:hidden lg:grid lg:grid-cols-3 text-center">
          <div className="px-20 py-5 text-center">
            Your go-to travel planner for unforgettable adventures.
          </div>
          <div className="px-20 py-5 text-justify">
            <div className="mb-4 text-center">Page</div>
            <div className="flex flex-col text-center">
              <Link
                href="/"
                target="_blank"
                className="hover:underline decoration-1"
              >
                Home
              </Link>
              <Link
                href="/destination"
                target="_blank"
                className="hover:underline decoration-1"
              >
                Destination
              </Link>
              <Link
                href="/activity"
                target="_blank"
                className="hover:underline decoration-1"
              >
                Activity
              </Link>
              <Link
                href="/about"
                target="_blank"
                className="hover:underline decoration-1"
              >
                About
              </Link>
              <Link
                href="/contact"
                target="_blank"
                className="hover:underline decoration-1"
              >
                Contact US
              </Link>
            </div>
          </div>
          <div className="px-20 py-5 text-center flex flex-col">
            <div>Follow us</div>
            <div className="flex flex-row justify-center">
              <Link
                className="m-3"
                href="https://github.com/KITS2023"
                target="_blank"
              >
                <AiFillGithub />
              </Link>
              <Link
                className="m-3"
                href="https://www.facebook.com/vietlog2k"
                target="_blank"
              >
                <BiLogoFacebookCircle />
              </Link>
              <Button
                type="text"
                className="my-1 ml-0"
                onClick={handleEmailButtonClick}
              >
                <BiLogoGmail />
              </Button>
            </div>
          </div>
        </div>
        <hr />
        <div className="text-center p-3">
          &copy; Travel Planner. All right reserved.
        </div>
      </footer>
    </>
  );
};

export default Menu;
