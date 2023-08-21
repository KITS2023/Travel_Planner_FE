"use client";
import React from "react";
import { Input, DatePicker, Button, Select } from "antd";
import { FaUserFriends } from "react-icons/fa"
import {AiOutlinePlus} from "react-icons/ai"

const { RangePicker } = DatePicker;

function CreatePlan() {
  const handleTimeRangeChange = (timeRange) => {
    if (timeRange && timeRange.length === 2) {
      const timeFrom = timeRange[0];
      const timeTo = timeRange[1];

      console.log("Time From:", timeFrom);
      console.log("Time To:", timeTo);

      // Do something with the selected time range
    }
  };

  const onChangeSelect = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <section className="flex flex-col justify-center px-[15%] py-[20px] text-center">
      <h3 className="font-bold text-2xl">Plan a new trip</h3>
      <div className="w-1/2 m-auto">
        <Input
          addonBefore="Where to?"
          placeholder="e.g: hanoi, saigon, paris, ..."
          className="mt-5"
        />
        <p className="text-red-600">Choose a destination to start planning</p>
        <RangePicker onChange={handleTimeRangeChange} className="w-full mt-5" />
        <div className="flex justify-between my-5">
          <Button className="inline-flex items-center" type="link"><AiOutlinePlus />Invite tripmates</Button>

          <div className="inline-flex items-center">
            <FaUserFriends className="mx-2"/>
            <Select
              defaultValue="public"
              onChange={onChangeSelect}
              options={[
                {
                  value: "public",
                  label: "Public",
                },
                {
                  value: "private",
                  label: "Private",
                },
              ]}
            />
          </div>
              </div>
              <Button type="primary" className="rounded-full">Start Planning</Button>
      </div>
    </section>
  );
}

export default CreatePlan;
