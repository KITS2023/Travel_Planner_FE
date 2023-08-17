"use client";
import { useState } from "react";
import { Space, Image, Input, Button } from "antd";
import styles from "@/styles/login.module.css";

const Login = () => {
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // hanlde login logic
  };

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
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                width={70}
                height={70}
                preview={false}
                alt="profile image"
              />
            </Space>
            Login as Vlog 2k
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

export default Login;
