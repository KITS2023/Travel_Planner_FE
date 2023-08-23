"use client"
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";
import {FaPlaneDeparture, FaMapMarkedAlt} from "react-icons/fa";
import {GiModernCity, GiJugglingSeal} from "react-icons/gi";
import {Button, Input} from "antd";
const {TextArea} = Input;
import styles from "@/styles/contact.module.css";

const Contact = () => {
    return (
        <>
            <div className="relative bg-cover bg-center bg-[url('./../assets/images/contact1.jpg')] w-screen h-[310px]">
                <div className={`${styles.boxHeader} px-[15%] py-[20px]`}>
                    <span className={styles.txtHeader}>Contact Us</span>
                </div>
            </div>
            <div className={`${styles.contactMain} grid grid-cols-6`}>
                <div className={`${styles.subMain1} text-gray-500 2xl:pr-10 2xl:py-0 mb:py-10 text-justify 2xl:col-span-4 lg:col-span-4 mb:col-span-6`}>
                    Welcome to our <span className="text-blue-600 font-bold">Travel</span> <span className="text-red-500 font-bold">Planner</span> website, your ultimate destination for seamless trip organization and unforgettable adventures. Whether you&apos;re a seasoned globetrotter or a novice explorer, our platform is designed to simplify the process of planning your dream vacation. We understand that organizing a trip can sometimes be overwhelming, with countless options to consider and numerous details to manage. That&apos;s why we&apos;re here to lend a helping hand and make your travel planning experience smooth, efficient, and enjoyable. Our <span className="text-blue-600 font-bold">Travel</span> <span className="text-red-500 font-bold">Planner</span> website offers a comprehensive suite of tools and resources to assist you at every step of your journey. From the moment you start conceptualizing your vacation to the final stages of booking accommodations and activities, we&apos;ve got you covered.                   
                </div>
                <div className={`${styles.subMain2} 2xl:col-span-2 lg:col-span-2 mb:col-span-6 my-auto`}>
                    <div className={styles.subMain2Ifo}>
                        <CiLocationOn/>
                        <div>
                            <span>ADDRESS</span>
                            <span>Multicampus - 5F.Peakview Tower</span>
                        </div>
                    </div>
                    <div className={styles.subMain2Ifo}>
                        <CiPhone/>
                        <div>
                            <span>PHONE</span>
                            <span>+84971717603</span>
                        </div>
                    </div>
                    <div className={styles.subMain2Ifo}>
                        <CiMail/>
                        <div>
                            <span>EMAIL</span>
                            <span>travel-planner@kits.com</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${styles.contactMain} grid grid-cols-6`}>
                <div className={`${styles.subMain1} 2xl:col-span-4 mb:col-span-6`}>
                    <div className="2xl:grid grid-cols-3 gap-4">
                        <div className={`2xl:col-span-2 mb:col-span-6`}>
                            <div className="2xl:grid grid-rows-2 grid-flow-col gap-4">
                                <div className="bg-cover h-40 bg-no-repeat bg-[url('./../assets/images/contact2.jpg')]"></div>
                                <div className="bg-cover col-span-2 bg-no-repeat bg-[url('./../assets/images/contact5.jpg')]"></div>
                                <div className="bg-cover bg-no-repeat bg-[url('./../assets/images/contact3.jpg')]"></div>
                            </div>
                        </div>
                        <div className="bg-contain bg-no-repeat bg-[url('./../assets/images/contact4.jpg')] "></div>
                    </div>
                </div>
                <div className={`2xl:col-span-2 mb:col-span-6`}>
                    <span className="block leading-10 text-xs text-gray-500 text-center">CONTACT US</span>
                    <span className="block leading-10 text-2xl font-bold text-center">Drop Us a Line</span>
                    <span className="block leading-10 text-sm text-gray-500">Email:</span>
                    <Input className="w-full h-8 rounded-3xl" />
                    <span className="block leading-10 text-sm text-gray-500">Message:</span>
                    <TextArea className="w-full h-24 rounded-3xl" />
                    <Button type="primary" className="rounded-full w-full mt-4 items-center">SEND NOW</Button>
                </div>
            </div>

            <div className={`${styles.contactMain} text-gray-500 grid 2xl:grid-cols-4 lg:grid-cols-2 mb:grid-cols-1`}>
                <div className="m-auto 2xl:mb-0 mb:mb-10">
                    <FaPlaneDeparture className="m-auto text-8xl"/>
                    <span className="text-xl">ADD FLIGHT</span>
                </div>
                <div className="m-auto 2xl:mb-0 mb:mb-10">
                    <GiModernCity className="m-auto text-8xl"/>
                    <span className="text-xl">ADD HOTEL</span>
                </div>
                <div className="m-auto 2xl:mb-0 mb:mb-10">
                    <GiJugglingSeal className="m-auto text-8xl"/>
                    <span className="text-xl">ACTIVITIES</span>
                </div>
                <div className="m-auto 2xl:mb-0 mb:mb-10">
                    <FaMapMarkedAlt className="m-auto text-8xl"/>
                    <span className="text-xl">GO EVERYWHERE!</span>
                </div>                
            </div>
        </>
    )
}

export default Contact;