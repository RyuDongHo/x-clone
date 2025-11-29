import Image from "next/image";
import logo from "@/shared/assets/icons/community.png";
import Link from "next/link";

const Login = () => {
  return (
    <div className="w-full flex justify-center pt-4">
      <div>
        <Image src={logo} alt="Community Logo" width={200} height={200} />
      </div>
      <div>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요.</h2>
        <Link href="/i/flow/signup">계정 만들기</Link>
      </div>
    </div>
  );
};

export default Login;
