"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "antd";
import errorPic from "@/assets/images/error.jpg";
import styles from "@/styles/error.module.css";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.errorPage}>
      <Image src={errorPic} width={200} height={200} alt="Error" />
      <p>Something went wrong!</p>
        <Button type="primary" href="/" style={{margin: 20}}>
          Back to HOME
        </Button>
    </div>
  );
}
