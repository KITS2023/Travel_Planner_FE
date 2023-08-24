"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Input, DatePicker, Button, Select } from "antd";
import { FaUserFriends } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import axios from "axios";

const { RangePicker } = DatePicker;

function CreatePlan() {
  const [data, setData] = useState(undefined);
  const [destination, setDestination] = useState([]);
  const [isPublic, setIsPublic] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [destinationId, setDestinationId] = useState("");

  var user = undefined;

  if (typeof window !== "undefined") {
    user = localStorage.getItem("currentUser");
  }

  useEffect(() => {
    async () => {
      try {
        const responseDestination = await axios({
          method: "GET",
          url: "http://localhost:8080/api/destinations",
        });

        if (responseDestination.data) {
          const transformedOptions = responseDestination.data.data.map(
            (option) => ({
              value: option.id,
              label: option.name,
            })
          );
          setDestination(transformedOptions);
        }
      } catch (e) {
        console.log("error", e);
      }
    };

    setData({
      startDate,
      endDate,
      destinationId,
      isPublic,
    });
  }, [destinationId, endDate, isPublic, startDate]);

  const postDestination = async (name) => {
    try {
      const res = await axios({
        method: "POST",
        url: "http://localhost:8080/api/destinations",
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json",
        },
        data: {
          name: name.toLowerCase(),
          description: "No description",
          rate: 5,
          imageUrl: "https://source.unsplash.com/800x600/?destination",
        },
      });
      console.log("postDes", res);
    } catch (e) {
      console.log("error", e);
    }
  };

  const handleTimeRangeChange = (timeRange) => {
    if (timeRange && timeRange.length === 2) {
      const timeFrom = timeRange[0].format("YYYY-MM-DD");
      const timeTo = timeRange[1].format("YYYY-MM-DD");

      setStartDate(timeFrom);
      setEndDate(timeTo);
    }
  };

  const onSelect = (value) => {
    setDestinationId(value);
  };

  const onChangeSelect = (value) => {
    if (value == "private") {
      setIsPublic(false);
    } else {
      setIsPublic(true);
    }
  };

  let timerId;

  const onSearchSelect = (value) => {
    clearTimeout(timerId);

    timerId = setTimeout(() => {
      const selectedOption = destination.find(
        (option) => option.value === value
      );

      if (!selectedOption) {
        destination.push({ value, label: value });
        // postDestination(value);
      }
    }, 700);
  };

  const onInvite = () => {
    try {
      console.log("Invite");
    } catch (err) {
      console.log(err);
    }
  };

  console.log("data", data);

  return (
    <section className="flex flex-col justify-center px-[15%] py-[20px] text-center">
      <h3 className="font-bold text-2xl">Plan a new trip</h3>
      <div className="w-1/2 m-auto">
        <div className="flex flex-row">
          <p className="inline w-[150px]">Where to ?</p>
          <Select
            showSearch
            placeholder="e.g: hanoi, saigon, paris, ..."
            optionFilterProp="children"
            filterOption={(input, option) =>
              (option?.label ?? "").includes(input)
            }
            filterSort={(optionA, optionB) =>
              (optionA?.label ?? "")
                .toLowerCase()
                .localeCompare((optionB?.label ?? "").toLowerCase())
            }
            onSelect={onSelect}
            onSearch={onSearchSelect}
            options={destination}
            className="w-full"
          />
        </div>
        <p className="text-red-600">Choose a destination to start planning</p>
        <RangePicker onChange={handleTimeRangeChange} className="w-full mt-5" />
        <div className="flex justify-between my-5">
          <Button
            className="inline-flex items-center"
            type="link"
            onClick={onInvite}
          >
            <AiOutlinePlus />
            Invite tripmates
          </Button>

          <div className="inline-flex items-center">
            <FaUserFriends className="mx-2" />
            <Select
              defaultValue="public"
              onSelect={onChangeSelect}
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
        <Link
          href={{
            pathname: "/plan",
            query: { data: JSON.stringify(data) },
          }}
        >
          <Button type="primary" className="rounded-full">
            Start Planning
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default CreatePlan;
