import "./globals.css";
import StyledComponentsRegistry from "./AntdRegistry";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Travel Planner",
  description:
    "Welcome to our travel planner, your ultimate destination for seamless trip planning and unforgettable adventures. Whether you're a seasoned traveler or embarking on your first journey, our travel planner app offers a comprehensive suite of tools to simplify every step of the planning process. Discover a wide range of destinations, create personalized itineraries, and access expert recommendations from fellow globetrotters. With our user-friendly interface and extensive database of attractions, accommodations, and activities, you can tailor your travel plans to perfection. Start exploring the world with confidence, efficiency, and the assurance of creating memories that last a lifetime.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </head>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Layout>{children}</Layout>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
