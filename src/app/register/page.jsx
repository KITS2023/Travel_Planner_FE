"use client";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "@/assets/images/logo.png";

const Register = () => {
  const [fullName, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:8080/api/auth/login",
        data: {
          usernameOrEmail: username,
          password,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error("Failed to post user data.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className="flex items-center justify-center">
      <main className="h-1/2 w-1/3 border rounded-2xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <Image
              src={logo}
              className="mx-auto h-10 w-auto"
              alt="travel planner"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Register account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="flex items-center space-x-6">
                <div className="shrink-0">
                  <Image
                    src={logo}
                    className="mx-auto h-10 w-auto"
                    alt="Your Company"
                  />
                </div>
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "
                  />
                </label>
              </div>

              <div className="flex">
                <label
                  htmlFor="fullname"
                  className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name:
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullname(e.target.value)}
                    required
                    className="block w-fit rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="">
                <label
                  htmlFor="email"
                  className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                >
                  Username:
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-fit rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex">
                <label
                  htmlFor="email"
                  className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                >
                  Email address:
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex">
                <label
                  htmlFor="email"
                  className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                >
                  Preferences:
                </label>
                <div className="mt-2">
                  <input
                    id="preferences"
                    name="preferences"
                    type="text"
                    autoComplete="email"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                  >
                    Password:
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="flex">
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="inline-block w-[150px] text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password:
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password"
                    required
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div className="mt-10">
                <button
                  type="submit"
                  className="mx-auto border-0 rounded-md ring-1 ring-blue-500/50 shadow-sm flex w-1/2 justify-center rounded-md bg-stone-400 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm bg-stone-400 hover:bg-sky-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Register
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              You have registered ?{" "}
              <Link
                href="/login"
                className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Register;
