"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Button, Input, Result } from "antd";
import axios from "axios";

function TripPlan() {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const { startDate, endDate, destinationId, destinationName, isPublic } =
    JSON.parse(data);

  const [title, setTitle] = useState("");
  var user = {};

  if (typeof window !== "undefined") {
    user = JSON.parse(localStorage.getItem("currentUser"));
  }
  
  const onClickStartPlaning = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/trips",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: {
          title: title,
          startDate: startDate,
          endDate: endDate,
          destinationId: +destinationId,
          userId: +user.id,
          isPublic: isPublic,
        },
      });
      // console.log("res", response);
      if (response.data.message == "Created trip successful.") {
        push("/success");
      }
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <>
      <section>
        <div className="bg-cover bg-center bg-[url('./../assets/images/HaLong.jpeg')] w-screen h-[310px]" />

        <div className="w-1/2 block m-auto border shadow-2xl mt-[-40px] backdrop-filter backdrop-blur-md inset-0 p-5">
          <div className="w-1/2 border border-transparent  -m-30 z-10">
            <p className="font-bold text-2xl my-5">
              Trip to {destinationName || ""}
            </p>
            <div className="text-slate-500">
              {startDate || ""} - {endDate || ""}
            </div>
          </div>
        </div>

        <div className="w-4/5 block m-auto py-[30px]">
          {/* <div className="flex flex-col">
            <p>Note: </p> <Input type="text" className="w-full my-3" />
          </div> */}

          <div className="flex flex-col">
            <p>Places to visit: </p>
            <Input type="text" value={destinationName} className="w-full my-3" />
          </div>

          <div className="flex flex-col">
            <p>Title: </p>{" "}
            <Input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full my-3"
            />
          </div>
          <Button
            type="primary"
            className="rounded-full text-center"
            onClick={onClickStartPlaning}
          >
            Submit
          </Button>
        </div>
      </section>
    </>
  );
}

export default TripPlan;
