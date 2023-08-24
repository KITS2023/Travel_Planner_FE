import { Button, Input } from "antd";
import React from "react";

function TripPlan() {
  return (
    <>
      <section>
        <div className="bg-cover bg-center bg-[url('./../assets/images/HaLong.jpeg')] w-screen h-[310px]" />

        <div className="w-1/2 block m-auto border shadow-2xl mt-[-40px] backdrop-filter backdrop-blur-md inset-0 p-5">
          <div className="w-1/2 border border-transparent  -m-30 z-10">
            <p className="font-bold text-2xl my-5">Trip to Vietnam</p>
            <div className="text-slate-500">18/8-29/9</div>
          </div>
        </div>

        <div className="w-4/5 block m-auto py-[30px]">
          <div className="flex flex-col">
            <p>Note: </p> <Input type="text" className="w-full my-3" />
          </div>

          <div className="flex flex-col">
            <p>Places to visit: </p>{" "}
            <Input type="text" className="w-full my-3" />
          </div>

          <div className="flex flex-col">
            <p>Title: </p> <Input type="text" className="w-full my-3" />
          </div>
            <Button type="primary" className="rounded-full text-center">
              Submit
            </Button>
        </div>
      </section>
    </>
  );
}

export default TripPlan;
