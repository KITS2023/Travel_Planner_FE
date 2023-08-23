"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardDestination from "@/components/cardDestination";
import test1 from "@/assets/images/test-img1.jpeg";

function Destination() {
  const [data, setData] = useState(undefined);

  const getData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/api/destinations",
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      // console.log("response: ", response.data);
      setData(response.data.data);
    } catch (err) {
      console.error("Lỗi rồi", err);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <section className="flex flex-col justify-center px-[15%] py-[20px]">
        <p className="font-bold text-2xl text-center m-10 text-slate-500">
          Popular Destination
        </p>
        <div className="grid grid-cols-2 gap-20">
          <CardDestination urlImage={test1} rateValue={5} />
          <CardDestination urlImage={test1} rateValue={5} />
        </div>
      </section>
    </>
  );
}

export default Destination;
