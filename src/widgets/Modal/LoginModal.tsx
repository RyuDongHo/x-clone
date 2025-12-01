"use client";

import Image from "next/image";
import logo from "@/shared/assets/icons/logo.png";
import React from "react";
import { useLoginInfo } from "./model/useLoginInfo";
import { useCloseModal } from "./model/useCloseModal";

export const LoginModal = () => {
  const { id, password, onChangeId, onChangePassword } = useLoginInfo();
  const { closeModal } = useCloseModal();

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-gray-300/30 cursor-pointer"
        onClick={closeModal}
      ></div>
      <div className="relative bg-black rounded-2xl pt-4 w-[30%] h-[65%] flex flex-col gap-4 items-center">
        <button className="absolute top-2 left-2 cursor-pointer" onClick={closeModal}>
          X
        </button>
        <Image src={logo} alt="Logo" width={36} height={36} />
        <h1 className=" font-bold">로그인하세요</h1>
        <form className="flex flex-col gap-2 w-[50%]">
          <div className="bg-white rounded-lg p-2 text-black text-xs">
            <label htmlFor="id" className=" block">
              아이디
            </label>
            <input
              type="text"
              id="id"
              className="w-full h-[32px]"
              value={id}
              onChange={onChangeId}
            />
          </div>
          <div className="bg-white rounded-lg p-2 text-black text-xs">
            <label htmlFor="password" className=" block">
              비밀번호
            </label>
            <input
              type="password"
              id="password"
              className="w-full h-[32px]"
              value={password}
              onChange={onChangePassword}
            />
          </div>
          <button
            type="submit"
            className=" mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          >
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};
