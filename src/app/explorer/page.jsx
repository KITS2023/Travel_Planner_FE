"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CardExplorer from "@/components/cardExplorer";
import test1 from "@/assets/images/test-img1.jpeg";

function Explorer() {
  const [data, setData] = useState(undefined);

  const getData = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "http://localhost:8080/api/trips/isPublic",
      });

      console.log("response: ", response.data.data);
      // setData(response.data);
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
          Explorer Trips
        </p>
        <div className="grid grid-cols-3 gap-20">
          <CardExplorer
            url={test1}
            title={"Trip to vietnam"}
            content={"Ha noi is the capital of Vietnam"}
          />

          <CardExplorer
            url={test1}
            title={"Trip to vietnam"}
            content={"Ha noi is the capital of Vietnam"}
          />

          <CardExplorer
            url={test1}
            title={"Trip to vietnam"}
            content={"Ha noi is the capital of Vietnam"}
          />

          <CardExplorer
            url={test1}
            title={"Trip to vietnam"}
            content={"Ha noi is the capital of Vietnam"}
          />
        </div>
      </section>
    </>
  );
}

export default Explorer;
