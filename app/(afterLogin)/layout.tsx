import { Header } from "@/widgets/Header";

const AfterLoginLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default AfterLoginLayout;
