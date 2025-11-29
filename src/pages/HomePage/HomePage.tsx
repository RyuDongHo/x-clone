import Image from "next/image";
import Link from "next/link";
import logo from "@/shared/assets/icons/logo.png";

export const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col lg:flex-row gap-16 justify-center items-center pt-4 px-16">
      <div className="w-full">
        <Image
          src={logo}
          alt="Community Logo"
          className="w-full max-w-[104px] lg:max-w-[524px] h-auto lg:mx-auto"
        />
      </div>
      <div className="w-full flex justify-center">
        <div className="flex flex-col gap-3">
          <h1 className=" text-5xl">지금 일어나고 있는 일</h1>
          <h2 className=" text-3xl">지금 가입하세요.</h2>
          <Link
            href="/i/flow/signup"
            className=" rounded-2xl hover:bg-gray-400 bg-white text-black flex justify-center items-center w-80 h-10 cursor-pointer"
          >
            계정 만들기
          </Link>
          <h3>이미 트위터에 가입하셨나요?</h3>
          <Link
            href="/i/flow/login"
            className=" rounded-2xl hover:bg-gray-800 bg-black text-white border-1 border-gray-700 flex justify-center items-center w-80 h-10 cursor-pointer"
          >
            로그인
          </Link>
        </div>
      </div>
    </div>
  );
};
