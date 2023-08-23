import React from "react";

function page() {
  return (
    <section className="flex flex-col justify-center items-center px-[15%] py-[20px] text-center">
      <div className="w-1/2 border border-transparent backdrop-filter backdrop-blur-md inset-0 -m-30 z-10">
        <p className="font-bold text-2xl my-5">Trip to Hanoi</p>
        <div className="text-slate-500">18/8-29/9</div>
      </div>

      <div className="w-full p-20">
        <div className="flex justify-between">
          <p className="font-bold text-xl">Place to visit</p>
          <div className="text-slate-500">18/8-29/9</div>
        </div>
      </div>
    </section>
  );
}

export default page;
