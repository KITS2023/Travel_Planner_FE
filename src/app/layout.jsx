import "./globals.css";
import StyledComponentsRegistry from "./AntdRegistry";
import Menu from "@/components/menu";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Planner",
  description: "This travel planner app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32" />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Menu>{children}</Menu>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
