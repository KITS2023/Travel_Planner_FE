"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Input, Drawer, DatePicker } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import {
  AiOutlineArrowRight,
  AiOutlineSearch,
} from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import Icon_Trip from "@/assets/icons/ic_trip";
import logo from "@/assets/images/logo.png";
import Loading from "./loading";
import styles from "@/styles/home.module.css";

const { RangePicker } = DatePicker;

export default function Home() {
  const [isLogin, setIsLogin] = useState(false);
  const [open, setOpen] = useState(false);
  const { push } = useRouter();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const handleTimeRangeChange = (timeRange) => {
    if (timeRange && timeRange.length === 2) {
      const timeFrom = timeRange[0];
      const timeTo = timeRange[1];

      console.log("Time From:", timeFrom);
      console.log("Time To:", timeTo);

      // Do something with the selected time range
    }
  };

  // useEffect(() => {
  //   if (!localStorage.getItem('token')) {
  //     push('/login');
  //     return;
  //   }
  //   setIsLogin(true);
  // }, [push])

  // if (!isLogin) {
  //   Loading;
  // }

  return (
    <>
      <section>
        <div
          className={`bg-cover bg-[url('./../assets/images/bg-img.jpeg')] md:h-[300px] lg:h-[500px] xl:h-[550px] 2xl:h-[600px] py-[20px] flex flex-col items-center justify-center text-center font-sans`}
        >
          <p className="text-slate-100 p-5 font-bold text-5xl">
            Enjoy Every Second
            <br />
            Of Your Life
          </p>
          <Button type="primary" className={styles.btnBgHead}>
            Get Your Tour Template <AiOutlineArrowRight />
          </Button>
        </div>
        <div className="z-10 relative justify-center items-center px-[25%] text-center lg:mt-[-30px] md:m-0">
          <div className="mb:hidden sm:hidden lg:flex flex-row justify-between p-5 border border-transparent rounded-xl w-full inset-0 -m-30 backdrop-filter backdrop-blur-md z-10">
            <div className="mx-[10px]">
              <Input placeholder="From" prefix={<CiLocationOn />} />
            </div>
            <div className="p-2.5">
              <BiTransfer />
            </div>
            <div className="mx-[10px]">
              <Input placeholder="To" prefix={<CiLocationOn />} />
            </div>
            <div className="mx-[10px]">
              <RangePicker onChange={handleTimeRangeChange} />
            </div>
            <Button type="primary" className={styles.btnFilter}>
              Search <AiOutlineSearch />
            </Button>
          </div>

          <div className="w-full lg:hidden mt-5 text-2xl">
            <Button
              type="primary"
              className={styles.btnFilterMb}
              onClick={showDrawer}
            >
              <Icon_Trip size={15} />
              Find trips
            </Button>
            <Drawer
              title="Find your trip"
              placement="top"
              width={500}
              onClose={onClose}
              open={open}
            >
              <div>
                <div className="my-[10px]">
                  <Input placeholder="From" prefix={<CiLocationOn />} />
                </div>
                <div className="my-[10px]">
                  <Input placeholder="To" prefix={<CiLocationOn />} />
                </div>
                <div className="my-[10px]">
                  <RangePicker
                    onChange={handleTimeRangeChange}
                    className={styles.datePicker}
                  />
                </div>
                <Button type="primary" className={styles.btnFilter}>
                  Search <AiOutlineSearch />
                </Button>
              </div>
            </Drawer>
          </div>
        </div>
      </section>
      <section className="flex justify-center px-[15%] py-[20px]">
        landing page
      </section>
    </>
  );
}
