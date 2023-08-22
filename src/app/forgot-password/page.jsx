"use client";
import { Typography, Input, Space, Button } from "antd";
import { useRouter } from "next/navigation";
import styles from "@/styles/forgot-password.module.css";
import { useState } from "react";

const { Title, Text } = Typography;

const ForgotPassword = () => {
  const { push } = useRouter();
  const [username, setUsername] = useState("");

  const onSearchUser = () => {
    //handle forgor password logic
    if (true) {
      push("/login/web"); // push to trang dang nhap
    }
  };

  return (
    <main className="block m-auto mt-[15vh] h-1/2 lg:w-1/3 sm:w-full border rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
      <div className="flex min-h-full flex-1 flex-col px-6 py-12 lg:px-8">
        <Space className={styles.gap}>
          <Title level={5}>Find your account</Title>
        </Space>
        <hr />

        <Text>Please input your email or username to search your account</Text>
        <div className="my-5 w-full">
          <Input
            className={styles.input}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Email or Username"
          />
        </div>
        <hr />
        <Space
          className={`${styles.btn} ${styles.gap}`}
          style={{ alignContent: "end" }}
        >
          <Button href="/login">Cancel</Button>
          <Button type="primary" onClick={onSearchUser}>Search</Button>
        </Space>
      </div>
    </main>
  );
};

export default ForgotPassword;
