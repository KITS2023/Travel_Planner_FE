/* eslint-disable jsx-a11y/alt-text */
"use client";
import { useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/about.module.css";
import about2 from "@/assets/images/about2.jpg";
import about3 from "@/assets/images/about3.jpg";
import about4 from "@/assets/images/about4.jpg";
import about5 from "@/assets/images/about5.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutComponent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    }); // Initialize AOS
  }, []);
  return (
    <>
      <div className="relative bg-cover bg-center bg-[url('./../assets/images/about1.jpg')] w-screen h-[310px]">
        <div className={`${styles.boxHeader} px-[15%] py-[20px]`}>
          <span className={styles.txtHeader}>About Us</span>
        </div>
      </div>

      <div className="px-[15%] pt-5 text-center font-bold text-4xl">
        Development Team
      </div>
      <hr className={styles.hrCustom} />

      {/* Member1 */}
      <div className={`${styles.aboutMain} grid grid-cols-6`}>
        <div
          data-aos="fade-right"
          className={`mx-auto 2xl:pr-10 2xl:py-0 mb:py-10 text-justify 2xl:col-span-3 lg:col-span-4 mb:col-span-6`}
        >
          <Image width={400} src={about2} />
        </div>
        <div
          className={`w-9/12 2xl:col-span-3 lg:col-span-2 mb:col-span-6 m-auto`}
        >
          <div className={styles.subMain}>
            <span className="block py-2 text-center font-bold text-4xl">
              Leader
            </span>
            <span className="block text-center italic text-gray-500">
              ❝ From Dreams to Reality: Crafting Extraordinary Itineraries
              Tailored to Your Wanderlust ❞
            </span>
            <hr className={styles.hrCustom} />
            <div className="pl-10 text-base">
              <div className="py-1">
                <span className="inline-block w-20">Name</span>: Tran Viet Long
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Birthday</span>: 16/09/2000
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Team</span>: Front-end
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member2 */}
      <div className={`${styles.aboutMain} grid grid-cols-6`}>
        <div
          className={`w-9/12 2xl:col-span-3 lg:col-span-2 mb:col-span-6 m-auto`}
        >
          <div className={styles.subMain}>
            <span className="block py-2 text-center font-bold text-4xl">
              Member
            </span>
            <span className="block text-center italic text-gray-500">
              ❝ Unlock the Beauty of the World: Inspiring, Organizing, and
              Connecting You to Unforgettable Travel Experiences ❞
            </span>
            <hr className={styles.hrCustom} />
            <div className="pl-10 text-base">
              <div className="py-1">
                <span className="inline-block w-20">Name</span>: Nguyen Phuc Tue
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Birthday</span>: 29/10/2001
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Team</span>: Back-end
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className={`mx-auto 2xl:pr-10 2xl:py-0 mb:py-10 text-justify 2xl:col-span-3 lg:col-span-4 mb:col-span-6`}
        >
          <Image width={400} src={about5} />
        </div>
      </div>

      {/* Member3 */}
      <div className={`${styles.aboutMain} grid grid-cols-6`}>
        <div
          data-aos="fade-right"
          className={`mx-auto 2xl:pr-10 2xl:py-0 mb:py-10 text-justify 2xl:col-span-3 lg:col-span-4 mb:col-span-6`}
        >
          <Image width={400} src={about4} />
        </div>
        <div
          className={`w-9/12 2xl:col-span-3 lg:col-span-2 mb:col-span-6 m-auto`}
        >
          <div className={styles.subMain}>
            <span className="block py-2 text-center font-bold text-4xl">
              Member
            </span>
            <span className="block text-center italic text-gray-500">
              ❝ Where Every Step Counts: Empowering You to Explore, Engage, and
              Embrace the Wonders of Travel ❞
            </span>
            <hr className={styles.hrCustom} />
            <div className="pl-10 text-base">
              <div className="py-1">
                <span className="inline-block w-20">Name</span>: Do Minh Hoang
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Birthday</span>: 20/10/1995
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Team</span>: Front-end
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Member4 */}
      <div className={`${styles.aboutMain} grid grid-cols-6`}>
        <div
          className={`w-9/12 2xl:col-span-3 lg:col-span-2 mb:col-span-6 m-auto`}
        >
          <div className={styles.subMain}>
            <span className="block py-2 text-center font-bold text-4xl">
              Member
            </span>
            <span className="block text-center italic text-gray-500">
              ❝ Your Gateway to Extraordinary Explorations: Curating Experiences
              That Leave Footprints on Your Soul ❞
            </span>
            <hr className={styles.hrCustom} />
            <div className="pl-10 text-base">
              <div className="py-1">
                <span className="inline-block w-20">Name</span>: Vuong Duy Hieu
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Birthday</span>: 12/04/2001
              </div>
              <div className="py-1">
                <span className="inline-block w-20">Team</span>: Back-end
              </div>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-left"
          className={`mx-auto 2xl:pr-10 2xl:py-0 mb:py-10 text-justify 2xl:col-span-3 lg:col-span-4 mb:col-span-6`}
        >
          <Image width={400} src={about3} />
        </div>
      </div>
    </>
  );
};
export default AboutComponent;
