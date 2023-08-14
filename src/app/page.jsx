"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "antd";
import Loading from "./loading";
import { useRouter } from "next/navigation";
import styles from "@/styles/home.module.css";

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const { push } = useRouter();

  useEffect(() => {
    if (!localStorage.getItem('token')) {
      push('/login');
      return;
    }
    setIsLogin(true);
  }, [push])

  if (!isLogin) {
    Loading;
  }

  return (
    <>
      <div className={styles.home}>
        aaa
        <Button type="primary">Button</Button>
      </div>
    </>
  );
}
