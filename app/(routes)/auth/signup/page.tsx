"use client";
import { RegisterSchema } from "@/schemas/authSchema";
import { zodResolver } from "@hookform/resolvers/zod";

import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Button from "@/components/ui/button";
import Image from "next/image";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { RegisterUser } from "@/actions/auth/register";
import { OnClick } from "@/actions/auth/socialLogin";

const Signup = () => {
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof RegisterSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log(values);
    RegisterUser(values);
  }

  return (
    <div className="min-h-screen flex items-center justify-center md:p-10">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-full md:max-w-[30%] flex flex-col justify-center items-center border-2 border-[#da9cf067]">
        <div className="p-10 bg-[#76287E] rounded-md mb-5">
          {/* <video preload="none" width="360" height="240" className="rounded-3xl border-2 p-2 border-black" autoPlay loop muted>
            <source src="vklogo.webm" type="video/webm" />

            Your browser does not support the video tag.
          </video> */}

          <Image src="/vk.png" height={200} width={200} alt="logo"></Image>
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl p-2">Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="username"
                      {...field}
                      className="border-[#c84dd6] focus:border-[#76287E] focus:ring-[#76287E] text-xl h-[4h] p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl p-2">Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@domain.com"
                      {...field}
                      className="border-[#c84dd6] focus:border-[#76287E] focus:ring-[#76287E] text-xl h-[4h] p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-2xl p-2">Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="password"
                      {...field}
                      className="border-[#c84dd6] focus:border-[#76287E] focus:ring-[#76287E] text-xl h-[4h] p-4"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              className="w-full bg-[#76287E] focus:border-[#76287E] focus:ring-[#76287E] text-xl h-[4h] p-4 rounded-md"
            >
              Sign Up
            </Button>
          </form>
        </Form>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-black to-transparent my-5"></div>
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-gray-100 via-red-300 to-blue-300 dark:bg-gradient-to-r dark:from-zinc-800 dark:via-red-500 dark:to-blue-500 transition-all duration-300 ease-in-out h-[4h] p-4 text-xl"
          onClick={() => {
            OnClick("google");
          }}
        >
          <p>Continue with Google</p>
        </button>
        <button
          className="relative group/btn flex space-x-2 items-center justify-center px-4 w-full text-black rounded-[0.5rem] font-medium shadow-input bg-size-200 bg-pos-0 dark:bg-pos-0 hover:bg-pos-100 dark:hover:bg-pos-100 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)] bg-gradient-to-r from-blue-100 via-cyan-400 to-cyan-100 dark:bg-gradient-to-r dark:from-zinc-800 dark:via-red-500 dark:to-blue-500 transition-all duration-300 ease-in-out h-[4h] p-4 text-xl mt-4"
          onClick={() => {
            OnClick("twitter");
          }}
        >
          <p>Continue with Twitter</p>
        </button>
      </div>
    </div>
  );
};

export default Signup;
