"use client";

import react, { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Space, Input, Button } from "antd";
import logo from "@/assets/images/logo-collapsed.png";
import styles from "@/styles/login.module.css";

const LoginWithUsername = ({ params }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");

  const usernameOrEmail = params.slug;
  // console.log("login", params);

  const handleLogin = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: `http://localhost:8080/api/auth/login`,
        data: {
          usernameOrEmail,
          password,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    async () => {
      try {
        const response = await axios({
          method: "GET",
          url: `http://localhost:8080/api/auth/resetPassword?usernameOrEmail=${usernameOrEmail}`,
        });
      } catch (error) {
        console.error(error);
      }
    };
  }, [password, usernameOrEmail]);

  return (
    <>
      <main className="block m-auto mt-[15vh] h-1/2 lg:w-1/4 sm:w-full border rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col min-h-full px-6 py-12 lg:px-8">
          <Space
            className={styles.imgContainer}
            direction="vertical"
            align="center"
          >
            <Space className={styles.imgProfile}>
              <Image
                src={logo}
                width={30}
                height={30}
                style={{ width: "auto", height: "auto" }}
                alt="profile image"
              />
            </Space>
            <div>Login as <span className="font-bold">{usernameOrEmail}</span></div>
          </Space>
          <Space className={styles.gap}>
            Password:
            <Input
              className={styles.input}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Space>
          <Space className={styles.btn}>
            <Button type="primary" onClick={handleLogin}>
              Login
            </Button>
          </Space>
        </div>
      </main>
    </>
  );
};

export default LoginWithUsername;
