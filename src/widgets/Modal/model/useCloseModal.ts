import { useRouter } from "next/navigation";

export const useCloseModal = () => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return { closeModal };
};
