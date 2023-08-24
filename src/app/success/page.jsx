import React from "react";
import Link from "next/link";
import { Result, Button } from "antd";

function page() {
  return (
    <Result
      status="success"
      title="Successfully Created Trip"
      extra={[
        <>
          <Link href={"/"}>
            <Button type="primary" key="console">
              Go To Home
            </Button>
          </Link>
        </>,
      ]}
    />
  );
}

export default page;
