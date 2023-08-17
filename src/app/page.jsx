"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button, Input, Drawer, DatePicker, Card } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { BiTransfer } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import CardDestination from "@/components/cardDestination";
import Icon_Trip from "@/assets/icons/ic_trip";
import logo from "@/assets/images/logo.png";
import testImg1 from "@/assets/images/test-img1.jpeg";
import testImg2 from "@/assets/images/test-img2.jpeg";
import plane from "@/assets/images/plane.png";
import hotel from "@/assets/images/hotel.png";
import destination from "@/assets/images/destination.png";
import Loading from "./loading";
import styles from "@/styles/home.module.css";
import "swiper/css/pagination";
import "swiper/css";

const { RangePicker } = DatePicker;
const { Meta } = Card;

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
      <section className="flex flex-col justify-center items-center px-[15%] py-[20px]">
        <div className="text-center">
          <div className="text-xl">Choose your</div>
          <p className="text-3xl font-bold">Perfect Destination</p>

          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            className="w-full"
          >
            <SwiperSlide className="w-full grid grid-cols-2 grid-rows-2 gap-20 my-10">
              <CardDestination urlImage={testImg1} rateValue={5} />
              <CardDestination urlImage={testImg2} rateValue={5} />
              <CardDestination urlImage={testImg1} rateValue={5} />
              <CardDestination urlImage={testImg2} rateValue={5} />
            </SwiperSlide>

            <SwiperSlide className="w-full grid grid-cols-2 grid-rows-2 gap-20 my-10">
              <CardDestination urlImage={testImg2} rateValue={5} />
              <CardDestination urlImage={testImg1} rateValue={2.7} />
              <CardDestination urlImage={testImg2} rateValue={5} />
              <CardDestination urlImage={testImg1} rateValue={5} />
            </SwiperSlide>

            <SwiperSlide className="w-full grid grid-cols-2 grid-rows-2 gap-20 my-10">
              <CardDestination urlImage={testImg1} rateValue={5} />
              <CardDestination urlImage={testImg2} rateValue={5} />
              <CardDestination urlImage={testImg1} rateValue={5} />
              <CardDestination urlImage={testImg2} rateValue={5} />
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="my-[10px]">
          <div className="w-1/3 block m-auto text-center mb-[10px]">
            <div className="text-xl">Our services</div>
            <p className="text-xl font-bold">
              We provide various kind of service for your
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-[50px] sm:gap-5 place-items-center">
            <Card
              hoverable
              className="h-[400px] w-[240px]"
              cover={
                <>
                  <Image
                    src={plane}
                    alt="plane icon"
                    className="aspect-square"
                  />
                  <hr />
                </>
              }
            >
              <Meta
                className="text-center"
                title="Flights"
                description="Find and book the best flights for your next adventure with ease.www.instagram.com"
              />
            </Card>
            <Card
              className="h-[400px] w-[240px]"
              hoverable
              cover={
                <>
                  <Image
                    src={hotel}
                    alt="hotel icon"
                    className="aspect-square"
                  />
                  <hr />
                </>
              }
            >
              <Meta
                className="text-center"
                title="Hotels"
                description="Discover and book the perfect hotel for a comfortable stay during your travels."
              />
            </Card>
            <Card
              hoverable
              className="h-[400px] w-[240px]"
              cover={
                <>
                  <Image
                    src={destination}
                    alt="destination icon"
                    className="aspect-square"
                  />
                  <hr />
                </>
              }
            >
              <Meta
                className="text-center"
                title="Trip Planner"
                description="Plan and organize your trip effortlessly with our intuitive trip planner tool."
              />
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
