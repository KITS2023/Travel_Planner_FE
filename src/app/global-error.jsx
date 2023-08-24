"use client";
import Link from "next/link";
import { Button } from "antd";

export default function GlobalError({ error, reset }) {
  console.log("error", error);
  return (
    <html>
      <body>
        <div className="flex flex-col h-[100vh] items-center justify-items-center text-center">
          <h2>Something went wrong!</h2>
          <Button onClick={() => reset()}>Try again</Button>
          <br />
          <Link href="/">Back to Home</Link>
        </div>
      </body>
    </html>
  );
}
